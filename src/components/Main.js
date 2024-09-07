import { Routes, Route } from "react-router-dom";

import "../assets/css/style.css";

import Home from "./Home";
import LAgence from "./LAgence";


const Main = () => {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LAgence" element={<LAgence />} />
        </Routes>
     
    </>
  );
};

export default Main;
