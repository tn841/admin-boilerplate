import React, { useState, useEffect } from 'react';
import Routes from './routes/Routes'
import { signIn } from '../auth.js';

function App(props) {


  return (
    <Routes {...props} />
  )
}

export default App


