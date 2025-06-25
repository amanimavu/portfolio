import React from "react"
import { RootLayout } from "components/root-layout"
import { GatsbyBrowser } from "gatsby"
import { BlogsLayout } from "components/blogs-layout"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element, props }) => {
    console.log("in the server")
    return (
        <RootLayout {...props}>
            {props.location.pathname.includes("blogs") ? <BlogsLayout {...props}>{element}</BlogsLayout> : element}
        </RootLayout>
    )
}
