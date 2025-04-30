import React, { useEffect } from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import favicon from '../images/pngs/favicon.png'
import '../styles.css'
import { StaticImage } from 'gatsby-plugin-image'

export default function Index(props: PageProps) {
    return (
        <div id="landing-page">
            <StaticImage
                className="hero-image"
                src="../images/pngs/hero-image.png"
                alt="hero image"
                layout="constrained"
                width={500}
                placeholder="blurred"
            />
        </div>
    )
}

export const Head: HeadFC = () => {
    return (
        <>
            <title id="title">Amani Mavu</title>
            <meta
                id="viewport"
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link id="icon" rel="icon" href={favicon} />
        </>
    )
}
