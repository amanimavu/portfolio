import { Navbar } from 'components/navbar'
import { Sidebar } from 'components/sidebar'
import { PageProps } from 'gatsby'
import React, { ReactNode } from 'react'
import SocialBar from './social-bar'
import { usePreferredTheme, useScreens } from 'src/utils/hooks'

export function RootLayout({ children, ...props }: { children: ReactNode }) {
    const {
        location: { pathname },
    } = props as PageProps

    const [isMobileScreen] = useScreens()
    return (
        <section
            style={isMobileScreen ? { marginBottom: '10vh' } : undefined}
            id="root-layout"
        >
            {isMobileScreen ? (
                <>
                    <Navbar pathname={pathname} />

                    {children}
                    <SocialBar />
                </>
            ) : (
                <>
                    <Navbar pathname={pathname} />
                    <Sidebar path={pathname} />

                    {children}
                </>
            )}
        </section>
    )
}
