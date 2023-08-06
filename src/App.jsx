import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Success from './layout/Success';
import Home from './layout/Home';
import Register from './layout/Register';
import Login from './layout/Login';
// import Success from './layout/Success';
import Cancel from './layout/Cancel';

function App() {


  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/register" element={<Register></Register>}></Route>
    <Route path="/success" element={<Success></Success>}></Route>
    <Route path="/cancel" element={<Cancel></Cancel>}></Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
