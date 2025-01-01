
const About = () => {

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        {/* Header  */}
      <h1 className="text-3xl sm:text-xl lg:text-5xl text-center tracking-wide font-bold underline">
        About
      </h1>
         
         {/* Info  */}
      <p className="mt-10 text-lg text-center text-gray-200 max-w-4xl">
          Migration is more than just moving from one place to another – it’s about embracing new opportunities, 
          adapting to new environments, and building a fulfilling life in unfamiliar surroundings. At SIMIGRA, 
          we understand the challenges and uncertainties that come with this transition, and we are here to make 
          the process simpler, smarter, and stress-free for you.
      </p>
      <p className="mt-10 text-xl text-center text-gray-200 max-w-4xl">
        "SIMIGRA: Simplify. Settle. Succeed."
      </p>
    </div>
  );
};

export default About;