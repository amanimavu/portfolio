import React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { BlogEntry } from "components/blog-preview"
import { SEO } from "components/seo"

export default function Component({ data: { contentfulBlog } }: PageProps<Queries.SingleBlogQuery>) {
    return (
        <>
            <BlogEntry
                {...{
                    title: contentfulBlog?.title ?? null,
                    content: contentfulBlog?.content ?? null,
                    date: contentfulBlog?.blogDate ?? null,
                }}
            />
        </>
    )
}

export const Head: HeadFC = () => {
    return <SEO title="blog" />
}

export const query = graphql`
    query SingleBlog($id: String) {
        contentfulBlog(node_locale: { eq: "en-US" }, id: { eq: $id }) {
            id
            content {
                raw
            }
            title
            blogDate
        }
    }
`
