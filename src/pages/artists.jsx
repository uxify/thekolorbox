import React from 'react';
import { artisitList } from 'api_source/ql.js';

class Artists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="artists">
                <div className="artists page">
                    <div className="pageTitle">
                        <div className="container">
                            <h2>ARTISTS</h2>
                        </div>
                    </div>
                    <div className="pageContent">
                        <div className="container">
                            {
                                artisitList.map((artist) => {
                                    return (
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="aboutImg">
                                                    <img src={"images/artists/"+artist.image}/>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="contentTitle">
                                                    <h4>{artist.name}</h4>
                                                </div>
                                                <p>
                                                    {artist.description}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Artists