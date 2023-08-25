import React from 'react'
import img from '../../../../public/images/Ellipse 41.svg'
import img2 from '../../../../public/images/online-video 1.png'
import img3 from '../../../../public/images/online-video 2.png'
import img4 from '../../../../public/images/4.png'
import img5 from '../../../../public/images/5.png'
import img6 from '../../../../public/images/6.png'
import Image from 'next/image';
import Link from 'next/link';





function sample() {
  return (
    <> 
          <div className='w-[1128px] h-[900px] overflow-hidden bg-Cbpink'>
              {/* <div className='flex flex-wrap'>
                      <div className='flex '>
                      <div className='w-[238px] h-[1015px] bg-Cbgg'>
                        <div className='flex justify-center text-[35px] font-semibold px-2 border-b border-Cbord' >
                          <span className='text-Cblue'>DEV</span>
                          <span className='text-white'>SKILL</span>
                          <span className='text-Cblue'>.</span>
                        </div>
                    <div className='my-4 '>
                            <div className='flex justify-center '>
                              <div className='py-4'>
                                 <Link href={"#"}><div className='flex flex-wrap py-4'>
                                      <div><Image src={dashboard1} alt='The Image'/></div>
                                      <div className='px-4'><p className='text-[15px] font-medium text-Cttxt '>Dashboard</p></div>  
                                 </div></Link>
                                 <Link href={"#"}><div className='flex flex-wrap py-4'>
                                      <div><Image src={dashboard2} alt='The Image'/></div>
                                      <div className='px-4'><p className='text-[15px] font-medium text-Cttxt '>Courses</p></div>  
                                 </div></Link>
                                 <Link href={"#"}><div className='flex flex-wrap py-4'>
                                      <div><Image src={dashboard3} alt='The Image'/></div>
                                      <div className='px-4'><p className='text-[15px] font-medium text-Cttxt '>Users</p></div>  
                                 </div></Link>
                                 <Link href={"#"}><div className='flex flex-wrap py-4 '>
                                      <div><Image src={dashboard4} alt='The Image'/></div>
                                      <div className='px-4'><p className='text-[15px] font-medium text-Cttxt '>Instrutors</p></div>  
                                 </div></Link>
                                 <Link href={"#"}><div className='flex flex-wrap py-4 '>
                                      <div><Image src={dashboard5} alt='The Image'/></div>
                                      <div className='px-4'><p className='text-[15px] font-medium text-Cttxt '>Payments</p></div>  
                                 </div></Link>
                                 <Link href={"#"}><div className='flex flex-wrap py-4 '>
                                      <div><Image src={dashboard6} alt='The Image'/></div>
                                      <div className='px-4'><p className='text-[15px] font-medium text-Cttxt '>settings</p></div>  
                                 </div></Link>
                               </div>
                            </div>
                    </div>                
                       </div>
                      </div>
                      <div className='flex '>

                        <div className=' flex justify-between '>
                           <div className='flex p-4'>  
                              <div className='mx-'>
                                <h1 className='text-[20px] font-semiboldbold flex items-center'>Dashboard</h1>
                              </div>                            
                              <div className='mx-9 relative'>
                                <input type='search' placeholder='Find a Course' className='w-96 px-3 border border-Cborder  bg-Cbgink rounded-[10px] '/>
                                  <div className='absolute right-4 top-2'>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                      </svg>
                                  </div>
                              </div>
                           </div>                         
                           <div>
                                <h1></h1>
                          </div>
                        </div>  
                    </div>
              </div> */}
              <div className='flex flex-wrap justify-between border bg-white rounded-[35px] p-4 w-[1071px] h-auto'>
                      <div className='flex flex-wrap'>
                           <div>
                              <Image src={img} alt='The image'/>
                           </div>
                           <div className='mt-3 mx-7'>
                              <p className='text-[20px] font-medium'>Benjamin Samuel</p>
                               <div className='text-[12px] font-normal w-[145px] h-[20px] mt-2'>
                                  <p>benjamin@gmail.com</p>
                                  <p>+ 1234567890</p>
                                  <p>Texas, United States</p>
                               </div>                            
                           </div>
                      </div>
                      <div className='flex flex-col border-l items-center px-10 my-auto'>
                          <div className=''>
                              <Image src={img2} alt='The image'/>    
                          </div>
                          <div className='flex '>
                                   <p className='text-[25px] text-Chover'>5</p>
                                   <p className='mx-2 text-[14px] flex items-center'>Courses Enrolled </p>
                          </div>
                      </div>
                      <div className='flex flex-col border-l  items-center px-10 my-auto'>
                          <div>
                              <Image src={img3} alt='The image'/>                        
                          </div>
                          <div className='flex '>
                                   <p className='text-[25px] text-Chover'>3</p>
                                   <p className='mx-2 text-[14px] flex items-center'>Certificated Completed</p>
                          </div>
                      </div>
              </div>
              <div className='m-3 border bg-white rounded-[10px] w-[1071px] h-[649px]'>
                    <div className='border border-b'>
                       <h1 className='text-[18px] font-normal p-3'>Course Enrolled</h1>
                    </div>
                    <div>
                    <div className='flex flex-wrap m-2 space-x-3'>
                        <div className='flex basis-[231px]  '>
                              <div className=''>
                                <Image src={img4} alt="The Image" className='w-full'/>
                                  <div className='bg-Cborde h-[149px]  rounded-b-[35px]' >
                                      <div className='mx-4 space-y-3 '>
                                            <p className='text-[14px] font-normal font-Cttxt'>UI/UX Course</p>
                                            <p className='text-[12px] font-normal w-[191px] h-[34px]'>Python coding teaching from beginner to pro</p>
                                            <p className='text-[12px] font-normal w-[163px] h-[16px] font-Cttxt'>9h 20 min  .  14 Lesson</p>
                                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                              <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 w-[45%]" ></div>
                                              <div className="mb-1 text-base  dark:text-white W-[148px] h-[27px]"><span className='text-[14px] font-bold'>50%</span><span className='text-[9px]'>COMPLETED</span></div>
                                            </div>
                                      </div>
                                  </div>
                              </div>

                        </div>
                        {/* Course-2 */}
                        <div className='flex basis-[231px]  '>
                              <div className=''>
                                <Image src={img5} alt="The Image" className='w-full'/>
                                  <div className='bg-Cborde h-[149px]  rounded-b-[35px]' >
                                      <div className='mx-4 space-y-3 '>
                                            <p className='text-[14px] font-normal font-Cttxt'>UI/UX Course</p>
                                            <p className='text-[12px] font-normal w-[191px] h-[34px]'>Python coding teaching from beginner to pro</p>
                                            <p className='text-[12px] font-normal w-[163px] h-[16px] font-Cttxt'>9h 20 min  .  14 Lesson</p>
                                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                              <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 w-[72%]" ></div>
                                              <div className="mb-1 text-base  dark:text-white W-[148px] h-[27px]"><span className='text-[14px] font-bold'>72%</span><span className='text-[9px]'>COMPLETED</span></div>
                                            </div>
                                      </div>
                                  </div>
                              </div>

                        </div>
                        {/* Course-3 */}
                        <div className='flex basis-[231px]  '>
                              <div className=''>
                                <Image src={img6} alt="The Image" className='w-full'/>
                                  <div className='bg-Cborde h-[149px]  rounded-b-[35px]' >
                                      <div className='mx-4 space-y-3 '>
                                            <p className='text-[14px] font-normal font-Cttxt'>UI/UX Course</p>
                                            <p className='text-[12px] font-normal w-[191px] h-[34px]'>Python coding teaching from beginner to pro</p>
                                            <p className='text-[12px] font-normal w-[163px] h-[16px] font-Cttxt'>9h 20 min  .  14 Lesson</p>
                                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                              <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 w-[90%]" ></div>
                                              <div className="mb-1 text-base  dark:text-white W-[148px] h-[27px]"><span className='text-[14px] font-bold'>90%</span><span className='text-[9px]'>COMPLETED</span></div>
                                            </div>
                                      </div>
                                  </div>
                              </div>

                        </div>
                   </div>
                   </div>
              </div>
              <div className='flex justify-center'>
                            <p className='text-[12px] font-normal'>&copy;2023 Techtist. All rights reserved.</p>
              </div>
         </div>
    
    </>
  )
}

export default sample