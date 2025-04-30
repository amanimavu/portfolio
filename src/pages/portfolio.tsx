import { HeadFC } from 'gatsby'
import React from 'react'
import favicon from '../images/pngs/favicon.png'
import { ExperienceTemplate, ProjectTemplate } from 'templates/portfolio'

const experience = [
    {
        id: 1,
        company: 'Hasibu Technologies',
        title: 'Front-end Web Developer',
        start_date: 'June 2024',
        end_date: null,
        current_job: true,
        account: [
            'Designed and implemented reusable React components to enhance development efficiency',
            'Led the migration of legacy codebases to modern frameworks, improving maintainability',
            'Collaborated with cross-functional teams to deliver high-quality web solutions on tight deadlines',
            'Conducted code reviews and mentored junior developers to uphold coding standards',
            'Integrated third-party libraries and APIs to extend application functionality',
            'Monitored application performance and implemented optimizations to reduce load times',
        ],
    },
    {
        id: 2,
        company: 'Microsoft',
        title: 'Web Developer Intern',
        start_date: 'June 2022',
        end_date: 'Feb 2024',
        current_job: false,
        account: [
            'Assisted in the development of internal tools to streamline team workflows',
            'Created interactive dashboards using React and D3.js for data visualization',
            'Wrote unit and integration tests to ensure code reliability and maintainability',
            'Participated in daily stand-ups and sprint planning sessions to align with team goals',
            'Researched and implemented accessibility best practices to improve user inclusivity',
            'Documented technical processes and project workflows for future reference',
        ],
    },
]

const projects = [
    {
        id: 1,
        name: 'Task Manager App',
        repo_url: 'https://github.com/amani-mavu/task-manager',
        technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
        features: [
            'User authentication and authorization',
            'Real-time task updates with WebSocket',
            'RESTful API integration for backend communication',
        ],
    },
    {
        id: 2,
        name: 'E-commerce Platform',
        repo_url: 'https://github.com/amani-mavu/e-commerce',
        technologies: ['Next.js', 'TypeScript', 'Stripe API'],
        features: [
            'Product listing and filtering',
            'Secure payment gateway integration',
            'Admin dashboard for inventory management',
        ],
    },
]

export default function Portfolio() {
    return (
        <>
            <ExperienceTemplate experience={experience} />
            <ProjectTemplate projects={projects} />
        </>
    )
}

export const Head: HeadFC = () => {
    return (
        <>
            <title id="title">Amani's portfolio</title>
            <meta
                id="viewport"
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link id="icon" rel="icon" href={favicon} />
        </>
    )
}
