// der Button, der zur Umfrage weiterleitet

import React, { useState }  from "react";
import "../../Style.css";

const ButtonUmfrage = () => {
  const onClickHandler = (event) => {
    //Weiterleitung zur Umfrage
    //Link
  };

  return (
    <div>
      <button className="button" onClick={onClickHandler}>
        Zur Umfrage
      </button>
    </div>
  );
};

export default ButtonUmfrage;
