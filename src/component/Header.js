import { useState, useEffect } from "react";

import Logo from "./assets/logo192.png";
function Header() {

  const [showHeader, setshowHeader] = useState(false);

useEffect(() =>{
  window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        setshowHeader(true)
    }else{
      setshowHeader(false);
    }
   
  })
})

    return (
        <div>
            <div>
                {/*  bottom Header */}
                <nav className={showHeader && "nav_bg" }>
                  <a href="" className="nav-logo">Moviescene</a>
                  <a href="" className="nav-right-image"><img src={Logo} alt="smile topbar image" /></a>
                </nav>
            </div>
        </div>
    )
}

export default Header
