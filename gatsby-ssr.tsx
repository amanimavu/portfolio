import React from "react"
import { RootLayout } from "components/root-layout"
import { GatsbySSR } from "gatsby"
import { BlogsLayout } from "components/blogs-layout"

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element, props }) => {
    return (
        <RootLayout {...props}>
            {props.location.pathname.includes("blogs") ? <BlogsLayout {...props}>{element}</BlogsLayout> : element}
        </RootLayout>
    )
}

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }, options) => {
    setHeadComponents([
        <script
            key="tailwind-dark-mode"
            dangerouslySetInnerHTML={{
                __html: `
                (function() {
                    try {
                        const theme = localStorage.getItem('theme');
                        const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                        if (!theme && supportDarkMode) theme = 'dark';
                        
                        if (theme === 'dark') {
                            document.documentElement.setAttribute("data-theme", "dark");
                        } else {
                            document.documentElement.setAttribute("data-theme", "light");
                        }
                    } catch (e) {}
                })();
                (function() {
                    try {
                        const hasGoodNetwork = ["4g", "3g"].includes(navigator.connection?.effectiveType ?? "2g");
                        const saveData = navigator.connection?.saveData ?? false

                        if(!hasGoodNetwork || saveData){
                            document.documentElement.style.setProperty("--mask-url", "none")
                        }
                    } catch (e) {}
                })();
            `,
            }}
        />,
    ])
}
