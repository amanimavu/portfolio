import { Link } from "gatsby"
import React, { CSSProperties, useMemo } from "react"
import { ReactComponent as HomeIcon } from "images/svgs/home-icon.svg"
import { useScreens } from "utils/hooks";
import { graphql, useStaticQuery } from "gatsby"

export function Navbar({ pathname}: { pathname: string}) {
    const {
            allContentfulBlog: { totalCount: blogCount },
        } = useStaticQuery<Queries.AllBlogsCountQuery>(graphql`
            query AllBlogsCount {
                allContentfulBlog(filter: { node_locale: { eq: "en-US" } }) {
                    totalCount
                }
            }
        `)
    
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

    const [isMobileScreen] = useScreens()
    return (
        <div className="navigation-bar" style={navBarStyles}>
            <nav style={{alignItems: "center"}} aria-label="Top navigation" className="navigation-bar-container">
                {isMobileScreen ? <Link
                    className="navigation-bar__item"
                    activeClassName="link-active"
                    to="/"
                    style={{ ...linkStyles, opacity: pathname.includes("/") ? 0.5 : 1, transform: "scale(0.7)" }}
                >
                    <HomeIcon />
                </Link>: null}
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
                {blogCount ? (
                    <Link
                        className="navigation-bar__item"
                        activeClassName="link-active"
                        to="/blogs"
                        style={{ ...linkStyles, opacity: pathname.includes("blogs") ? 0.5 : 1 }}
                    >
                        blogs
                    </Link>
                ) : null}
            </nav>
        </div>
    )
}
