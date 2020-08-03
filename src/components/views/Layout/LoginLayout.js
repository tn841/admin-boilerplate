import React, { useEffect } from 'react'
import LoginPage from '../LoginPage/LoginPage'
import { useSelector } from 'react-redux';
import { message } from 'antd';



function LoginLayout(props) {
  const user = useSelector(state => state?.user)

  useEffect(() => {
    if(user){
      props.history.push('/')
    }
    return () => {
      
    }
  }, [])

  return (
      <LoginPage {...props} />
  );
}

export default LoginLayout
