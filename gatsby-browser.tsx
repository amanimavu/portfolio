import React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { RootLayout } from 'components/root-layout'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
    element,
    props,
}) => {
    return (
        <>
            <RootLayout {...props}>{element}</RootLayout>
        </>
    )
}
