import React, { CSSProperties, useEffect, useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "components/seo"
import { useCurrentTheme, useScreens } from "utils/hooks"

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

    return (
        <div id="landing-page">
            {isDarkTheme ? (
                <StaticImage
                    className="hero-image"
                    src="../images/pngs/hero-image-light.png"
                    alt="Amani Mavu logo in dark theme"
                    layout="constrained"
                    width={500}
                    placeholder="blurred"
                />
            ) : (
                <StaticImage
                    className="hero-image"
                    src="../images/pngs/hero-icon-dark.png"
                    alt="Amani Mavu logo in light theme"
                    layout="constrained"
                    width={500}
                    placeholder="blurred"
                />
            )}
        </div>
    )
}

export const Head: HeadFC = () => <SEO />
