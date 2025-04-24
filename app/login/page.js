'use client'

import { useState } from "react"
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import { useRouter } from "next/navigation";

function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const submitRouter = useRouter();

  return (
    <div className="h-screen bg-[url('/assets/LoginPageBackground.png')] bg-cover bg-center flex items-center justify-center">
        <div className="h-140 w-140 bg-white rounded-[50] flex flex-col items-center justify-center">
            <div className="font-bold text-5xl mb-15">Log in</div>
            <input placeholder="Email" className="border-[1.5] h-15 w-80 px-5 mb-5 rounded-[15] text-2xl border-gray-900 transition-all duration-300 ease-in-out focus:outline-none focus:border-green-300 focus:scale-105 hover:scale-105 hover:shadow-md"></input>
            <div className="relative flex flex-row items-center mb-10">
                <input type={showPassword ? "text" : "password"} placeholder="Password" className="border-[1.5] h-15 w-80 px-5 pr-11 rounded-[15] text-2xl border-gray-900 transition-all duration-300 ease-in-out focus:outline-none focus:border-green-300 focus:scale-105 hover:scale-105 hover:shadow-md" ></input>
                <div className="absolute right-4 cursor-pointer text-gray-600" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEye size={20}/> : <FaEyeSlash size={20}/>}
                </div>
            </div>
            <button onClick={() => submitRouter.push('/')} className="bg-green-800 h-15 w-80 rounded-[20] text-white font-bold text-2xl cursor-pointer mb-2 focus:scale-95 focus:bg-green-900 hover:scale-105 transition-all ease-in-out" >Log in</button>
            <p className="text-[100] cursor-pointer" >Forgot password?</p>
        </div>
    </div>
  )
}

export default Login