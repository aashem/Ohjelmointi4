import { useState } from 'react';
import './App.css';
import very_happy from "./kuvat/very-happy.png";
import happy from "./kuvat/happy.png";
import neutral from "./kuvat/neutral.png";
import sad from "./kuvat/sad.png";
import very_sad from "./kuvat/very-sad.png";



function App() {
  //Tilat
  const ids = ["very_sad", "sad", "neutral", "happy", "very_happy"]
  const päivät = ["ma", "ti", "ke", "to", "pe", "la", "su"]
  const [popup, setPopup] = useState(false)
  const [painettu, setPainettu] = useState(true)
  const [tapahtuma, setTapahtuma] = useState("")
  const [lajiNäkyvyys, setLajiNäkyvyys] = useState("true")
  const [laji, setLaji] = useState("")
  const [kelloAlku, setKelloAlku] = useState("")
  const [kelloLoppu, setKelloLoppu] = useState("")
  const [naama, setNaama] = useState(0)
  const [muistiinpanot, setMuistiinpanot] = useState("")
  const [nykyinenTapahtuma, setNykyinenTapahtuma] = useState("")
  const [nykyinenKelloAlku, setNykyinenKelloAlku] = useState("")
  const [nykyinenKelloLoppu, setNykyinenKelloLoppu] = useState("")
  const [nykyinenNaama, setNykyinenNaama] = useState("")
  const [nykyinenLaji, setNykyinenLaji] = useState("")
  const [nykyinenMuistiinpanot, setNykyinenMuistiinpanot] = useState("")
  const [valittuPäivä, setvalittuPäivä] = useState("")
  const Viikonpäivä = (tapahtuma,laji, alku, loppu, naama, muistiinpanot) => {return {tapahtuma: tapahtuma, laji: laji, alku:alku, loppu:loppu, naama:naama, muistiinpanot:muistiinpanot}}
  const ma = Viikonpäivä("","","","","","")
  
  const lisäyshandler = (e) => {
    popup ? setPopup(false) : setPopup(true)
  }

  const valintaboxihandler = (e) => {
    setTapahtuma(e.target.value)
    if (e.target.value === "Uni") {
      setLajiNäkyvyys(false)
      setLaji("")
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
  const kuvahändler = (e) => {
    setNaama(e.target.id)
    let lista = ids 
    for (let i = 0; i < lista.length; i++){
      document.getElementById(lista[i]).setAttribute('style', 'border-style: dotted')    
    }
    document.getElementById(e.target.id).setAttribute('style', 'border-style: solid; border-radius: 25px; border-color: green')    
  }
  const muistiinpanohändler = (e) => {
    setMuistiinpanot(e.target.value)
  }

  const lisäämerkintäkalenteriin = (e) => {
    setNykyinenTapahtuma(tapahtuma)
    setNykyinenLaji(laji)
    setNykyinenKelloAlku(kelloAlku)
    setNykyinenKelloLoppu(kelloLoppu)
    setNykyinenNaama(naama)
    setNykyinenMuistiinpanot(muistiinpanot)
    console.log(tapahtuma)
    if (valittuPäivä === "ma") {
      ma.tapahtuma = tapahtuma
      ma.laji = laji
      ma.alku = kelloAlku
      ma.loppu = kelloLoppu
      ma.naama= naama
      ma.muistiinpanot = muistiinpanot
      console.log(ma)
      return 
    }
  }
  function Viikonpäiväf(props){
    let päivä = props.päivä
    if (päivä === "ma"){
      <div className ="viikonpäivä" onClick={valitsepäivä} id={päivä}><h1>SOPFKSPDFKPSODFK</h1></div>
    }
    return <div className ="viikonpäivä" onClick={valitsepäivä} id={päivä}>{päivä}</div>
  }

  const valitsepäivä = (e) => {
    setvalittuPäivä(e.target.id)
    let lista = päivät 
    for (let i = 0; i < lista.length; i++){
      document.getElementById(lista[i]).setAttribute('style', 'border-style: solid')    
    }
    document.getElementById(e.target.id).setAttribute('style', 'border-style: solid; border-color: yellow')    
  }

  return (
    <div>
        <header className="Otsikko">UNIKALENTERI</header>
      <div className = "Pääruutu"><h1>Pääruutu</h1>
        <div className = "Lisäysikkuna" style = {{visibility: popup ? "visible" : "hidden"}}>
          <h1>
            <button className="Ikkunanraksi" onClick={lisäyshandler}>X</button>
          </h1>
          <h2>
            Tapahtuma:
          </h2>
          <select className = "Valintaboxi" id="Valintaboxi" onChange={valintaboxihandler}>
            <option value="" selected disabled hidden>Valitse tästä</option>
            <option value="Urheilu">Urheilu</option>
            <option value="Uni">Uni</option>
          </select>  
          <div className= "Lajikenttä" id ="laji" style ={{visibility: lajiNäkyvyys && popup ? "visible" : "hidden"}}>
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
            <input onChange = {kellohändlerloppu} type="time" min="00:00" max="24:00" required></input>
          </div>
          <h2>Fiilis:</h2>
          <div className = "Hymynaamat" id="Hymynaamat">
            <img src={very_sad} onClick={kuvahändler} alt="Todella surullinen" id='very_sad'></img>
            <img src={sad} onClick={kuvahändler} alt="Surullinen" id="sad"></img>
            <img src={neutral} onClick={kuvahändler} alt="Neutraali" id="neutral"></img>
            <img src={happy} onClick={kuvahändler} alt="Iloinen" id="happy"></img>
            <img src={very_happy} onClick={kuvahändler} alt="Todela iloinen" id="very_happy"></img>
          </div>
          <div className = "Tekstiboksi" id = "Tekstiboksi">
            <h2>Muistiinpanot</h2>
            <textarea onMouseLeave={muistiinpanohändler} className= "boksi"></textarea>
          </div>
          <button className = "Lisäysnäppäin" onClick = {lisäämerkintäkalenteriin}>Lisää</button>
        </div>
        <div className = "Kalenteri">
        <Viikonpäiväf  päivä="ma"></Viikonpäiväf>
        <Viikonpäiväf päivä="ti"></Viikonpäiväf>
        <Viikonpäiväf päivä="ke"></Viikonpäiväf>
        <Viikonpäiväf  päivä="to"></Viikonpäiväf>
        <Viikonpäiväf päivä="pe"></Viikonpäiväf>
        <Viikonpäiväf  päivä="la"></Viikonpäiväf>
        <Viikonpäiväf  päivä="su"></Viikonpäiväf>

        </div>
        <div className = "Infopaneeli">
          <h1>
          Info
          </h1>
          <h2>
            Tapahtuma: {nykyinenTapahtuma}
          </h2>
           <h2 style={{visibility: lajiNäkyvyys ? "visible" : "hidden"}}>
            Laji: {nykyinenLaji}
           </h2>
           <h2>
            Alku: {nykyinenKelloAlku}
           </h2>
           <h2>
            Loppu: {nykyinenKelloLoppu}
           </h2>
           <h2>
            Tunne: {naama}
           </h2>
           <h2>
            Muistiinpanot: {muistiinpanot}
           </h2>
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
