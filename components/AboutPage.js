
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import styles from './AboutPage.module.css'


export default function AboutPage() {

    return (
        <div className={styles["about-page"]}>
            <div className={styles["about-container"]}>
                <section className="row" style={{margin: "15px"}} >
                    <img className={styles["about-image"]} src={"./me.webp"} alt="me" />

                    <div className={styles["about-text"]}>
                        Hey,<br/>
                        <span style={{color: "#FBA01D", fontWeight: "600"}}>I'm Liam.</span> A Full-Stack Software Developer based in Saskatoon, Saskatchewan.<br/>
                        <br/>
                        I am a proficient website builder although I find I enjoy programming most when I have a complex problem to get lost in.<br/>
                        <br/>
                        When I'm not writing code I enjoy 🏂 snowboarding and 🌳 wood-working!
                    </div>

                    <div className={styles["socials"]}>
                        <a href="https://www.linkedin.com/">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Liam-Bigelow">
                            <FaGithub />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}