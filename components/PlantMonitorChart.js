
import styles from './PlantMonitorChart.module.css'

import { useState, useEffect } from 'react';

export default function PlantMonitorChart() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/getPlantData')
            .then(res => res.json())
            .then(plantJson=> {

                console.log( plantJson );
                setData(plantJson)
            })
    }, []);
    

    return (
        <>
            {
                ( !!data && data.length > 0 ) ? 
                    <div>
                        { JSON.stringify( data )}
                    </div> :
                    <div className={styles["heart-rate"]}>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="150px" height="73px" viewBox="0 0 150 73" xmlSpace="preserve">
                            <polyline 
                                fill="none" stroke="#FBA01D" strokeWidth="3" strokeMiterlimit="10" 
                                points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
                            />
                        </svg>
                        <div className={styles["hr-fade-in"]}></div>
                        <div className={styles["hr-fade-out"]}></div>
                    </div>
            }
        </>
    )
}