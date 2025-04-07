import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
    siteMetadata: {
        title: `portfolio`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        // 'gatsby-plugin-google-gtag',
        'gatsby-plugin-image',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-tsconfig-paths',
        'gatsby-plugin-svgr',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [
                    `https://fonts.googleapis.com`,
                    `https://fonts.gstatic.com`,
                ],
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
        // {
        //     resolve: 'gatsby-plugin-google-gtag',
        //     options: {
        //         // You can add multiple tracking ids and a pageview event will be fired for all of them.
        //         trackingIds: [
        //             'GA-TRACKING_ID', // Google Analytics / GA
        //             'AW-CONVERSION_ID', // Google Ads / Adwords / AW
        //             'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        //         ],
        //     },
        // },
    ],
}

export default config
