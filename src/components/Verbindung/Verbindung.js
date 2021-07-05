import React, { useState } from "react";
import "../../Style.css";
import Logo from "../Logo/Logo.js";
import ButtonEnde from "../Button/ButtonEnde.js";
import ButtonSeiteB from "../Button/ButtonSeiteB";
import Verbindungsanzeige from "./Verbindungsanzeige";

const Verbindung = () => {
  return (
    <div>
      <header className="Verbindung-header">Verbindungen</header>
      <Verbindungsanzeige />
      <ButtonEnde />
      <ButtonSeiteB />
      <Logo />
    </div>
  );
};

export default Verbindung;
