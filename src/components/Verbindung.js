import React, { useState } from "react";
import "../Style.css";
import Logo from "./Logo.js";
import Verbindungsanzeige from "./Verbindungsanzeige";

import Button from "./UI/Button";
import Card from "./UI/Card";
import classes from "./UI/Seiten.module.css";

const Verbindung = (props) => {
  const onClickHandler = (event) => {
    event.preventDefault(); // Aktuell: Neuladen der Seite verhindern
  };
  const departureStop = props.departureStop;
  const destinationStop = props.destinationStop;
  const departureDay = props.departureDay;
  const departureTime = props.departureTime;

  return (
    <Card className={classes.input}>
      <form onSubmit={onClickHandler}>
      <header className="Verbindung-header">Verbindungen</header>
        <Verbindungsanzeige
          departureStop={departureStop}
          destinationStop={destinationStop}
          departureDay={departureDay}
          departureTime={departureTime}
        />
        
        <Button type="submit">Zurück</Button>
        <Button type="submit">Auf erste Seite</Button>

        <Logo />
      </form>
    </Card>
  );
};

export default Verbindung;
