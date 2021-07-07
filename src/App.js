import React, { useState } from "react";
import Startseite from "./components/Startseite.js";
//import Verbindung from "./components/Verbindung.js";
import StartPage from './components/StartPage.js';
import Test from './components/Test.js'
import SearchPage from './components/SearchPage.js'

const App = () => {
  return (
    // diese <> </> Umschließung funktioniert in diesem Projekt als Ersatz für einen Wrapper oder <React.Fragment/>
  <>     
  {/* <Test/> */}
  <StartPage />             
  {/* <Startseite /> */}
  {/* <Verbindung />; */}
  
  </>
  )
};

export default App;
