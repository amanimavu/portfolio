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
            <h1
                style={{
                    position: "absolute",
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    border: 0,
                }}
            >
                Amani Mavu — Frontend Web Developer & React Developer
            </h1>
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
    <SEO
        pathname={location.pathname}
        title="Amani Mavu | Frontend Web Developer & React Developer"
        description="Amani Mavu is a frontend web developer building responsive React, TypeScript, and modern web experiences with a strong focus on user experience."
        keywords="Amani Mavu, frontend web developer, React developer, TypeScript developer, web development portfolio"
    >
        <meta
            id="site-verification"
            name="google-site-verification"
            content="ZI2DXLtpwpSRYaZGKnP41kfvGemf3gYwJluvF2VkJ3M"
        />
    </SEO>
)
