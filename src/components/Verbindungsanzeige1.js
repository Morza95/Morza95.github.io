import React, { useState } from "react";
import "../Style.css";
//import Card from "./UI/Card";
//import classes from "./Verbindung/Verbindungsanzeige.module.css";
//import Button from "./UI/Button";
import Logo from "./Logo.js";
import SearchPage from "./SearchPage1.js";
import Ende from "./Ende.js";

//import 'webpack';
/* import logo from '.../public/busemoji.png'

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}
 */
const Verbindungsanzeige = (props) => {
  // Button - useState
  const [clickedBack, setBackClicked] = useState(false);
  const [clickedEnd, setEndClicked] = useState(false);
  const [hideConnectionDisplay, setHideConnectionDisplay] = useState(false);

  // const onClickHandler = () => {
  //   // event.preventDefault(); // Aktuell: Neuladen der Seite verhindern
  // };

  const backClickHandler = () => {
    setBackClicked(true);
  };
  const endClickHandler = () => {
    setEndClicked(true);
  };

  return (
   <div>
       {/* {endClickHandler ? null:  */}
        { hideConnectionDisplay? null: 
          <form >
          <header className="Verbindung-header">Verbindungen</header>
          {/* <Bild/> 
          <img src={require('.../public/busemoji.png')} />
          */}
          <div className="Verbindung-textfeld-links">
            {" "}  Abfahrt: Am {props.departureDay} um {props.departureTime} Uhr{" "} </div>
          <div className="Verbindung-textfeld-mitte">Linie: 50</div>
          <div className="Verbindung-textfeld-rechts">
            Ankunft: Am {props.departureDay} um {props.departureTime} Uhr </div>
          <div className="Verbindung-textfeld-links">
            Abfahrt an Haltestelle: {props.departureStop} </div>
          <div className="Verbindung-textfeld-rechts">
            Ankunft an Haltestelle: {props.destinationStop} </div>
          </form>
        }

          {clickedBack ? (  <SearchPage /> ) : (
            <button onClick={()=> {setHideConnectionDisplay(true); backClickHandler();}} type="submit">
              Zurück zur Suche
            </button>)
          }

          {clickedEnd ? ( <Ende /> ) : (
            <button className='button' onClick={()=> {endClickHandler(); setHideConnectionDisplay(true);  }} type="submit">
              Test Beenden?
            </button>)
          }
          <Logo />
        {/* } */}
        </div>
  );
};

export default Verbindungsanzeige;
