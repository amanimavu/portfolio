import { Link } from "gatsby"
import React, { CSSProperties, useMemo } from "react"

export function Navbar({ pathname }: { pathname: string }) {
    const navBarStyles = useMemo(() => {
        const styles: CSSProperties = {}
        if (!["/", "/about-me/"].includes(pathname)) {
            styles["backdropFilter"] = "blur(10px)"
        }
        return styles
    }, [pathname])

    const linkStyles = useMemo(() => {
        const styles: CSSProperties = {}
        if (pathname === "/about-me/") {
            styles["color"] = "#f6f6f6"
        }
        return styles
    }, [pathname])
    return (
        <div className="navigation-bar" style={navBarStyles}>
            <nav aria-label="Top navigation" className="navigation-bar-container">
                <Link
                    className="navigation-bar__item"
                    activeClassName="link-active"
                    to="/about-me"
                    style={{ ...linkStyles, opacity: pathname.includes("about-me") ? 0.5 : 1 }}
                >
                    me
                </Link>
                <Link
                    className="navigation-bar__item"
                    activeClassName="link-active"
                    to="/portfolio"
                    style={{ ...linkStyles, opacity: pathname.includes("portfolio") ? 0.5 : 1 }}
                >
                    portfolio
                </Link>
                <Link
                    className="navigation-bar__item"
                    activeClassName="link-active"
                    to="/blogs"
                    style={{ ...linkStyles, opacity: pathname.includes("blogs") ? 0.5 : 1 }}
                >
                    blogs
                </Link>
            </nav>
        </div>
    )
}
