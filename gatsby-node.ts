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

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query`)
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
}
