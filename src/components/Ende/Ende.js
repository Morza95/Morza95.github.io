import { useState } from "react";
import React from "react";
import "../../Style.css";
import Logo from '../Logo/Logo.js';
import ButtonUmfrage from '../Button/ButtonUmfrage.js'

const Ende = () => {
  return (
    <div>
      <header className="Startseite-header">
        <Logo></Logo> {/*Einbindung des Logos Nav2Gö*/}
        <p> Danke für die Teilnahme! </p>
        <p> Klicke jetzt bitte auf den Button, um zur Umfrage zu gelangen </p>
      </header>
      <ButtonUmfrage/>
    </div>

  );
};

export default Ende;