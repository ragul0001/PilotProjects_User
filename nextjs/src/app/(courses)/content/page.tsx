"use client"
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Bgimage from '../../../../public/images/Screenshot 2023-07-20 at 3.19.30 PM.png'
import smage from '../../../../public/images/Rectangle 41.png'
import smage2 from '../../../../public/images/Rectangle 82.png'
import smage3 from '../../../../public/images/Rectangle 84.png'
import smage4 from '../../../../public/images/Rectangle 86.png'
import Link from 'next/link';
// while insert background images means u should use this method 'url(/images/BgImages.png)'









function content() {
  const [showModal, setShowModal] = React.useState(false);
  const user=useSelector((state:any)=>state.gridDetails.selectactiveCourses)

  return (
    <>
       {/* {user.map((datas:{Image: string | StaticImport; id: number; title: string; subTitle: string;})=>( */}
       <div className='bg-Cpink'>
            <div className='bg-cover bg-no-repeat bg-center ' style={{backgroundImage: 'url(/images/BgImages.png)'}} >
                    <div className='max-w-7xl container  md:mx-auto lg:px-8 overflow-hidden  '>
                            <div className='py-10 px-3'>                            
                                  <h1 className='text-[18px]  md:text-[35px] font-semibold  w-[678px] text-white '>{user.title}<br/><span className='text-Cradiant'>{user.subTitle}</span></h1>
                                  <p className='w-[350px]  md:w-[577px]  text-white text-[16px] font-medium leading-[23px] my-9'>Learn to build websites with HTML , CSS , Bootstrap, Javascript , jQuery , Python 3 , and Django!</p>
                                <div className='my-9'>
                                <button className='text-white text-[16px] w-[177px] p-3 border border-blue-600 bg-blue-600 rounded-full'>Enroll Now!</button>
                              </div>                         
                            </div>                           
                    </div>
            </div>
          <div className='max-w-7xl container  md:mx-auto lg:px-8 overflow-hidden'>
                     <div className='flex justify-between  my-5'>
                                <div className=''>
                                      <div className='px-6 md:p-0'>
                                            <h1 className='text-[20px] font-semibold'>What You’ll Learn</h1>
                                            <ul className='w-[330px] md:w-[427px] h-[194px] text-[12px] my-2 list-disc leading-[23px] md:mx-5'>
                                               <li>Create a fully functional web site using the Full-Stack with Django 1.11</li>
                                               <li>Use CSS to create beautifully styled sites</li>
                                               <li>Use Javascript to interact with sites on the Front-End</li>
                                               <li>Understand HTTP requests</li>
                                               <li>Learn the power of Python to code out your web applications</li>
                                               <li>Implement a full Models-Views-Templates structure for your site</li>
                                               <li>Use CSS to create beautifully styled sites</li>
                                               <li>Use Javascript to interact with sites on the Front-End</li>                                           
                                            </ul>
                                      </div>
                                      <div className=''>
                                        <div className='mx-5 md:mx-0 '>
                                            <h1 className='text-[20px] font-semibold '>Requirments</h1>
                                            <div className='w-[577px] font-normal leading-[20px] text-[12px]'>
                                                <p>A computer with an internet connection and download privileges. Whether you want to change career paths, expand your current skill set, start your own entrepreneurial business, become a consultant, or just want to learn, this is the course for you!</p>
                                            </div>     
                                        </div>
                                        <div className='mx-5 md:mx-0'>
                                            <h1 className='text-[20px] font-semibold my-3'>Descriptions</h1>
                                            <div className='w-[577px] font-normal leading-[20px] text-[12px]'>
                                                <p>Welcome to the Python and Django Full Stack Web Developer Bootcamp! In this course we cover everything you need to know to build a website using Python, Django, and many more web technologies!</p>
                                            </div>     
                                        </div>
                                      </div>
                                </div>
                                {/* Images */}
                                <div className='border p-5 border-b bg-white w-[382px] h-[457px] rounded-2xl '>
                                    <figure>
                                        <Image src={Bgimage} alt='The Image' />
                                        <figcaption className='text-center my-3 text-[20px] font-semibold'>Buy the Complete Course</figcaption>
                                         <p className='text-[30px] font-semibold text-center'>$1500</p>
                                    </figure>
                                      <div className='flex flex-col justify-center  my-3 '>
                                            <button className='w-[303px] h-[45px] rounded-[10px] border border-black  bg-Cdarkblue text-white mx-auto  hover:text-Chover' onClick={()=>setShowModal(true)}>Add to cart</button>
                                            <button className='w-[303px] h-[45px] rounded-[10px] border border-black text-black my-2 mx-auto hover:bg-Cdarkblue hover:text-white'>BuyNow</button>
                                      </div>
                                </div>  
                                                           
                     </div>
                     <div className='w-[993px] h-[173px] flex-shrink-0 text-[12px] font-normal leading-[20px] mx-4 md:mx-0'>
                        <p>Whether you want to change career paths, expand your current skill set, start your own entrepreneurial business, become a consultant, or just want to learn, this is the course for you!</p>
                        <p className='my-5'>We will teach you the latest technologies for building great web applications with Python 3 and Django! But we don't just teach that, we also teach the Front End technologies you need to know, including HTML, CSS, and Javascript. This course can be your one stop shop for everything you need! It will serve as a useful reference for many of your questions as you begin your journey in becoming a web developer!</p>
                        <p className='my-5'> This course is designed so that anyone can learn how to become a web developer. We teach you how to program by using HD Video Lectures, Walkthrough Code Projects, Exercises, Concept Presentation Slides, Downloadable Code Notes, Reading Assignments, and much more! </p>
                     </div>
                     <div className='px-6 md:p-0 my-4'>
                            <h1 className='text-[20px] font-semibold'>Who is this course for:</h1>
                              <ul className='w-[330px] md:w-[427px]  text-[12px] my-2 list-disc leading-[23px] md:mx-5'>
                                <li>Complete Beginners </li>
                                <li>Professionals looking to bridge gaps in their knowledge</li>
                                <li>Python Developers looking to get into Web Development</li>                                   
                                </ul>
                     </div>
            </div>
                           {/* Course Content */}
             <div className='bg-white '>
                        <div className='max-w-7xl container  md:mx-auto lg:px-8 overflow-hidden'>
                                <h1 className='text-[20px] font-semibold my-6'>Course Content</h1>
                                <div className='my-2 border border-Cbpink w-full md:w-[815px]'>
                                       <div className='border border-Cbpink bg-Cbpink'>
                                              <p className='m-4 text-[15px] font-medium'>Getting Started (12min)</p>
                                       </div>
                                       <div className='bg-Cbgink'>
                                           <div className='flex justify-between'>
                                                <div className='p-4 flex items-center'>
                                                  <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.1666 3.33325H5.83329C3.33329 3.33325 1.66663 4.99992 1.66663 7.49992V12.4999C1.66663 14.9999 3.33329 16.6666 5.83329 16.6666H14.1666C16.6666 16.6666 18.3333 14.9999 18.3333 12.4999V7.49992C18.3333 4.99992 16.6666 3.33325 14.1666 3.33325ZM11.575 10.8583L9.51663 12.0916C8.68329 12.5916 7.99996 12.2083 7.99996 11.2333V8.75825C7.99996 7.78325 8.68329 7.39992 9.51663 7.89992L11.575 9.13325C12.3666 9.61659 12.3666 10.3833 11.575 10.8583Z" fill="#333333"/></svg></p>
                                                  <p className='text-[14px] font-normal text-black mx-3'>1.Introduction (0.53)</p>
                                                </div>
                                                <div className='mx-3'>
                                                  <button className='text-white text-[14px] w-[95px] h-[27px] border border-blue-600 bg-blue-600 rounded-md my-5'>Preview</button>                               
                                                </div>                                               
                                           </div>                                           
                                       </div>
                                       <div className='border border-Cbpink bg-Cbpink'>
                                           <p className='m-4 text-[15px] font-medium'>HTML LEVEL BASICS</p>
                                            <div className='bg-Cbgink'>
                                             <div className='flex justify-between'>
                                                <div className='p-4 flex items-center'>
                                                  <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.1666 3.33325H5.83329C3.33329 3.33325 1.66663 4.99992 1.66663 7.49992V12.4999C1.66663 14.9999 3.33329 16.6666 5.83329 16.6666H14.1666C16.6666 16.6666 18.3333 14.9999 18.3333 12.4999V7.49992C18.3333 4.99992 16.6666 3.33325 14.1666 3.33325ZM11.575 10.8583L9.51663 12.0916C8.68329 12.5916 7.99996 12.2083 7.99996 11.2333V8.75825C7.99996 7.78325 8.68329 7.39992 9.51663 7.89992L11.575 9.13325C12.3666 9.61659 12.3666 10.3833 11.575 10.8583Z" fill="#333333"/></svg></p>
                                                  <p className='text-[14px] font-normal text-black mx-3'>1.Introduction (0.53)</p>
                                                </div>
                                                <div className='mx-3'>
                                                  <button className='text-white text-[14px] w-[95px] h-[27px] border border-blue-600 bg-blue-600 rounded-md my-5'>Preview</button>                               
                                                </div>                                               
                                           </div>                                           
                                       </div>
                                       </div>
                                </div>
                        </div>
             </div>
             <div className='bg-Cpink '>
                          <div className='text-center'>
                                <p className='text-[23px] text-Cdarkblue my-5'>Join 55709 happy students!</p>                               
                                <button className='text-white text-[16px] w-[177px] p-3 border border-blue-600 bg-blue-600 rounded-full my-2'>Enroll Now!</button>                               
                          </div>  
             </div>
       </div>
                {/* Added to cart */}
               <div>
               {showModal ? (
        <>
          <div
            className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  backdrop-blur-sm"
          >
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-[20px] font-semibold">
                    Added to Cart
                  </h3>
                  {/* <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button> */}
                   <button
                    className=""
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-8 w-8 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                     <div className='flex flex-wrap'>
                            <div className='flex basis-8/12'>
                                     <div className='flex justify-between'>
                                              <div className='border border-Cbord w-[176px]'>
                                                 <Image src={smage} alt={"The images"} className=''/>
                                              </div>
                                              <div className='flex items-center'>
                                                   <div className='mx-2'> 
                                                     <p className='w-[271px] h-[49px] text-[16px] font-semibold'>Python and Django Full Stack Web Developer Bootcamp</p>
                                                     <p className='text-[12px] font-medium mt-2 text-Ctext'>Robin Williams</p> 
                                                   </div>                                               
                                              </div>
                                              <div className='flex items-center mx-2'>
                                                  <button className='w-[123px] h-[39px] text-[14px] bg-Cdarkblue text-white border border-blue-600 '>Go to Cart</button>
                                              </div>
                                     </div>                                    
                            </div>
                            <div className='flex basis-3/12 items-center'>
                                  <div className='border border-gray-400 bg-Cbor p-5 w-[219px] h-[152px] rounded-xl'>
                                        <p className='text-[16px] font-semibold'>Total</p>
                                        <p className='text-[25px] mt-2 font-semibold'>₹ 1,500</p>
                                        <div className='flex justify-center mt-3'>
                                        <Link href={"/shoppingcart"}><button className='w-[193px] h-[37px] border border-Cdarkblue bg-Cdarkblue text-white rounded-lg' >CheckOut</button></Link>
                                        </div>
                                  </div>
                            </div>
                            <div>
                            <div className='flex basis-10/12'>                                     
                                 <div className='border border-gray-400  mt-2'>
                                    <h1 className='text-[18px] font-semibold p-3'>Similar Courses</h1>
                                     <div className='flex justify-between p-2'>
                                              <div className='border border-Ctext w-[176px]'>
                                                 <Image src={smage2} alt={"The images"} className=''/>
                                              </div>
                                              <div className='flex items-center'>
                                                   <div className='mx-2'> 
                                                     <p className='w-[271px] h-[49px] text-[16px] font-semibold'>Python coding teaching from beginner to pro</p>
                                                     <p className='text-[12px] font-medium mt-2 text-Ctext'>Robin Williams</p> 
                                                   </div>                                               
                                              </div>
                                              <div className='flex items-center mx-2'>
                                                    <button className='w-[123px] h-[39px] text-[14px] bg-Cdarkblue text-white border border-blue-600 '>ADD</button>
                                              </div>
                                     </div>
                                     <div className='flex justify-between p-2'>
                                              <div className='border border-Ctext w-[176px]'>
                                                 <Image src={smage3} alt={"The images"} className=''/>
                                              </div>
                                              <div className='flex items-center'>
                                                   <div className='mx-2'> 
                                                     <p className='w-[271px] h-[49px] text-[16px] font-semibold'>Python coding teaching from Advanced</p>
                                                     <p className='text-[12px] font-medium mt-2 text-Ctext'>Robin Williams</p> 
                                                   </div>                                               
                                              </div>
                                              <div className='flex items-center mx-2'>
                                                    <button className='w-[123px] h-[39px] text-[14px] bg-Cdarkblue text-white border border-blue-600 '>ADD</button>
                                              </div>
                                     </div> 
                                     <div className='flex justify-between p-2'>
                                              <div className='border border-Ctext w-[176px]'>
                                                 <Image src={smage4} alt={"The images"} className=''/>
                                              </div>
                                              <div className='flex items-center'>
                                                   <div className='mx-2'> 
                                                     <p className='w-[271px] h-[49px] text-[16px] font-semibold'>Python coding teaching from professional</p>
                                                     <p className='text-[12px] font-medium mt-2 text-Ctext'>Robin Williams</p> 
                                                   </div>                                               
                                              </div>
                                              <div className='flex items-center mx-2'>
                                                    <button className='w-[123px] h-[39px] text-[14px] bg-Cdarkblue text-white border border-blue-600 '>ADD</button>
                                              </div>
                                     </div> 
                                </div>
                           </div>
                       </div>
                    </div>
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
                  ) : null}
                     
              </div>
       {/* ))}    */}

    
    </>
  )
}

export default content