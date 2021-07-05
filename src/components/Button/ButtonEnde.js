// der Button, der zur letzten Seite weiter navigiert

import { useState } from 'react';
import React from 'react';
import "../../Style.css";

const ButtonEnde = () => {
    
    const onClickHandler = (event) => {
        //Weiterleitung auf letzte Seite
        
    }

    return (
    
    <div>
        <button className="button" onClick={onClickHandler}>Fertig</button>
    </div>

    )
};

export default ButtonEnde;