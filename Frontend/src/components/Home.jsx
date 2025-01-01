

const Home = () => {

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
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
        <a
          href="#"
          className="bg-gradient-to-r from-violet-600 to-blue-500 py-3 px-4 mx-3 rounded-lg">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
