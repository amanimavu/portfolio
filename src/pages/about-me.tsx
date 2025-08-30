import * as React from "react"
import type { HeadFC } from "gatsby"
import { AboutTemplate } from "templates/about"
import { SEO } from "components/seo"
import { ReactComponent as JavaScriptIcon } from "images/svgs/tools/javascript.svg"
import { ReactComponent as TypescriptIcon } from "images/svgs/tools/typescript.svg"
import { ReactComponent as ReactIcon } from "images/svgs/tools/react.svg"
import { ReactComponent as NextIcon } from "images/svgs/tools/nextjs.svg"
import { ReactComponent as PhpIcon } from "images/svgs/tools/php.svg"
import { ReactComponent as MysqlIcon } from "images/svgs/tools/mysql.svg"

export default function AboutMe() {
    return (
        <AboutTemplate>
            <p>
                I’m Amani Mavu, a self-taught software developer with a background in applied mathematics. My journey
                into tech started from a love of problem-solving and curiosity about how things work. Today, I
                specialize in front-end development, where I enjoy building fast, intuitive, and user-focused web
                applications.
            </p>

            <mark>amanimavu@gmail.com</mark>

            <section id="tools-of-trade">
                <JavaScriptIcon id="javascript" className="icon" />
                <TypescriptIcon id="typescript" className="icon" />
                <ReactIcon id="react" className="icon" />
                <NextIcon id="next" className="icon" />
                <PhpIcon id="php" className="icon" />
                <MysqlIcon id="mysql" className="icon" />
            </section>
        </AboutTemplate>
    )
}

export const Head: HeadFC = ({ location }) => {
    return (
        <SEO
            title="About Amani Mavu | Frontend Web Developer"
            description="Get to know Amani Mavu — a frontend web developer blending problem-solving with clean design and modern technologies to create intuitive digital experiences."
            pathname={location.pathname}
        />
    )
}
