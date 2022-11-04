
import { useState } from "react";

import styles from './ProjectsPage.module.css'


export default function ProjectsPage() {

    const [projects, setProjects] = useState([
        {image: "./RasPiArcade1.jpg", hover: "./RasPiArcade2.jpg", title: "Raspberry Pi Arcade", description: "This was the project that got me seriously interested in computer science. I had bought all the buttons, joysticks, cables, and controller boards and had a blast assembling it all." },
        {image: "./ElectricBoard1.jpg", hover: "./ElectricBoard2.jpg", title: "Electric LongBoard", description: "When I was younger my brother and I were super into longboarding. As I've aged a bit I've stopped bombing hills and doing slides but still enjoy cruising by the river or around parks on my Electric Longboard." },
        {image: "./Charcuterie1.jpg", hover: "./Charcuterie2.jpg", title: "Charcuterie Set", description: "." },
    ])


    return (
        <div>
            <h3 style={{fontWeight: 700}}>My Personal Projects! 🔨</h3>
            <p>I've always been a bit of an inventor; from the first time I made a simple circuit out of some old RC parts and T.V. remotes I was hooked!</p>
            <p>Around 15 years old I became interested in wood working and bought my first wood working tool; a lathe.</p>
            <p>Now I enjoy combining these interests and have been able to somewhat perfect my craft.</p>
            <p style={{fontWeight: 700}}>Here are some of my favourite projects.</p>
            <br/>

            <div className="row" style={{margin: "10px 10px 0 10px", justifyContent: "center"}}>
                { 
                    projects.map( (pr) => {
                        return (
                            <section className="col s12 m10 l6" style={{padding: "0 !important"}}>
                                <div className={styles["project-card"]}>
                                    <h4 className={styles["project-title"]}>{pr.title}</h4>
                                    <div className={styles["project-img-wrapper"]}>
                                        <img src={pr.image} className={styles["project-img"]} />
                                        <img src={pr.hover} className={styles["project-img-hover"]} />
                                    </div>
                                    <p>{pr.description}</p> 
                                </div>
                            </section>
                        )
                    })
                }
            </div>
            <div style={{height: "150px"}}></div>
        </div>
    )
}