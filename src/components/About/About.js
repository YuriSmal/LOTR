import React from 'react';
import './About.css';
import { Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import PdfYurii from '../../pdf/CV_Yuri_Smal.pdf';
import PdfVitalii from '../../pdf/CV_Vitalii_Yakovyshyn.pdf';

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
                            <div className="about-dude-social-container">
                                <a className="about-dude-social-wrapper about-dude-social-btn" href="https://www.linkedin.com/in/yurii-smal-74570319a/" target="_blank">
                                    <FontAwesomeIcon className="about-fa-icon" icon={faLinkedin}/>
                                    <p>Linkedin</p>
                                </a>
                                <a className="about-dude-social-wrapper about-dude-social-btn" target="_blank" href={PdfYurii}>
                                    <FontAwesomeIcon className="about-fa-icon" icon={faFile}/>CV
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="about-dude about-vito vito_right">
                        <div className="about-dude-img about-dude-img-vito"></div>
                        <div className="about-dude-info">
                            <h2 className="about-dude-name">Vitalii Yakovyshyn</h2>
                            <div className="about-dude-social-container">
                                <a className="about-dude-social-wrapper about-dude-social-btn" href="https://www.linkedin.com/in/%D0%B2%D1%96%D1%82%D0%B0%D0%BB%D1%96%D0%B9-%D1%8F%D0%BA%D0%BE%D0%B2%D0%B8%D1%88%D0%B8%D0%BD-b211981ab/" target="_blank">
                                    <FontAwesomeIcon className="about-fa-icon" icon={faLinkedin}/>
                                    <p>Linkedin</p>
                                </a>
                                <a className="about-dude-social-wrapper about-dude-social-btn" target="_blank" href={PdfVitalii}>
                                        <FontAwesomeIcon className="about-fa-icon" icon={faFile}/>CV
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