import React, { useEffect, useMemo } from "react"
import { Link } from "gatsby"
import { formatDate } from "utils/date"
import { useScreens } from "src/utils/hooks"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import hljs from "highlight.js"
//@ts-ignore
import Worker from "utils/formater.worker.ts"
import("highlight.js/styles/a11y-light.min.css")

type BlogPreviewProps<
    T extends
        Queries.AllBlogsQuery["allContentfulBlog"]["nodes"][number] = Queries.AllBlogsQuery["allContentfulBlog"]["nodes"][number],
> = Pick<T, "title" | "preview" | "slug"> & {
    date: T["blogDate"]
}

export function BlogPreview({ title, date, preview, slug }: BlogPreviewProps) {
    const [xs] = useScreens()

    return (
        <article className="blog-preview">
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

    const body = useMemo(() => {
        const result = documentToReactComponents(JSON.parse(content?.raw ?? ""))
        return result
    }, [content?.raw])

    useEffect(() => {
        const worker = new Worker()

        const pCodeTags = document.querySelectorAll("p:has(code)")
        pCodeTags.forEach((pCodeTag) => {
            const codeString = pCodeTag.querySelector("code")?.textContent
            if (codeString) {
                worker.postMessage(codeString)
                const code = hljs.highlightAuto(codeString).value
                pCodeTag.innerHTML = `<code>${code}</code>`
            }
        })

        return () => {
            worker.terminate()
        }
    }, [])

    const [xs] = useScreens()

    return (
        <>
            <article className="blog-entry">
                <h2 className="title">{title}</h2>
                <p className="date">{formatDate(date ?? "")}</p>
                <div>{body}</div>
            </article>
        </>
    )
}
