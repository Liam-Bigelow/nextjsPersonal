
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import styles from './AboutPage.module.css'


export default function AboutPage() {

    return (
        <div className={styles["about-page"]}>
            <div className={styles["about-container"]}>
                <section className="row" style={{margin: "15px"}} >
                    <img className={`${styles["about-image"]} col s8 m4 l3`} src={"./me.webp"} alt="me" />
                    <div className={`${styles["about-text"]} col s12 m8 l9`} >
                        Hey,<br/>
                        <span style={{color: "#FBA01D", fontWeight: "600"}}>I'm Liam.</span> A Full-Stack Software Developer based in Saskatoon, Saskatchewan.<br/>
                        <br/>
                        I am a proficient website builder although I find I enjoy programming most when I have a complex problem to get lost in.<br/>
                        <br/>
                        When I'm not writing code I enjoy 🏂 snowboarding and 🌳 wood-working!
                    </div>

                    <div className={`${styles["socials"]} col s12`}>
                        <a href="https://www.linkedin.com/in/liam-bigelow">
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