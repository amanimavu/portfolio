import { BlogPreview } from "components/blog-preview"
import React, { useEffect } from "react"
import { HeadFC, navigate } from "gatsby"
import { graphql, PageProps } from "gatsby"
import { CountBadge } from "components/count-badge"
import { useScreens } from "utils/hooks"
import { SEO } from "components/seo"

export default function BlogIndexPage({ data }: PageProps<Queries.AllBlogsQuery>) {
    const [xs, md] = useScreens()

    return (
        <>
            <div className="toolbar">
                <CountBadge count={data.allContentfulBlog.pageInfo.totalCount} />
                <div id="pagination-search">
                    {!xs ? <input type="search" placeholder="Search" size={!md ? 25 : undefined} /> : null}
                    <button
                        disabled={!data.allContentfulBlog.pageInfo.hasPreviousPage}
                        onClick={() => {
                            const { currentPage, hasPreviousPage } = data.allContentfulBlog.pageInfo
                            if (hasPreviousPage) {
                                currentPage === 2 ? navigate(`/blogs/`) : navigate(`/blogs/page/${currentPage + 1}`)
                            }
                        }}
                    >
                        &lt;&lt; Prev
                    </button>
                    <button
                        disabled={!data.allContentfulBlog.pageInfo.hasNextPage}
                        onClick={() => {
                            const { currentPage, hasNextPage } = data.allContentfulBlog.pageInfo
                            if (hasNextPage) {
                                navigate(`/blogs/page/${currentPage + 1}`)
                            }
                        }}
                    >
                        Next &gt;&gt;
                    </button>
                </div>
            </div>
            {data.allContentfulBlog.nodes.map(({ title, blogDate, preview, id, slug }, index) => (
                <BlogPreview
                    key={id}
                    {...{
                        title,
                        date: blogDate,
                        preview,
                        slug,
                        index,
                    }}
                />
            ))}
        </>
    )
}

export const Head: HeadFC = ({ location }) => {
    return (
        <SEO
            title="Amani Mavu Blog | Web Development Insights & Tutorials"
            description="Read articles by Amani Mavu on web development, frontend best practices, and software insights. Learn, explore, and stay inspired through hands-on tutorials."
            pathname={location.pathname}
        />
    )
}

export const query = graphql`
    query AllBlogs($tag: String, $offset: Int = 0, $limit: Int = 5) {
        allContentfulBlog(
            filter: { node_locale: { eq: "en-US" }, tags: { elemMatch: { name: {}, slug: { eq: $tag } } } }
            limit: $limit
            skip: $offset
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
            pageInfo {
                currentPage
                hasNextPage
                totalCount
                hasPreviousPage
            }
        }
    }
`
