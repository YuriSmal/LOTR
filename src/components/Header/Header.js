import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

    return (
        <div id="Header">
            <div className = "hamburger-menu">
                <Link className="logo_wrapper" to='/'>
                    <div className = "logo_995px">
                        <div className="logo_img"></div>
                        <h1 className="logo_text">Lords Of The React </h1>
                    </div>
                </Link>
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                <span></span>
                </label>
                
                <div className="menu__box">
                   <Link className="header-item-wrapper" to="/movies">
                        <div className="menu__item">Movies</div>
                    </Link>
                    <Link className="header-item-wrapper" to='/books'>
                        <div className="menu__item">Books</div>
                    </Link>
                    <Link className="header-item-wrapper" to="/characters">
                        <div className="menu__item">Characters</div>
                    </Link>

                </div>
            </div>
        </div>
    );
}


export default Header;

