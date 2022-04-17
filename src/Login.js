import React from 'react'
 import axios from 'axios'
 //const https = require('https');

 function Login() {
  return (<>
    <div className='container'>
    <form onSubmit={(e)=>login(e)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
     
    </div>
    </>
  )
}

function login(e){
  e.preventDefault();
  let request={
    email: document.getElementById("exampleInputEmail1").value,
    password:document.getElementById("exampleInputPassword1").value
  }

  // https.post('http://localhost:3000/login', res => {
  //   // let data = [];
  //   // const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  //   console.log('Status Code:', res.statusCode);
  //   //console.log('Date in Response header:', headerDate);
  
  //   // res.on('data', chunk => {
  //   //   data.push(chunk);
  //   // });
  
  //   // res.on('end', () => {
  //   //   console.log('Response ended: ');
  //   //   const users = JSON.parse(Buffer.concat(data).toString());
  
  //   //   for(user of users) {
  //   //     console.log(`Got user with id: ${user.id}, name: ${user.name}`);
  //   //   }
  //   // });
  // }).on('error', err => {
  //   console.log('Error: ', err.message);
  // });
  


  axios.post("http://localhost:3000/login",request)
  .then(resp=>{
    alert(resp.data.message);
    console.log(resp.data.message);
  })
  .catch(err=>{
    console.log(err);
  })
}

export default Login;