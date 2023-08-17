//this is the navbar of the analyzer page

import React from "react";

const Navbar = () => {
  let Links = [
    { name: "Cashier", link: "/analyzer/cashier" },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-[#0066FF]">
      <div className="md:px-10 py-2 px-7 md:flex justify-between items-center">
        <div className="flex text-2xl cursor-pointer items-center ">
          <img src="./src/assets/Logo.svg" className="w-10" alt="" />
          <h3 className="text-white">RDERSENTIX</h3>
        </div>
        <div className="flex items-center justify-between gap-5">
          <ul className="md:flex pl-9 md:p1-0">
            {Links.map((link,index) => (
              <li className="font-semibold text-white my-7 md:my-0 md:ml-8 " key={index}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
