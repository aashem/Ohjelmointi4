import './App.css';

function Lisää_tapahtuma(){
  alert("TÄHÄN SE RUUTU MISSÄ VOI LISÄTÄ TAPAHTUMAN")
}


function App() {
  return (
    <div>
        <header className="Otsikko">UNIKALENTERI</header>
      <div className = "Pääruutu"><h1>Pääruutu</h1>
        <div className = "Kalenteri"><h1>Kalenteri</h1></div>
        <div className = "Infopaneeli">
          <h1>
          Infopaneeli
          </h1>
        </div>
        <div>
          <button className = "Lisää" onClick={Lisää_tapahtuma}>
            Lisää
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
