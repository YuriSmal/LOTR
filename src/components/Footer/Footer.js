import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <div className="Footer">
            <div className="Footer_container">
                <div className="Footer_links">
                <Link className="Footer_link" to="/" >Home</Link>
                <Link className="Footer_link" to="/about">About us</Link>
                <a className="Footer_link" href="https://the-one-api.dev/" target="_blank" >API</a>
                </div>
                <div className="Footer_copyright">
                    <p className="Footer_copyright_text" >MADE WITH LOVE BY YURII SMAL' & VITALII YAKOVYSHYN</p>
                    <p className="Footer_copyright_text">2020</p>
                </div>
            </div>
        </div>
    );
}


export default Footer;