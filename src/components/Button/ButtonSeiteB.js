// der Button, der auf Seite 2 (Verbindungssuche) navigiert

import React, { useState }  from "react";
import "../../Style.css";
import Verbindung from "../Verbindung.js";

const ButtonSeiteB = () => {
  const onClickHandler = (event) => {
    //Navigieren auf Seite B Verbindungssuche
    //<Verbindungssuche/>
  };
  return (
    <div>
      <button className="button" onClick={onClickHandler}>
        Verbindungssuche
      </button>
    </div>
  );
};

export default ButtonSeiteB;
