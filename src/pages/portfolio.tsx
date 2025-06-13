import { graphql, HeadFC, useStaticQuery } from "gatsby"
import React from "react"
import favicon from "../images/pngs/favicon.png"
import { ExperienceTemplate, ProjectTemplate } from "templates/portfolio"

const projects = [
    {
        id: 1,
        name: "Task Manager App",
        repo_url: "https://github.com/amani-mavu/task-manager",
        technologies: ["React", "Redux", "Node.js", "MongoDB"],
        features: [
            "User authentication and authorization",
            "Real-time task updates with WebSocket",
            "RESTful API integration for backend communication",
        ],
    },
    {
        id: 2,
        name: "E-commerce Platform",
        repo_url: "https://github.com/amani-mavu/e-commerce",
        technologies: ["Next.js", "TypeScript", "Stripe API"],
        features: [
            "Product listing and filtering",
            "Secure payment gateway integration",
            "Admin dashboard for inventory management",
        ],
    },
]

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
            <ExperienceTemplate experience={experience} />
            <ProjectTemplate projects={projects} />
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
