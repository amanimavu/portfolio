import { Navbar } from "components/navbar"
import { Sidebar } from "components/sidebar"
import { PageProps } from "gatsby"
import React, { ReactNode } from "react"
import SocialBar from "./social-bar"

export function RootLayout({ children, ...props }: { children: ReactNode }) {
    const {
        location: { pathname },
    } = props as PageProps

    return (
        <section style={{ overflowX: "hidden" }} id="root-layout">
            <div id="mobile-layout">
                <Navbar pathname={pathname} />
                <main>{children}</main>

                <SocialBar />
            </div>
            <div id="desktop-layout">
                <Navbar pathname={pathname} />
                <Sidebar path={pathname} />
                <main>{children}</main>
            </div>
        </section>
    )
}
