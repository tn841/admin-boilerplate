import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { Layout } from 'antd';

import LoginLayout from './Layout/LoginLayout'
import DefaultLayout from './Layout/DefaultLayout'
import auth from '../hoc/auth';


function App() {

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/login" component={auth(LoginLayout, false)} />
                    <Route component={auth(DefaultLayout, true)} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default App




