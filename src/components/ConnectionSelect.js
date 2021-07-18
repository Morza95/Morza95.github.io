import { useState } from "react";
import ConnectionDisplay from "./ConnectionDisplay";
import SearchPage from "./SearchPage";

const ConnectionSelect = (props) => {
  const [cheaperConnectionStarted , setCheaperConnectionStarted] = useState(false);
  const [fasterConnectionStarted, setFasterConnectionStarted] = useState(false);
  const [backToSearchPageClicked , setBackToSearchPageClicked] = useState(false);
  const [hideConnectionSelect, setHideConnectionSelect] = useState(false);
  const [upperButtonFirstPressed, setUpperButtonFirstPressed] = useState(false);
  const [lowerButtonFirstPressed, setLowerButtonFirstPressed] = useState(false);

  const backClickHandler = () => {
    props.onGoBack();
  };

  let FahrtkostenGuenstig = 5;

  // let durationHour = 0.5;
  // let durationMin = 10;
  // let durationCheapHour = 0;
  // let durationCheapMin = 15;
  // Dauer Schnell

// zwei Zufällige Fahrtdauern bestehend aus h und min ausgeben, wobei die erste die Kürzere ist
const durations = () => {
    let slowH, slowMin, fastH, fastMin = 0;
    let t1 = Math.floor(Math.random() * (105 - 25 + 1)) + 25;
    let t2=  Math.floor(Math.random() * (105 - 25+ 1)) + 25;
    if(t2>=t1){
      if(t1>=60){fastH=1; fastMin = t1-60;}else{fastH=0; fastMin = t1;}
      if(t2>=60){slowH=1; slowMin = t2-60;}else{slowH=0; slowMin = t2;}
    }
    if(t1>t2){
      if(t2>=60){fastH=1; fastMin = t2-60;}else{fastH=0; fastMin = t2;}
      if(t1>=60){slowH=1; slowMin = t1-60;}else{slowH=0; slowMin = t1;}
    }
    return {slowH, slowMin, fastH, fastMin};
  }

  const values = durations();

  const slowH = values.slowH;
  let slowMin = values.slowMin;
  let fastH = values.fastH;
  let fastMin = values.fastMin;

  const fastDuration = '&{fastH}${:}${fastMin}';
  const slowDuration = '&{slowH}${:}${slowMin}';

  // const timeMinRandomizer = (Min) => {
  //   Min = Math.round((Min+(Math.random()*60)));
  //   durationMin = Min;
  //   return durationMin
  // }

  // // Dauer Günstig
  // const timeHourCheapRandomizer = () => {
  //   durationCheapHour = Math.round((durationHour + (Math.random()*1)));
  //   console.log(durationCheapHour)
  //   return Math.round((durationCheapHour))
  // }

  // const timeMinCheapRandomizer = () => {
  //   let durationCheapMin = Math.round((durationMin+(Math.random()*10)));
  //   return durationCheapMin
  // }

  const Fahrtkostenrechner = (Fahrtkosten) => {
    Fahrtkosten = (Fahrtkosten+(Math.random()*10));
    FahrtkostenGuenstig = Fahrtkosten;
    return (Math.round(FahrtkostenGuenstig));
  }

  return (
    <div> 
      <form>
        {hideConnectionSelect? null : ( 
          <div>
            <h1 className="logo">Nav2Gö</h1>
            <h1>Verbindungsauswahl</h1>
            <div className="connectionChoice">
            {/* {timeMinRandomizer(durationMin)};
                {timeHourRandomizer(durationHour)}
                {timeMinCheapRandomizer(durationCheapMin)};
                {timeHourCheapRandomizer(durationHour)}; */}
              <h2>Günstigste Verbindung</h2>
              <div id="containerCheapestConnection">
                <div className="verbindung-textfeld">
                    Fahrtkosten: { (Fahrtkostenrechner(FahrtkostenGuenstig))} .00 € </div>
                <div className="verbindung-textfeld">Dauer: {slowH} h {slowMin} min</div>
                <div className="verbindung-textfeld">Umstiege 1</div>
              </div>
            </div>
          </div>)
      }
      {cheaperConnectionStarted  ? (
            <ConnectionDisplay
            onSetStartFormHidden = {props.onSetStartFormHidden}
            departureStop={props.departureStop}
            destinationStop={props.destinationStop}
            departureDay={props.departureDay}
            departureTime={props.departureTime}
            cheaperConnectionStarted={cheaperConnectionStarted}
            fasterConnectionStarted={fasterConnectionStarted}
            fastDuration ={fastDuration}
            onGoBack = {()=>
              {setHideConnectionSelect(false);
              setFasterConnectionStarted(false); 
              setCheaperConnectionStarted(false);
              setUpperButtonFirstPressed(false);
              setLowerButtonFirstPressed(false);}
          }
            /> 
            ) : ( lowerButtonFirstPressed? null : (
              <div className="connectionChoice">
                <button onClick={() => {
                  setCheaperConnectionStarted(true); 
                  setUpperButtonFirstPressed(true);
                  setHideConnectionSelect(true); }}>
                  {" "}
                  Route starten{" "}
                </button> 
              </div>) )
        }
      </form>
    {hideConnectionSelect? null : (
      <div className="connectionChoice">
          <h2>Schnellste Verbindung</h2>
          <div id="containerFastestConnection">
            <div className="verbindung-textfeld">
              Fahrtkosten: {Fahrtkostenrechner(FahrtkostenGuenstig)} .00 € </div>
               {/* Fahrtkosten: {Fahrtkostenrechner(FahrtkostenGuenstig)}.00 €</div> */}
            <div className="verbindung-textfeld">Dauer: {fastH} h {fastMin} min </div>
            <div className="verbindung-textfeld">Umstiege 1</div>
          </div>
        </div> )
    }
      {fasterConnectionStarted  ? (
        <ConnectionDisplay
            onSetStartFormHidden = {props.onSetStartFormHidden}
            departureStop={props.departureStop}
            destinationStop={props.destinationStop}
            departureDay={props.departureDay}
            departureTime={props.departureTime}
            cheaperConnectionStarted={cheaperConnectionStarted}
            fasterConnectionStarted={fasterConnectionStarted}
            slowDuration ={slowDuration}
            onGoBack = {()=>
              {setHideConnectionSelect(false);
                setFasterConnectionStarted(false); 
                setCheaperConnectionStarted(false);
              setUpperButtonFirstPressed(false);
              setLowerButtonFirstPressed(false);}
          }
            />
            ) : ( upperButtonFirstPressed? null : (
            <div className="connectionChoice">
              <div id="containerFastestConnection">
                <button onClick={() => { 
                    setFasterConnectionStarted(true);  
                    setLowerButtonFirstPressed(true);
                    setHideConnectionSelect(true); }} >
                  {" "}
                  Route starten{" "}
                </button>
              </div>
            </div>))
        }
        {hideConnectionSelect? null : (
          backToSearchPageClicked ? ( <SearchPage/> ) : (
            <button 
              onClick={() => {setBackToSearchPageClicked(true);  setHideConnectionSelect(true); props.onGoBack(); } }
            >
              {" "}
              Zurück zur Suche{" "}
            </button>
        ))}
    </div>
  );
};

export default ConnectionSelect;
