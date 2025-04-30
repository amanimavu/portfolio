import React, { ReactNode, useEffect, useState } from 'react'

export function Collapse({
    children,
    renderHeader,
    name,
    styles,
}: {
    children: ReactNode
    renderHeader: () => ReactNode
    name?: string
    styles?: React.CSSProperties
}) {
    return (
        <details style={styles} name={name} className="collapse">
            <summary>{renderHeader()}</summary>
            {children}
        </details>
    )
}
