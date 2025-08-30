import { graphql, HeadFC, useStaticQuery } from "gatsby"
import React from "react"
import { ExperienceTemplate, ProjectTemplate } from "templates/portfolio"
import { SEO } from "components/seo"

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

export const Head: HeadFC = ({ location }) => {
    return (
        <SEO
            title="Portfolio & Experience | Amani Mavu, Frontend Web Developer"
            description="Portfolio and work experience of Amani Mavu — frontend developer building scalable, responsive web applications and contributing to impactful software projects"
            pathname={location.pathname}
        />
    )
}
