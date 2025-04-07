import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Level1Template } from 'templates/level-1'
import favicon from '../images/favicon.png'
import '../styles.css'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Level1Template>
            <StaticImage
                className="hero-image"
                src="../images/hero-image.png"
                alt="hero image"
                layout="constrained"
                width={500}
                placeholder="blurred"
            />
        </Level1Template>
    )
}

export default IndexPage

export const Head: HeadFC = () => {
    return (
        <>
            <title>Amani Mavu</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href={favicon} />
        </>
    )
}
