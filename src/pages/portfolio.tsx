import { graphql, HeadFC, useStaticQuery } from "gatsby"
import React from "react"
import favicon from "../images/pngs/favicon.png"
import { ExperienceTemplate, ProjectTemplate } from "templates/portfolio"

export default function Portfolio() {
    const {
        allContentfulExperience: { nodes: experience },
        allContentfulProjects: { nodes: projects },
    } = useStaticQuery<Queries.AllExperienceAndProjectsQuery>(graphql`
        query AllExperienceAndProjects {
            allContentfulExperience(filter: { node_locale: { eq: "en-US" } }) {
                nodes {
                    account
                    createdAt
                    currentJob
                    endDate
                    startDate
                    title
                    id
                    company
                }
            }
            allContentfulProjects(filter: { node_locale: { eq: "en-US" } }) {
                nodes {
                    features
                    id
                    technologies
                    url
                    name
                }
            }
        }
    `)

    return (
        <>
            {experience.length ? <ExperienceTemplate experience={experience} /> : null}
            {projects.length ? <ProjectTemplate projects={projects} /> : null}
        </>
    )
}

export const Head: HeadFC = () => {
    return (
        <>
            <title id="title">Amani's portfolio</title>
            <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1" />
            <link id="icon" rel="icon" href={favicon} />
        </>
    )
}
