import React,{Fragment} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';

// import axios from 'axios'
 //const https = require('https');

 function App() {
  return (<>
    <Router>
      <Fragment>
       
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
        </Routes>
      </Fragment>
    </Router>    </>
  )
}




export default App;