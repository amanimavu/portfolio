import { Link } from 'gatsby'
import React from 'react'

export function Navbar() {
    return (
        <div className="navigation-bar">
            <nav
                aria-label="Top navigation"
                className="navigation-bar-container"
            >
                <Link
                    className="navigation-bar__item"
                    activeClassName="link-active"
                    to="/"
                >
                    me
                </Link>
                <Link
                    className="navigation-bar__item"
                    activeClassName="link-active"
                    to="/blogs"
                >
                    blogs
                </Link>
                <Link
                    className="navigation-bar__item"
                    activeClassName="link-active"
                    to="/#portfolio"
                >
                    portfolio
                </Link>
            </nav>
        </div>
    )
}
