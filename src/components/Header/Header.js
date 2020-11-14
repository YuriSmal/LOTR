import React from 'react';
import './Header.css';

function Header() {

    return (
        <div className="header">
            <div className = "header_container">
                <form className="header_form">
                    <button className="header_form_button">X</button>
                    <input className="header_form_input"
                        type="text"
                        placeholder="search"
                    >
                    </input>
                </form>
                <button className="header_button_back">Back</button>
            </div>
        </div>
    );
}


export default Header;