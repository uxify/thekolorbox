import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer>
            <div className="footerTop">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <a href="/" className="footerLogo">
                                <img src="images/logo_white.png" />
                            </a>
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <Link to="/about" className="footerNav">About</Link>
                                    <Link to="/" className="footerNav">Artists</Link>
                                    <Link to="/" className="footerNav">Buy Art</Link>
                                    <Link to="/" className="footerNav">Exhibitions</Link>
                                </div>
                                <div className="col-md-6">
                                    <a href="#" className="footerNav">Media</a>
                                    <a href="#" className="footerNav">Art Trips</a>
                                    <a href="#" className="footerNav">Contact</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footerSocial">
                                <a href="https://www.facebook.com/thekolorbox" className="socialIcon" target="_blank">
                                    <img src="images/fb_grey.png" />
                                </a>
                                <a href="https://www.instagram.com/thekolorbox/" className="socialIcon" target="_blank">
                                    <img src="images/insta_grey.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12"><h4 className="d-flex justify-content-center text-white">"Website is currently under construction"</h4></div>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <div className="container">
                    <div className="copyText">Copyright &copy; 2018 TheKolorbox.com</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer