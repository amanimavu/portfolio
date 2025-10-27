import React from "react"
import { ReactComponent as LinkedIn } from "images/svgs/linkedin-icon.svg"
import { ReactComponent as Github } from "images/svgs/github-icon.svg"
import { ReactComponent as Instagram } from "images/svgs/instagram-icon.svg"

export default function SocialBar() {
    return (
        <div id="social-bar">
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
    )
}
