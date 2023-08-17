import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./Landing"
import Retailer from "./pages/Retailer";
import Cashier from "./pages/Cashier";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/analyzer" element={<Home/>} />
        <Route path="/analyzer/retailer" element={<Retailer />} />
        <Route path="/analyzer/cashier" element={<Cashier />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
