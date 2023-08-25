"use client"
import React from 'react'
import Image from 'next/image'
import img from '../../../../public/images/Rectangle 23 (1).png'
import img1 from '../../../../public/images/programmer 1.png'
import img2 from '../../../../public/images/programmer 2.png'
import img3 from '../../../../public/images/user-completion 1.png'
import img4 from '../../../../public/images/sell-graph 2.png'
import img5 from '../../../../public/images/info (1) 1.png'




function header() {
    const [showModal, setShowModal] = React.useState(false);
  return (
    <> 
        <div className='w-[1128px] bg-Cbgink'>
            {/* sections1 */}
            <div className='w-[1071px] border bg-white rounded-[35px]'>
                  <div className='flex flex-wrap'>
                        <div className='flex basis-1/2 '>
                              <div className='flex justify-between items-center'>
                                     <div>
                                         <Image src={img} alt='The image'/>
                                     </div>
                                     <div className='flex items-center border-r p-3'>
                                        <div className='mx-5 space-y-2 '>
                                                <p className='text-[17px] font-normal font-Cttxt'>UI/UX Course</p>
                                                <p className='text-[20px] font-normal w-[299px] h-[60px]'>Python coding teaching from beginner to pro</p>
                                                <p className='text-[17px] font-normal w-[184px] h-[26px] font-Cttxt'>9h 20 min  .  14 Lesson</p>
                                        </div>
                                     </div>
                              </div>
                        </div>
                        <div  className='flex basis-1/2 items-center'>
                              <div className='flex flex-col w-full'>
                                        <div className='flex flex-row justify-around my-3'>
                                            <div className='flex flex-wrap '>
                                                <div className=''>
                                                    <Image src={img1} alt='The image'/>
                                                </div>
                                                <div className='ml-2'>
                                                    <p className='text-[25px] text-bgbl'>254</p>
                                                    <p className='text-[12px]'>Students Enrolled</p>
                                                </div>
                                           </div>
                                             <div className='flex flex-wrap'>
                                                <div  >
                                                  <Image src={img2} alt='The image'/>
                                                </div>
                                                <div className='ml-2'>
                                                    <p className='text-[25px] text-bgbl'>50</p>
                                                    <p className='text-[12px]'>Total Sales</p>
                                                </div>
                                             </div>                                        
                                        </div>
                                        <div className='flex flex-wrap justify-evenly border-t '>
                                            <div className='my-3'>
                                                  <div className='px-3 border-r'>
                                                      <span className='text-[14px]'>Instructor Name:</span><br/>
                                                      <span className='text-[17px] text-bgbl mt-2'>John Doe</span>
                                                  </div>
                                            </div>
                                            <div className='my-3'>
                                                <div className='px-3 border-r'>
                                                      <span className='text-[14px]'>Publish On:</span><br/>
                                                      <span className='text-[17px] text-bgbl mt-2'>15th Jun 2023</span>
                                                  </div>
                                            </div>
                                            <div className='my-3'>
                                                <p>Change Status:</p>
                                                 <div className='flex justify-between mt-2'>
                                                     <div>
                                                         <div className='w-[62px] h-[23px] border border-green-500 bg-green-500 rounded-[15px]'></div>
                                                     </div>
                                                     <div className='flex items-end'><p className='text-[13px]'>Active</p></div>
                                                 </div>
                                            </div>        
                                        </div>
                              </div>
                        </div>
                  </div>
            </div>
            {/* Section2 */}
             <div className='flex space-x-5 mt-3'>
                    <div className='flex basis-7/12 border bg-white rounded-[35px]'>
                          <div className='p-3'>
                                <h1 className='text-[16px] font-medium'>Course Completion Status</h1>
                                <div>
                                    <Image src={img3} alt={'The images'}/>
                                </div>
                          </div>
                    </div>
                    <div className='flex basis-4/12 border bg-white rounded-[35px]'>
                          <div className='p-3'>
                                <h1 className='text-[16px] font-medium'>Sell Overview</h1>
                                <div>
                                    <Image src={img4} alt={'The images'}/>
                                </div>
                          </div>
                    </div>
             </div>
             {/* Sections3 */}
             <div className='border bg-white mt-2 rounded-[35px] w-[1071px]'>
                    <div className='flex justify-between p-3'>
                           <div className='text-[16px] font-medium px-2'>Course Content</div>
                           <div>
                               <div className='px-3'>
                                   <Image src={img5} alt='The images'   onClick={() => setShowModal(true)}/>
                               </div>
                           </div>
                    </div>
                     <div>
                     <div className='my-2  w-full p-2'>
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
        </div>     
               {/*Modal*/}
               <div>
               {showModal ? (
        <>
          <div
            className=" flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-7xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-[20px] font-semibold">
                  Course Description
                  </h3>
                  <button
                    className="p-1 ml-auto  border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                     x
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                      <div className='px-2'>
                             <h1 className='text-[16px] font-semibold'>What You’ll Learn</h1>
                             <div className='w-[427px]  text-[12px] font-normal'>
                                  <ul className='list-disc px-4'>
                                    <li>Create a fully functional web site using the Full-Stack with Django 1.11</li>
                                    <li>Use CSS to create beautifully styled sites</li>
                                    <li>Use Javascript to interact with sites on the Front-End </li>
                                    <li>Understand HTTP requests</li>
                                    <li>Learn the power of Python to code out your web applications</li>
                                    <li>Implement a full Models-Views-Templates structure for your site</li>
                                    <li>Use CSS to create beautifully styled sites</li>
                                    <li>Use Javascript to interact with sites on the Front-End</li>
                                 </ul>
                             </div>
                             <div className='mt-3'>
                                    <h1 className='text-[16px] font-semibold'>Requirements</h1>
                                    <div className='my-3 w-[1024px] h-[40px] '>
                                        <p className='text-[12px] font-normal'>A computer with an internet connection and download privileges. Whether you want to change career paths, expand your current skill set, start your own entrepreneurial business, become a consultant, or just want to learn, this is the course for you!</p>
                                    </div>
                             </div>
                             <div className=''>
                                    <h1 className='text-[16px] font-semibold'>Description</h1>
                                    <div className='my-3 w-[1024px]  '>
                                        <p className='text-[12px] font-normal'>Welcome to the Python and Django Full Stack Web Developer Bootcamp! In this course we cover everything you need to know to build a website using Python, Django, and many more web technologies!</p>
                                        <p className='text-[12px] font-normal mt-4'> Whether you want to change career paths, expand your current skill set, start your own entrepreneurial business, become a consultant, or just want to learn, this is the course for you!</p>
                                        <p className='text-[12px] font-normal mt-4'>  We will teach you the latest technologies for building great web applications with Python 3 and Django! But we don't just teach that, we also teach the Front End technologies you need to know, including HTML, CSS, and Javascript. This course can be your one stop shop for everything you need! It will serve as a useful reference for many of your questions as you begin your journey in becoming a web developer! This course is designed so that anyone can learn how to become a web developer.</p>
                                        <p className='text-[12px] font-normal mt-4'>   This course is designed so that anyone can learn how to become a web developer. We teach you how to program by using HD Video Lectures, Walkthrough Code Projects, Exercises, Concept Presentation Slides, Downloadable Code Notes, Reading Assignments, and much more!</p>                                    
                                    </div>
                             </div>
                             <div>
                                <h1 className='text-[16px] font-semibold'>Who is this course for:</h1>
                                <div className='w-[427px]  text-[12px] font-normal'>
                                    <ul className='list-disc px-4'>
                                        <li>Complete Beginners</li>
                                        <li> Professionals looking to bridge gaps in their knowledge</li>
                                        <li> Python Developers looking to get into Web Development</li>
                                    </ul>
                                </div>
                             </div>
                      </div>
                </div>
                {/*footer*/}
             
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}      
               </div>
    </>
  )
}

export default header