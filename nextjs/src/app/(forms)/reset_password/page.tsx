import Link from 'next/link'
import React from 'react'

function resetPassword() {
  return (
    <>
             <div className=' bg-Cblue  overflow-hidden'>
                <div className='flex justify-center '>
                        <h1 className='text-[35px] font-bold my-2'><span className='text-white'>DEV</span><span>SKILL.</span></h1>
                </div>
          </div> 
          <div className=' bg-Cwhites min-h-screen py-5'>
                    <div className='max-w-md mx-auto  p-4 border border-Cgray bg-white '>
                          <h1 className='text-[28px] font-medium text-center'>Reset Password</h1>
                           <div className='m-4'>
                             <div className='mt-3 ' >
                                   <label htmlFor="pwd" className='text-[15px] font-medium'>New Password</label><br/>
                                   <input type='text' name='pwd' className='mt-2 border border-Cborder rounded-md bg-white w-full  md:w-96 p-3'/><br/>
                                   <div className='my-3'>
                                   <label htmlFor="pwd" className='text-[15px] font-medium '>Reset Password</label><br/>
                                   <input type='text' name='rpwd' className='mt-2 border border-Cborder rounded-md bg-white w-full  md:w-96 p-3'/><br/>
                                   </div>  
                                 <div className='my-3'>
                                    <Link href={"/checkEmail"}><button className='w-full  md:w-[369px] h-[51px] text-center text-white bg-Cblue rounded-full md:mx-2'>Submit</button></Link>
                                </div>                                                
                             </div>
                           </div>
                    </div>
                <div className='flex justify-center'>
                        <h1 className='text-[15px] font-normal my-2'>&copy; Techitist.All rights reserved.</h1>
                </div>
          </div> 
    </>
  )
}

export default resetPassword