import React from "react";
import { NavLink, Link } from "react-router-dom";
import './header.css'

function Header() {

      return(
        <div className="nav">
          <div className="nav-logo">Ev-Olution</div>
            <ul className="list">
               <li>Home</li>
               <li>Expolar</li>
               <li>About</li>
               <li className="contact">Contact</li>
            </ul>
       </div>
      )
}

export default Header