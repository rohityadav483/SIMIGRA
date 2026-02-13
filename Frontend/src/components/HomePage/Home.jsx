import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div id="Home" className="mt-20 flex flex-col items-center max-w-7xl mx-auto pt-20 px-6">
      {/* Welcome Header  */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold">
        Welcome to
        <span className="bg-gradient-to-r from-violet-700 to-blue-300 text-transparent bg-clip-text font-bold">
          {" "}
          SIMIGRA
        </span>
      </h1>
    
      {/* Info  */}
      <p className="mt-10 text-xl text-center text- max-w-4xl">
          Your Ultimate Migration Companion!!! <br />
          SIMIGRA is a comprehensive platform designed to simplify and enhance your migration journey. 
          Whether you're relocating for a job, studies, or a new chapter in life, SIMIGRA serves as your 
          trusted guide through every step of the process.
      </p>

      {/* Get Started button  */}
      <div className="flex justify-center my-10">
        <Link to="/register"
          href="#"
          className="bg-gradient-to-r from-violet-600 to-blue-500 py-3 px-4 mx-3 rounded-full 
          hover:bg-gradient-to-r hover:from-violet-950 hover:to-blue-900">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
