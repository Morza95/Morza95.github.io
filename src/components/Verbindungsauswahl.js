import { useState } from "react";
import ConnectionDisplay from "./ConnectionDisplay";

const Verbindungsauswahl = (props) => {
  const [Aclicked, setAClicked] = useState(false);
  const [Bclicked, setBClicked] = useState(false);
  const [Cclicked, setCClicked] = useState(false);

  return (
    <form>
      <h1 className="logo">Nav2Gö</h1>
      <h1>Verbindungsauswahl</h1>
      <div className="connectionChoice">
        <h2>Günstigste Verbindung</h2>
        <div id="containerCheapestConnection">
          <div className="verbindung-textfeld"> Fahrtkosten: 8,50 € </div>
          <div className="verbindung-textfeld">Dauer: 1h 20 min</div>
          <div className="verbindung-textfeld">Umstiege 1</div>
          <button disabled={Aclicked} onClick={() => setAClicked(true)}>
            {" "}
            Route starten{" "}
          </button>
        </div>
      </div>
      <div className="connectionChoice">
        <h2>Schnellste Verbindung</h2>
        <div id="containerFastestConnection">
          <div className="verbindung-textfeld"> Fahrtkosten: 12,80 € </div>
          <div className="verbindung-textfeld">Dauer. 30 min </div>
          <div className="verbindung-textfeld">Umstiege 1</div>
          <button disabled={Bclicked} onClick={() => setBClicked(true)}>
            {" "}
            Route starten{" "}
          </button>
        </div>
      </div>

      {Cclicked ? (
        <ConnectionDisplay
          departureStop={props.departureStop}
          destinationStop={props.destinationStop}
          departureDay={props.departureDay}
          departureTime={props.departureTime}
        />
      ) : (
        <button
          id="backToSearchButton"
          disabled={Cclicked}
          onClick={() => setCClicked(true)}
        >
          {" "}
          Zurück zur Suche{" "}
        </button>
      )}
    </form>
  );
};

export default Verbindungsauswahl;
