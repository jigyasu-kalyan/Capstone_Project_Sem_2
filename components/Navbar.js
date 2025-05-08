'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Navbar() {
  const loginRouter = useRouter();

  return (
    <nav className="px-5 py-4 border-b-[1.5] border-b-gray-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image src="/assets/WebsiteLogo.png" alt="Website-Logo" width={50} height={50} />
          <p className="text-2xl text-green-800 font-semibold hover:text-green-500 cursor-pointer">
            ZenZone
          </p>
        </div>

        <div className="hidden md:flex space-x-10 text-lg">
          {['Home', 'About', 'Services', 'Blogs'].map((item) => (
            <Link key={item} href={item === 'Home' ? "/" : `/${item.toLowerCase()}`}>
              <div className="relative group cursor-pointer hover:scale-105 transition duration-300">
                <p className="transition-colors hover:text-green-600">{item}</p>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => loginRouter.push('/login')}
            className="text-sm md:text-base bg-[#B1DDB6] hover:bg-[#6DBA72] px-4 py-2 rounded-md transition duration-300 hover:scale-105 cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => loginRouter.push('/login')}
            className="text-sm md:text-base bg-[#5DB667] hover:bg-[#4a8e52] px-4 py-2 rounded-md text-white transition duration-300 hover:scale-105 cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
