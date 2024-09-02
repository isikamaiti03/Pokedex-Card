import React Component  from "react";
import { Routes, Route } from "react-router-dom";
import PokedexMain from "./PokedexMain";
import PokedexDetails from "./PokedexDetails";

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
