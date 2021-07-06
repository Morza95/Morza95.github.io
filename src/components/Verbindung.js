import React, { useState } from "react";
import "../../Style.css";
import Logo from "./Logo.js";
import Verbindungsanzeige from "./Verbindungsanzeige";


import Button from "./UI/Button";
import Card from "./UI/Card";
import classes from "../UI/Seiten.module.css";

const Verbindung = () => {
  const onClickHandler = (event) => {
    event.preventDefault();             // Aktuell: Neuladen der Seite verhindern
  };

  // Button Click Handler konfigurieren!

  return (
    <Card className={classes.input}>
      <form onSubmit={onClickHandler}>
        <header className="Verbindung-header">Verbindungen</header>
        <Verbindungsanzeige />
        <Button type="submit">Zurück</Button>
        <Button type="submit">Weiter zum Ende</Button>
        
        <Logo />
      </form>
    </Card>
  );
};

export default Verbindung;
