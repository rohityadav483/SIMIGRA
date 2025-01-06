import { User } from "lucide-react";
import { LockKeyhole } from "lucide-react";

const Login = () => {
  return (
    // Login Container 
    <div className="w-full flex justify-center items-center lg:h-screen bg-gray-800 overflow-hidden">
      
        {/* Login Section */}
        <div className="w-full lg:w-2/5 px-4">
          <div className="px-6 lg:px-20 py-12 lg:py-20 bg-gray-600 rounded-lg text-gray-800">
            <form action="#">
              <h3 className="mb-10 text-3xl text-white font-bold font-heading text-center">User Login</h3>
             
          {/* Input Fields  */}
              {/* Username  */}
              <div className="flex items-center pl-6 mb-6 bg-white rounded-full">
                <span className="inline-block pr-3 py-2 border-r border-gray-500">
                   <User/>
                </span>
                <input className="w-full pl-4 pr-6 py-4 bg-white text-black font-bold placeholder-gray-600 rounded-r-full focus:outline-none" type="text" placeholder="Username"/>
              </div>

              {/* Password  */}
              <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                <span className="inline-block pr-3 py-2 border-r border-gray-500">
                   <LockKeyhole/>
                </span>
                <input className="w-full pl-4 pr-6 py-4 bg-white text-black font-bold placeholder-gray-600 rounded-r-full focus:outline-none" type="password" placeholder="Password"/>
              </div>

             {/* SignUp Buttons  */}
              <div className="inline-flex mb-10">
                <input className="mr-4 mt-4" type="checkbox"/>
                <p className="mt-4 text-base text-gray-200">Remember Me</p>
              </div>
              <button className="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">
                 Login    
              </button>
              <p className="mt-4 text-lg text-gray-200 text-center">Not a member?
                <a className="hover:underline hover:text-blue-800" href="#" > SignUp</a>
              </p>    
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login;




