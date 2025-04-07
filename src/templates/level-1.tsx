import { Navbar } from 'components/navbar'
import { SocialBar } from 'components/social-bar'
import React, { ReactNode } from 'react'

export function Level1Template({ children }: { children: ReactNode }) {
    return (
        <main>
            <Navbar />
            <SocialBar />

            {children}
        </main>
    )
}
