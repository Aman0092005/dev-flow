// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'


import {useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";

import Login from "./pages/Login.tsx"
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";

import {login} from "./utils/auth.ts";

import Protectedroute from "./components/Protectedroute.tsx";





function App()
{

  const[isLoginErr, setisLoginErr] = useState({err: false, msg:""});
  // const[isLogined, setIsLogined] = useState(false);

  const navigate = useNavigate();

 


  async function handleLogin(firstName: string, lastName: string, email: string, password: string, isLogin: boolean)
  {
    const result = await login(firstName, lastName, email, password, isLogin);
    if(result.err){
      setisLoginErr({err: result.err, msg: result.msg});
    }else{
      sessionStorage.setItem("token", result.token);
      // setIsLogined(true);
      homeHandle();
    }
  }

  function homeHandle()
  {
    navigate("/home");
  }


  return (
    <div>
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} isLoginErr={isLoginErr} />} />
        <Route path="/home" element={<Protectedroute> <Home /> </Protectedroute>} />
        <Route path="/dashboard" element={<Protectedroute> <Dashboard /> </Protectedroute>} />
      </Routes>
    </div>
  );
}



export default App;