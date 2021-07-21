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
            Sehr geehrte(r) Teilnehmer(in),
            <br></br> 
            <br></br> im Rahmen unserer
            Forschungsarbeit an der Georg-August-Universität Göttingen
            beschäftigen wir uns mit dem Thema "Designing apps: A comparative evaluation of the importance of functionality, performance and visual appeal" und bitten
            Sie zwei Web-Apps zu testen und an einer Befragung teilzunehmen. Die
            Teilnahme dauert insgesamt ca. 5-10 Minuten.
            <br></br>
             <br></br>  Alle Angaben
            werden selbstverständlich anonymisiert und vertraulich behandelt.
            Die Daten werden ausschließlich zu wissenschaftlichen
            Forschungszwecken verarbeitet und gespeichert. Eine Weitergabe an
            Dritte ist ausgeschlossen. 
            <br></br>
             <br></br> Bitte lesen Sie die Beschreibung
            in den Apps und die Fragen des Fragebogens sorgfältig durch und
            beantworten Sie diese möglichst spontan, damit eine höhere
            Aussagekraft gewährleistet ist. Es gibt keine richtigen oder
            falschen Antworten. Kreuzen Sie deshalb bitte jeweils die Antwort
            an, die am ehesten Ihrer Meinung entspricht.
            <br></br>
            <br></br>   Vielen Dank
            für die Teilnahme! 
            <br></br>
            <br></br>  Bei Fragen und Anmerkungen zu dieser
            Studie wenden Sie sich gerne an:
            <br></br> 
            <br></br>franz.buschendorf@stud.uni-goettingen.de
            <br></br>katharina.girndt@stud.uni-goetinngen.de
            <br></br>kai.hoering@stud.uni-goettingen.de{" "}
          </p>
          <button
            class="buttonStartButton"
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
