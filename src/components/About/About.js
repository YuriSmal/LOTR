import { render } from '@testing-library/react';
import React from 'react';
import './About.css';
import { Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import Pdf from '../../pdf/CV_Yuri_Smal.pdf'

function AboutUs(props) {
    return(
        <Route exact path="/about">
            <div className="about-container">
                <h1 className="about-title">Who we are?</h1>
                <div className="about-dude-wrapper">
                    <div className="about-dude about-yurii yurii_left">
                        <div className="about-dude-img about-dude-img-yurii"></div>
                        <div className="about-dude-info">
                            <h2 className="about-dude-name">Yurii Smal'</h2>
                            {/* <p className="about-dude-about-text">Doter</p> */}
                            <div className="about-dude-social-container">
                                <a className="about-dude-social-wrapper about-dude-social-btn" href="https://www.linkedin.com/in/yurii-smal-74570319a/" target="_blank">
                                    <FontAwesomeIcon className="about-fa-icon" icon={faLinkedin}/>
                                    <p>Linkedin</p>
                                </a>
                                <a className="about-dude-social-wrapper about-dude-social-btn" target="_blank" href={Pdf}>
                                    <FontAwesomeIcon className="about-fa-icon" icon={faFile}/>My CV
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="about-dude about-vito vito_right">
                        <div className="about-dude-img about-dude-img-vito"></div>
                        <div className="about-dude-info">
                            <h2 className="about-dude-name">Vitalii Yakovyshyn</h2>
                            {/* <p className="about-dude-about-text">Doter</p> */}
                            <div className="about-dude-social-container">
                                <a className="about-dude-social-wrapper about-dude-social-btn" href="https://www.linkedin.com/in/yurii-smal-74570319a/" target="_blank">
                                    <FontAwesomeIcon className="about-fa-icon" icon={faLinkedin}/>
                                    <p>Linkedin</p>
                                </a>
                                <a className="about-dude-social-wrapper about-dude-social-btn" target="_blank" href={Pdf}>
                                        <FontAwesomeIcon className="about-fa-icon" icon={faFile}/>My CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default AboutUs