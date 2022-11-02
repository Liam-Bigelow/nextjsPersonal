
import styles from './PlantMonitorChart.module.css'

import { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function PlantMonitorChart() {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch('/api/getPlantData')
            .then(res => res.json())
            .then( plantDocs => {

                const dateData = []
                const tempData = []
                const moistDate = []
                const humData = []

                for( const doc of plantDocs ){
                    dateData.push( doc.date );
                    tempData.push( doc.temperature );
                    moistDate.push( doc.moisture );
                    humData.push( doc.humidity );
                }

                setData(
                {
                    dateData,
                    datasets: [
                        {
                            label: 'Temperature (C*)',
                            data: tempData,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                        {
                            label: 'Humidity (%)',
                            data: humData,
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
                        {
                            label: 'Moisture (%)',
                            data: moistDate,
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
                    ],
                }
                )
            })
    }, []);

    const [options, setOptions] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    });
    

    return (
        <>
            {
                ( !!data && Object.keys( data ).length > 0 ) ? 
                    <div>
                        <Line options={options} data={data} />;
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