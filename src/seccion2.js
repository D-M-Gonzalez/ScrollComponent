import { Link } from "react-router-dom";
import React, {useEffect} from "react";
import styles from "./styles/Layout.module.css";

export default function Seccion2(props) {
    return(
        <>
            <div className={styles.scrolldown} ref={props.reference[1].id} style={{ backgroundColor: "yellow" }}>
                <ul>
                    <li><Link to="/seccion1"  className={styles.link}>Seccion 1</Link></li>
                    <li><Link to="/seccion2"  className={styles.link}>Seccion 2</Link></li>
                    <li><Link to="/seccion3"  className={styles.link}>Seccion 3</Link></li>
                    <li><Link to="/seccion4"  className={styles.link}>Seccion 4</Link></li>
                </ul>
            </div>
        </>        
    );      
}