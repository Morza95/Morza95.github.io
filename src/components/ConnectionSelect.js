import { useState, useEffect } from "react";
import ConnectionDisplay from "./ConnectionDisplay";
import SearchPage from "./SearchPage";
import { FaBus } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { GiKickScooter } from "react-icons/gi";


const durations = () => {
  let slowH, slowMin, fastH, fastMin = 0;
  let t1 = Math.floor(Math.random() * (105 - 25 + 1)) + 25;
  let t2=  Math.floor(Math.random() * (105 - 25 + 1)) + 25;
  if (t1==t2) { t1= Number(t1)-1}
  if(t2>=t1){
    if(t1>=60){fastH=1; fastMin = t1-60;}else{fastH=0; fastMin = t1;}
    if(t2>=60){slowH=1; slowMin = t2-60;}else{slowH=0; slowMin = t2;}
  }
  if(t1>t2){
    if(t2>=60){fastH=1; fastMin = t2-60;}else{fastH=0; fastMin = t2;}
    if(t1>=60){slowH=1; slowMin = t1-60;}else{slowH=0; slowMin = t1;}
  }
  // console.log(slowH, slowMin, fastH, fastMin);
  return [slowH, slowMin, fastH, fastMin];
}

// const slowH = displayedDurations.slowH;
// const slowMin = displayedDurations.slowMin;
// const fastH = displayedDurations.fastH;
// const  fastMin = displayedDurations.fastMin;
// console.log("slowH = " + slowH );
// console.log("slowMin = " + slowMin );
// console.log("fastH = " + fastH );
// console.log("fastMin = " + fastMin );

const ConnectionSelect = (props) => {
  const [cheaperConnectionStarted , setCheaperConnectionStarted] = useState(false);
  const [fasterConnectionStarted, setFasterConnectionStarted] = useState(false);
  const [backToSearchPageClicked , setBackToSearchPageClicked] = useState(false);
  const [hideConnectionSelect, setHideConnectionSelect] = useState(true);
  const [upperButtonFirstPressed, setUpperButtonFirstPressed] = useState(false);
  const [lowerButtonFirstPressed, setLowerButtonFirstPressed] = useState(false);
   const[displayedDurations, setDisplayedDurations] = useState(durations());
  const [additionalRandomMinutes, setAdditionalRandomMinutes] = useState( Number(Math.round(Math.random() * (9 - 3)) + 3 ) ); 
  const [loadingMessage, setloadingMessage] = useState(true);

  const backClickHandler = () => {
    props.onGoBack();
  };

  let FahrtkostenGuenstig = 1;

  // let durationHour = 0.5;
  // let durationMin = 10;
  // let durationCheapHour = 0;
  // let durationCheapMin = 15;
  // Dauer Schnell

// zwei Zufällige Fahrtdauern bestehend aus h und min ausgeben, wobei die erste die Kürzere ist

 // const fastDuration = '&{fastH}${:}${fastMin}';
 // const slowDuration = '&{slowH}${:}${slowMin}';

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
    Fahrtkosten = (Fahrtkosten+(Math.random()*5));
    FahrtkostenGuenstig = Fahrtkosten;
    return (Math.round(FahrtkostenGuenstig));
  }
 console.log("daparture day." + props.departureDay.toString());

 // ------------------------------- FÜR DIE VERZÖGERUNG---------------------------------------------------------------
 useEffect(() => {
  const timer = setTimeout(() => {
 setHideConnectionSelect(false);
 setloadingMessage(false);
  }, 1000);
  return () => clearTimeout(timer);
}, []);


 var newDate = new Date( (props.departureDay) + 1 * 86400000 );
 newDate.setDate(Number(newDate.getDate()) + 1);
 console.log("newdate." + newDate);


  return (
    <div> 
      <form>
        {hideConnectionSelect? (loadingMessage? <p>...loading...</p> : null)  : ( 
          <div>   
            <h1 className="logo">Nav2Gö</h1>
            <h1>Verbindungsauswahl</h1>
            <div className="connectionChoice">
            {/* {timeMinRandomizer(durationMin)};
                {timeHourRandomizer(durationHour)}
                {timeMinCheapRandomizer(durationCheapMin)};
                {timeHourCheapRandomizer(durationHour)}; */}
              <h2>Günstigste Verbindung</h2>
              <div id="containerFastestConnection">
                <div className="verbindung-textfeld">
                    Fahrtkosten: { (Fahrtkostenrechner(FahrtkostenGuenstig))} .00 € </div>
                <div className="verbindung-textfeld">Dauer:  {displayedDurations[0]} h {displayedDurations[1]} min</div>
                <div className="verbindung-textfeld">Umstiege: 1</div>
                <div className="umstiegIcons">
                <FaBus size="3rem" color="white" />
                <BsArrowRight size="3rem" color="white" />
                <FaBus size="3rem" color="white" />
              </div>
              </div>
            </div>
          </div>)
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
            durationH = {displayedDurations[0]}
            durationMin = {displayedDurations[1]}
            additionalRandomMinutes= { additionalRandomMinutes}
            onGoBack = {()=>
              {setHideConnectionSelect(false);
              setFasterConnectionStarted(false); 
              setCheaperConnectionStarted(false);
              setUpperButtonFirstPressed(false);
              setLowerButtonFirstPressed(false);}
          }
            /> 
            ) : ( lowerButtonFirstPressed? null : (loadingMessage? null : 
              <div className="connectionChoice containerConnectionButton">
                <button
                className="button-select"
                 onClick={() => {
                  setFasterConnectionStarted(true); 
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
            <div className="verbindung-textfeld">Dauer: {displayedDurations[2]} h {displayedDurations[3]} min </div>
            <div className="verbindung-textfeld">Umstiege: 2</div>
            <div className="umstiegIcons">
              <FaBus size="3rem" color="white" />
                <BsArrowRight size="3rem" color="white" />
                <GiKickScooter size="3rem" color="white" />
                <BsArrowRight size="3rem" color="white" />
                <FaBus size="3rem" color="white" />
            </div>
          </div>
        </div> )
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
            durationH = {displayedDurations[2]}
            durationMin = {displayedDurations[3]}
            additionalRandomMinutes= {additionalRandomMinutes}
            onGoBack = {()=>
              {setHideConnectionSelect(false);
                setFasterConnectionStarted(false); 
                setCheaperConnectionStarted(false);
              setUpperButtonFirstPressed(false);
              setLowerButtonFirstPressed(false);}
          }
            />
            ) : ( upperButtonFirstPressed? null :  (loadingMessage? null : 
            <div className="connectionChoice containerConnectionButton">
              
                <button
                className="button-select"
                 onClick={() => { 
                    setCheaperConnectionStarted(true);  
                    setLowerButtonFirstPressed(true);
                    setHideConnectionSelect(true); }} >
                  {" "}
                  Route starten{" "}
                </button>
              
            </div>))
        }
        {hideConnectionSelect? null : (
          backToSearchPageClicked ? ( <SearchPage/> ) : (
            <button 
            className="backToSearchButton"
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
