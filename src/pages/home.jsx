import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="home">
                <div className="section sec1">
                    <video autoPlay loop id="video-background" muted plays-inline="true">
                        <source src="images/artistVid.mp4" type="video/mp4" />
                        <source src="images/artistVid.webm" type="video/webm" />
                    </video>
                    <div className="imageOverlay">
                        <img src="images/videoImage.jpg" />
                    </div>
                    <div className="videoOverlay"></div>
                    <div className="videoOverlayText">For the love of Art and to grow with them.</div>
                </div>
                <div className="section sec2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="boxWrap">
                                    <div className="boxImage">
                                        <img src="images/aboutBox.jpg" />
                                    </div>
                                    <div className="boxImageOverlay"></div>
                                    <div className="boxTitle">ABOUT</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="boxWrap">
                                    <div className="boxImage">
                                        <img src="images/buyartBox.jpg" />
                                    </div>
                                    <div className="boxImageOverlay"></div>
                                    <div className="boxTitle">BUY ART</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="boxWrap">
                                    <div className="boxImage">
                                        <img src="images/meetArtist.jpg" />
                                    </div>
                                    <div className="boxImageOverlay"></div>
                                    <div className="boxTitle">ARTISTS</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="boxWrap">
                                    <div className="boxImage">
                                        <img src="images/arttripBox.jpg" />
                                    </div>
                                    <div className="boxImageOverlay"></div>
                                    <div className="boxTitle">ART TRIPS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section sec4">
                    <div className="imageSlider" id="imageSlider">
                        <div className="sliderBox">
                            <div className="sliderImage" id="sliderImage">
                                <div className="sliderImageWrap">
                                    <img src="images/slide1.jpg" />
                                </div>
                                <div className="sliderImageWrap">
                                    <img src="images/slide2.jpg" />
                                </div>
                                <div className="sliderImageWrap">
                                    <img src="images/slide3.jpg" />
                                </div>
                                <div className="sliderImageWrap">
                                    <img src="images/slide4.jpg" />
                                </div>
                                <div className="sliderImageWrap">
                                    <img src="images/slide5.jpg" />
                                </div>
                                <div className="sliderImageWrap">
                                    <img src="images/slide6.jpg" />
                                </div>
                            </div>
                            <div className="sliderNav">
                                <div className="slidernavBox">
                                    <span className="sliderButton"></span>
                                    <span className="sliderButton"></span>
                                    <span className="sliderButton"></span>
                                    <span className="sliderButton"></span>
                                    <span className="sliderButton"></span>
                                    <span className="sliderButton"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section sec5" id="contact">
                    <div className="container">
                        <div className="contactSection">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h2>Contact</h2>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-10 contactText">
                                            Thank you for visiting our site.
                                            <br /> 
                                            We are happy to address your queries.
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <div className="phoneIcon">
                                                <img src="images/phone.png" />
                                            </div>
                                        </div>
                                        <div className="col-md-10 contactNumber">+91 9871682407 | +968 98768215</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <div className="phoneIcon">
                                                <img src="images/mail.png" />
                                            </div>
                                        </div>
                                        <div className="col-md-10 contactNumber">thekolorbox@gmail.com</div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-12 socialText">Get closer to us</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <a className="contactSocial" href="https://www.facebook.com/thekolorbox" target="_blank">
                                                <div className="socialIcon">
                                                    <img src="images/fb-round.png" />
                                                </div>
                                            </a>
                                            <a className="contactSocial" href="https://www.instagram.com/thekolorbox/" target="_blank">
                                                <div className="socialIcon">
                                                    <img src="images/insta-round.png" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                                <div className="col-md-6">
                                    <form name="homeContact">
                                        <div className="row">
                                            <div className="col-md-12 formGroup">
                                                <input type="text" name="name" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 formGroup">
                                                <input type="email" name="email" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 formGroup">
                                                <input type="text" name="subject" placeholder="Subject" required />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 formGroup">
                                                <textarea name="message" placeholder="Message" required></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 formGroup">
                                                <input type="submit" id="submitContact" name="submit" value="Submit" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Home