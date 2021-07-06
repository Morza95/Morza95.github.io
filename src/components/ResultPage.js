import './Style.css';

const ResultPage = (props) => {

    return(
        <div>
            <p>{props.departureStop}</p>
            <p>{props.destinationStop}</p>
            <p>{props.departureDay}</p>
            <p>{props.departureTime}</p>
        </div>
    )
};

export default ResultPage;