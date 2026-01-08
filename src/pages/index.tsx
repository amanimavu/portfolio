import React, { useEffect, useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "components/seo"
import { useCurrentTheme, useNetworkInfo } from "utils/hooks"

import maskPng from "../images/pngs/mask-black.png"
import maskGif from "../images/gifs/transparent-ink.gif"

export default function Index(props: PageProps) {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true)

    const getCurrentTheme = useCurrentTheme()

    useEffect(() => {
        const theme = getCurrentTheme()
        if (theme === "light") {
            setIsDarkTheme(false)
        }
    }, [getCurrentTheme])

    useEffect(() => {
        const systemLightTheme = window.matchMedia("(prefers-color-scheme: light)")

        const reflectCurrentTheme = () => {
            const theme = getCurrentTheme()
            if (theme === "dark") {
                setIsDarkTheme(true)
            } else {
                setIsDarkTheme(false)
            }
        }
        systemLightTheme.addEventListener("change", reflectCurrentTheme)
        window.addEventListener("theme", reflectCurrentTheme)

        return () => {
            systemLightTheme.removeEventListener("change", reflectCurrentTheme)
            window.removeEventListener("theme", reflectCurrentTheme)
        }
    }, [getCurrentTheme])

    const optimizeForSlowNetwork = useNetworkInfo()

    useEffect(() => {
        const root = document.documentElement
        if (optimizeForSlowNetwork) {
            root.style.setProperty("--mask-url", `url(${maskPng})`)
        } else {
            root.style.setProperty("--mask-url", `url(${maskGif})`)
        }
    }, [optimizeForSlowNetwork])

    return (
        <div id="landing-page">
            {isDarkTheme ? (
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
            ) : (
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
            )}
        </div>
    )
}

export const Head: HeadFC = () => (
    <SEO>
        <meta name="google-site-verification" content="ZI2DXLtpwpSRYaZGKnP41kfvGemf3gYwJluvF2VkJ3M" />
    </SEO>
)
