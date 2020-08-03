import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { Layout, Menu } from 'antd';

import LoginLayout from '../views/Layout/LoginLayout'
import DefaultLayout from '../views/Layout/DefaultLayout'
import { connect } from 'react-redux';
import { actionCreators } from '../../store';


function Routes(props) {
    console.log(props)


    useEffect(() => {
        
        console.log(props)

        return () => {
            
        }
    }, [])

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



function mapStateToProps(state, ownProps){
    console.log(state, ownProps)
    return {state, ownProps}
}

function mapDispatchToProps(dispatch){
    return {
      authUser: () => dispatch(actionCreators.authUser())
    }
  }

export default connect(mapStateToProps) (Routes)


