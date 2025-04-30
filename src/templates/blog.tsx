import { Divider } from 'components/divider'
import React, { ReactNode } from 'react'
import { useScreens } from 'src/utils/hooks'
import { ReactComponent as Filter } from 'images/svgs/filter-icon.svg'
import { Collapse } from 'components/collapse'

export function BlogTemplate({
    children,
    filters,
}: {
    children: ReactNode
    filters: { name: string; id: number }[]
}) {
    const [xs] = useScreens()

    return (
        <div className="blog">
            {!xs && (
                <>
                    <main id="previews">
                        <div className="toolbar">
                            <h6>Count</h6>
                            <input
                                type="search"
                                placeholder="Search"
                                size={30}
                            />
                        </div>
                        {children}
                    </main>

                    <Divider />

                    <div className="filters">
                        <ul>
                            {filters.map((filter) => (
                                <li key={filter.id}>{filter.name}</li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
            {xs && (
                <div id="previews">
                    <Collapse
                        styles={{ border: 'none' }}
                        renderHeader={() => (
                            <div className="toolbar">
                                <input
                                    type="search"
                                    placeholder="Search"
                                    size={20}
                                />
                                <Filter />
                            </div>
                        )}
                    >
                        <div className="filters">
                            <ul>
                                {filters.map((filter) => (
                                    <li key={filter.id}>{filter.name}</li>
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
