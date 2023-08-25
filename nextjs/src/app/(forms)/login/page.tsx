"use client"
import React, { useState } from 'react'
import loginImage from '../../../../public/images/login-bg 1.png';
import loginImage2 from '../../../../public/images/Login-banner.png';
import Image from "next/image";
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from 'next/navigation'


function login() {
     const initialState={email:"",pwd:""}
     const [states,setState]=useState(initialState);
     const router = useRouter();

     const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setState({ ...states, [name]: value }) 
    }
    const handleSubmit=(e: { preventDefault: () => void; })=>{
        e.preventDefault();
        if(states.email==="test@gmail.com" && states.pwd==="test"){
          console.log("Login credentials are correct");
          alert("Successfully logined")
          router.push('/viewCourse');
        }
    }
  return (
    <>  
            {/* <div className='bg-Cpink'>
              <div className=''>
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                    <div className='flex flex-wrap border border-white   '>
                                    <div className='flex basis-1/2 -mt-32 bg-Cprimary  w-screen h-screen rounded-br-[200px] origin-bottom -rotate-12 '>                                                                  
                                              <div className='relative'>
                                                  <figure className='relative -bottom-24 -right-48 ' >
                                                      <Image src={loginImage} alt='The image' className='w-[697px] h-[823px]  '/>
                                                      <p className='origin-top-right rotate-12 text-[35px] font-extrabold md:-ml-14'><span className='text-white'>Find your course.</span> Change your life.</p>
                                                  </figure>
                                              </div>
                                    </div>
                                  <div className='flex flex-wrap basis-1/2 items-center'>
                                     <div>
                                      <h1 className='text-[35px] text-Cblue font-bold absolute top-16'><span>DEV</span><span className='text-black'>SKILL.</span> </h1>
                                          <h1 className='text-[28px] font-medium'>Login</h1>
                                          <div className='mt-3'>
                                                <label htmlFor="email" className='text-[15px] font-medium'>Email</label><br/>
                                                <input type='text' name='email' className='mt-2 border border-Cborder rounded-md bg-white w-96 p-3'/><br/>
                                          </div>
                                          <div className='mt-3 relative'>
                                                <label htmlFor="email" className='text-[15px] font-medium'>Password</label><br/>
                                                <input type='text' name='email' className='mt-2 border border-Cborder rounded-md bg-white w-96 p-3'/>
                                                 <div className='absolute bottom-3 right-2'>
                                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                 </div>
                                          </div>
                                          <div className='flex justify-between mt-4'>                                              
                                                  <div className="flex items-center">
                                                     <input id="link-checkbox" type="checkbox" value="" className="w-[15px] h-[15px] text-blue-600 bg-Cprimary border-gray-300 rounded focus:bg-Cprimary dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                    <label htmlFor="link-checkbox" className="ml-2 text-[13px] font-medium text-gray-900 dark:text-gray-300">Remember Me</label>
                                                  </div>
                                               <div className="">
                                                    <p className='text-[13px] text-Cblue font-normal'>Forgot password</p>
                                                 </div>                                                
                                          </div>
                                            <div className='flex justify-center mt-3 '>
                                                  <button className='w-[369px] h-[51px] text-[20px] font-medium flex-shrink-0 bg-Cblue text-white rounded-full'>Login</button>                                            
                                             </div>
                                             <p className='text-[14px] font-normal  text-center mt-3'>Don't have an account <span className='text-Chover'>Signup</span></p>
                                     </div>
                                  </div>
                     </div>
                  </div> 
              </div>
            </div>   */}
            <div className='bg-Cpink '>
              <div className='max-w-7xl container mx-auto lg:px-8 h-screen overflow-hidden '>
               {/* <div className='absolute -z-30 w-screen h-screen bg-Cprimary rounded-br-[200px] origin-bottom -rotate-12 -translate-x-1/4 '></div>   */}
                  <div className=''></div>
                    <div className='flex flex-wrap  '>                                                                                                     
                                  <div className='flex basis-1/2 '>
                                         <figure className=' mx-auto hidden md:block' >
                                                <Image src={loginImage2} alt='The image' className=''/>
                                               {/* <p className=' lg:text-[22px] lg:ml-4 xl:text-[34px] font-extrabold '><span className='text-white'>Find your course.</span> Change your life.</p> */}
                                          </figure>                                                                         
                                  </div>                       
                                  <div className='flex basis-1/2 mx-auto items-center '>                                 
                                  <div>
                                     <h1 className='text-[35px] font-semibold my-3'><span className='text-Cblue'>DEV</span><span>SKILLS.</span></h1>
                                    <div className='border border-Cwhite bg-Cwhites px-2 rounded-md '  >
                                           <div className='hidden md:block'>
                                             <h1 className=' text-[28px] font-medium text-black'>Login </h1>
                                           </div>
                                           <div className=' md:hidden bg-Cblue flex rounded-l-[100px]'>
                                               <div className='flex '>
                                                    <div>
                                                      <Image src={loginImage} alt='The image' className='w-40 h-40 items-center'/>
                                                    </div>
                                                     <div className='flex  items-center'>
                                                        <h1 className='text-[30px] text-Cwhites font-extrabold'>Login</h1>
                                                       
                                                     </div>
                                          
                                               </div>                                           
                                           </div>
                                         <form className='max-w-md  p-3' onSubmit={handleSubmit} >
                                                <div className='my-3'>
                                                    <label htmlFor="email" className='text-[15px] font-normal'>Email</label><br/>
                                                    <input type="email" name='email' onChange={handleChange} className='rounded-md border border-Cborder bg-white p-3 w-80 md:w-96' />
                                                </div>
                                                <div className='my-3 relative'>
                                                    <label htmlFor="pwd" className='text-[15px] font-normal'>Password</label><br/>
                                                    <input type="text" name='pwd' onChange={handleChange} className='rounded-md border border-Cborder bg-white p-3 w-80 md:w-96' />
                                                    <div className='absolute  bottom-3 right-2'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                        
                                         <div className='flex justify-between my-4 mx-2'>                                              
                                          <div className="flex items-center">
                                            <input id="link-checkbox" type="checkbox" value="" className="w-[15px] h-[15px] text-blue-600 bg-Cprimary border-gray-300 rounded focus:bg-Cprimary dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="link-checkbox" className="ml-2 text-[13px] font-medium text-gray-900 dark:text-gray-300">Remember Me</label>
                                          </div>
                                          <div className="">
                                          <Link href={"/forgot_password"}><p className='text-[13px] text-Cblue font-normal'>Forgot password</p></Link>
                                          </div>                                                
                                          </div> 
                                         <div className='flex justify-center my-4 '>
                                                  <button className='w-full md:w-[369px] h-[51px] text-[20px] font-medium flex-shrink-0 bg-Cblue text-white rounded-full' >Login</button>                                            
                                        </div>
                                        <p className='text-[14px] font-normal  text-center mt-3'>Don't have an account? <Link href={'/signUp'}><span className='text-Chover'>signUp </span></Link></p>
                                   </form>
                                  </div>
                                    
                                    <h1 className='text-[15px] text-black font-normal text-center  m-5'>&copy; Techitist.All rights reserved.</h1>
                                </div>
                            </div>
                     </div>
                  </div> 
            </div>  
            
            
    </>
  )
}

export default login