import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

    return (
        <div className="header">
            <div className = "header_container">
                <Link className="header-item-wrapper" to='/'>
                    <div className = "Logo">
                        <div className="logo_img"></div>
                        <h1 className="logo_text">Lords Of The React </h1>
                    </div>
                    
                </Link>
                <div className="header-items-container">
                   <Link className="header-item-wrapper" to="/movies">
                        <div className="header-item">Movies</div>
                    </Link>
                    <Link className="header-item-wrapper" to='/books'>
                        <div className="header-item">Books</div>
                    </Link>
                    <Link className="header-item-wrapper" to="/characters">
                        <div className="header-item">Characters</div>
                    </Link>

                </div>
            </div>
        </div>
    );
}


export default Header;

