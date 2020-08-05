import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { Layout } from 'antd';

import LoginLayout from './Layout/LoginLayout'
import DefaultLayout from './Layout/DefaultLayout'


function App() {

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/login" component={LoginLayout} />
                    <Route component={DefaultLayout} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default App




