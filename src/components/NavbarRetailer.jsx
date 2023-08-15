import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-[#0066FF]">
      <div className="md:px-10 py-2 px-7 md:flex justify-between items-center">
        <div className="flex text-2xl cursor-pointer items-center ">
          <img src="./src/assets/Logo.svg" className="w-10" alt="" />
          <h3 className="text-white">RDERSENTIX</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
