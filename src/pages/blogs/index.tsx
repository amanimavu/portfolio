import { BlogPreview } from 'components/blog-preview'
import React from 'react'
import { BlogTemplate } from 'templates/blog'
import favicon from '../../images/pngs/favicon.png'
import { HeadFC } from 'gatsby'

const filters = [
    { name: 'JavaScript', id: 1 },
    { name: 'Rust', id: 2 },
    { name: 'React', id: 3 },
]

const blogPreviews = [
    {
        id: 1,
        title: 'The Future of JavaScript: Trends to Watch in 2025',
        date: 'March 21, 2025',
        preview:
            'JavaScript continues to evolve rapidly, shaping the future of web development. From the rise of server-side rendering with Next.js to AI-assisted coding, the ecosystem is becoming more dynamic than ever. In this blog, we explore the key trends that will define JavaScript development in 2025 and how developers can stay ahead of the curve. Additionally, we discuss the importance of staying updated with the latest tools and frameworks, and how the community is driving innovation in the JavaScript ecosystem.',
    },
    {
        id: 2,
        title: 'Mastering Rust: Why It’s the Language of the Future',
        date: 'April 5, 2025',
        preview:
            'Rust has been gaining traction as one of the most loved programming languages. In this blog, we dive into why Rust is becoming the go-to choice for systems programming and how its safety and performance features are shaping the future of software development. We also explore real-world use cases of Rust, its growing community, and how developers can leverage its unique features to build robust and efficient applications.',
    },
    {
        id: 3,
        title: 'React 2025: What’s New and What to Expect',
        date: 'February 15, 2025',
        preview:
            'React remains one of the most popular libraries for building user interfaces. This blog explores the latest updates in React, including new features, best practices, and how it continues to dominate the front-end development landscape. We also highlight the role of React in modern web development, its integration with other technologies, and what developers can expect from the React ecosystem in the coming years.',
    },
    {
        id: 4,
        title: 'AI in Web Development: Transforming the Industry',
        date: 'January 30, 2025',
        preview:
            'Artificial intelligence is revolutionizing web development. From AI-powered design tools to intelligent code generation, this blog discusses how AI is changing the way developers work and what the future holds for AI in the web development space. We also examine the ethical implications of AI in development, its potential to enhance productivity, and the challenges developers might face as AI becomes more integrated into the industry.',
    },
]

export default function BlogIndexPage() {
    return (
        <BlogTemplate filters={filters}>
            {blogPreviews.map(({ title, date, preview, id }) => (
                <BlogPreview key={id} {...{ title, date, preview }} />
            ))}
        </BlogTemplate>
    )
}

export const Head: HeadFC = () => {
    return (
        <>
            <title id="title">Amani's blogs</title>
            <meta
                id="viewport"
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link id="icon" rel="icon" href={favicon} />
        </>
    )
}
