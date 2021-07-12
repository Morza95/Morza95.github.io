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
        <button disabled={clicked} onClick={() => setClicked(true)}>
          {" "}
          Start Nav2Gö{" "}
        </button>
      )}
    </div>
  );
};

export default StartButtonPage;
