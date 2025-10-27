import React, { useEffect, useState } from "react"
import { ReactComponent as LinkedIn } from "images/svgs/linkedin-icon.svg"
import { ReactComponent as Github } from "images/svgs/github-icon.svg"
import { ReactComponent as Instagram } from "images/svgs/instagram-icon.svg"
import { ReactComponent as HomeIcon } from "images/svgs/home-icon.svg"
import { ReactComponent as Moon } from "images/svgs/moon.svg"
import { ReactComponent as Sun } from "images/svgs/sun.svg"
import { Link, PageProps } from "gatsby"
import { useCurrentTheme, usePreferredTheme } from "utils/hooks"

export function Sidebar({ path }: { path: PageProps["location"]["pathname"] }) {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true)

    const getCurrentTheme = useCurrentTheme()

    useEffect(() => {
        const currentTheme = getCurrentTheme()
        const html = document.querySelector(":root")
        if (currentTheme === "light") {
            setIsDarkTheme(false)
            if (html) {
                html.setAttribute("style", "color-scheme: light")
                html.setAttribute("data-theme", "light")
            }
        } else {
            if (html) {
                html.setAttribute("style", "color-scheme: dark")
                html.setAttribute("data-theme", "dark")
            }
        }
    }, [])

    usePreferredTheme(
        () => setIsDarkTheme(true),
        () => setIsDarkTheme(false)
    )

    return (
        <aside className="sidebar">
            <div>
                <Link to="/">{path !== "/" ? <HomeIcon /> : null}</Link>
                <button
                    aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
                    onClick={() => {
                        const html = document.querySelector(":root")
                        if (isDarkTheme) {
                            window.localStorage.setItem("theme", "light")
                            if (html) {
                                html.setAttribute("style", "color-scheme: light")
                                html.setAttribute("data-theme", "light")
                            }
                            setIsDarkTheme(false)
                        } else {
                            window.localStorage.setItem("theme", "dark")
                            if (html) {
                                html.setAttribute("style", "color-scheme: dark")
                                html.setAttribute("data-theme", "dark")
                            }
                            setIsDarkTheme(true)
                        }
                        window.dispatchEvent(new Event("theme"))
                    }}
                >
                    {isDarkTheme ? <Moon /> : <Sun />}
                </button>
            </div>
            <div className="socials-container">
                <a
                    className="socials-item"
                    target="_blank"
                    href="https://github.com/amanimavu"
                    rel="noopener noreferrer"
                    aria-label="Visit my Github profile"
                >
                    <Github />
                </a>

                <a
                    className="socials-item"
                    target="_blank"
                    href="https://www.linkedin.com/in/amani-mavu/"
                    rel="noopener noreferrer"
                    aria-label="Visit my LinkedIn profile"
                >
                    <LinkedIn />
                </a>

                <a
                    className="socials-item"
                    target="_blank"
                    href="https://www.instagram.com/it_is_mkongo/"
                    rel="noopener noreferrer"
                    aria-label="Visit my Instagram profile"
                >
                    <Instagram />
                </a>
            </div>
        </aside>
    )
}
