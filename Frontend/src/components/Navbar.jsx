import { navItems } from "../constants";
import logo from "../assets/Logo.jpg"; 
import { Menu, X } from "lucide-react";
import { useState } from "react";


const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-black">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
        
        {/* Logo and Name  */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Simigra</span>
          </div>

        {/* All other Links  */}
          <ul className="hidden lg:flex ml-14 space-x-8">
            {navItems.map((item, index) => (
              <li key={index} className="hover:underline hover:font-bold hover:text-blue-600">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        
        {/* Login and SignUp buttons */}
          <div className="hidden lg:flex justify-center space-x-8 items-center">
            <a href="#" className="py-1.5 px-3 border rounded-full bg-white text-black 
              hover:underline hover:font-semibold">
               Login
            </a>
            <a href="#" className="bg-gradient-to-r from-violet-600 to-blue-500 py-1.5 px-3 rounded-full 
              hover:underline hover:font-semibold">
              SignUp
            </a>
          </div>
        
        {/* Toggle Navbar For Mobile Screen  */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>          
        </div>
      

        {mobileOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 hover:underline hover:font-bold">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-3">
              <a href="#" className="py-1.5 px-3 border rounded-full bg-white text-black
                hover:underline hover:font-semibold">
                Login
              </a>             
              <a href="#"
                className="bg-gradient-to-r from-violet-600 to-blue-500 py-1.5 px-3 rounded-full
                hover:underline hover:font-semibold">
                SignUp
              </a>
            </div>
          </div>
        )}     
      </div>
    </nav>
  );
};

export default Navbar;
