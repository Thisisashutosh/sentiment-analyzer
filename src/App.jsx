import React from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Navbar />
      <div className="flex justify-around items-center w-full gap-10">
        <Form />
        <div>
          <img src="./src/assets/homepage.svg" alt="image" className="w-full h-96 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default App;
