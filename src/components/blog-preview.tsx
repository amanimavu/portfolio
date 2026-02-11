import React, { CSSProperties, useEffect, useMemo, useState } from "react"
import { Link } from "gatsby"
import { formatDate } from "utils/date"
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer"
import SyntaxHighlighter from "react-syntax-highlighter"
import { a11yDark, a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { useCurrentTheme } from "utils/hooks"

type BlogPreviewProps<
    T extends
        Queries.AllBlogsQuery["allContentfulBlog"]["nodes"][number] = Queries.AllBlogsQuery["allContentfulBlog"]["nodes"][number],
> = Pick<T, "title" | "preview" | "slug"> & {
    date: T["blogDate"]
    index: number
}

export function BlogPreview({ title, date, preview, slug, index }: BlogPreviewProps) {
    return (
        <article className="blog-preview" style={{ "--animation-order": index } as CSSProperties}>
            <h4 className="title">{title}</h4>
            <p className="date">{formatDate(date ?? "")}</p>
            <div className="preview">
                <p>
                    {preview?.preview}...{" "}
                    <Link className="link" to={`/blogs/${slug}`}>
                        read more
                    </Link>
                </p>
            </div>
        </article>
    )
}

type BlogEntryProps<T extends Queries.SingleBlogQuery["contentfulBlog"] = Queries.SingleBlogQuery["contentfulBlog"]> =
    T extends Record<string, any>
        ? Pick<T, "content" | "title"> & { date: T extends Record<string, any> ? T["blogDate"] : string }
        : null

export function BlogEntry(props: BlogEntryProps) {
    const { title, content, date } = props ?? {}
    const getTheme = useCurrentTheme()
    const [theme, setTheme] = useState(() => (typeof window !== "undefined" ? getTheme : "dark"))

    useEffect(() => {
        // Check initial theme
        const root = document.documentElement

        // Observe changes to data-theme attribute
        const observer = new MutationObserver(() => {
            const theme = getTheme()
            setTheme(theme)
        })

        observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] })
        return () => observer.disconnect()
    }, [])

    const options: Options = useMemo(
        () => ({
            renderMark: {
                code: (text) => {
                    const codeString = text?.toString() ?? ""
                    const lines = codeString.split("\n")
                    const language = (lines[0].match(/(\w+)/g) ?? ["text"])[0]
                    return (
                        <SyntaxHighlighter
                            showLineNumbers
                            lineNumberStyle={{ opacity: 0.3 }}
                            language={language}
                            style={theme == "dark" ? a11yDark : a11yLight}
                            customStyle={{ padding: "15px", fontSize: "0.4em" }}
                            PreTag="span"
                            wrapLongLines
                            codeTagProps={{
                                style: {
                                    lineHeight: 2,
                                },
                            }}
                        >
                            {codeString}
                        </SyntaxHighlighter>
                    )
                },
            },
        }),
        [theme]
    )

    const body = useMemo(() => {
        const result = documentToReactComponents(JSON.parse(content?.raw ?? ""), options)
        return result
    }, [content?.raw, options])

    return (
        <>
            <article className="blog-entry">
                <h1 className="title">{title}</h1>
                <p className="date">{formatDate(date ?? "")}</p>
                <div>{body}</div>
            </article>
        </>
    )
}
