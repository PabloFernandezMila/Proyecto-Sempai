import { useState } from "react";
import "../../assets/styles/general/header.css" 






export function Header() {

    let [isSearchExpanded, setSearch] = useState(false);

       
    

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
            <form className={isSearchExpanded ? "search js-search-form js-expanded" :"search js-search-form"} autoComplete="off" onClick={() => setSearch(true)}>
                <div className="search-button js-search-button" tabIndex="0">
                    <div className="search-button-image"></div>
                </div>
                <div className="search-field roboto-white">
                    <input autoFocus  id="search-text" type="text" placeholder="Title, author or genres" className="roboto-white js-search-input" maxLength="35" style={isSearchExpanded ? {display:"initial"} : {display:"none"}}/></div>
            </form>
            </div>
    </header>);
}



