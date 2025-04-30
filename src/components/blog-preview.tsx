import React, { useMemo } from 'react'
import { useScreens } from 'src/utils/hooks'

export function BlogPreview({
    title,
    date,
    preview,
}: {
    title: string
    date: string
    preview: string
}) {
    const [xs] = useScreens()
    const previewCharacters = useMemo(() => {
        if (xs) {
            return 150
        }
        return 340
    }, [xs])
    const processedPreview = useMemo(() => {
        const result = preview
            .substring(0, previewCharacters)
            .replace(/$/, '...')
        return result
    }, [preview])
    return (
        <article className="blog-preview">
            <h4 className="title">{title}</h4>
            <p className="date">{date}</p>
            <main className="preview">
                <p>
                    {processedPreview} <span>read more</span>
                </p>
            </main>
        </article>
    )
}
