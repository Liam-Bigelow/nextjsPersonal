import Head from "next/head";

const { useEffect, useState } = require("react" );

// pages
import Sidebar from '@components/Sidebar'

export default function Home() {

    const [quote, setQuote] = useState("");

    const updateMotivationalQuote = () => {
        setQuote("")
        setTimeout( () => {
            fetch(`/api/getMotivation`)
                .then(res => res.json())
                .then( q => {
                    setQuote( q );
                })
        }, 1000 );
    }
    useEffect(() => {
        updateMotivationalQuote();
    }, []);

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
                    <div>
                        <div className="card-panel" style={{padding: "75px 75px 100px 75px", maxWidth: "700px", position: "relative"}}>
                            <h2 style={{display: "flex", justifyContent: "center"}}>Hi <div className="shake">👋</div>!</h2>
                            <h2>I'm Liam Bigelow</h2>
                            <h5>Software Developer + Math Enthusiast</h5>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", position: "relative", margin: "0px 20px"}}>
                            {
                                !!quote &&
                                <div className="popup-msg">
                                    <button onClick={() => updateMotivationalQuote()}>↻</button>
                                    {quote.text}
                                    <p style={{fontSize: "13px", }}>- {quote.author}</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
