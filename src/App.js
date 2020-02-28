import React from 'react';
import connect from "react-redux/es/connect/connect";

// -> Configuração das Rotas
import History from "./History";

import { Route, Switch, Redirect, Router } from "react-router-dom";
// -> Configuração das Rotas

// -> Components
import Menu from "./views/components/Menu";
// -> Components

// -> Views
import UserLoginView from "./views/user/UserLoginView";
import ProfileView from "./views/user/ProfileView";
import FinanceView from "./views/user/dashboard/FinanceView";
import SurveysView from "./views/user/SurveysView";
import ClientSurveysView from "./views/client/dashboard/ClientSurveysView";
import CreateSurvey from "./views/client/CreateSurvey";
import SurveyResponse from "./views/user/SurveyResponse";
import SurveyAvaliation from "./views/client/SurveyAvaliation";
import UserRegisterView from "./views/user/UserRegisterView";
// -> Views

const routePath = process.env.PUBLIC_URL;

class App extends React.Component {

    render () {
        return (
            <div className="App">

                <Menu />

                <Router history={History}>
                    <Switch>

                        <Route path={`${routePath}/user/login`} exact component={UserLoginView}/>
                        <Route path={`${routePath}/user/register`} exact component={UserRegisterView}/>

                        <Route path={`${routePath}/user/profile`} exact component={ProfileView}/>
                        <Route path={`${routePath}/user/finance`} exact component={FinanceView}/>
                        <Route path={`${routePath}/user/surveys`} exact component={SurveysView}/>
                        <Route path={`${routePath}/user/survey-response`} exact component={SurveyResponse}/>

                        <Route path={`${routePath}/client/surveys`} exact component={ClientSurveysView} />
                        <Route path={`${routePath}/client/survey/create`} exact component={CreateSurvey} />
                        <Route path={`${routePath}/client/surveys-avaliation`} exact component={SurveyAvaliation} />

                        <Redirect from="*" to={`${process.env.PUBLIC_URL}/login`} />
                    </Switch>
                </Router>
            </div>
        )
    }

}

export default connect(state => state)(App);
