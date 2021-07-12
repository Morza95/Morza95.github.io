import React, { useState } from "react";
import "../Style.css";
import Logo from "./Logo.js";
import SearchPage from "./SearchPage";

const StartPage = (props) => {
  // ClickHandler
  const [hideStartForm, setStartForm] = useState(false);
  const [callSearchPage, setCallSearchPage] = useState(false);

  const continueClickedHandler = () => {
    setCallSearchPage(true);
  };

  return (
    //Import von classes Styling - dem css Modul
    <div>
      {hideStartForm ? null : (
        <form>
          <header className="StartPage-header">
            <h1 className="logo">Nav2Gö</h1>
            <div id="welcomeText">
              <p> Willkommen! </p>
              <p> Das ist eine App für ein Projektstudium. </p>
              <p>
                Hier folgt ein Text für die Beschreibung der Forschung und des
                Anwendungsfalls, was noch eingefügt wird! Wenn die Teilnehmer
                den Text gelesen haben, können Sie mit einem Klick auf den
                button den Test beginnen!
              </p>
            </div>
          </header>

          {callSearchPage ? (
            <SearchPage onGoBack={() => setCallSearchPage(false)} />
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
        </form>
      )}
    </div>
  );
};

export default StartPage;
