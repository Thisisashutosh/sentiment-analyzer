import React from "react";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
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
                <a href="/">{link.name}</a>
              </li>
            ))}
          </ul>
          <button className="bg-blue-950 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
