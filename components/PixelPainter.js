
import { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import styles from './PixelPainter.module.css'


export default function PixelPainter() {

    const pixelDensity = {
        width: 25,
        height: 20,
    }

    const [pixelContext, setPixelContext] = useState( null );
    const [pixelColor, setPixelColor] = useState( "#0000" );
    const pixelCanvas = useRef( null );
    const canvasGuide = useRef( null );
    const [guideDrawn, setGuideDrawn] = useState( false );
    useEffect(() => {
      if( pixelCanvas && pixelCanvas.current ){
        setPixelContext( pixelCanvas.current.getContext( "2d" ) );
      }
    }, [pixelCanvas]);

    const drawGrid = () => {
        canvasGuide.current.innerHTML = "";
        const rect = pixelCanvas.current.getBoundingClientRect();
        canvasGuide.current.style.width = `${rect.width}px`;
        canvasGuide.current.style.height = `${rect.height}px`;
        canvasGuide.current.style.gridTemplateColumns = `repeat(${pixelDensity.width}, 1fr)`;
        canvasGuide.current.style.gridTemplateRows = `repeat(${pixelDensity.height}, 1fr)`;

        [...Array(pixelDensity.height * pixelDensity.width)].forEach(() =>
            canvasGuide.current.insertAdjacentHTML("beforeend", "<div></div>")
        );
    };

    useEffect(() => {
        if( !guideDrawn && canvasGuide && canvasGuide.current && pixelCanvas && pixelCanvas.current ){
            drawGrid();
            setGuideDrawn( true );
            window.addEventListener('resize', drawGrid)
        }
    }, [canvasGuide, pixelCanvas]);

    useEffect(() => {
        if( pixelContext && pixelColor ){
            pixelContext.fillStyle = pixelColor;
        };
    }, [pixelColor])
    

    const getPositionOnCanvas = ( event ) => {
        const rect = pixelCanvas.current.getBoundingClientRect();
        const cellX = Math.floor( (event.clientX - rect.left) / (rect.width / pixelDensity.width) ); 
        const cellY = Math.floor( (event.clientY - rect.top) / (rect.height / pixelDensity.height) );
        const pixelWidth = ( pixelCanvas.current.width / pixelDensity.width );
        const pixelHeight = ( pixelCanvas.current.height / pixelDensity.height );

        return { x: cellX * pixelWidth, y: cellY * pixelHeight, width: pixelWidth, height: pixelHeight };
    }
    
    const fillPixel = (event) => {
        const offsetCoord = getPositionOnCanvas( event );
        pixelContext.fillRect( 
            offsetCoord.x, offsetCoord.y, offsetCoord.width, offsetCoord.height
        );
    }

    return (
        <div className={styles["pixel-page"]}>
            <div className={styles["pixel-container"]}>
                <section style={{border: "10px solid #FBA01D", padding: "8px 8px 0px 8px"}}>
                    <div ref={canvasGuide} className={styles["canvas-guide"]}></div>
                    <canvas ref={pixelCanvas} className={styles["pixel-canvas"]} onClick={fillPixel} ></canvas>
                </section>
                <section className={styles["paint-nav"]}>
                    🖌️<input type="color" onChange={(event) => setPixelColor( event.target.value )} />
                </section>
            </div>
        </div>
    )
}