// der Button, der Auf Seite 1 (zurück) navigiert

import React, { useState }  from "react";
import "../../Style.css";
import Startseite from "../Startseite/Startseite";

const ButtonSeiteA = () => {
  const onClickHandler = (event) => {
    //Weiterleitung auf Seite A Startseite
    <Startseite />;
  };

  return (
    <div>
      <button className="button" onClick={onClickHandler}>
        Startseite
      </button>
    </div>
  );
};

export default ButtonSeiteA;
