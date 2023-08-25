import React from 'react'
import Image from 'next/image';
import smage from '../../../../public/images/Rectangle 41.png'

import Link from 'next/link';
import Course from "../../../../public/images/4.png";
import Course2 from "../../../../public/images/5.png";
import Course3 from "../../../../public/images/6.png";
import Course4 from "../../../../public/images/7.png";



function addedtocart() {
  return (
            <>
                 <div>
                    <div className='max-w-7xl container mx-auto lg:px-8 overflow-hidden my-4'>
                         <h1 className='text-[25px] font-semibold '>Shopping Cart</h1>
                        <div className='mt-6'>
                         <h1 className='text-[20px] font-semibold'>Course in Cart</h1>                       
                          <div className='flex flex-wrap '>
                              <div className='flex basis-8/12 my-4 border- border-t '>
                                      <div className='flex justify-between my-3'>
                                                <div className='w-[176px]'>
                                                  <Image src={smage} alt={"The images"} className=''/>
                                                </div>
                                                <div className='flex my-auto '>
                                                  <div className='flex'>
                                                      <div className='mx-5'> 
                                                        <p className='w-[271px] h-[49px] text-[16px] font-semibold'>Python and Django Full Stack Web Developer Bootcamp</p>
                                                        <p className='text-[12px] font-medium mt-2 text-Ctext'>Robin Williams</p> 
                                                      </div>                                               
                                                  </div>
                                                  <div className='flex  mx-5'>
                                                      <p className=' text-[14px]  text-Cdarkblue '>Remove</p>
                                                  </div>
                                                  <div className='flex  mx-5'>
                                                      <p className='text-[14px]'>$ 1500</p>
                                                  </div>
                                                </div>
                                                
                                      </div>                                    
                              </div>
                              <div className='flex basis-3/12 items-center '>
                                  <div className='border border-gray-400  p-5 w-[219px] h-[152px] rounded-xl'>
                                        <p className='text-[16px] font-semibold'>Total</p>
                                        <p className='text-[25px] mt-2 font-semibold'>₹ 1,500</p>
                                        <div className='flex justify-center mt-3'>
                                        <Link href={"/checkout"}><button className='w-[193px] h-[37px] border border-Cdarkblue bg-Cdarkblue text-white rounded-lg' >CheckOut</button></Link>
                                        </div>
                                  </div>
                            </div>
                          </div>
                        </div>
                        <div className='my-5'>
                          <h1 className='text-[25px] font-semibold '>Trending Courses</h1>
                          <div className="flex flex-wrap -mx-1 lg:-mx-4 mt-6">
            <div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4  "
              data-aos="zoom-in"
            >
              <article className="overflow-hidden rounded-[35px] shadow-lg bg-Cbgs">
                <Image
                  className="block h-auto w-full"
                  src={Course}
                  alt={"Course Image"}
                />
                <header className="flex items-center justify-between  leading-tight p-2 md:p-4">
                  <h1 className="text-[17px] w-[111px] h-[26px]">
                    UI/UX Course
                  </h1>
                </header>
                <div className="text-[20px]  h-[60px] font-medium mx-4">
                  <p>Figma training from beginner to pro course</p>
                </div>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                  >
                    <p className="w-[184px] h-[26px] text-[17px] font-normal">
                      {" "}
                      9h 20min . 14 lesson{" "}
                    </p>
                  </a>
                </footer>
              </article>
            </div>
            {/* course2 */}
            <div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
              data-aos="zoom-in-up"
            >
              <article className="overflow-hidden rounded-[35px] shadow-lg bg-Cbgs">
                <Image
                  className="block h-auto w-full"
                  src={Course2}
                  alt={"Course Image"}
                />
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-[17px] w-[111px] h-[26px]">
                    UI/UX Course
                  </h1>
                </header>
                <div className="text-[20px]  h-[60px] font-medium mx-4">
                  <p>Python coding teaching from beginner to pro</p>
                </div>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                  >
                    <p className="w-[184px] h-[26px] text-[17px] font-normal">
                      {" "}
                      9h 20min . 14 lesson{" "}
                    </p>
                  </a>
                </footer>
              </article>
            </div>
            {/* Course 3 */}
            <div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
              data-aos="zoom-in-down"
            >
              <article className="overflow-hidden rounded-[35px] shadow-lg bg-Cbgs">
                <Image
                  className="block h-auto w-full"
                  src={Course3}
                  alt={"Course Image"}
                />
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-[17px] w-[111px] h-[26px]">
                    UI/UX Course
                  </h1>
                </header>
                <div className="text-[20px]  h-[60px] font-medium mx-4">
                  <p>Digital marketing course beginner to pro</p>
                </div>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                  >
                    <p className="w-[184px] h-[26px] text-[17px] font-normal">
                      {" "}
                      9h 20min . 14 lesson{" "}
                    </p>
                  </a>
                </footer>
              </article>
            </div>
              {/* Course 4 */}
              <div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
              data-aos="zoom-in-down"
            >
              <article className="overflow-hidden rounded-[35px] shadow-lg bg-Cbgs">
                <Image
                  className="block h-auto w-full"
                  src={Course4}
                  alt={"Course Image"}
                />
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-[17px] w-[111px] h-[26px]">
                    UI/UX Course
                  </h1>
                </header>
                <div className="text-[20px]  h-[60px] font-medium mx-4">
                  <p>C++ course beginner to pro</p>
                </div>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                  >
                    <p className="w-[184px] h-[26px] text-[17px] font-normal">
                      {" "}
                      9h 20min . 14 lesson{" "}
                    </p>
                  </a>
                </footer>
              </article>
            </div>
          </div>
                        </div>
                    </div>
                 </div>
            </>
  )
}

export default addedtocart