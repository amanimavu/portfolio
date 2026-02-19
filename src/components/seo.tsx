import React, { ReactNode } from "react"
import { useSiteMetadata } from "utils/hooks"
import favicon from "../images/ico/favicon.ico"

type Props = { title?: string; description?: string; pathname?: string; children?: ReactNode }
export const SEO = ({ title, description, pathname, children }: Props) => {
    const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata() ?? {}

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="image" content={seo.image} id="meta-image" />
            <meta name="description" content={seo.description ?? undefined} id="meta-description" />
            <link id="icon" type="image/x-icon" rel="icon" href={favicon} key="site-favicon" />
            <html lang="en" />
            {children}
        </>
    )
}
