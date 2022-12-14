
import styles from './PlantRow.module.css'

import PlantMonitorChart from '@components/PlantMonitorChart'

export default function PlantRow({title, image, plantKey}) {


    return (
        <div>
            <div className={styles["plant-row"]}>
                <div className="row" style={{margin: "10px 10px 0 10px"}}>
                    <div className="col s12 m3">
                        {/* image of plant */}
                        <img src={image} className={styles["plant-img"]} />
                    </div>
                    <div className="col s12 m9" style={{backgroundColor: "#fff", height: "100%", padding: "15px"}}>
                        {/* graph of plant health */}
                        <PlantMonitorChart plantKey={plantKey} />
                    </div>
                </div>
            </div>
            <aside className={styles["plant-tab"]}>
                <h6 style={{margin: 0, paddingLeft: "10px"}}>{title}</h6>
            </aside>
        </div>
    );
}
