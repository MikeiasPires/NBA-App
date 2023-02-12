import React from "react";
import Header from "../Components/Header/Header";
import Trae from "../assets/Favorite/TraeYung.svg";
import Hawks from "../assets/Favorite/Hawks.svg";
import { useTime } from "../Context/MyContext";


interface oneTime{
  city:string;
  abbreviation:string
  conference:string
  division:string
  name:string;
  full_name:string;
}

const Favorite = ({}) => {
  const { getTime } = useTime();

  console.log(getTime);

return (
  <>
  <Header />
  {getTime.map((gettim : oneTime) => 
      <div className="ContainerBox" key={gettim.name}>
      <div className="MotinContainer">
        <div className="Descriptions">
          <div className="nada">
            <div className="HawksLogo">
              <img src={Hawks} />
            </div>
          </div>
          <div className="TitleContainer">
            <h1>{gettim.full_name}</h1>
          </div>
          <span>city:{gettim.city}</span>
          <span>abreviation:{gettim.abbreviation}</span>
          <span>conference:{gettim.conference}</span>
          <span>division:{gettim.division}</span>
        </div>
        <div className="MotionsPlayers">
          <div className="CenterItens">
            <div id="Bar"></div>
            <label>Trae Young</label>
            <img src={Trae} width="110px" />
          </div>
        </div>
      </div>
    </div>
    )
  }
  </>
)
}

export default Favorite;
