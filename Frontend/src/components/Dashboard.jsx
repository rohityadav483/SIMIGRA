import React from 'react';
import Lottie from 'react-lottie-player';
import Header from "./Header";
import { DashboardData } from  "../constants";

const Dashboard = () => {
return (
  
<body class="relative bg-black overflow-hidden max-h-screen">
  {/* Header Navbar */}
  <Header />
  
  {/* Dashboard Section  */}
  <main class="m-auto pt-16 max-h-screen overflow-auto text-white">
    <div class="px-6 py-8 mx-auto rounded-3xl p-8 mb-5">
      <h1 class="text-3xl font-bold mb-16 text-center">Start your Migration Journey Today with Simigra </h1>

      <div className="flex flex-col gap-16 mb-8">
        <div className="flex flex-col items-center">
          {DashboardData.map((item, index) => (

           <div key={index}
              className={`flex flex-col sm:flex-row items-center 
              ${ index % 2 === 0 ? "sm:flex-row-reverse" : "" } gap-36 mb-16`}>

               <div className="md:w-1/2 mx-auto transform scale-140">
                  <Lottie loop play animationData={item.animation}
                   style={{ width: 300, height: 300 }} />
                </div>

                <div className="w-1/2 mx-auto bg-gray-700 rounded-3xl">
                   <div className='bg-darkblue bg-opacity-40 flex flex-col gap-4 p-8 py-8 w-96'>
                       <h1 className='text-white text-xl'>{index + 1}. {item.title}</h1>
                       <p className='text-gray-400 '>{item.description}</p>
                       <button className="bg-blue-600 h-10 rounded-full hover:bg-blue-900">{item.button}</button>
                    </div> 
                </div>
            </div>
        ))}
        </div>
      </div>
    </div>

  </main>
</body>
    )
}

export default Dashboard;