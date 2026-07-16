import React, { ReactNode } from "react"
import { useSiteMetadata } from "utils/hooks"
import favicon from "../images/ico/favicon.ico"

type Props = { title?: string; description?: string; pathname?: string; children?: ReactNode }
export const SEO = ({ title, description, pathname, children }: Props) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        image,
        siteUrl,
    }: {
        title?: string | null
        description?: string | null
        image?: string | null
        siteUrl?: string | null
    } = useSiteMetadata() ?? {}

    const baseUrl = siteUrl ?? "https://amani-mavu.com"
    const normalizedImage = image?.startsWith("http") ? image : `${baseUrl}${image ?? "/amani_portfolio_site.png"}`

    const seo = {
        title: title || defaultTitle || "Amani Mavu",
        description: description || defaultDescription || "Portfolio of Amani Mavu",
        image: normalizedImage,
        url: `${baseUrl}${pathname || ``}`,
    }

    const siteName = defaultTitle?.split(" | ")[0] || "Amani Mavu"
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": `${baseUrl}/#person`,
                name: siteName,
                url: baseUrl,
                jobTitle: "Web Developer & Tech Blogger",
                description: seo.description,
                image: seo.image,
            },
            {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                url: baseUrl,
                name: seo.title,
                description: seo.description,
                publisher: {
                    "@id": `${baseUrl}/#person`,
                },
                inLanguage: "en",
            },
            {
                "@type": "WebPage",
                "@id": seo.url,
                url: seo.url,
                name: seo.title,
                description: seo.description,
                isPartOf: {
                    "@id": `${baseUrl}/#website`,
                },
                about: {
                    "@id": `${baseUrl}/#person`,
                },
                inLanguage: "en",
            },
        ],
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="image" content={seo.image} id="meta-image" />
            <meta name="description" content={seo.description ?? undefined} id="meta-description" />
            <link id="icon" type="image/x-icon" rel="icon" href={favicon} key="site-favicon" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <html lang="en" />
            {children}
        </>
    )
}
