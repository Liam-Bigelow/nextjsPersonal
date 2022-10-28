import Head from "next/head";

import PlantPage from '@components/PlantPage'
import Sidebar from '@components/Sidebar'

export default function Home() {

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
                <div className="landing-page valign-wrapper">
                    <div className="card-panel" style={{paddingBottom: '150px', minWidth: "700px"}}>
                        <h2 style={{display: "flex", justifyContent: "center"}}>Hi <div className="shake">👋</div>!</h2>
                        <h2>I'm Liam Bigelow</h2>
                        <h5>Software Developer + Math Enthusiast</h5>
                    </div>
                </div>
                <section className="container">
                    <PlantPage />
                </section>
            </main>
        </div>
    );
}
