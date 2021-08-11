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
            <p>
              {" "}
              <br></br>Vielen Dank für die Teilnahme!{" "}
            </p>
            <p>
              Klicken Sie jetzt bitte auf den Button, um zur zweiten App zu
              gelangen.
              <br></br>
              <br></br>
            </p>
          </div>
        </header>
        <div id="containerButtonEnd">
          {/* <button type="submit">Zurück auf Anfang</button> */}
          <a id="aGreen" href="https://inkadrum.github.io//">
            Zur Zweiten App!
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
