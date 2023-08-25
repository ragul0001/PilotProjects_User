"use client";
import Link from 'next/link'
import React, { useState } from 'react'
function navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
        <div className='bg-Cblue'>
        <div className="max-w-7xl container mx-auto lg:px-8 overflow-hidden">
          {/* // Navbar */}
          {/* <nav>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
              <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                  <a href="javascript:void(0)">
                    <span className="text-white text-3xl font-semibold">
                      DEV
                    </span>
                    <span className="text-black text-3xl font-semibold">
                      SKILL
                    </span>
                    <span className="text-black text-[35px] font-semibold">
                      .
                    </span>
                  </a>
                  <div className="md:hidden">
                    <button
                      className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                      onClick={() => setNavbar(!navbar)}
                    >
                      {navbar ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                  }`}
                >
                  <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <Link href={'/'}> <li className="text-white font-poppins">
                      <p>Home</p>
                    </li></Link> 
                    <li className="text-white ">
                      <p >About</p>
                    </li>
                    <Link href={'/course_Details'}>  <li className="text-white ">
                    <p >Courses</p>
                    </li></Link>
                    <li className="text-white ">
                      <p >Instructor</p>
                    </li>
                    <li className="text-white hidden lg:block">
                      <Link href={'/login'}><button className="border rounded-full p-1 w-28 hover:bg-Chover">
                        Login
                      </button></Link>
                    </li>
                    <li className="text-white hidden lg:block">
                    <Link href={'/signUp'}><button className="border rounded-full p-1 w-28 hover:bg-Chover">
                        Signup
                      </button></Link>
                    </li>
                  </ul>
                  <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                  <Link href={'/login'}><button

                      className="inline-block md:hidden  w-full px-4 py-2 text-center  bg-white rounded-md shadow hover:bg-Chover"
                    >
                      Login
                    </button></Link>
                    <Link href={'/signUp'}><button
                      className="inline-block  mt-3 md:hidden w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-Chover"
                    >
                      Signup
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>
          </nav> */}
            <nav>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
              <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                  <a href="javascript:void(0)">
                    <span className="text-white text-3xl font-semibold">
                      DEV
                    </span>
                    <span className="text-black text-3xl font-semibold">
                      SKILL
                    </span>
                    <span className="text-black text-[35px] font-semibold">
                      .
                    </span>
                  </a>
                  <div className="md:hidden">
                    <button
                      className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                      onClick={() => setNavbar(!navbar)}
                    >
                      {navbar ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                  }`}
                >
                  <ul className="items-center justify-center  md:flex md:space-x-6 md:space-y-0">
                   <Link href={'/'}><li className="text-white font-poppins ">
                      <a href="javascript:void(0)">Home</a>
                    </li></Link>  
                    <Link href={'#'}><li className="text-white my-3">
                      <a href="javascript:void(0)">About</a>
                    </li></Link>
                   <Link href={'/course_Details'}> <li className="text-white my-3">
                      <a href="javascript:void(0)">Courses</a>
                    </li></Link>
                    <Link href={'#'}><li className="text-white my-3">
                      <a href="javascript:void(0)">Contact</a>
                    </li></Link>
                    <li className="text-white hidden lg:block">
                      <Link href={'/login'}><button className="border rounded-full p-1 w-28 hover:bg-Chover">
                        Login
                      </button></Link>
                    </li>
                    <li className="text-white hidden lg:block">
                    <Link href={'/signUp'}><button className="border rounded-full p-1 w-28 hover:bg-Chover">
                        Signup
                      </button></Link>
                    </li>
                  </ul>
                  <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                  <Link href={'/login'}><button

                      className="inline-block md:hidden  w-full px-4 py-2 text-center  bg-white rounded-md shadow hover:bg-Chover"
                    >
                      Login
                    </button></Link>
                    <Link href={'/signUp'}><button
                      className="inline-block  mt-3 md:hidden w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-Chover"
                    >
                      Signup
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        </div>    
        
    </>
  )
}

export default navbar