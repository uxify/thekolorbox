import React from "react";

import {
    BrowserRouter
} from 'react-router-dom';

import Layout from 'page_source/layout.jsx';

export default class Body extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        );
    }
}
