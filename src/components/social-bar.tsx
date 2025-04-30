import React from 'react'
import { ReactComponent as LinkedIn } from 'images/svgs/linkedin-icon.svg'
import { ReactComponent as Github } from 'images/svgs/github-icon.svg'
import { ReactComponent as Instagram } from 'images/svgs/instagram-icon.svg'

export default function SocialBar() {
    return (
        <div id="social-bar">
            <a
                className="socials-item"
                target="_blank"
                href="https://github.com/amanimavu"
                rel="noopener noreferrer"
            >
                <Github />
            </a>

            <a
                className="socials-item"
                target="_blank"
                href="https://www.linkedin.com/in/amani-mavu/"
                rel="noopener noreferrer"
            >
                <LinkedIn />
            </a>

            <a
                className="socials-item"
                target="_blank"
                href="https://www.linkedin.com/in/amani-mavu/"
                rel="noopener noreferrer"
            >
                <Instagram style={{ stroke: 'orange' }} />
            </a>
        </div>
    )
}
