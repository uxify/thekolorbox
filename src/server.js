import express from "express";
import path from "path";

var web_port = 2048; 

/* Web */
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom"
import routes from './routes';
import Layout from "./pages/layout.jsx";
import { htmlTemplate } from "./components/Template";

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(express.static(path.resolve(__dirname, "../assets")));

app.get("/*", (req, res) => {
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
    const promise = activeRoute.fetchInitialData
        ? activeRoute.fetchInitialData(req.path)
        : Promise.resolve();

    promise.then((data) => {
        const reactDom = renderToString(
            <StaticRouter location={req.url} context={{}}>
                <Layout />
            </StaticRouter>
        );    
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlTemplate(reactDom));
    });

});
app.listen(web_port);


/*Api*/
var api_port = 2050;

const api_app = express();

api_app.get("/*", (req, res) => {
        res.send({'a':'1'});
});
api_app.listen(api_port);