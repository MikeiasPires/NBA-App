import React from "react";
import './index.css'
import Menu from '../../assets/li.svg'
import Logo from '../../assets/Logonba.svg'

const Header = () => {
    return(
<>
<div className="Container">
  <div className="Menu">
    <img src={Menu} />
    <img src={Logo} />
  </div>
</div>
</>
    )
}

export default Header;