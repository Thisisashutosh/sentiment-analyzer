import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Retailer from "./pages/Retailer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/retailer" element={<Retailer/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
