import React from "react";

import "./refresh.style.scss";
import { ReactComponent as Logo } from "./../../assets/refresh.svg";

const Refresh = () => (
    <div className="refresh-component">
        <div className="refresh">
            <Logo />
        </div>
        <div className="counter">
            <input className="counter-box" type="number" disabled />
        </div>
    </div>
);

export default Refresh;
