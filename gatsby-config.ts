import type { GatsbyConfig } from "gatsby"
import adapter from "gatsby-adapter-netlify"

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
    adapter: adapter({
        excludeDatastoreFromEngineFunction: false,
        imageCDN: false,
    }),
    siteMetadata: {
        title: `Amani Mavu | Web Developer & Tech Blogger`,
        description: `Portfolio of Amani Mavu — Frontend Web Developer skilled in JavaScript, TypeScript, and React. Showcasing projects, problem-solving, and user-focused apps.`,
        image: `/amani_portfolio_site.png`,
        siteUrl: `https://amani-mavu.is-a.dev`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        // 'gatsby-plugin-google-gtag',
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-tsconfig-paths",
        "gatsby-plugin-svgr",
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                // https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/#options
                query: `
                    {
                        allSitePage {
                            nodes {
                                path
                            }
                        }
                        allContentfulBlog(filter: {node_locale: {eq: "en-US"}}) {
                            nodes {
                                slug
                                updatedAt
                            }
                        }
                    }
                `,
                resolveSiteUrl: () => "https://amani-mavu.is-a.dev",
                resolvePages: ({
                    allSitePage: { nodes: allPages },
                    allContentfulBlog: { nodes: allPosts },
                }: {
                    allSitePage: { nodes: { path: string }[] }
                    allContentfulBlog: { nodes: { slug: string; updatedAt: string }[] }
                }) => {
                    const postMap: Record<string, { updatedAt: string }> = allPosts.reduce(
                        (acc, post) => {
                            acc[`/blogs/${post.slug}/`] = { updatedAt: post.updatedAt }
                            return acc
                        },
                        {} as Record<string, { updatedAt: string }>
                    )

                    return allPages.map((page) => {
                        return { ...page, ...postMap[page.path] }
                    })
                },
                serialize: ({ path, updatedAt }: { path: string; updatedAt?: string }) => {
                    return {
                        url: path,
                        lastmod: updatedAt,
                    }
                },
                excludes: [`/404/`, `/404.html`],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Roboto Mono`,
                        file: `https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap`,
                    },
                    {
                        name: `Rubik`,
                        file: `https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `u9isgccg2ljl`,
                accessToken: process.env.ACCESS_TOKEN,
            },
        },
    ],
}

export default config
