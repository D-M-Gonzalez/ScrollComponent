import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./styles/Layout.module.css"
import Seccion1 from "./seccion1";
import Seccion2 from "./seccion2";
import Seccion3 from "./seccion3";
import Seccion4 from "./seccion4";
import { Fade } from "react-awesome-reveal";

export default function Layout() {
    const location = useLocation();
    const [actionScroll,setScroll] = useState(false);
    const [urlUpdate, setUrlUpdate] = useState("manual");
    let navigate = useNavigate();
    let counterScroll = 0;
    let finishScroll = 0;
    const myRef = [];
    myRef.push({id:useRef(),lnk:"/seccion1"});
    myRef.push({id:useRef(),lnk:"/seccion2"});
    myRef.push({id:useRef(),lnk:"/seccion3"});
    myRef.push({id:useRef(),lnk:"/seccion4"});
    const mainRef = useRef()

    const scrollHandler = ()=>{
        counterScroll = actionScroll + 1;
        setScroll(counterScroll);
        finishScroll = actionScroll;
    }

    const navigationHandler = (el)=>{
        setUrlUpdate("auto");
        navigate(el);
    }

    useEffect(()=>{
        myRef.forEach((el)=>{
            if (location.pathname === el.lnk && urlUpdate === "manual"){
                el.id.current.scrollIntoView({block:'start', behavior: 'smooth'})
            }                
        })    
        setUrlUpdate("manual");   
    },[location]);

    useEffect(()=>{
        async function checkScroll(){
            let promise = new Promise(function(resolve,reject){
                setTimeout(()=>{
                    resolve();
                },100)                
            })
            await promise;
            if (finishScroll===0){    
                myRef.forEach((el,pos)=>{
                    if(mainRef.current.scrollTop >(pos*900)-400 && mainRef.current.scrollTop <((pos+1)*900)-400 && el.lnk !== location.pathname){
                        navigationHandler(el.lnk);
                    }            
                }) 
                setScroll(0);      
            }
        }
        checkScroll();
    },[actionScroll])

    return (
        <div style={{height:"700px"}}>
            <nav>
                <ul>
                    <li><Link to="/seccion1" className={styles.link}>Seccion 1</Link></li>
                    <li><Link to="/seccion2" className={styles.link}>Seccion 2</Link></li>
                    <li><Link to="/seccion3" className={styles.link}>Seccion 3</Link></li>
                    <li><Link to="/seccion4" className={styles.link}>Seccion 4</Link></li>
                </ul>
            <div ref={mainRef} onScroll={scrollHandler} className={styles.inicioStyle}>
            <Fade><Seccion1 reference={myRef}/></Fade>
            <Fade><Seccion2 reference={myRef}/></Fade>
            <Fade><Seccion3 reference={myRef}/></Fade>
            <Fade><Seccion4 reference={myRef}/></Fade> 
            </div>
            </nav>     
        </div>
    );
}