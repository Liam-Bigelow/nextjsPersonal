
import { useState, useEffect, useRef } from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

export default function Choropleth({token, width, height}) {
    const sdk = new ChartsEmbedSDK({
		baseUrl: "https://charts.mongodb.com/charts-plantmonitor-tpctw",
        getUserToken: () => {
            return token
        }
	});
	const choroplethRef = useRef(null);
	const [rendered, setRendered] = useState(false);
	const [chart] = useState(
		sdk.createChart({
			chartId: "637cfab2-9518-405c-8fb8-b81f0560037e",
            width: "100%",
            height: "100%",
            ...( !!width ) ? { width: width }: {},
            ...( !!height ) ? { height: height }: {},
		})
	);
	useEffect(() => {
		chart
			.render(choroplethRef.current)
			.then(() => setRendered(true))
			.catch((err) => console.error("Error during Charts rendering.", err));
	}, [chart]);

    return (
        <div ref={choroplethRef}></div>
    )
}