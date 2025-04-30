import { DisplayChip } from 'components/chips'
import { Collapse } from 'components/collapse'
import { Divider } from 'components/divider'
import React, { useEffect, useMemo, useState } from 'react'
import { useScreens } from 'src/utils/hooks'

type Experience = {
    id: number
    company: string
    title: string
    start_date: string
    end_date: string | null
    current_job: boolean
    account: string[]
}

type Project = {
    id: number
    name: string
    repo_url: string
    technologies: string[]
    features: string[]
}

export const ExperienceTemplate = ({
    experience,
}: {
    experience: Experience[]
}) => {
    const [xs] = useScreens()
    const [description, setDescription] = useState<Omit<
        Experience,
        'id'
    > | null>(null)
    const [activeKey, setActiveKey] = useState(1)

    const allLabels = useMemo(() => {
        const result = experience.reduce(
            (
                prev: {
                    company: Experience['company']
                    id: Experience['id']
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
        const result = experience.reduce(
            (prev: [Experience['id'], Omit<Experience, 'id'>][], cur) => {
                const { id, ...rest } = cur
                return [
                    ...prev,
                    [cur.id, rest] as [Experience['id'], typeof rest],
                ]
            },
            []
        )

        return new Map(result)
    }, [experience])

    useEffect(() => {
        const description = dataMap.get(allLabels[0].id)
        description && setDescription(description)
    }, [allLabels])

    return (
        <section
            style={xs ? { marginBottom: '8vh' } : { marginBottom: '20vh' }}
            className="portfolio"
        >
            <h2 className="portfolio-header">EXPERIENCE</h2>
            <main>
                {xs &&
                    experience.map(
                        ({
                            company,
                            start_date,
                            current_job,
                            title,
                            end_date,
                            account,
                            id,
                        }) => {
                            return (
                                <Collapse
                                    name="experience"
                                    key={id}
                                    renderHeader={() => (
                                        <div className="collapse-header">
                                            <h4>{company}</h4>
                                            <h4>
                                                <span>
                                                    {start_date ?? null}
                                                </span>
                                                <span> - </span>
                                                <span>
                                                    {current_job
                                                        ? 'to date'
                                                        : (end_date ?? null)}
                                                </span>
                                            </h4>
                                            <h4>{title}</h4>
                                        </div>
                                    )}
                                >
                                    <ul>
                                        {account.map((acc, index) => (
                                            <li key={index}>{acc}</li>
                                        ))}
                                    </ul>
                                </Collapse>
                            )
                        }
                    )}
                {!xs && (
                    <>
                        <ul className="labels">
                            {allLabels.map(({ company, id }) => (
                                <li
                                    key={id}
                                    data-active={activeKey === id}
                                    onClick={() => {
                                        const description = dataMap.get(id)
                                        description &&
                                            setDescription(description)
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
                                <span>{description?.start_date ?? null}</span>
                                <span> - </span>
                                <span>
                                    {description?.current_job
                                        ? 'to date'
                                        : (description?.end_date ?? null)}
                                </span>
                            </h4>
                            <h4>{description?.title ?? null}</h4>
                            <ul>
                                {description?.account.map((acc, index) => (
                                    <li key={index}>{acc}</li>
                                ))}
                            </ul>
                        </article>
                    </>
                )}
            </main>
        </section>
    )
}

export const ProjectTemplate = ({ projects }: { projects: Project[] }) => {
    const [description, setDescription] = useState<Omit<Project, 'id'> | null>(
        null
    )
    const [activeKey, setActiveKey] = useState(1)
    const [xs] = useScreens()

    const allLabels = useMemo(() => {
        const result = projects.reduce(
            (
                prev: {
                    company: Project['name']
                    id: Project['id']
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
        const result = projects.reduce(
            (prev: [Project['id'], Omit<Project, 'id'>][], cur) => {
                const { id, ...rest } = cur
                return [...prev, [cur.id, rest] as [Project['id'], typeof rest]]
            },
            []
        )

        return new Map(result)
    }, [projects])

    useEffect(() => {
        const description = dataMap.get(allLabels[0].id)
        description && setDescription(description)
    }, [allLabels])

    return (
        <section className="portfolio">
            <h2 className="portfolio-header">PROJECTS</h2>
            <main>
                {xs &&
                    projects.map(
                        ({ id, name, repo_url, technologies, features }) => {
                            return (
                                <Collapse
                                    name="projects"
                                    key={id}
                                    renderHeader={() => (
                                        <div className="collapse-header">
                                            <h4>{name}</h4>
                                            <h4>{repo_url}</h4>
                                            <ul className="technologies">
                                                {technologies.map(
                                                    (tech, index) => (
                                                        <li key={index}>
                                                            <DisplayChip
                                                                label={tech}
                                                            />
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                >
                                    <ul>
                                        {features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </Collapse>
                            )
                        }
                    )}
                {!xs && (
                    <>
                        <ul className="labels">
                            {allLabels.map(({ company, id }) => (
                                <li
                                    key={id}
                                    data-active={activeKey === id}
                                    onClick={() => {
                                        const description = dataMap.get(id)
                                        description &&
                                            setDescription(description)
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
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={description?.repo_url}
                                >
                                    {description?.repo_url}
                                </a>
                            </h4>
                            <ul className="technologies">
                                {description?.technologies.map(
                                    (tech, index) => (
                                        <li key={index}>
                                            <DisplayChip label={tech} />
                                        </li>
                                    )
                                )}
                            </ul>
                            <ul>
                                {description?.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </article>
                    </>
                )}
            </main>
        </section>
    )
}
