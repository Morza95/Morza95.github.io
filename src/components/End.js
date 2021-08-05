import React from "react";
import "../Style.css";
import Logo from "./Logo.js";

const End = (props) => {
  // Button Click Handler einfügen

  return (
    <div>
      <form>
        <header className="Startseite-header">
          <h1 className="logo">Nav2Gö</h1>
          <div id="endText">
            <p> Danke für die Teilnahme! </p>
            <p>Klicke jetzt bitte auf den Button, um zur zweiten App-Version zu gelangen.</p>
          </div>
        </header>
        <div id="containerButtonEnd">
          <button type="submit">Zurück auf Anfang</button>
          <a id="aGreen" href="https://morza95.github.io/">
            2. App-Version Starten
          </a>
          {/* <a href="https://www.survio.com/survey/d/G9Q1M7L8V7J5L3I9V">
            Umfrage starten
          </a> */}
        </div>
      </form>
    </div>
  );
};

export default End;
