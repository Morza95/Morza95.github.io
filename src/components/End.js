import React from "react";
import "../Style.css";
import Logo from "./Logo.js";

const End = () => {

  // Button Click Handler einfügen

  
  return (
    <div >
      <form>
        <header className="Startseite-header">
          <Logo></Logo> {/*Einbindung des Logos Nav2Gö*/}
          <p> Danke für die Teilnahme! </p>
          <p> Klicke jetzt bitte auf den Button, um zur Umfrage zu gelangen </p>
        </header>
        <button type="submit">Zurück auf Anfang</button>
      </form>
    </div>
  );
};

export default End;
