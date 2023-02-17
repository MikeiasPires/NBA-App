import React from "react";
import Header from "../Components/Header/Header";
import Trae from "../assets/Favorite/TraeYung.svg";
import Hawks from "../assets/Favorite/Hawks.svg";
import { useTime } from "../Context/MyContext";
import '../PageFavorite/index.css'

interface oneTime{
  city:string;
  abbreviation:string
  conference:string
  division:string
  name:string;
  full_name:string;
}

const Favorite = ({}) => {
  const { getTime, setGetTime } = useTime();

  const arra = Object.values(getTime);
 
  console.log(arra)

return (
  <>
  <Header />
    { arra.length <= 1 ? <>
    </> : 
    <div className="ContainerBox"  >
    <div className="MotinContainer">
      <div className="Descriptions">
        <div className="nada">
          <div className="HawksLogo">
            <img src={Hawks} />
          </div>
        </div>
        <div className="TitleContainer">
          <h1> {arra[5]}</h1>
        </div>
        <span>city: {arra[2]}</span>
        <span>abreviation: {arra[1]}</span>
        <span>conference: {arra[3]}</span>
        <span>division: {arra[4]}</span>
      </div>
      <div className="MotionsPlayers">
        <div className="CenterItens">
          <div id="Bar"></div>
          <label>Trae Young</label>
          <img src={Trae} width="110px" />
        </div>
      </div>
    </div>
  </div>  }
  </>
)
}

export default Favorite;
