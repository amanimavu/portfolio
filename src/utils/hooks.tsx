import { useCallback, useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

export const useScreens = (): [xs: boolean, md: boolean] => {
    const [xs, setXs] = useState(false)
    const [md, setMd] = useState(false)

    useEffect(() => {
        if (window.screen.width <= 576) {
            setXs(true)
        }

        if (window.screen.width <= 768) {
            setMd(true)
        }
    }, [])

    useEffect(() => {
        const configureMobileScreenState = () => {
            window.screen.width <= 576 ? setXs(true) : setXs(false)
            window.screen.width <= 768 ? setMd(true) : setMd(false)
        }
        window.addEventListener("resize", configureMobileScreenState)

        return () => {
            window.removeEventListener("resize", configureMobileScreenState)
        }
    }, [])

    return [xs, md]
}

export const usePreferredTheme = (onDark: () => void, onLight: () => void) => {
    useEffect(() => {
        const html = document.querySelector("html")
        const theme = window.localStorage.getItem("theme")

        const systemLightTheme = window.matchMedia("(prefers-color-scheme: light)")

        function changeTheme(e: MediaQueryListEvent) {
            if (theme === null && html) {
                if (e.matches) {
                    onLight()
                    html.setAttribute("style", "color-scheme: light")
                    html.setAttribute("data-theme", "light")
                } else {
                    onDark()
                    html.setAttribute("style", "color-scheme: dark")
                    html.setAttribute("data-theme", "dark")
                }
            }
        }

        systemLightTheme.addEventListener("change", changeTheme)

        return () => systemLightTheme.removeEventListener("change", changeTheme)
    }, [])
}

export const useSiteMetadata = () => {
    const data = useStaticQuery<Queries.GetStaticMetaDataQuery>(graphql`
        query GetStaticMetaData {
            site {
                siteMetadata {
                    title
                    description
                    image
                    siteUrl
                }
            }
        }
    `)

    return data.site?.siteMetadata
}

export const useCurrentTheme = () => {
    return useCallback(() => {
        //check local storage
        const theme = window.localStorage.getItem("theme") as "light" | "dark" | null

        //check user's system theme preference
        const systemLightTheme = window.matchMedia("(prefers-color-scheme: light)")

        if (theme) {
            return theme
        }

        if (systemLightTheme.matches) {
            return "light"
        }

        return "dark"
    }, [])
}
