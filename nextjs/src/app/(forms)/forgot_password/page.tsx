import Link from 'next/link'
import React from 'react'

function fp() {
  return (
    <>
          <div className=' bg-Cblue  overflow-hidden'>
                <div className='flex justify-center '>
                        <h1 className='text-[35px] font-bold my-2'><span className='text-white'>DEV</span><span>SKILL.</span></h1>
                </div>
          </div> 
          <div className=' bg-Cwhites min-h-screen my-5'>
                    <div className='max-w-md mx-auto  p-4 border border-Cgray bg-white'>
                          <h1 className='text-[28px] font-medium text-center'>Forgot Password</h1>
                           <div className='m-4'>
                             <p className='text-[15px] font-normal '>Reset your password by providing your account email below.</p>
                             <div className='mt-3' >
                                   <label htmlFor="email" className='text-[15px] font-medium'>Email</label><br/>
                                   <input type='email' name='email' className='mt-2 border border-Cborder rounded-md bg-white w-full  md:w-96 p-3'/><br/> 
                                 <div className='my-3'>
                                    <Link href={"/checkEmail"}><button className='w-full  md:w-[369px] h-[51px] text-center text-white bg-Cblue rounded-full md:mx-2'>Next</button></Link>
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

export default fp 