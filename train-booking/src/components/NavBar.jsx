import React from "react";
import {Link} from "react-router-dom";
import trainLogo from "../assets/logo.jpg"

function NavBar(){
    return(
        <nav className="navbar">
        <div className="logo">
            <img src={trainLogo} alt="logo"/>
            
        </div>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search Trains</Link></li>
        <li><Link to="/alltrains">All Trains</Link></li>
        </ul>
        </nav>
    )
}
export default NavBar;