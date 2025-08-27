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
        description: `Welcome to the personal portfolio of Amani Mavu — a web developer passionate about building fast, accessible websites and sharing insights on software development through blog posts.`,
        image: `/amani_portfolio_site.png`,
        siteUrl: `https://amani-mavu.is-a.dev/`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        // 'gatsby-plugin-google-gtag',
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-tsconfig-paths",
        "gatsby-plugin-svgr",
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
