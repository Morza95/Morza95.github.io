import React, { useState, useEffect, useRef } from "react";
import ErrorModal from "./ErrorHandler/ErrorModal.js";
import "../Style.css";
import Verbindungsanzeige from "./ConnectionDisplay.js";
import StartPage from "./StartPage.js";
import { BsArrowLeftRight } from "react-icons/bs";
import ConnectionDisplay from "./ConnectionDisplay.js";
import ConnectionSelect from "./ConnectionSelect.js";

const SearchPage = (props) => {
  // useState

  const [departureStop, setDepartureStop] = useState("");
  const [destinationStop, setDestinationStop] = useState("");
  const [departureDay, setDepartureDay] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [error, setError] = useState();
  const [hideSearchFields, setHideSearchFields] = useState(true);
  const departureInputRef = useRef();
  const destinationInputRef = useRef();
  const [loadingMessage, setloadingMessage] = useState(true);

  let errorOccured = false;

  const backClickHandler = () => {
    props.onGoBack();
  };

  const departureChangeHandler = (event) => {
    setDepartureStop(event.target.value);
    //const enteredDeparture = departureInputRef.current.value;
  };

  //////// Fehlerprüfung - Prevent////////////////

  const errorPrevent = () => {
    if (
      departureStop.trim().length === 0 ||
      destinationStop.trim().length === 0
    ) {
      setError({
        title: "Falsche Daten",
        message: "Bitte geben Sie einen passenden Start- und Zielort ein!",
      });
      return (errorOccured = true); // nur zum Bearbeiten der Datums/zeitproleme: zurücksetzen!
    }
    if (departureTime === "" || departureDay === "") {
      setError({
        title: "Falsche Daten",
        message: "Bitte geben Sie einen Abfahrtstag und eine Abfahrtszeit an!",
      });
      return (errorOccured = true); // nur zum Bearbeiten der Datums/zeitproleme: zurücksetzen!
    }
    if(departureStop === destinationStop){
      setError({
        title: "Falsche Daten",
        message: "Start- und Zielort dürfen nicht identisch sein!",
      });
      return (errorOccured = true); 
    }
  };

  ////////// ErrorHandler /////////

  const errorHandler = () => {
    setError(false);
  };

  // errorPrevent();
  // console.log(Error);
  // //{Error? setSearchClicked(false) : setSearchClicked(true)}
  // if (Error) {
  //   return setSearchClicked(true) && console.log("weiter gehts");
  // }
  // return setSearchClicked(false) && console.log("Fehler Aufgetreten");

  ////// Handler ///////

  const searchClickedHandler = () => {
    setSearchClicked(true);
  };

  // In "Update" von Kai funktioniert es noch

  // let departure [] = {departurevalue = departureInputRef.current.value }
  // let destination [] = { destinationvalue = destinationInputRef}

  const changeStopHandler = () => {
    let a = departureInputRef.current.value;
    setDepartureStop(destinationInputRef.current.value);
    setDestinationStop(a);
  };

  const destinationStopHandler = (event) => {
    setDestinationStop(event.target.value);
    // const enteredDestinationStop = destinationInputRef.current.value;
  };
  const departureDayHandler = (event) => {
    setDepartureDay(event.target.value);
    //localStorage.setItem()
  };
  const departureTimeHandler = (event) => {
    setDepartureTime(event.target.value);
  };

  // ------------------------------- FÜR DIE VERZÖGERUNG---------------------------------------------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      setloadingMessage(false);
      setHideSearchFields(false);

    }, 7790);
    return () => clearTimeout(timer);
  }, []);

  return (   loadingMessage ? (
    <p>...loading...</p>
  ): (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {hideSearchFields ? null : (
        <div>
          <h1> Verbindungssuche </h1>
          <div className="container-searchpage">
            <input
              list="haltestellen"
              type="text"
              spellcheck="false"
              value={departureStop}
              onChange={departureChangeHandler}
              placeholder="Start"
              ref={departureInputRef}
            />
            <button className="button-swap" onClick={changeStopHandler}>
              {/* {" "} */}
              <BsArrowLeftRight size="3rem" />
            </button>
            <input
              list="haltestellen"
              type="text"
              spellcheck="false"
              value={destinationStop}
              onChange={destinationStopHandler}
              placeholder="Ziel"
              ref={destinationInputRef}
            />
            <input
              type="date"
              value={departureDay}
              onChange={departureDayHandler}
            />
            <br></br>
            <input
              type="time"
              value={departureTime}
              onChange={departureTimeHandler}
            />
          </div>
        </div>
      )}
      <div>
        {searchClicked ? (
            <ConnectionSelect
              onSetStartFormHidden={props.onSetStartFormHidden}
              onGoBack={() => {
                setHideSearchFields(false);
                setSearchClicked(false);
              }}
              departureStop={departureStop}
              destinationStop={destinationStop}
              departureDay={departureDay}
              departureTime={departureTime}
            />
            ) : (
          <div className="buttons-search-page">
            <button
              className="button-search"
              onClick={() => {
                errorPrevent();
                {
                  if (errorOccured) {
                    return;
                  } else {
                    setHideSearchFields(true);
                    searchClickedHandler();
                  }
                }
              }}
            >
              Suchen
            </button>
            <button
              className="button-search"
              onClick={backClickHandler}
              type="submit"
            >
              Zurück zur Startseite
            </button>{" "}
          </div>
        )}
      </div>
      
      <datalist id="haltestellen">
        <option value="An der Lutte"></option>
        <option value="Auf dem Hagen"></option>
        <option value="Baumweg"></option>
        <option value="Bornbreite"></option>
        <option value="Bürgerstraße"></option>
        <option value="Deisterstraße"></option>
        <option value="Elmweg"></option>
        <option value="Fritz-Straße"></option>
        <option value="Gehrenring"></option>
        <option value="Grüner Weg"></option>
        <option value="Hauptbahnhof"></option>
        <option value="Hardtweg"></option>
        <option value="Hiroshimaplatz"></option>
        <option value="Kiessee"></option>
        <option value="Klinikum"></option>
        <option value="Klosterweg"></option>
        <option value="Kreuzbergring"></option>
        <option value="Krugstraße"></option>
        <option value="Landgericht/ Bahnhof"></option>
        <option value="Lutteranger"></option>
        <option value="Reinholdstraße"></option>
        <option value="Schillerstraße"></option>
        <option value="Schützenplatz"></option>
        <option value="Siekweg"></option>
        <option value="Sollstraße"></option>
        <option value="Stadtstieg"></option>
        <option value="Tammstraße"></option>
        <option value="Teichstraße"></option>
        <option value="Treuenhagen"></option>
        <option value="Tulpenweg"></option>
        <option value="Waldstraße"></option>     
      </datalist>
      
    </React.Fragment>
  )
  );
};

export default SearchPage;
