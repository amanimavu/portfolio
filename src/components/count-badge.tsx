import React from "react"

export const CountBadge = ({ count }: { count: number }) => {
    return (
        <div id="count-badge-wrapper">
            <div id="count-badge">{count}</div>
            {count ? (count === 1 ? "post" : "posts") : null}
        </div>
    )
}
