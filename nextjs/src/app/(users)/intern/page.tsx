"use client"
import React, { useState } from 'react'
import Images from '../../../../public/images/robot-handshake-human-background-futuristic-digital-age.jpg';
import Image from 'next/image';
import Bgimg from '../../../../public/images/35514495_green_eco_loop_leaf_check_mark.svg'
import Link from 'next/link';

function page() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const handleSubmit = () => {
    // You can add your form submission logic here.
    // For the sake of this example, I'm just setting the "isSubmitted" state to true.
    setIsSubmitted(true);
  };


  return (
    <>
      <div className='max-7-xl container mx-auto px-8'>
          <div className='flex flex-wrap'>
                <div className='flex basis-1/2 bg-Cbpink  justify-center rounded-xl'>
                      <div className=' p-4'>
                          <div className=''>
                              <h1 className='text-[40px] font-extrabold'>Internship Program</h1>
                               <p className='text-[20px] font-medium'>Title of Program</p>                          
                          </div> 
                           <div className='relative -right-52 mt-4'>                          
                                 <Image  className="block h-auto w-[400px]  rounded-xl" src={Images} alt={"Course Image"}  />
                           </div>
                            <div className='mt-4'>
                                <h1 className='text-[18px] font-semibold'>Description</h1>
                                <p className='text-[14px] w-[410px] text-justify mt-2'>Welcome to the Python and Django Full Stack Web Developer Bootcamp! In this course we cover everything you need to know to build a website using Python, Django, and many more web technologies!</p>
                            </div>
                           <div className='mt-4'>
                               <h1 className='text-[18px] font-semibold'>Scheduled Date</h1>
                                <div className='flex justify-evenly mt-3'>
                                     <div>
                                        <p>From</p>
                                        <input type='date' placeholder='text-sm'  className='w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300'/>                                
                                     </div>
                                      <div></div>
                                     <div>
                                         <p>To</p>
                                        <input type='date' placeholder='text-sm'  className='w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300'/> 
                                     </div>
                                </div>
                           </div>
                           <div className='mt-4'>
                               <h1 className='text-[18px] font-semibold'>Scheduled Time</h1>
                                <div className='flex justify-between mt-4'>
                                        <div>
                                          <div className="flex items-center mb-4">
                                              <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                              <label htmlFor="default-radio-1" className="ml-2 text-md font-semibold text-gray-900 dark:text-gray-300">9-2.00Am</label>
                                          </div>
                                        </div>
                                        <div> 
                                          <div className="flex items-center mb-4">
                                                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                <label htmlFor="default-radio-1" className="ml-2 text-md font-semibold text-gray-900 dark:text-gray-300">2.30-6.30Am</label>
                                            </div>
                                        </div>
                                </div>
                           </div> 
                           <div className='flex justify-center mt-5'>
                              {/* Old design */}
                             {/* <button  onClick={() => setIsFormVisible(!isFormVisible)} className='border p-3 bg-Chover text-white rounded-lg hover:bg-white hover:text-black hover:transition duration-700 ease-in-out'>Registered Now</button> */}
                              {/* New design */}
                             <button  onClick={() => setShowModal(true)} className='border p-3 bg-Chover text-white rounded-lg hover:bg-white hover:text-black hover:transition duration-700 ease-in-out'>Registered Now</button>
                           </div>                         
                      </div>                                      
                </div>
                {/* Modals Popup */}
                <div>
                            {showModal ? (
                                <>
                                <div
                                    className="mt-10 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-end px-3 py-2" > 
                                                                                  
                                            <button className="" type="button" onClick={() => setShowModal(false)}>
                                                <span className="bg-transparent text-black  h-8 w-8 text-2xl block outline-none focus:outline-none">
                                                ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                              {/* Registration Form */}
                                        {!isSubmitted && (
                                          <div className="relative  flex-auto  mx-3 ">  
                                                    <div className='flex justify-center'>
                                                       <h1 className='text-[18px] font-extrabold'>Registration Form</h1>
                                                    </div>                                  
                                                        <div className='p-3 space-y-3'>
                                                              <div>
                                                                  <label className='text-[16px] font-normal'>Full Name</label><br/>
                                                                  <input type='text' className='w-full p-2 border border-Cdada rounded-[5px] bg-Cdada mt-3' placeholder='Full Name'/>
                                                              </div>
                                                              <div className='flex flex-wrap justify-between'>
                                                                    <div>
                                                                      <h3>Age</h3>
                                                                      <input type='text' className='w-full md:w-60  p-2 border border-Cdada rounded-[5px] bg-Cdada mt-3' placeholder='age'/>
                                                                  </div>
                                                                    <div>
                                                                      <h3>Date of Birth</h3>
                                                                      <input type='date' className='w-full md:w-60  p-2 border border-Cdada rounded-[5px] bg-Cdada mt-3'/>
                                                                    </div>
                                                              </div>
                                                              <div className=''>
                                                                  <label className='text-[16px] font-normal'>Email Address</label><br/>
                                                                  <input type='text' className='w-full p-2 border border-Cdada rounded-[5px] bg-Cdada mt-3' placeholder='Email Address'/>
                                                              </div>
                                                                <div className=''>
                                                                    <h3>Gender</h3>
                                                                      <div className='flex justify-around mt-2'>                                         
                                                                          <div className="flex items-center mb-4">
                                                                              <input id="male" type="radio" value="male" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                                              <label htmlFor="male" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Male</label>
                                                                          </div>
                                                                          <div className="flex items-center mb-4">
                                                                              <input id="female" type="radio" value="female" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                                              <label htmlFor="female" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Female</label>
                                                                          </div>
                                                                          <div className="flex items-center mb-4">
                                                                              <input id="others" type="radio" value="others" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                                              <label htmlFor="others" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Others</label>
                                                                          </div>
                                                                      </div>
                                                                </div>                                      
                                                              <div className=''>
                                                                  <label className='text-[16px] font-normal'>Name of the College</label><br/>
                                                                  <input type='text' className='w-full p-2 border border-Cdada rounded-[5px] bg-Cdada mt-3'  placeholder='College Name'/>
                                                              </div>
                                                              <div className='flex flex-wrap justify-between'>
                                                                    <div>
                                                                      <h3>specialization</h3>
                                                                      <input type='text' className='w-full md:w-60  p-2 border border-Cdada rounded-[5px] bg-Cdada mt-3' placeholder='B.E/B.tech'/>
                                                                  </div>
                                                                    <div>
                                                                      <h3>Department</h3>
                                                                      <input type='text' className='w-full md:w-60  p-2 border border-Cdada rounded-[5px] bg-Cdada mt-3' placeholder='CSE'/>
                                                                    </div>
                                                              </div>
                                                                <div className=''>                                               
                                                                  <div className='flex justify-around mt-2'>    
                                                                    <h3>Mode of</h3>                                     
                                                                      <div className="flex items-center mb-4">
                                                                        <input  id="online" type="radio" value="online" name="mode" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                                          <label htmlFor="online" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Online</label>
                                                                      </div>
                                                                      <div className="flex items-center mb-4">
                                                                          <input disabled id="default-radio-2 " type="radio" value="" name="mode" className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                                          <label htmlFor="disabled-radio-2" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Offline</label>
                                                                      </div>                                           
                                                                  </div>
                                                                </div>
                                                              <div className='flex justify-center mt-5'>
                                                                <button onClick={handleSubmit}  className='border p-3 bg-Chover text-white rounded-lg hover:bg-white hover:text-black hover:transition duration-700 ease-in-out'>Apply Now</button>
                                                              </div>
                                                        </div>                                     
                                                  </div>
                                        )}
                                          {/* Successfully Submitted */}
                                      {isSubmitted && (
                                        <div className='flex justify-center items-center w-full'>
                                          <div className='p-4 space-y-3'>
                                          <Image  className="block h-auto w-full" src={Bgimg} alt={"Course Image"}  />
                                            <p>Your form has been successfully submitted!</p>
                                                <div className='flex justify-center mt-5'>
                                                    <Link href={'/course'}><button onClick={handleSubmit}  className='border p-3 bg-Chover text-white rounded-lg hover:bg-white hover:text-black hover:transition duration-700 ease-in-out'>Okay</button></Link> 
                                                </div>
                                          </div>
                                        </div>
                                      )}
                                        
                                    </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null} 
                          </div>
                <div className='flex basis-1/2 justify-center items-center  bg-cover bg-no-repeat bg-center' style={{backgroundImage: 'url(/images/ )'}}>
                            {/* Registration Form */}
                       {/* {isFormVisible && !isSubmitted && (
                        <div className='mt-4 flex justify-center items-center'>
                              <div className='p-4 space-y-3'>
                                   <div className='mt-2'>
                                          <h3>Full Name</h3>
                                          <input type='text' className='w-full md:w-96 p-2 border mt-2 rounded-lg bg-transparent' placeholder='Full Name'/>
                                   </div>
                                    <div className='flex justify-between'>
                                         <div>
                                            <h3>Age</h3>
                                            <input type='text' className='w-full  p-2 border mt-2 rounded-lg' placeholder='age'/>
                                         </div>
                                         <div>
                                            <h3>Date of Birth</h3>
                                            <input type='date' className='w-full  p-2 border mt-2 rounded-lg'/>
                                         </div>
                                    </div>
                                    <div className='mt-2'>
                                          <h3>Email</h3>
                                          <input type='text' className='w-full md:w-96 p-2 border mt-2 rounded-lg' placeholder='Email Address'/>
                                   </div>
                                   <div className=''>
                                     <h3>Gender</h3>
                                        <div className='flex justify-between mt-2'>                                         
                                            <div className="flex items-center mb-4">
                                                <input id="male" type="radio" value="male" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                <label htmlFor="male" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                            </div>
                                            <div className="flex items-center mb-4">
                                                <input id="female" type="radio" value="female" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                <label htmlFor="female" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                            </div>
                                            <div className="flex items-center mb-4">
                                                <input id="others" type="radio" value="others" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                <label htmlFor="others" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others</label>
                                            </div>
                                        </div>
                                  </div>
                                  <div className='mt-2'>
                                          <h3>Name of College</h3>
                                          <input type='text' className='w-full md:w-96 p-2 border mt-2 rounded-lg' placeholder='College Name'/>
                                   </div>
                                   <div className='flex justify-between'>
                                         <div>
                                            <h3>specialization</h3>
                                            <input type='text' className='w-full  p-2 border mt-2 rounded-lg' placeholder='B.E/B.tech'/>
                                         </div>
                                         <div>
                                            <h3>Department</h3>
                                            <input type='text' className='w-full  p-2 border mt-2 rounded-lg' placeholder='CSE'/>
                                         </div>
                                    </div>
                                    <div className=''>
                                     <h3>Mode of</h3>
                                        <div className='flex justify-evenly mt-2'>                                         
                                            <div className="flex items-center mb-4">
                                                <input  id="online" type="radio" value="online" name="mode" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                <label htmlFor="online" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Online</label>
                                            </div>
                                            <div className="flex items-center mb-4">
                                                <input disabled id="default-radio-2 " type="radio" value="" name="mode" className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                <label htmlFor="disabled-radio-2" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Offline</label>
                                            </div>                                           
                                        </div>
                                  </div>
                                  <div className='flex justify-center mt-5'>
                                    <button onClick={handleSubmit}  className='border p-3 bg-Chover text-white rounded-lg hover:bg-white hover:text-black hover:transition duration-700 ease-in-out'>Send</button>
                                  </div>
                              </div>
                           
                        </div>
                      )}  */}
                         {/* Successfully Submitted */}
                     {/* {isSubmitted && (
                      <div className='mt-4 flex justify-center items-center'>
                        <div className='p-4 space-y-3'>
                        <Image  className="block h-auto w-full" src={Bgimg} alt={"Course Image"}  />
                          <p>Your form has been successfully submitted!</p>
                        </div>
                      </div>
                    )}  */}
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
                            <div className='mx-5 md:mx-0 '>
                                  <h1 className='text-[20px] font-semibold '>Requirments</h1>
                                    <div className='w-[577px] font-normal leading-[20px] text-[12px]'>
                                      <p>A computer with an internet connection and download privileges. Whether you want to change career paths, expand your current skill set, start your own entrepreneurial business, become a consultant, or just want to learn, this is the course for you!</p>
                                      <p>Whether you want to change career paths, expand your current skill set, start your own entrepreneurial business, become a consultant, or just want to learn, this is the course for you!</p>
                                      <p className='my-5'>We will teach you the latest technologies for building great web applications with Python 3 and Django! But we don't just teach that, we also teach the Front End technologies you need to know, including HTML, CSS, and Javascript. This course can be your one stop shop for everything you need! It will serve as a useful reference for many of your questions as you begin your journey in becoming a web developer!</p>
                                      <p className='my-5'> This course is designed so that anyone can learn how to become a web developer. We teach you how to program by using HD Video Lectures, Walkthrough Code Projects, Exercises, Concept Presentation Slides, Downloadable Code Notes, Reading Assignments, and much more! </p>
                                    </div>     
                            </div>
                            <div className='mx-5 md:mx-0 '>
                                <h1 className='text-[20px] font-semibold'>Who is this course for:</h1>
                                  <ul className='w-[330px] md:w-[427px]  text-[12px] my-2 list-disc leading-[23px] md:mx-5'>
                                    <li>Complete Beginners </li>
                                    <li>Professionals looking to bridge gaps in their knowledge</li>
                                    <li>Python Developers looking to get into Web Development</li>                                   
                                  </ul>   
                                </div>                   
                      </div>
                        
                </div>
                
          </div>
      </div>
    </>
  )
}

export default page