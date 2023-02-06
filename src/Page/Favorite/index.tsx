import React from "react";
import Header from "../../Components/Header/Header";
import "../Favorite/index.css";
import Trae from "../../assets/Favorite/TraeYung.svg";
import Hawks from "../../assets/Favorite/Hawks.svg";

const Favotire = () => {
  return (
    <>
      <Header />
      <div className="Title">
        <span>Qual é o seu time </span>
        <span>preferido ?</span>
      </div>
      <div>
        <div className="ContainerBox">
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
                <h1>Atlanta Hawks</h1>
              </div>
              <span>city: Atlanta</span>
              <span>abreviation: ''ATL''</span>
              <span>conference: East</span>
                <div className="Pegar"> 
               <div className="CenterItens">
               <div className="Bar"></div>
               <span>Trae Young</span>
               <img src={Trae} width="80px" />
              </div>
              <span>division: Southeast</span>
              </div>
              </div>  
          </div>
        </div>
      </div>
    </>
  );
};

export default Favotire;
