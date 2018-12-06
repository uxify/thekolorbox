
import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="about">
                <div className="about page">
                    <div className="pageTitle">
                        <div className="container">
                            <h2>ABOUT</h2>
                        </div>
                    </div>
                    <div className="pageContent">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="aboutImg">
                                        <img src="images/about.jpg" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="contentTitle">
                                        <h4>For the love of Art and to grow with them.</h4>
                                    </div>
                                    <p>
                                        Art has the power to extend our capacities beyond those that nature has originally endowed us with.
                                        </p>
                                    <p>
                                        The Kolorbox, an initiative to build up and promote a community of artists look to work closely with galleries, institutional
                                        partners to discover how Art is able to inspire and open new avenues for transforming
                                        lives. The space is equally a home for the art lovers who seek to cultivate their
                                        affection for Art.
                                        </p>
                                    <p> We are here for the love of Art. We are here to grow with Art.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default About