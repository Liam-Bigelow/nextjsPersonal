
import styles from './Sidebar.module.css'
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar() {

    const [isActive, setIsActive] = useState( false );

    const handleClose = () => {
        setIsActive( false );
    }

    const handleClick = () => {
        setIsActive( !isActive );
    }

    return (
        <>
            <div style={{top: 0, height: 0, display: "flex",  justifyContent: "right", position: "sticky"}}>
                <div style={{height: "100%"}}>
                    <button className={styles["sidebar-nav"]} onClick={handleClick}>
                        { 
                            isActive ? 
                                <FaTimes /> : 
                                <FaBars />
                        }
                    </button>
                </div>
            </div>
            <div className={styles["sidebar"]}>
                <div className={styles["sidebar-content"]} style={{
                    transform: ( isActive ? "translateX(0%)" : "translateX(-100%)" ),
                    transition: "transform 0.5s"
                }}>
                    <div className="right-align" style={{justifyContent: "end"}}>
                        <button className={styles["sidebar-btn"]} onClick={handleClose}>
                            <FaTimes />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
