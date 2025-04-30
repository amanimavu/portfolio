import { useEffect, useState } from 'react'

export const useScreens = (): [xs: boolean] => {
    const [xs, setXs] = useState(false)

    useEffect(() => {
        if (window.screen.width <= 576) {
            setXs(true)
        }
    }, [])

    useEffect(() => {
        const configureMobileScreenState = () => {
            if (window.screen.width <= 576) {
                setXs(true)
            } else {
                setXs(false)
            }
        }
        window.addEventListener('resize', configureMobileScreenState)

        return () => {
            window.removeEventListener('resize', configureMobileScreenState)
        }
    }, [])

    return [xs]
}

export const usePreferredTheme = (onDark: () => void, onLight: () => void) => {
    useEffect(() => {
        const html = document.querySelector('html')
        const theme = window.localStorage.getItem('theme')

        const systemLightTheme = window.matchMedia(
            '(prefers-color-scheme: light)'
        )

        function changeTheme(e: MediaQueryListEvent) {
            if (theme === null && html) {
                if (e.matches) {
                    onLight()
                    html.setAttribute('style', 'color-scheme: light')
                    html.setAttribute('data-theme', 'light')
                } else {
                    onDark()
                    html.setAttribute('style', 'color-scheme: dark')
                    html.setAttribute('data-theme', 'dark')
                }
            }
        }

        systemLightTheme.addEventListener('change', changeTheme)

        return () => systemLightTheme.removeEventListener('change', changeTheme)
    }, [])
}
