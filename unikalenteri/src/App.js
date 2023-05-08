import { useState } from 'react';
import './App.css';





function App() {
  
  /*
  Pää funktio App()
  */

  //tilakoneet true, false
  const [popup, setPopup] = useState(false)
  const [painettu, setPainettu] = useState(true)

  //funtkio joka ohjaa näppäimen toimintaa
  const lisäyshandler = (e) => {
    // muuttaa popupista true tai false jos se on true tai false, toglettaa onko visible vai hidden rivillä 35
   popup ? setPopup(false) : setPopup(true)
  }
  return (
    <div>
        <header className="Otsikko">UNIKALENTERI</header>
      <div className = "Pääruutu"><h1>Pääruutu</h1>
      <div className = "Lisäysikkuna" style = {{visibility: popup ? "visible" : "hidden"}}>POPUP</div>
        <div className = "Kalenteri"><h1>Kalenteri</h1></div>
        <div className = "Infopaneeli">
          <h1>
          Infopaneeli
          </h1>
        </div>
        <div>
          <button className = "Lisää" onClick={lisäyshandler} style ={{visibility: painettu ? "visible" : "hidden"}}>
            Lisää
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
