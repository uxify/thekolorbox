import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <div className="container">
                <div className="logobox">
                    <a href="/">
                        <img src="images/logo_full.png" />
                    </a>
                </div>
                <div className="headerBox">
                    <div className="topHeader">
                        <div className="search topHeaderIcon">
                            <img src="images/search.png" />
                        </div>
                        <div className="addCart topHeaderIcon">
                            <img src="images/cart.png" />
                        </div>
                    </div>
                    <div className="menuIconBox">
                        <div className="menuIcon" id="menuIcon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="menuBox" className="menuBox">
                        <div className="menuWrap">
                            <div className="menuClose" id="menuClose">x</div>
                            <div className="menuList" id="menuList">
                                <Link to="/about" className="listWrap">About</Link>
                                <Link to="/artists" className="listWrap">Artist</Link>
                                <Link to="/" className="listWrap">Buy Art</Link>
                                <Link to="/" className="listWrap">Exhibitions</Link>
                                <Link to="/" className="listWrap">Media</Link>
                                <Link to="/" className="listWrap">Art Trips</Link>
                                <a href="#contact" className="listWrap">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header