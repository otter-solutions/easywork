import React from 'react';
import connect from "react-redux/es/connect/connect";

// -> Configuração das Rotas
import {
    Route,
    Switch,
    Redirect,
    Router
} from "react-router-dom";

import History from "./History";
// -> Configuração das Rotas

// -> Views
import Login from "./views/Login";
// -> Views

const routePath = process.env.PUBLIC_URL;

const App = (props) => {
    return (
        <div className="App">
            <Router history={History}>
                <Switch>
                    <Route path={`${routePath}/login`} exact component={Login}/>

                    <Redirect from="*" to={`${process.env.PUBLIC_URL}/`} />
                </Switch>
            </Router>
        </div>
    )
};

export default connect(state => state)(App);
