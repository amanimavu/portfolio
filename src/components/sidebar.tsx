import React, { useEffect, useState } from "react"
import { ReactComponent as LinkedIn } from "images/svgs/linkedin-icon.svg"
import { ReactComponent as Github } from "images/svgs/github-icon.svg"
import { ReactComponent as Instagram } from "images/svgs/instagram-icon.svg"
import { ReactComponent as HomeIcon } from "images/svgs/home-icon.svg"
import { ReactComponent as Moon } from "images/svgs/moon.svg"
import { ReactComponent as Sun } from "images/svgs/sun.svg"
import { Link, PageProps } from "gatsby"
import { useCurrentTheme } from "utils/hooks"

export function Sidebar({ path }: { path: PageProps["location"]["pathname"] }) {
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const getCurrentTheme = useCurrentTheme()

    useEffect(() => {
        const root = document.documentElement
        setIsDarkTheme(getCurrentTheme() === "dark")
        const observer = new MutationObserver(() => {
            const theme = root.getAttribute("data-theme")
            window.localStorage.setItem("theme", theme ?? "dark")
        })
        observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] })

        return () => observer.disconnect()
    }, [])

    return (
        <aside className="sidebar">
            <div>
                <Link to="/" aria-label="Go to homepage">
                    {path !== "/" ? <HomeIcon /> : null}
                </Link>
                <button
                    aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
                    onClick={() => {
                        const html = document.querySelector(":root")
                        if (html) {
                            if (isDarkTheme) {
                                html.setAttribute("data-theme", "light")
                                setIsDarkTheme(false)
                            } else {
                                html.setAttribute("data-theme", "dark")
                                setIsDarkTheme(true)
                            }
                        }
                        window.dispatchEvent(new Event("theme"))
                    }}
                >
                    <Moon className="theme-toggle-icon-dark" />
                    <Sun className="theme-toggle-icon-light" />
                </button>
            </div>
            <div className="socials-container">
                <a
                    className="socials-item"
                    target="_blank"
                    href="https://github.com/amanimavu"
                    rel="noreferrer"
                    aria-label="Visit my Github profile"
                >
                    <Github />
                </a>

                <a
                    className="socials-item"
                    target="_blank"
                    href="https://www.linkedin.com/in/amani-mavu/"
                    rel="noreferrer"
                    aria-label="Visit my LinkedIn profile"
                >
                    <LinkedIn />
                </a>

                <a
                    className="socials-item"
                    target="_blank"
                    href="https://www.instagram.com/it_is_mkongo/"
                    rel="noreferrer"
                    aria-label="Visit my Instagram profile"
                >
                    <Instagram />
                </a>
            </div>
        </aside>
    )
}
