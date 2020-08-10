import React, { useEffect } from 'react'
import LoginPage from '../views/LoginPage/LoginPage'
import { withRouter } from 'react-router-dom';


function LoginLayout(props) {
  
  return (
    <div style={{height: '100vh'}}>
      <LoginPage {...props} />
    </div>
  );
}

export default withRouter(LoginLayout)
