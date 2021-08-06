import { useState } from "react";
import Startseite from "./StartPage.js";
import "../Style.css";

const StartButtonPage = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="containerStartButtonPage">
      {clicked ? (
        <Startseite />
      ) : (
        <div>
          <p id="UseCaseDescribtion">
          
            <br></br>
                 Bitte testen Sie nun App-Version 2.
            {/* <br></br> im Rahmen unserer Forschungsarbeit an der
            Georg-August-Universität Göttingen beschäftigen wir uns mit dem
            Thema "Designing apps: A comparative evaluation of the importance of
            functionality, performance and visual appeal" und bitten Sie, zwei
            Web-Apps zu testen und an einer Befragung teilzunehmen. Die
            Teilnahme dauert insgesamt ca. 5-10 Minuten.
            <br></br>
            <br></br> Bitte lesen Sie die Beschreibung in den Apps sorgfältig
            durch.
            <br></br>
            <br></br> Vielen Dank für die Teilnahme!
            <br></br>
            <br></br> Bei Fragen und Anmerkungen zu dieser Studie wenden Sie
            sich gerne an:
            <br></br>
            <br></br>franz.buschendorf@stud.uni-goettingen.de
            <br></br>katharina.girndt@stud.uni-goettingen.de
            <br></br>kai.hoering@stud.uni-goettingen.de */}
            <br></br>
            <br></br>
          </p>
          <button
            id="welcomeTextButton"
            disabled={clicked}
            onClick={() => setClicked(true)}
          >
            {" "}
            Start Nav2Gö{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default StartButtonPage;
