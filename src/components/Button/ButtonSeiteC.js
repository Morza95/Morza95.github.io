// der Button, der auf Seite 3 (Verbindungen) navigiert

import React, { useState }  from "react";
import "../../Style.css";
import Verbindung from '../Verbindung/Verbindung.js'
import Ende from '../Ende/Ende.js'




const ButtonSeiteC = () => {
    
    const onClickHandler = (event) => {
        //Zurück auf Seite 1
        <Ende/>
    }
    return (
    <div>
        <button className="button" onClick={onClickHandler}>Verbindungen</button>

    </div>

    )
};

export default ButtonSeiteC;