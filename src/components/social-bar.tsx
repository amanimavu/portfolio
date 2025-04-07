import React from 'react'
import { ReactComponent as LinkedIn } from 'images/linkedin-icon.svg'
import { ReactComponent as Github } from 'images/github-icon.svg'
import { ReactComponent as Instagram } from 'images/instagram-icon.svg'
import { Link } from 'gatsby'

export function SocialBar() {
    return (
        <div className="social-bar">
            <div className="social-bar-container">
                <Link
                    className="social-bar-item"
                    target="_blank"
                    to="https://github.com/amanimavu"
                >
                    <Github />
                </Link>

                <Link
                    className="social-bar-item"
                    target="_blank"
                    to="https://www.linkedin.com/in/amani-mavu/"
                >
                    <LinkedIn />
                </Link>

                <Link
                    className="social-bar-item"
                    target="_blank"
                    to="https://www.linkedin.com/in/amani-mavu/"
                >
                    <Instagram style={{ stroke: 'orange' }} />
                </Link>
            </div>
        </div>
    )
}
