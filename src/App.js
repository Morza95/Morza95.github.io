import React, { useState } from "react";
import Startseite from "./components/StartPage.js";
//import Verbindung from "./components/Verbindung.js";
//import ConnectionDisplay from "./components/ConnectionDisplay.js";
import StartPage from "./components/StartPage.js";

import SearchPage from "./components/SearchPage.js";
import Verbindungsanzeige from "./components/ConnectionDisplay.js";
import End from "./components/End";
//import  from "./components/Verbindungsauswahl.js";
import ConnectionDisplay from "./components/ConnectionDisplay.js";

const App = () => {
  return (
    // diese <> </> Umschließung funktioniert in diesem Projekt als Ersatz für einen Wrapper oder <React.Fragment/>
    <>
      {/* <Test/> */}
      <StartPage />
      {/* <Startseite /> */}
      {/* <Verbindung />; */}
    </>
  );
};

export default App;
