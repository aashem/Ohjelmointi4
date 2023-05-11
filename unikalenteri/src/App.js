import { useState } from 'react';
import './App.css';
import very_happy from "./kuvat/very-happy.png";
import happy from "./kuvat/happy.png";
import neutral from "./kuvat/neutral.png";
import sad from "./kuvat/sad.png";
import very_sad from "./kuvat/very-sad.png";



function App() {
  //Tilat
  const [popup, setPopup] = useState(false)
  const [painettu, setPainettu] = useState(true)
  const [tapahtuma, setTapahtuma] = useState("")
  const [lajiNäkyvyys, setLajiNäkyvyys] = useState("true")
  const [laji, setLaji] = useState("")
  const [tyyppi, setTyyppi] = useState("")
  const [kelloAlku, setKelloAlku] = useState("")
  const [kelloLoppu, setKelloLoppu] = useState("")

  //funtkio joka ohjaa näppäimen toimintaa
  //Toglettaa visibility "visible" tai "hidden"
  const lisäyshandler = (e) => {
    popup ? setPopup(false) : setPopup(true)
  }

  const valintaboxihandler = (e) => {
    setTapahtuma(e.target.value)
    if (e.target.value === "Uni") {
      setLajiNäkyvyys(false)
    }else{
      setLajiNäkyvyys(true)
    }
  }

  const lajihändler = (e) => {
    setLaji(e.target.value)
  }

  const kellohändleralku = (e) => {
    setKelloAlku(e.target.value)
  }
  const kellohändlerloppu = (e) => {
    setKelloLoppu(e.target.value)
  }

  return (
    <div>
        <header className="Otsikko">UNIKALENTERI</header>
      <div className = "Pääruutu"><h1>Pääruutu</h1>
        <div className = "Lisäysikkuna" style = {{visibility: popup ? "visible" : "hidden"}}>
          <h1>
            LISÄYSIKKUNA
            <button className="Ikkunanraksi" onClick={lisäyshandler}>X</button>
          </h1>
          <h2>
            Tapahtuma:
          </h2>
          <select className = "Valintaboxi" onChange={valintaboxihandler}>
            <option value="Urheilu">Urheilu</option>
            <option value="Uni">Uni</option>
          </select>  
          <div className= "Lajikenttä" style ={{visibility: lajiNäkyvyys && popup ? "visible" : "hidden"}}>
            <h2>
              Tyyppi:
            </h2>
            <form>
              <input className = "Lajikenttä" onChange = {lajihändler}></input>
            </form>  
          </div>
          <div className = "Kello" >
            <h2>Alku:</h2>
            <input onChange = {kellohändleralku} type="time" min="00:00" max="24:00" required></input>
            <h2>Loppu:</h2>
            <input  onChange = {kellohändlerloppu} type="time" min="00:00" max="24:00" required></input>
          <h2>Fiilis:</h2>
          <div className = "Hymynaamat">
            <img src={very_sad} alt="Todella surullinen"></img>
            <img src={sad} alt="Surullinen"></img>
            <img src={neutral} alt="Neutraali"></img>
            <img src={happy} alt="Iloinen"></img>
            <img src={very_happy} alt="Todella iloinen"></img>
          </div>
          <button >
            Lähetä
          </button>
          </div>
        </div>
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
