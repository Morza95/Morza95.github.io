import React, { useState } from "react";
import "../../Style.css";
import Logo from "../Logo/Logo.js";
import ButtonSeiteB from "../Button/ButtonSeiteB.js";

const Startseite = () => {
  return (
    <div>
      <header className="Startseite-header">
        <Logo></Logo> {/*Einbindung des Logos Nav2Gö*/}
        <p> Willkommen! </p>
        <p> Das ist eine App für ein Projektstudium. </p>
      </header>
      <p className="Startseite-beschreibung">
        {" "}
        Hier folgt ein Text für die Beschreibung der Forschung, der DSGVO und
        des Anwendungsfalls, was noch eingefügt wird! Wenn die Teilnehmer den
        Text gelesen haben, können Sie mit einem Klick auf den Button den Test
        beginnen!
      </p>
      <ButtonSeiteB />
    </div>
  );
};

export default Startseite;
