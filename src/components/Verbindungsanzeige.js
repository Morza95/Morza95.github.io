import React from "react";
import "../../Style.css";
import Card from "./UI/Card";
import classes from './Verbindungsanzeige.module.css'
//import 'webpack';
/* import logo from '.../public/busemoji.png'

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}
 */
const Verbindungsanzeige = () => {
  return (
    <Card className={classes.input}>
    
    <form>
      {/* <Bild/> 
    <img src={require('.../public/busemoji.png')} />
        */}
      <div className="Verbindung-textfeld-links"> Abfahrt: 15:04 </div>
      <div className="Verbindung-textfeld-mitte">Linie: 50</div>
      <div className="Verbindung-textfeld-rechts">Ankunft: 15:20</div>
      
      <div className="Verbindung-textfeld-links">Haltestelle: Gartenstraße</div>
      <div className="Verbindung-textfeld-rechts">
        Haltestelle: Hauptbahnhof{" "}
      </div>
    </form>
    </Card>
  );
};

export default Verbindungsanzeige;
