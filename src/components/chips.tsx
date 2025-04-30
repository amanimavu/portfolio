import React, { ReactNode } from 'react'

export function DisplayChip({
    icon,
    label,
}: {
    icon?: ReactNode
    label: ReactNode
}) {
    return (
        <div id={'chip'}>
            {icon ? <div className="chip-icon">{icon}</div> : null}
            <div className="chip-label">{label}</div>
        </div>
    )
}
