import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  //const [clicked, setClicked] = useState(false); // Click useState

  return (
    <button
      className={classes.button} // Styling mit Button.module.css
      type={props.type || "button"} // der Typ ist Standard Button, oder das Angegebene
      onClick={props.onClick} // props.children - welcher Text auch immer
    >
      {props.children}
    </button>
  );
};

export default Button;
