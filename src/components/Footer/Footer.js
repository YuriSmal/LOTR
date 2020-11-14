import React from 'react';
import './Footer.css';

function Footer() {

    return (
        <div className="Footer">
            <div className="Footer_container">
                <div className="Footer_links">
                <a className="Footer_link" scr="#">Home</a>
                <a className="Footer_link" scr="#">About us</a>
                <a className="Footer_link" scr="#">API</a>
                </div>
                <div className="Footer_copyright">
                    <p className="Footer_copyright_text" >MADE WITH LOVE BY VY</p>
                    <p className="Footer_copyright_text">2020</p>
                </div>
            </div>
        </div>
    );
}


export default Footer;