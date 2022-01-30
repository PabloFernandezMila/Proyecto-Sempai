import { useState } from "react";
import "../../assets/styles/general/header.css" 

export function Header() {

    //This state is used to trigger the display of the search field when the search icon is clicked
    let [isSearchExpanded, setSearch] = useState(false);   

//This function is used to close the search are when the area is expanded and the user press escape key
    function pressScapeToCloseSearch(e){
        var key = e.key;
      if(key === "Escape" && isSearchExpanded ) setSearch(!isSearchExpanded);
    }

    //This function is used to expand the search are when the area focused and the user press space bar key
    function pressTabToExpandSearch(e){
        var key = e.key;
        console.log(key);
        if(key === " " && !isSearchExpanded)
            e.preventDefault();
            setSearch(!isSearchExpanded)
    }

    return (    <header>
        <div className="burger-wrapper">
            <div id="burger-menu" className="js-burger-menu">
                <div id="burger-menu-icon"></div>
            </div>
        </div>
        <div id="logo-wrapper">
            <a target="_self" id="logo" href="index.html" className="roboto-white">Bookshelf</a>
        </div>
        <nav>
            <ul>
                <li className="nav_bar-elements active">
                    <a target="_self" href="index.html" className="roboto-white">Home</a>
                </li>
                <li className="nav_bar-elements inactive">
                    <a target="_self" href="catalog.html" className="roboto-white">Catalog</a>
                </li>
                <li className="nav_bar-elements inactive">
                    <a target="_self" href="login.html" className="roboto-white">Login</a>
                </li>
                <li className="nav_bar-elements inactive">
                    <a target="_self" href="about.html" className="roboto-white">About</a>
                </li>
            </ul>
        </nav>

        <div id="search-login">
            {/* The scripts checks if the search was expanded, if true adds a class, if not the class is removed. This allows the system to expand or collapse the search area*/}
            <form className={isSearchExpanded ? "search js-search-form js-expanded" :"search js-search-form"} autoComplete="off" >
                {/* When the search button is clicked the isSearchExpanded variable changes its value to trigger the behaviors mentioned above */}
                <div className="search-button js-search-button" tabIndex="0" onClick={() => setSearch(!isSearchExpanded)} onKeyDown={(e)=> pressTabToExpandSearch(e)} >
                    <div className="search-button-image" ></div>
                </div>
                <div className="search-field roboto-white">
                    {/* ref was added to allow the system to focus the input field when it is expanded. Also the style is changed when the search icon is clicked*/}
                    <input ref={input => input && input.focus()}  id="search-text" type="text" placeholder="Title, author or genres" className="roboto-white js-search-input" maxLength="35" style={isSearchExpanded ? {display:"initial"} : {display:"none"}} onKeyDown={(e) => pressScapeToCloseSearch(e)} /></div>
            </form>
            </div>
    </header>);
}



