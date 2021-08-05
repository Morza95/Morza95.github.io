import React from "react";
// import Card from './Card';
import "../../Style.css";
// import Button from './Button';
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className="ErrorPage">
      {/* <div className={classes.backdrop} onClick={props.onConfirm} />   Hier müsste noch eine Card oder Form drüber gelegegt werden*/}
      {/* backdrop meint auf den Hintergrund klicken */}
      <div className="ErrorPageTitle">
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onConfirm}>Zurück zur Suche</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
