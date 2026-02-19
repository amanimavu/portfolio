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
            <html lang="en" />
            <meta charSet="UTF-8" />
            <title>{seo.title}</title>
            <meta name="image" content={seo.image} />
            <link id="icon" rel="icon" href={favicon} />
            <meta name="description" content={seo.description ?? undefined} />
            <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1" />
            {children}
        </>
    )
}
