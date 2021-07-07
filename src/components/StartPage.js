
import { useState } from 'react';
import Startseite from './Startseite.js';
import '../Style.css'; 
import classes from './UI/Button.module.css'

const StartPage = () => {
const [clicked, setClicked] = useState(false);

return(
     <div>
        {clicked? <Startseite/>: <button className={classes.button} disabled={clicked} onClick={() => setClicked(true)} > Nav2Gö </button> }
     </div>
    )

};


export default StartPage;