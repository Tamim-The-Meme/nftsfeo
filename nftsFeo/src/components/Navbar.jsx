import React from "react"
import searchIcon from "../images/search_icon.png"


export default function Navbar(){
  
  return(<nav className="navigation-bar">
        <div className="hamburger-menu">
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
        </div>
        <h1 className="main-name">NFT'S FEO</h1>
        <div className="navbar-options">
            <p className="navbar-active">Home<i class="arrow down arrow-active"></i></p>
            <p className="navbar-inactive">Explore<i class="arrow down"></i></p>
            <p className="navbar-inactive">Activity<i class="arrow down"></i></p>
            <p className="navbar-inactive">Community<i class="arrow down"></i></p>
            <p className="navbar-inactive">Pages<i class="arrow down"></i></p>
            <p className="navbar-inactive">Contact<i class="arrow down"></i></p>
        </div>
        <div className ="navbar-extra"> 
            <img className= "search-logo" src={searchIcon} alt="Search Icon" />
            <button className="navbar-wallet">Wallet Connect</button>
        </div>
    </nav>
) 
}
