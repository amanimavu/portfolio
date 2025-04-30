import { Link } from 'gatsby'
import React, { CSSProperties, useMemo } from 'react'

export function Navbar({ pathname }: { pathname: string }) {
    const navBarStyles = useMemo(() => {
        const styles: CSSProperties = {}
        if (!['/', '/about-me/'].includes(pathname)) {
            styles['backdropFilter'] = 'blur(10px)'
        }
        return styles
    }, [pathname])

    const linkStyles = useMemo(() => {
        const styles: CSSProperties = {}
        if (pathname === '/about-me/') {
            styles['color'] = '#f6f6f6'
        }
        return styles
    }, [pathname])
    return !pathname.includes('blog') ? (
        <div className="navigation-bar" style={navBarStyles}>
            <nav aria-label="Top navigation" className="navigation-bar-container">
                <Link className="navigation-bar__item" activeClassName="link-active" to="/about-me" style={linkStyles}>
                    me
                </Link>
                <Link className="navigation-bar__item" activeClassName="link-active" to="/blogs" style={linkStyles}>
                    blogs
                </Link>
                <Link className="navigation-bar__item" activeClassName="link-active" to="/portfolio" style={linkStyles}>
                    portfolio
                </Link>
            </nav>
        </div>
    ) : (
        <div className="brand-container">
            <h2>MAVU</h2>
        </div>
    )
}
