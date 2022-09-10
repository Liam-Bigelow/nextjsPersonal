import { useEffect, useState } from "react";
import PlantRow from '@components/PlantRow'

export default function PlantPage() {

    const [plants, setPlants] = useState([
        {image: "./haworthsAenium.jpg", title: "Haworth's Aenium" },
        {image: "./songOfIndia.jpg", title: "Song of India" },
        {image: "./alliumStrictum.jpg", title: "Allium Strictum" },
        {image: "./chineseMoneyPlant.jpg", title: "Chinese Money Plant" },
    ])


    return (
        <div>
            <h3>My first coding project! 💗</h3>
            <p>Like many people I struggled to keep my plants healthly.</p>
            <p>I would always struggle to know if the plant had enoogh water or too much water which led to problems with keeping plants well.</p>
            <p>I thought there should be a way to keep my plant alive with minimal effort.</p>
            <p>I then devided to put a bunch of effort into designing something that would water my plant.</p>


            <h1>Version 2</h1>
            <h3>Here are my plants! 🌱</h3>
            { 
                plants.map( (pl) => {
                    return <PlantRow image={pl.image} title={pl.title} />;
                })
            }
        </div>
    )
}