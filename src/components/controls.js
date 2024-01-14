import React from "react";

import '../styles/style1.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

function Controls() {
    return(
        <>
            <Routes>
                <Route path="/page1" element={<Page1/>}/>
                <Route path="/page2" element={<Page2/>}/>
                <Route path="/page3" element={<Page3/>}/>
            </Routes>
        </>
    )
}

export default Controls;