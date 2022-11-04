
import { useState } from "react";

import styles from './PlantPage.module.css'

import PlantRow from '@components/PlantRow'

export default function PlantPage() {

    const [plants, setPlants] = useState([
        {image: "./haworthsAenium.jpg", title: "Haworth's Aenium", plantKey: "HaworthsAenium" },
        {image: "./songOfIndia.jpg", title: "Song of India", plantKey: "SongOfIndia" },
        {image: "./alliumStrictum.jpg", title: "Allium Strictum", plantKey: "AlliumStrictum" },
        {image: "./chineseMoneyPlant.jpg", title: "Chinese Money Plant", plantKey: "ChineseMoneyPlant"},
    ])


    return (
        <div>
            <h3 style={{fontWeight: 700}}>My first coding project! 💗</h3>
            <p>Like many people I struggled to keep my plants healthly.</p>
            <p>I would always struggle to know if the plant had enoogh water or too much water which led to problems with keeping plants well.</p>
            <p>I thought there should be a way to keep my plant alive with minimal effort.</p>
            <p>I then devided to put a bunch of effort into designing something that would water my plant.</p>


            <h3 style={{fontWeight: 700}}><span>v1.0</span> - First Attempt 🎍</h3>
            <div className={styles["plant-v1"]}>
                <img src="/plantMonitorV1.jpg" />
                <div>
                    <p>Here is my first attempt at building an autimated plant waterer. It consisted of a Arduino Uno, Moisture sensor, Accelerometer, 3 Mini Pumps, an LCD Display, a Relay, a water level sensor, and finally alot of cables.</p>
                    <p>What I learned from this build was that it is very hard to get an accurate read of the moisture level of a pot of soil without having a very long moisture sensor. I also learned that using a rule for activating the pumps such as</p>
                    <div className="code">
                        <p>If( moisture level Less 10%): </p>
                        <p>&emsp; turn on pumps for 2s</p>
                    </div>
                    <p>Is a very unreliable and inefficient way of watering plant!</p>
                </div>
            </div>
            

            <h3 style={{fontWeight: 700}}><span>v2.0</span> - Here are my plants! 🌱</h3>
            { 
                plants.map( (pl) => {
                    return <PlantRow key={pl.plantKey} image={pl.image} title={pl.title} plantKey={pl.plantKey} />;
                })
            }
        </div>
    )
}