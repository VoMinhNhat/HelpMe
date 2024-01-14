import React from "react";

import '../styles/style1.css';
import Controls from "./controls";
import Menu1 from "./menu";

function MainPage() {
    return(
        < div className="MainPage">
        <Menu1/>
        <Controls/>
        </div>
    )
}

export default MainPage;