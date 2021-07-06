import { useState } from 'react';
import ResultPage from './ResultPage.js';
import './Style.css';

const SearchPage = () => {
    const [departureStop, setDepartureStop] = useState("");
    const [destinationStop , setDestinationStop] = useState("");
    const [departureDay, setDepartureDay] = useState("");
    const [departureTime, setDepartureTime] = useState("");
    const [searchClicked, setSearchClicked] = useState(false);

    const departureChangeHandler = (event) => {
        setDepartureStop(event.target.value)
    }

    const changeStopHandler = () => {
            let a = departureStop;
            setDepartureStop(destinationStop);
            setDestinationStop(a);
        }

    const destinationStopHandler = (event) => {
        setDestinationStop(event.target.value)
    }
    const departureDayHandler = (event) => {
        setDepartureDay(event.target.value)
    }    
    const departureTimeHandler = (event) => {
        setDepartureTime(event.target.value)
    } 
    const searchClickedHandler = () => {
        setSearchClicked(true)
    }

    return(
     <div>
            <input type='text' value={departureStop} onChange={departureChangeHandler} />
            <button   onClick={changeStopHandler}>tauschen</button>
            <input  type ='text' value = {destinationStop} onChange = {destinationStopHandler}/>
            <input   type = 'date' value = {departureDay} onChange = {departureDayHandler }/>
            <input   type = 'time' value = {departureTime} onChange = {departureTimeHandler }/>
            <button  onClick={searchClickedHandler}>Suchen</button>
            {searchClicked? <ResultPage 
                departureStop={departureStop} 
                destinationStop={destinationStop}
                departureDay= {departureDay}
                departureTime={departureTime}
                /> : null}
    </div>
    );
}

export default SearchPage;