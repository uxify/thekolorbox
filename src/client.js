import React from "react";
import ReactDOM from "react-dom";

import {
    BrowserRouter
} from 'react-router-dom';

import Layout from 'page_source/layout.jsx';

//import Body from "./components/Body.jsx";

ReactDOM.hydrate(
    (<BrowserRouter>
        <Layout />
    </BrowserRouter>),
    document.getElementById("kolorboxWeb"));
