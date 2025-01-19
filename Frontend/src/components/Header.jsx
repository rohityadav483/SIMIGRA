
import React from "react";
import logo from "../assets/Logo.jpg"; 
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";


const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="sticky top-0 z-50 py-3 border-b">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
        
        {/* Logo and Name  */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Simigra</span>
          </div>

          {/* <Sidebar /> */}
      
        {/* Toggle Navbar For Mobile Screen  */}
          <div className="flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>          
        </div>
      
        {mobileOpen && (
            <Sidebar />
        )}     
      </div>
    </div>
  );
};

export default Header;
