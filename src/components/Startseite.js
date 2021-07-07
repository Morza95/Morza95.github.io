import React, { useState } from "react";
import "../Style.css";
import Logo from "./Logo.js";
import ButtonSeiteB from "./Button/ButtonSeiteB.js";
import Button from "./UI/Button";
import Card from "./UI/Card";
import classes from "./UI/Seiten.module.css";

const Startseite = (props) => {

  // Button Click Handler einfügen

  const onClickHandler = (event) => {
    event.preventDefault();
  };
  return (
    //Import von classes Styling - dem css Modul
    <Card className={classes.input}>
      <form onSubmit={onClickHandler}>
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
        <Button type="submit">Weiter</Button>
      </form>
    </Card>
  );
};

export default Startseite;
