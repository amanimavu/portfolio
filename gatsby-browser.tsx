import React from "react"
import type { GatsbyBrowser } from "gatsby"
import { RootLayout } from "components/root-layout"
import { BlogsLayout } from "components/blogs-layout"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element, props }) => {
    return (
        <>
            <RootLayout {...props}>
                {props.location.pathname.includes("blogs") ? <BlogsLayout {...props}>{element}</BlogsLayout> : element}
            </RootLayout>
        </>
    )
}
