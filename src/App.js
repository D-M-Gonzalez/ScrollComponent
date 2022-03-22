import React, {useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Seccion2 from "./seccion2";
import Seccion3 from "./seccion3";
import Seccion4 from "./seccion4";
import Seccion1 from "./seccion1";

export default function App() {
    return (
             <Routes>
                <Route exact path="/" element={<Layout />}>
                <Route exact path="seccion1" element={<Seccion1 />}/>
                <Route exact path="seccion2" element ={<Seccion2 />}/>
                <Route exact path="seccion3" element ={<Seccion3 />}/>
                <Route exact path="seccion4" element={<Seccion4 />}/>
                </Route>                         
             </Routes>                 
    );
}