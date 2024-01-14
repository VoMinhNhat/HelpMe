import React from "react";

import '../styles/style1.css';

import { Link } from "react-router-dom";

function Menu1() {
    return(
        <div className="Menu">
            <div>
                <Link to={'/page1'}>
                Page1
                </Link>
            </div>
            <div>
                <Link to={'/page2'}>
                Page2
                </Link>
            </div>
            <div>
            <Link to={'/page3'}>
                Page3
            </Link>
            </div>
        </div>
    )
}

export default Menu1;