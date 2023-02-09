import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import "./index.css";
import Trae from "../../assets/Favorite/TraeYung.svg";
import Hawks from "../../assets/Favorite/Hawks.svg";

const NbaTimes = () => {

  const [capture, setCapture] = useState([])
  const [time, setTime] = useState([])
 
console.log(capture)

function SelectContainer (){

}


function ArmazenTime (){

}


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd5b74fc276mshfd475c76d58a05cp135449jsnfcec87079cf2',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };
  
  useEffect(()=> {  fetch('https://free-nba.p.rapidapi.com/teams?page=0', options)
  .then(response => response.json())
  .then(response => setTime(response.data))
  .catch(err => console.error(err));
},[])
 

  return (
    <>
      <Header />
      <div className="Title">
        <span>Selecione seu time </span>
        <span>preferido ?</span>
      </div>
      <div>
      {time.map((cap)=> <div className="ContainerBox" onClick={SelectContainer} >
          <div>
            <img src="" alt="" />
          </div>
          <div className="MotinContainer">
            <div className="Descriptions">
              <div className="nada">
                <div className="HawksLogo">
                  <img src={Hawks} />
                </div>
              </div>
              <div className="TitleContainer">
                <h1>{cap.full_name}</h1>
              </div>
              <span>city: {cap.city}</span>
              <span>abreviation: {cap.abbreviation}</span>
              <span>conference: {cap.conference}</span>
              <span>division: {cap.division}</span>
            </div>
            <div className="MotionsPlayers">
              <div className="CenterItens">
                <div id="Bar"></div>
                <label>Trae Young</label>
                <img src={Trae} width="110px" />
              </div>
            </div>
          </div>
        </div>)} 
        <div className="Button">
          <button type="button" onClick={ArmazenTime}>
            Salve seu Time
            </button>
        </div>
      </div>
    </>
  );
};

export default NbaTimes;
