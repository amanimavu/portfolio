import { BlogPreview } from "components/blog-preview"
import React from "react"
import favicon from "../../images/pngs/favicon.png"
import { HeadFC } from "gatsby"
import { graphql, PageProps } from "gatsby"
import { CountBadge } from "components/count-badge"
import { useScreens } from "utils/hooks"
import { SEO } from "components/seo"

export default function BlogIndexPage({ data }: PageProps<Queries.AllBlogsQuery>) {
    const [xs, md] = useScreens()
    return (
        <>
            <div className="toolbar">
                <CountBadge count={data.allContentfulBlog.totalCount} />
                {!xs ? <input type="search" placeholder="Search" size={!md ? 25 : undefined} /> : null}
            </div>
            {data.allContentfulBlog.nodes.map(({ title, blogDate, preview, id, slug }) => (
                <BlogPreview
                    key={id}
                    {...{
                        title,
                        date: blogDate,
                        preview,
                        slug,
                    }}
                />
            ))}
        </>
    )
}

export const Head: HeadFC = () => <SEO title="Amani's blogs" />

export const query = graphql`
    query AllBlogs($tag: String) {
        allContentfulBlog(
            filter: { node_locale: { eq: "en-US" }, tags: { elemMatch: { name: {}, slug: { eq: $tag } } } }
        ) {
            nodes {
                blogDate
                id
                title
                preview {
                    preview
                }
                slug
            }
            totalCount
        }
    }
`
