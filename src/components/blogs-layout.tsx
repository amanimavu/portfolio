import { Divider } from "components/divider"
import React, { ReactNode, useEffect } from "react"
import { useScreens } from "src/utils/hooks"
import { ReactComponent as Filter } from "images/svgs/filter-icon.svg"
import { Collapse } from "components/collapse"
import { graphql, useStaticQuery, navigate, PageProps } from "gatsby"

export function BlogsLayout({ children, ...props }: { children: ReactNode }) {
    const [xs] = useScreens()

    const {
        location: { pathname },
    } = props as PageProps

    const route = pathname.slice(1, -1).split("/").at(-1)

    useEffect(() => {
        const filters = Array.from(document.querySelectorAll(".filters ul li"))
        filters.forEach((filter) => {
            filter.addEventListener("keydown", (e) => {
                if ((e as KeyboardEvent).key.toLowerCase() === "enter") {
                    const target = e.target as HTMLUListElement

                    if (target?.innerText === "All") {
                        navigate(`/blogs/`, { replace: true })
                    } else {
                        navigate(`/blogs/tag/${target.dataset.slug}`, { replace: true })
                    }
                }
            })
        })
    }, [])

    const {
        allContentfulTag: { nodes: filters },
    } = useStaticQuery<Queries.AllTagsQuery>(graphql`
        query AllTags {
            allContentfulTag(filter: { node_locale: { eq: "en-US" } }) {
                nodes {
                    name
                    id
                    slug
                }
            }
        }
    `)

    return (
        <div className="blog">
            {!xs && (
                <>
                    <>
                        <div id="previews">{children}</div>

                        <Divider />
                    </>

                    <div className="filters">
                        <ul>
                            <li
                                data-active={route === "blogs" || !!parseInt(route ?? "0")}
                                onClick={() => {
                                    navigate(`/blogs/`, { replace: true })
                                }}
                                tabIndex={0}
                                key="all"
                            >
                                All
                            </li>
                            {filters.map((filter) => (
                                <li
                                    tabIndex={0}
                                    data-active={route === filter.slug}
                                    data-slug={filter.slug}
                                    onClick={() => {
                                        navigate(`/blogs/tag/${filter.slug}`, { replace: true })
                                    }}
                                    key={filter.id}
                                >
                                    {filter.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
            {xs && (
                <div id="previews">
                    <Collapse
                        styles={{ border: "none" }}
                        renderHeader={() => (
                            <div className="toolbar">
                                <input type="search" placeholder="Search" size={20} />
                                <Filter />
                            </div>
                        )}
                    >
                        <div className="filters">
                            <ul>
                                <li
                                    data-active={route === "blogs"}
                                    onClick={() => {
                                        navigate(`/blogs/`, { replace: true })
                                    }}
                                    key="all"
                                >
                                    All
                                </li>
                                {filters.map((filter) => (
                                    <li
                                        data-active={route === filter.slug}
                                        onClick={() => {
                                            navigate(`/blogs/tag/${filter.slug}`, { replace: true })
                                        }}
                                        key={filter.id}
                                    >
                                        {filter.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Collapse>

                    {children}
                </div>
            )}
        </div>
    )
}
