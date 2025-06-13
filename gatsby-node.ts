import path from "path"
import { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode["createPages"] = async ({ actions, reporter, graphql }) => {
    const { createPage } = actions
    const result = await graphql<{ allContentfulTag: { nodes: { slug: string }[] } }>(`
        query getTagSlugs {
            allContentfulTag(filter: { node_locale: { eq: "en-US" } }) {
                nodes {
                    slug
                }
            }
        }
    `)

    const limit = 1 as const
    const { data, errors } = await graphql<{
        allContentfulBlog: { pageInfo: { perPage: number; totalCount: number } }
    }>(`
        query getBlogsPageInfo {
            allContentfulBlog(filter: { node_locale: { eq: "en-US" } }, limit: ${limit}) {
                pageInfo {
                    perPage
                    totalCount
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query`)
    }

    if (errors) {
        reporter.panicOnBuild(`Error while querying for allContentfulBlog`)
    }

    const allBlogsTemplate = path.resolve(`./src/pages/blogs/index.tsx`)

    result.data?.allContentfulTag.nodes.forEach(({ slug: tag }) => {
        createPage({
            path: `/blogs/tag/${tag}`,
            component: allBlogsTemplate,
            context: {
                tag,
            },
        })
    })

    const { perPage = limit, totalCount = 1 } = data?.allContentfulBlog?.pageInfo ?? {}
    const numberOfPages = Math.ceil(totalCount / perPage)
    console.log(numberOfPages)
    for (let i = 2; i <= numberOfPages; i++) {
        createPage({
            path: `/blogs/page/${i}`,
            component: allBlogsTemplate,
            context: {
                offset: (i - 1) * limit,
                limit,
            },
        })
    }
}
