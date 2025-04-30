import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <div id="not-found">
            <div className="countdown-cards-wrapper">
                <div className="countdown-cards">
                    <div className="rings"></div>
                    <h1>4</h1>
                </div>
                <div className="countdown-cards">
                    <div className="rings"></div>
                    <h1>0</h1>
                </div>
                <div className="countdown-cards">
                    <div className="rings"></div>
                    <h1>4</h1>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
