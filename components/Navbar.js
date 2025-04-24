'use client';

import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Navbar() {

    const loginRouter = useRouter();

  return (
    <nav className='navbar-container'>
        <div className='flex'>
            <div className='flex ml-5 mt-5'>
                <Image src="/assets/WebsiteLogo.png" alt="Website-Logo" width={75} height={100} className=' mr-2.5'/>
                <p className='mt-5 text-3xl text-green-800 font-medium inline-block hover:text-green-400 cursor-pointer'>ZenZone</p>
            </div>
            <div className='flex mt-11 ml-80 text-[1.25rem] space-x-15'>
                {['Home', 'About', 'Services', 'Blogs'].map((item) => (
                    <Link key={item} href={item === 'Home' ? "/" : `/${item.toLowerCase()}`}>
                        <div className='relative group cursor-pointer inline-block hover:scale-105 duration-300'>
                            <p className='text-2xl leading-none transition-colors duration-200 hover:text-green-600'>
                                {item}
                            </p>
                            <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full'></span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex mt-5 ml-60 space-x-5'>
                <button onClick={() => loginRouter.push('/login')} className='text-[1.25rem] bg-[#B1DDB6] hover:bg-[#6DBA72] px-5 my-2 rounded-[10px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>Login</button>
                <button onClick={() => loginRouter.push('/login')} className='text-[1.25rem] bg-[#5DB667] hover:bg-[#4a8e52] px-5 my-2 rounded-[10px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>Sign Up</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar