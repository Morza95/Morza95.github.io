import React, { useState } from "react";
import "../Style.css";
import Logo from "./Logo.js";
import SearchPage from "./SearchPage";

const StartPage = (props) => {
  // ClickHandler
  const [hideStartForm, setStartFormHidden] = useState(false);
  const [callSearchPage, setCallSearchPage] = useState(false);
  const [hideIntroSentences, setHideIntroSentences] = useState(false);

  const continueClickedHandler = () => {
    setCallSearchPage(true);
    setHideIntroSentences(true);
  };

  return (
    //Import von classes Styling - dem css Modul
    <div>
      {hideStartForm ? null : (
        <form>
          <header className="StartPage-header">
            <h1 className="logo">Nav2Gö</h1>
            <div id="welcomeText">
              <p>
                {hideIntroSentences?null:
                <>
                <br></br>
                Wilkommen. <br></br>
                Nutzen sie diese App um sich in folgender Situation
                weiterzuhelfen:
                <br></br>
                <br></br>Sie haben sich dazu entschieden, Ihre Freunde in
                Göttingen zu besuchen. Angekommen am Hauptbahnhof Göttingen 
                wollen Sie die öffentlichen Verkehrsmittel nutzen, um zu Ihnen
                weiterfahren.
                <br></br>
                <br></br>
                Ihre Freunde haben Ihnen bereits mitgeteilt, dass Sie an der
                Haltestelle "Treuenhagen" wohnen. Da sie Ihre Freunde nun
                unglücklicherweise nicht mehr erreichen können, haben Sie sich
                die lokale Mobilitäts-App „Nav2Gö“ heruntergeladen, um sich vor
                Ort zurechtzufinden. <br></br> <br></br>
                </>}
                Nutzen Sie für die Verbindungssuche vom Hauptbahnhof nach Treuenhagen das aktuelle
                Datum und die aktuelle Uhrzeit.
                <br></br>
              </p>
            </div>
            <h1 id="appVersionAnzeige1" >App-Version 1</h1>
          </header>
          </form>
          )}

          {callSearchPage ? (
            <SearchPage onGoBack={() => {setCallSearchPage(false); setHideIntroSentences(false);}} onSetStartFormHidden ={setStartFormHidden} />
          ) : (
            <button
              id="welcomeTextButton"
              onClick={continueClickedHandler}
              type="submit"
            >
              Weiter
            </button>
          )}
          {/* {clicked ? ( <SearchPage /> ) : (
            <button className='button' onClick={()=> {continueClickedHandler(); setHideStartDisplay(true);  }} type="submit">
              Weiter
            </button>)
          } */}
    </div>
  );
};

export default StartPage;