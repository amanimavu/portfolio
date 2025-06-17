import { DisplayChip } from "components/chips"
import { Collapse } from "components/collapse"
import { Divider } from "components/divider"
import { navigate } from "gatsby"
import React, { useEffect, useMemo, useState } from "react"
import { useScreens } from "src/utils/hooks"

type Experience = Queries.AllExperienceAndProjectsQuery["allContentfulExperience"]["nodes"][number]

export const ExperienceTemplate = ({ experience }: { experience: readonly Experience[] }) => {
    const [xs] = useScreens()
    const [description, setDescription] = useState<Omit<Experience, "id"> | null>(null)
    const [activeKey, setActiveKey] = useState(experience[0]["id"])

    useEffect(() => {
        const filters = Array.from(document.querySelectorAll("#experience ul.labels li"))
        filters.forEach((filter) => {
            filter.addEventListener("keydown", (e) => {
                if ((e as KeyboardEvent).key.toLowerCase() === "enter") {
                    const target = e.target as HTMLUListElement
                    const description = dataMap.get(target.id)
                    description && setDescription(description)
                    setActiveKey(target.id)
                }
            })
        })
    }, [])

    const allLabels = useMemo(() => {
        const result = experience.reduce(
            (
                prev: {
                    company: Experience["company"]
                    id: Experience["id"]
                }[],
                cur
            ) => {
                return [...prev, { company: cur.company, id: cur.id }]
            },
            []
        )
        return result
    }, [experience])

    const dataMap = useMemo(() => {
        const result = experience.reduce((prev: [Experience["id"], Omit<Experience, "id">][], cur) => {
            const { id, ...rest } = cur
            return [...prev, [cur.id, rest] as [Experience["id"], typeof rest]]
        }, [])

        return new Map(result)
    }, [experience])

    useEffect(() => {
        const description = dataMap.get(allLabels[0].id)
        description && setDescription(description)
    }, [allLabels])

    return (
        <section id="experience" className="portfolio">
            <h2 className="portfolio-header">EXPERIENCE</h2>
            <div>
                {xs &&
                    experience.map(({ company, startDate, currentJob, title, endDate, account, id }) => {
                        return (
                            <Collapse
                                name="experience"
                                key={id}
                                renderHeader={() => (
                                    <div className="collapse-header">
                                        <h4>{company}</h4>
                                        <h4>
                                            <span>{startDate ?? null}</span>
                                            <span> - </span>
                                            <span>{currentJob ? "to date" : (endDate ?? null)}</span>
                                        </h4>
                                        <h4>{title}</h4>
                                    </div>
                                )}
                            >
                                <ul>{account?.map((acc, index) => <li key={index}>{acc}</li>)}</ul>
                            </Collapse>
                        )
                    })}
                {!xs && (
                    <>
                        <ul className="labels">
                            {allLabels.map(({ company, id }) => (
                                <li
                                    tabIndex={0}
                                    key={id}
                                    id={id}
                                    data-active={activeKey === id}
                                    onClick={() => {
                                        const description = dataMap.get(id)
                                        description && setDescription(description)
                                        setActiveKey(id)
                                    }}
                                >
                                    {company}
                                </li>
                            ))}
                        </ul>
                        <Divider />
                        <article className="description">
                            <h4>
                                <span>{description?.startDate ?? null}</span>
                                <span> - </span>
                                <span>{description?.currentJob ? "to date" : (description?.endDate ?? null)}</span>
                            </h4>
                            <h4>{description?.title ?? null}</h4>
                            <ul>{description?.account?.map((acc, index) => <li key={index}>{acc}</li>)}</ul>
                        </article>
                    </>
                )}
            </div>
        </section>
    )
}

type Project = Queries.AllExperienceAndProjectsQuery["allContentfulProjects"]["nodes"][number]

export const ProjectTemplate = ({ projects }: { projects: readonly Project[] }) => {
    const [description, setDescription] = useState<Omit<Project, "id"> | null>(null)
    const [activeKey, setActiveKey] = useState(projects[0]["id"])
    const [xs] = useScreens()

    useEffect(() => {
        const filters = Array.from(document.querySelectorAll("#projects ul.labels li"))
        filters.forEach((filter) => {
            filter.addEventListener("keydown", (e) => {
                if ((e as KeyboardEvent).key.toLowerCase() === "enter") {
                    const target = e.target as HTMLUListElement
                    const description = dataMap.get(target.id)
                    description && setDescription(description)
                    setActiveKey(target.id)
                }
            })
        })
    }, [])

    const allLabels = useMemo(() => {
        const result = projects.reduce(
            (
                prev: {
                    company: Project["name"]
                    id: Project["id"]
                }[],
                cur
            ) => {
                return [...prev, { company: cur.name, id: cur.id }]
            },
            []
        )
        return result
    }, [projects])

    const dataMap = useMemo(() => {
        const result = projects.reduce((prev: [Project["id"], Omit<Project, "id">][], cur) => {
            const { id, ...rest } = cur
            return [...prev, [cur.id, rest] as [Project["id"], typeof rest]]
        }, [])

        return new Map(result)
    }, [projects])

    useEffect(() => {
        const description = dataMap.get(allLabels[0].id)
        description && setDescription(description)
    }, [allLabels])

    return (
        <section id="projects" className="portfolio">
            <h2 className="portfolio-header">PROJECTS</h2>
            <div>
                {xs &&
                    projects.map(({ id, name, url, technologies, features }) => {
                        return (
                            <Collapse
                                name="projects"
                                key={id}
                                renderHeader={() => (
                                    <div className="collapse-header">
                                        <h4>{name}</h4>
                                        <h4>{url ?? "#"}</h4>
                                        <ul className="technologies">
                                            {technologies?.map((tech, index) => (
                                                <li key={index}>
                                                    <DisplayChip label={tech} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            >
                                <ul>{features?.map((feature, index) => <li key={index}>{feature}</li>)}</ul>
                            </Collapse>
                        )
                    })}
                {!xs && (
                    <>
                        <ul className="labels">
                            {allLabels.map(({ company, id }) => (
                                <li
                                    tabIndex={0}
                                    key={id}
                                    id={id}
                                    data-active={activeKey === id}
                                    onClick={() => {
                                        const description = dataMap.get(id)
                                        description && setDescription(description)
                                        setActiveKey(id)
                                    }}
                                >
                                    {company}
                                </li>
                            ))}
                        </ul>
                        <Divider />
                        <article className="description">
                            <h4>
                                <a target="_blank" rel="noopener noreferrer" href={description?.url ?? "#"}>
                                    {description?.url ?? null}
                                </a>
                            </h4>
                            <ul className="technologies">
                                {description?.technologies?.map((tech, index) => (
                                    <li key={index}>
                                        <DisplayChip label={tech} />
                                    </li>
                                ))}
                            </ul>
                            <ul>{description?.features?.map((feature, index) => <li key={index}>{feature}</li>)}</ul>
                        </article>
                    </>
                )}
            </div>
        </section>
    )
}
