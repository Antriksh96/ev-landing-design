import React from "react";
import { NavLink, Link } from "react-router-dom";
import './header.css'

function Header() {

      return(
        <div className="nav">
          <div className="nav-logo">Ev-Olution</div>
            <ul className="list">
               <li className="headertxt">Home</li>
               <li className="headertxt">Expolar</li>
               <li className="headertxt">About</li>
               <li className="contact headertxt">Contact</li>
            </ul>
       </div>
      )
}

export default Header