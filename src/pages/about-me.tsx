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
import { useScreens } from "utils/hooks"

export default function AboutMe() {
    const [md] =useScreens()
    return (
        <AboutTemplate>
            <p>
                I'm Amani Mavu, a self-taught software developer with a background in applied mathematics. My passion
                for problem-solving led me to front-end development, where I specialize in building intuitive and
                high-performing web applications.
            </p>
            <p>
                I am just going to leave this here <mark>amanimavu@gmail.com</mark>
            </p>

            {!md ? <section id="tools-of-trade">
                <JavaScriptIcon id="javascript" className="icon" />
                <TypescriptIcon id="typescript" className="icon" />
                <ReactIcon id="react" className="icon" />
                <NextIcon id="next" className="icon" />
                <PhpIcon id="php" className="icon" />
                <MysqlIcon id="mysql" className="icon" />
            </section>: null}
        </AboutTemplate>
    )
}

export const Head: HeadFC = () => {
    return <SEO title="About Amani" />
}
