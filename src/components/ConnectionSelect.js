import { useState } from "react";
import ConnectionDisplay from "./ConnectionDisplay";
import ConnectionDisplay2 from "./ConnectionDisplay2";
import { FaBus } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { GiKickScooter } from "react-icons/gi";

const ConnectionSelect = (props) => {
  const [upperConnectionStarted, setUpperConnectionStarted] = useState(false);
  const [lowerConnectionStarted, setLowerConnectionStarted] = useState(false);
  const [backToSearchPageClicked, setBackToSearchPageClicked] = useState(false);
  const [hideConnectionSelect, setHideConnectionSelect] = useState(false);

  return (
    <div>
      {hideConnectionSelect ? null : (
        <form>
          <h1 className="logo">Nav2Gö</h1>
          <h1>Verbindungsauswahl</h1>

          <div className="connectionChoice">
            <h2>Günstigste Verbindung</h2>
            <div id="containerCheapestConnection">
              <div className="verbindung-textfeld"> Fahrtkosten: 8,50 € </div>
              <div className="verbindung-textfeld">Dauer: 1h 20 min</div>
              <div className="verbindung-textfeld">Umstiege 2</div>
              <div className="umstiegIcons">
                <FaBus size="3rem" color="white" />
                <BsArrowRight size="3rem" color="white" />
                <GiKickScooter size="3rem" color="white" />
                <BsArrowRight size="3rem" color="white" />
                <FaBus size="3rem" color="white" />
              </div>
              {upperConnectionStarted ? (
                <ConnectionDisplay
                  departureStop={props.departureStop}
                  destinationStop={props.destinationStop}
                  departureDay={props.departureDay}
                  departureTime={props.departureTime}
                />
              ) : (
                <button
                  onClick={() => {
                    setUpperConnectionStarted(true);
                    setHideConnectionSelect(true);
                  }}
                >
                  {" "}
                  Route starten{" "}
                </button>
              )}
            </div>
          </div>
          <div className="connectionChoice">
            <h2>Schnellste Verbindung</h2>
            <div id="containerFastestConnection">
              <div className="verbindung-textfeld"> Fahrtkosten: 12,80 € </div>
              <div className="verbindung-textfeld">Dauer. 30 min </div>
              <div className="verbindung-textfeld">Umstiege 1</div>
              <div className="umstiegIcons">
                <FaBus size="3rem" color="white" />
                <BsArrowRight size="3rem" color="white" />
                <FaBus size="3rem" color="white" />
              </div>

              {lowerConnectionStarted ? (
                <ConnectionDisplay2
                  departureStop={props.departureStop}
                  destinationStop={props.destinationStop}
                  departureDay={props.departureDay}
                  departureTime={props.departureTime}
                />
              ) : (
                <button
                  onClick={() => {
                    setLowerConnectionStarted(true);
                    setHideConnectionSelect(true);
                  }}
                >
                  {" "}
                  Route starten{" "}
                </button>
              )}
            </div>
          </div>

          {backToSearchPageClicked ? (
            <ConnectionDisplay />
          ) : (
            <button
              className="backButton"
              onClick={() => {
                setBackToSearchPageClicked(true);
                setHideConnectionSelect(true);
                props.onGoBack();
              }}
            >
              {" "}
              Zurück zur Suche{" "}
            </button>
          )}
        </form>
      )}
      ;
    </div>
  );
};

export default ConnectionSelect;
