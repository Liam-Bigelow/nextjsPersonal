
import { useState } from "react";

import styles from './PlantPage.module.css'

import PlantRow from '@components/PlantRow'

export default function PlantPage() {

    const [plants, setPlants] = useState([
        {image: "./haworthsAenium.webp", title: "Haworth's Aenium", plantKey: "HaworthsAenium" },
        {image: "./songOfIndia.webp", title: "Song of India", plantKey: "SongOfIndia" },
        {image: "./alliumStrictum.webp", title: "Allium Strictum", plantKey: "AlliumStrictum" },
        {image: "./chineseMoneyPlant.webp", title: "Chinese Money Plant", plantKey: "ChineseMoneyPlant"},
    ])


    return (
        <div>
            { 
                plants.map( (pl) => {
                    return <PlantRow key={pl.plantKey} image={pl.image} title={pl.title} plantKey={pl.plantKey} />;
                })
            }
        </div>
    )
}