
import styles from './Sidebar.module.css'
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar({}) {

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
                    <div className={styles["sidebar-item-list"]}>
                        <a href={"/"}>🏠<span>Home</span></a>
                        <a href={"/about"}>👨‍🚀<span>About Me</span></a>
                        <a href={"/plants"}>🌱<span>My Plants</span></a>
                        <a href={"/projects"}>🔨<span>My Projects</span></a>
                        <a href={"/stats"}>😮<span>Verbose Page</span></a>
                        <a href={"/pixel"}>🎨<span>Pixel Paint</span></a>
                    </div>
                </div>
            </div>
        </>
    );
}
