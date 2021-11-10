import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Utils from "../utils";

import "../styles/index.css";

const AsyncHomePage = Loadable({
    loader: () => import('../components/HomePage'),
    loading(){
        return <div>Loading...</div>;
    }
});

const AsyncAboutYouPage = Loadable({
    loader: () => import('../components/AboutYou'),
    loading(){
        return <div>Loading...</div>;
    }
});

const AppRouter = () => {
    return (
        <Router history={Utils.history}>
            <Switch>
                <Route path='/' component = {AsyncHomePage} exact />
                <Route path='/about' component = {AsyncAboutYouPage} exact />
            </Switch>
        </Router>
    );
};

export default AppRouter;