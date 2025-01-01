import { navItems } from "../constants";
// import logo from "../assets/logo.png"; Logo needs to be added later


const Navbar = () => {

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
        
        {/* Logo and Name  */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src="{logo}" alt="Logo" />
            <span className="text-xl tracking-tight">Simigra</span>
          </div>

        {/* All other Links  */}
          <ul className="hidden lg:flex ml-14 space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        
        {/* Login and SignUp buttons */}
          <div className="hidden lg:flex justify-center space-x-8 items-center">
            <a href="#" className="py-1.5 px-3 border rounded-md bg-white text-black">
               Login
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-violet-600 to-blue-500 py-1.5 px-3 rounded-md">
              SignUp
            </a>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
