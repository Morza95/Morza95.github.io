import React, { useState } from "react";
import "../Style.css";
import Logo from "./Logo.js";
import SearchPage from "./SearchPage";
import Button from "./UI/Button";
import "./UI/Button.module.css";
import Card from "./UI/Card";
import classes from "./UI/Seiten.module.css";

const Startseite = (props) => {
  // ClickHandler
  const [hideStartForm, setStartForm] = useState(false);
  const continueClickedHandler = () => {
    setContinueClicked(true);
  };




  const [clicked, setContinueClicked] = useState(false);

  const onClickHandler = (event) => {
    event.preventDefault();
  };
  return (
    //Import von classes Styling - dem css Modul
     <div>
    {/* <Card className={classes.input}> */}
    { hideStartForm? null:
      <form onSubmit={onClickHandler}>
        
        <header className="Startseite-header">
          <Logo></Logo> {/*Einbindung des Logos Nav2Gö*/}
          <p> Willkommen! </p>
          <p> Das ist eine App für ein Projektstudium. </p>
        </header>
        <p className="Startseite-beschreibung">
          {" "}
          Hier folgt ein Text für die Beschreibung der Forschung und
          des Anwendungsfalls, was noch eingefügt wird! Wenn die Teilnehmer den
          Text gelesen haben, können Sie mit einem Klick auf den Button den Test
          beginnen!
        </p>
        {clicked ? (
          <SearchPage />
        ) : (
          <Button onClick={continueClickedHandler} type="submit">
            Weiter
          </Button>
        )}
         {/* {clicked ? ( <SearchPage /> ) : (
            <button className='button' onClick={()=> {continueClickedHandler(); setHideStartDisplay(true);  }} type="submit">
              Weiter
            </button>)
          } */}
       
      </form>}
      </div>
    //</Card>
  );
};

export default Startseite;
