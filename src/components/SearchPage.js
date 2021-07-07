import React, { useState, useEffect, useRef } from "react";
import ErrorModal from "./UI/ErrorModal.js";
import "../Style.css";
import Verbindungsanzeige from "./Verbindungsanzeige.js";
import Verbindung from "./Verbindung.js";
import Card from './UI/Card.js'
import classes from './UI/Card.module.css'

const SearchPage = () => {
  // useState

  const [departureStop, setDepartureStop] = useState("");
  const [destinationStop, setDestinationStop] = useState("");
  const [departureDay, setDepartureDay] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [error, setError] = useState();

  ////// References zu HTML Elementen //////

  // const departureInputRef = useRef();
  // const destinationInputRef = useRef();
  //const departureTimeInputRef= useRef();
  //const departureDayInputRef = useRef();

  /////// DUMMY TimeOut /////////////

  // setTimeout(() => {
  //   Input oder Funktion die Ausgeführt werden soll
  // }, 500);    // 500ms Pausentimer - Lektion 113

  /// Timeout mit useEffect
  //   useEffect(() => {              // wird direkt ausgeführt bei aufruf der Seite, ausser man hängt einen Array hinten dran
  //     setTimeout(() => {
  //       console.log("Timer ausgeführt");
  //       setFormIsValid(
  //           departureStop === "Gartenstraße"  // Prüfen ob valide Eingabe
  //       );
  //     },500);             // Timer für 500ms
  //     return () => {
  //         console.log('Cleanup')      // CleanUp um eine KeyStroke-Ausführung des UseEffects zu vermeiden und stattdessen nur alle 500ms die Validität zu prüfen
  //         clearTimeout(identifier);   // damit das funktioniert, müsste const identifier = setTimeout(() => {usw. }) verwendet werden
  //     };
  //   }, [departureStop]);    //

  const departureChangeHandler = (event) => {
    setDepartureStop(event.target.value);
    //const enteredDeparture = departureInputRef.current.value;
    if (departureStop.trim().length === 0 || departureStop != "Gartenstraße") {
      setError({
        title: "Falscher Abfahrtsort",
        message:
          "Bitte geben Sie einen passenden Abfahrtsort ein (Gartenstraße)",
      });
      return;
    }
  };

  const changeStopHandler = () => {
    let a = departureStop;
    setDepartureStop(destinationStop);
    setDestinationStop(a);
  };

  const destinationStopHandler = (event) => {
    setDestinationStop(event.target.value);
    // const enteredDestinationStop = destinationInputRef.current.value;
  };
  const departureDayHandler = (event) => {
    setDepartureDay(event.target.value);
  };
  const departureTimeHandler = (event) => {
    setDepartureTime(event.target.value);
  };
  const searchClickedHandler = () => {
    setSearchClicked(true);
  };

  // ErrorHandler
  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
        <Card className={classes.input}>
      <div>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
      </div>

      <div>
        <input
          type="text"
          value={departureStop}
          onChange={departureChangeHandler}
          //ref={departureInputRef}
        />
        <button onClick={changeStopHandler}>tauschen</button>
        <input
          type="text"
          value={destinationStop}
          onChange={destinationStopHandler}
        />
        <input
          type="date"
          value={departureDay}
          onChange={departureDayHandler}
        />
        <input
          type="time"
          value={departureTime}
          onChange={departureTimeHandler}
          //ref={destinationInputRef}
        />
        <button onClick={searchClickedHandler}>Suchen</button>
        {searchClicked ? (
          <Verbindung
            departureStop={departureStop}
            destinationStop={destinationStop}
            departureDay={departureDay}
            departureTime={departureTime}
          />
        ) : null}
      </div>
      </Card>
    </React.Fragment>
  );
};

export default SearchPage;
