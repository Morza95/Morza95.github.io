import './App.css';
import Logo from './components/Logo.js';

function App() {
    return ( 
    <div className = "App" >
        <header className = "App-header" >
        <Logo></Logo>                                           {/*Einbindung des Logos Nav2Gö*/}
        <p> Willkommen! </p>   
        <p> Das ist eine App für ein Projektstudium. </p>
        </header>         
        <p className="App-beschreibung"> Hier folgt ein Text für die Beschreibung der App</p>

    </div>

    );
}

export default App;