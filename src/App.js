// import Reg from "./Reg";
// import React, { Component } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from "react-router-dom";
import PokedexMain from "./PokedexMain";
import PokedexDetails from "./PokedexDetails";

//import './App.css';

const App = () => {
 
  return (
    <>
    
    <Routes>
      <Route path="/" element={<PokedexMain/>} />
      <Route path="/PokedexDetails" element={<PokedexDetails/>}/>
    </Routes>
      
   </> 
  );
};

export default App;
