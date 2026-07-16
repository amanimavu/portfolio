import React, { useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "components/seo"
import { useNetworkInfo } from "utils/hooks"

import maskGif from "../images/gifs/transparent-ink.gif"

export default function Index(props: PageProps) {
    const optimizeForSlowNetwork = useNetworkInfo()

    useEffect(() => {
        const root = document.documentElement
        if (optimizeForSlowNetwork) {
            root.style.setProperty("--mask-url", "none")
        } else {
            root.style.setProperty("--mask-url", `url(${maskGif})`)
        }
    }, [optimizeForSlowNetwork])

    return (
        <div id="landing-page">
            <div className="hero-wrapper dark-theme">
                <StaticImage
                    className="hero-image"
                    src="../images/pngs/hero-image-light.png"
                    alt="Amani Mavu logo in dark theme"
                    layout="constrained"
                    placeholder="blurred"
                    loading="eager"
                    fetchPriority="high"
                    width={615}
                    height={774}
                />
            </div>
            <div className="hero-wrapper light-theme">
                <StaticImage
                    className="hero-image"
                    src="../images/pngs/hero-icon-dark.png"
                    alt="Amani Mavu logo in light theme"
                    layout="constrained"
                    placeholder="blurred"
                    loading="eager"
                    fetchPriority="high"
                    width={615}
                    height={774}
                />
            </div>
        </div>
    )
}

export const Head: HeadFC = ({ location }) => (
    <SEO pathname={location.pathname}>
        <meta
            id="site-verification"
            name="google-site-verification"
            content="ZI2DXLtpwpSRYaZGKnP41kfvGemf3gYwJluvF2VkJ3M"
        />
    </SEO>
)
