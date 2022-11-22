import Head from "next/head";


import Sidebar from '@components/Sidebar'
import StatsPage from '@components/StatsPage'
import { useEffect } from "react";


export default function Stats() {

    useEffect( () => {
        fetch(`https://api.ipregistry.co/?key=99b1bv40pk1wpwas`)
        .then(function (response) {
            return response.json();
        })
        .then(function (payload) {
            fetch(`/api/postSiteStats`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    country: payload.location.country.code,
                    city: payload.location.city,
                    lat: payload.location.latitude,
                    lng: payload.location.longitude,
                    region: payload.location.region.name,
                    postal: payload.location.postal,
                    continent: payload.location.continent.code
                })
            })
            .catch( (error) => {
                console.error( error );
            })
        });
    })


    return (
        <div>
            <Head>
                <title>Liam Bigelow</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
            </Head>

            <main>
                <Sidebar />
                <StatsPage />
            </main>
        </div>
    );
}
