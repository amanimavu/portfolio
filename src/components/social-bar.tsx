import React from "react"
import { ReactComponent as FileAttach } from "images/svgs/file-text.svg"
import { ReactComponent as Github } from "images/svgs/socials/github-icon.svg"
import { ReactComponent as LinkedIn } from "images/svgs/socials/linkedin-icon.svg"
import { ReactComponent as Instagram } from "images/svgs/socials/instagram-icon.svg"

export default function SocialBar() {
    return (
        <div id="social-bar">
            <a className="socials-item" href="/cv.pdf" download="amani-mavu-cv.pdf">
                <FileAttach />
            </a>
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
    )
}
