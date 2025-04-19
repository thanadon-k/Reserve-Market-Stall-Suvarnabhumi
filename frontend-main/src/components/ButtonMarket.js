import { React, useState } from "react";
import "../styles/ButtonMarket.css";

function ButtonMarket(props) {
    return (
        <div className="button_market" onClick={() => props.popup(true)}>
        </div>
    );
}

export default ButtonMarket;