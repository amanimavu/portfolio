import { Navbar } from "components/navbar"
import { Sidebar } from "components/sidebar"
import {PageProps} from "gatsby"
import React, { ReactNode } from "react"
import SocialBar from "./social-bar"
import { useScreens } from "src/utils/hooks"

export function RootLayout({ children, ...props }: { children: ReactNode }) {
    const {
        location: { pathname },
    } = props as PageProps

    const [isMobileScreen] = useScreens()
    return (
        <section style={{ overflowX: "hidden" }} id="root-layout">
            {isMobileScreen ? (
                <>
                    <Navbar pathname={pathname} />
                    <main>{children}</main>

                    <SocialBar />
                </>
            ) : (
                <>
                    <Navbar pathname={pathname} />
                    <Sidebar path={pathname} />
                    <main>{children}</main>
                </>
            )}
        </section>
    )
}
