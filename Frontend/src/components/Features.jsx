
import { feature } from "../constants";

const Features = () => {
  return (
    <div id="Features" className="relative mt-20 border-neutral-800 min-h-[800px] max-w-7xl mx-auto pt-20 px-6">
        {/* Header  */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-xl lg:text-4xl text-center tracking-wide font-bold underline">
           Features
        </h1>
      </div>
        
        {/* Features  */}
      <div className="flex flex-wrap mt-10 lg:mt-20 justify-center">
        {feature.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            {/* Icon  */}
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-violet-700 justify-center items-center rounded-full">
                {feature.icon}
            </div>

            {/* Description  */}
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.id}{". "}{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;


