import React, { useEffect } from 'react'
import LoginPage from '../views/LoginPage/LoginPage'
import { useSelector } from 'react-redux';


function LoginLayout(props) {
  const user = useSelector(state => state?.user)
  console.log(props)
  useEffect(() => {
    if(user){
      props.history.push('/')
    }
    return () => {
      
    }
  }, [])

  return (
    <div style={{height: '100vh'}}>
      <LoginPage {...props} />
    </div>
  );
}

export default LoginLayout
