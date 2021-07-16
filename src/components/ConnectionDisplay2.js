import React, { useState } from "react";
import "../Style.css";
import Logo from "./Logo.js";
import SearchPage from "./SearchPage.js";
import End from "./End.js";

//import 'webpack';
/* import logo from '.../public/busemoji.png'

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}
 */

const ConnectionDisplay2 = (props) => {
  // Button - useState
  const [clickedEnd, setEndClicked] = useState(false);
  const [hideConnectionDisplay, setHideConnectionDisplay] = useState(false);

  const backClickHandler = () => {
    props.onGoBack();
  };
  const endClickHandler = () => {
    setEndClicked(true);
  };
// -------------------------------WICHTIGE FERTIGE NOTIZEN FÜRT DIE VERZÖGERUNG---------------------------------------------------------------
  // für die verzögerung: use effect importieren
  //todo: dann noch loading bar hinzufügen
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //  setHideConnectionDisplay(false)
  //   }, 7000);
  //   return () => clearTimeout(timer);
  // }, []);

//   --------------------------(nicht ganz so wichtige) Ideen für Eingabezeit + paar Sekunden als Losfahrzeit anzeigen--------------------


// zum in-string konvertieren:
const timeToDecimal = (time) => {
  const [hours, minutes] = time.split(":");
  console.log(hours, minutes);
  let r =  Number(Math.round(Math.random() * (9 - 3)) + 3 ); 
  console.log(r);
  let tneu=Number(minutes)+ Number(r);
  console.log(tneu);
  console.log(Number(hours) + Number(tneu) / 60 )
  return(Number(hours) + Number(tneu) / 60 );
}

//   zum Zurückkonvertieren: 
const stringToTime = (StringTime) => {
  console.log("Eingabewert in f2: " + StringTime);
  const hs = Math.floor(StringTime);
  const mins = Math.round((StringTime - hs) * 60);
  return `${hs < 10 ? "0" : ""}${hs}:${mins < 10 ? "0" : ""}${mins}`;
}

let newDepartureTime = stringToTime(timeToDecimal(props.departureTime));


  return (
    <div>
      {clickedEnd ? (
        <End 
        // onGoBack={() => {
        // setHideConnectionDisplay(false);
        // setEndClicked(false);}
        />
      ) : (
        <div className="container-verbindung">
          {/* {endClickHandler ? null:  */}
          {hideConnectionDisplay ? null : (
            <form>
              <h1 className="Verbindung-header">Verbindung</h1>
              {/* <Bild/> 
              <img src={require('.../public/busemoji.png')} />
              */}
              <div className="container-ConnectionDisplay">
                <div className="verbindung-textfeld">
                  {" "}
                  <p>Abfahrt:</p> {props.departureDay} {newDepartureTime}{" "}
                </div>
                <div className="verbindung-textfeld">Linie: 50</div>
                <div className="verbindung-textfeld">
                  <p>Ankunft:</p> {props.departureDay} {props.departureTime}{" "}
                </div>
                <div className="verbindung-textfeld">
                  <p>Abfahrt an Haltestelle:</p> {props.departureStop}{" "}
                </div>
                <br></br>
                <div className="verbindung-textfeld">
                  <p>Ankunft an Haltestelle:</p> {props.destinationStop}{" "}
                </div>
              </div>
              <div className="buttons-verbindung">
                <button
                  className="button"
                  onClick={backClickHandler}
                  type="submit"
                >
                  {" "}
                  Zurück
                </button>
                <button className="button" onClick={() => {endClickHandler(); props.onSetStartFormHidden(true); } }>
                  {" "}
                  Test Beenden?
                </button>
              </div>
            </form>
          )}
        </div>
      )}
      ;
    </div>
  );
};

export default ConnectionDisplay2;
