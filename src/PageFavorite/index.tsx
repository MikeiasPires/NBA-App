import React from "react";
import Header from "../Components/Header/Header";
import Trae from "../assets/Favorite/TraeYung.svg";
import Hawks from "../assets/Favorite/Hawks.svg";




const Favorite = () => {
    return(

       <>
            <Header />
       <div className="ContainerBox"  >
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
                <h1></h1>
              </div>
              <span>city:</span>
              <span>abreviation: </span>
              <span>conference:</span>
              <span>division: </span>
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
        </>
    );
};

export default Favorite;