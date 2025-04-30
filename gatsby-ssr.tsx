import React from 'react'
import { RootLayout } from 'components/root-layout'
import { GatsbyBrowser } from 'gatsby'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
    element,
    props,
}) => {
    console.log('in the server')
    return <RootLayout {...props}>{element}</RootLayout>
}
