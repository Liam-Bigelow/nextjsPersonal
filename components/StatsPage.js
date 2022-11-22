
import { useState, useEffect } from "react";

import styles from './StatsPage.module.css'


export default function StatsPage() {

    const [ tempVisits, setTempVisits ] = useState( 0 );
    const [ visits, setVisits ] = useState( 0 );

    useEffect(() => {
        fetch(`/api/getStatsPageVisits`)
            .then(res => res.text())
            .then( pageVisits => {
                setTempVisits( pageVisits );
            })
    }, []);

    useEffect( () => {
        if( tempVisits > 0 ) {
            const speed = 50;
            const duration = 1000;
            const amountOfIterations = duration / speed;
            var iteration = 1;

            const updateCount = () => {
                const val = Math.floor( tempVisits * ((iteration*speed)/duration));
                setVisits( val );
                iteration++;
                if(!(iteration >  amountOfIterations)){
                    setTimeout( updateCount, speed );
                }
            }

            updateCount();
        }
    }, [tempVisits]);

    return (
        <div className={styles["stats-page"]}>
            <div className="row">
                <aside className={styles["stat-card"]}>
                    <span className={styles["title"]}>Page Visits</span>
                    <span className={styles["stat"]}>{visits}</span>
                </aside>
            </div>
        </div>
    )
}