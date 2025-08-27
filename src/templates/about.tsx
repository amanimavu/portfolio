import { StaticImage } from "gatsby-plugin-image"
import React, { ReactNode } from "react"
import { useScreens } from "src/utils/hooks"

export const AboutTemplate = ({ children }: { children: ReactNode }) => {
    const [xs] = useScreens()
    return (
        <div id="about-me">
            <article>{children}</article>
            
                <StaticImage
                    style={{
                        gridArea: "1/1",
                        // You can set a maximum height for the image, if you wish.
                        // maxHeight: 600,
                        opacity: 0.3,
                    }}
                    layout="fullWidth"
                    // This is a presentational image, so the alt should be an empty string
                    alt="Amani Mavu"
                    // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                    src="../images/pngs/me.png"
                    formats={["auto", "webp", "avif"]}
                    className="my-image mobile"
            />
            
                <StaticImage
                    src="../images/pngs/me.png"
                    alt="Amani Mavu"
                    layout="fullWidth"
                    className="my-image desktop"
                    placeholder="blurred"
                />
        </div>
    )
}
