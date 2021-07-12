import React, { useState } from "react";
import Startseite from "./components/StartPage.js";
//import Verbindung from "./components/Verbindung.js";
import StartPage from "./components/StartButtonPage.js";
import Test from "./components/Test.js";
import SearchPage from "./components/SearchPage.js";
import Verbindungsanzeige from "./components/ConnectionDisplay.js";

const App = () => {
  return (
    // diese <> </> Umschließung funktioniert in diesem Projekt als Ersatz für einen Wrapper oder <React.Fragment/>
    <>
      {/* <Test/> */}
      <StartPage/>
      {/* <Startseite /> */}
      {/* <Verbindung />; */}
    </>
  );
};

export default App;
