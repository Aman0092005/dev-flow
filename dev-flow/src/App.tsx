// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'


import {useState} from "react";
import Login from "./pages/Login.tsx"

import {login} from "./utils/auth.ts";





function App()
{

  const[isLoginErr, setisLoginErr] = useState({err: false, msg:""});


  async function handleLogin(firstName: string, lastName: string, email: string, password: string, isLogin: boolean)
  {
    const result = await login(firstName, lastName, email, password, isLogin);
    console.log(result.err, result.msg);
    if(result.err){
      setisLoginErr({err: result.err, msg: result.msg});
    }else{
      console.log(result.user);
    }
  }



  return (
    <div>
      <Login handleLogin={handleLogin} isLoginErr={isLoginErr} />
    </div>
  );
}



export default App;