
import { useState, useEffect } from "react";

import styles from './StatsPage.module.css'

import Choropleth from '@components/Choropleth'


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


    const [dayOfWeek, setDayOfWeek] = useState( "" );

    useEffect(() => {
        fetch(`/api/getStatsPageDayOfWeek`)
            .then(res => res.text())
            .then( popularDayOfWeek => {
                setDayOfWeek( popularDayOfWeek );
            })
    }, []);


    const [ chartToken, setChartToken ] = useState( null );

    useEffect(() => {
        fetch(`/api/getChartsToken`)
            .then(res => res.text())
            .then( chtTkn => {
                setChartToken( chtTkn );
            })
            .catch( (error) => {
                console.error( error );
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
            <div style={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
                <div style={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "row"}}>
                    <aside className={`${styles["stat-card"]}`}>
                        <span className={styles["title"]}>Page Visits</span>
                        <span className={styles["stat"]}>{visits}</span>
                    </aside>
                    <aside className={`${styles["stat-card"]}`}>
                        <span className={styles["title"]}>Mostly Viewed On</span>
                        <span className={styles["stat"]}>{dayOfWeek}</span>
                    </aside>
                </div>
                <aside className={`${styles["stat-card"]}`}>
                    {
                        !!chartToken ?
                            <Choropleth token={chartToken} height={"400px"} width={"90vw"}/> :
                            <div style={{height: "400px"}}></div>
                    }
                </aside>
            </div>
        </div>
    )
}