
import { useState } from 'react';
import SearchPage from './SearchPage.js';
import './Style.css'; 

const StartPage = () => {
const [clicked, setClicked] = useState(false);

return(
     <div>
        {clicked? <SearchPage/>: <button disabled={clicked} onClick={() => setClicked(true)} > Nav2Gö </button> }
     </div>
    )

};


export default StartPage;