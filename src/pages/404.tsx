import React, { useEffect, useState } from "react"
import { HeadFC, PageProps, navigate } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <>
            <div id="not-found">
                <p>Sorry, page not found</p>
                <h2>4</h2>
                <div className="infinite-ring"></div>
                <h2>4</h2>
                <button
                    onClick={() => {
                        navigate("/", { replace: true })
                    }}
                    autoFocus={true}
                    type="button"
                >
                    Back to home
                </button>
            </div>
        </>
    )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
