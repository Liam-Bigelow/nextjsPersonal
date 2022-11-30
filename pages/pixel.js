import Head from "next/head";


import Sidebar from '@components/Sidebar'
import PixelPage from '@components/PixelPainter'


export default function Home() {


    return (
        <div>
            <Head>
                <title>Liam Bigelow | Pixel Painter</title>
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
                <PixelPage />
            </main>
        </div>
    );
}
