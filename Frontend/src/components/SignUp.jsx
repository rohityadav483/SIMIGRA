import { User } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { Mail } from "lucide-react";


const Register = () => {
   return (
// Container 
<section className="relative lg:h-screen bg-gray-800 overflow-hidden ">
  <div className="relative container px-4 mt-5 mx-auto max-w-5xl">
    <div className="flex flex-wrap items-center -mx-4 ">
        
        {/* Left Section  */}
        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <div className="max-w-md">
            <span className="text-4xl text-blue-400 font-bold">Welcome to Simigra</span>
            <h2 className="mt-8 mb-12 text-5xl font-semibold font-heading text-white">Start your new journey by creating an account.</h2>
            <p className="text-lg text-gray-200">
              <span>"SIMIGRA: Simplify. Settle. Succeed."</span>
            </p>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="w-full lg:w-1/2 px-4">
          <div className="px-6 lg:px-20 py-12 lg:py-16 bg-gray-600 rounded-lg text-gray-800">
            <form action="#">
              <h3 className="mb-10 text-2xl text-white font-bold font-heading text-center">Register Account</h3>
             
          {/* Input Fields  */}
              {/* Username  */}
              <div className="flex items-center pl-6 mb-4 bg-white rounded-full">
                <span className="inline-block pr-3 py-2 border-r border-gray-500">
                    <User />
                </span>
                <input className="w-full pl-4 pr-6 py-4 bg-white font-bold placeholder-gray-600 rounded-r-full focus:outline-none" type="text" placeholder="Username"/>
              </div>

              {/* Email Id  */}
              <div className="flex items-center pl-6 mb-4 bg-white rounded-full">
                <span className="inline-block pr-3 py-2 border-r border-gray-500 ">
                    <Mail />
                </span>
                <input className="w-full pl-4 pr-6 py-4 bg-white font-bold placeholder-gray-600 rounded-r-full focus:outline-none" type="email" placeholder="example@simigra.com"/>
              </div>

              {/* Password  */}
              <div className="flex items-center pl-6 mb-4 bg-white rounded-full">
                <span className="inline-block pr-3 py-2 border-r border-gray-500">
                    <LockKeyhole />
                </span>
                <input className="w-full pl-4 pr-6 py-4 bg-white font-bold placeholder-gray-600 rounded-r-full focus:outline-none" type="password" placeholder="Password"/>
              </div>

             {/* SignUp Buttons  */}
              <div className="inline-flex mb-10">
                <input className="mr-4" type="checkbox"/>
                <p className="mt-3 text-sm text-gray-200">By signning up, you agree to our Terms, Data Policy and Cookies </p>
              </div>
              <button className="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">
                Get started
              </button>
              <p className="mt-4 text-lg text-gray-200 text-center">Already have an account?
                <a className="hover:underline hover:text-blue-800" href="#" > Login</a>
              </p>                
            </form>
          </div>
        </div>
        
    </div>
  </div>
</section>
  )
}

export default Register;