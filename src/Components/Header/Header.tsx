import React from "react";
import './index.css'
import Menu from '../../assets/li.svg'
import Logo from '../../assets/Logonba.svg'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();



 function FromHome(){
  return navigate("/");
 }

    return(
<>
<div className="Container">
  <div className="Menu">
    <img src={Menu} />
    <img src={Logo} onClick={FromHome} />
  </div>
</div>
</>
    )
}

export default Header;