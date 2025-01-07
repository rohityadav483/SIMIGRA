import { whyData } from "../constants";

const Section = () => {

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 max-w-7xl mx-auto pt-20 px-6">
        {/* Header  */}
      <div className="text-center"></div>  
        <h1 className="text-3xl sm:text-xl lg:text-4xl text-center tracking-wide font-bold underline">
           Why Choose SIMIGRA?
        </h1>
      <div/>
    
    {/* Why Section  */}
      <div className="flex flex-wrap justify-between mt-10 lg:mt-20">
        {whyData.map((data, index) => (
          <div key={index} className=" sm:w-1/2 lg:w-1/4 p-4 py-10 h-96 mx-8 bg-gray-400 rounded-3xl m-3">
                <h5 className="mt-1 mb-6 text-2xl text-black text-center font-bold">{data.text}</h5>
                <p className="text-md p-2 mb-20 text-black">
                  {data.description}
                </p>
          </div>
        ))}
      </div>
         

    </div>
  );
};

export default Section;