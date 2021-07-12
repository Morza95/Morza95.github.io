import React from "react";
// import Card from './Card';
// import Button from './Button';
//import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
      <div>
          <div  onClick={props.onConfirm} />  
          {/* backdrop meint auf den Hintergrund klicken */}
    <div >
      <header >
      <h2>{props.title}</h2>
      </header>
      <div >
          <p>{props.message}</p>
      </div>
      <footer >
        <button onClick={props.onConfirm}>Okay</button>
      </footer>
    </div>
    </div>
  );
};

export default ErrorModal;

