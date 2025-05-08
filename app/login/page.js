'use client'

import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from "next/navigation";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="h-screen bg-[url('/assets/LoginPageBackground.png')] bg-cover bg-center flex items-center justify-center">
      <div className="w-full max-w-md p-10 bg-[rgb(217,240,217)] rounded-3xl shadow-lg backdrop-blur-sm bg-opacity-90 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-green-800 mb-8">Log In</h2>

        <input
          type="email"
          placeholder="Email"
          className="mb-5 w-full px-5 py-3 rounded-xl border border-gray-400 text-lg shadow-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-300 transition-all"
        />

        <div className="relative w-full mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-5 py-3 pr-11 rounded-xl border border-gray-400 text-lg shadow-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-300 transition-all"
          />
          <div
            className="absolute right-4 top-3.5 text-gray-600 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </div>
        </div>

        <button
          onClick={() => router.push('/')}
          className="w-full py-3 bg-green-700 text-white rounded-xl text-lg font-semibold hover:bg-green-800 transition-transform transform hover:scale-105 cursor-pointer"
        >
          Log in
        </button>

        <p className="mt-4 text-green-700 cursor-pointer text-sm hover:underline">Forgot password?</p>
      </div>
    </div>
  );
}

export default Login;
