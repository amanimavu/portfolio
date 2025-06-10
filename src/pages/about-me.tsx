import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import favicon from "../images/pngs/favicon.png"
import "../styles.css"
import { AboutTemplate } from "templates/about"
import { SEO } from "components/seo"

export default function AboutMe() {
    return (
        <AboutTemplate>
            <p>
                I'm Amani Mavu, a self-taught software developer with a background in applied mathematics. My passion
                for problem-solving led me to front-end development, where I specialize in building intuitive and
                high-performing web applications using JavaScript, TypeScript, and React. I have experience working in
                fintech and developing POS and finance-related systems. I'm always eager to tackle new challenges,
                optimize workflows, and stay ahead in the ever-evolving tech landscape. Currently, I’m looking for
                opportunities that will push my engineering and problem-solving skills to the next level while expanding
                into full-stack development. When I’m not coding, you’ll probably find me watching an episode of Shark
                Tank and getting inspired by innovative business ideas.
            </p>
        </AboutTemplate>
    )
}

export const Head: HeadFC = () => {
    return <SEO title="About Amani" />
}
