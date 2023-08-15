import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Retailer from "./pages/Retailer";
import Cashier from "./pages/Cashier";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/retailer" element={<Retailer />} />
        <Route path="/cashier" element={<Cashier />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
