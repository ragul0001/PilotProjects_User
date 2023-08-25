import Link from 'next/link'
import React from 'react'

function checkEmail
() {
  return (
    <>
       <div className=' bg-Cblue  overflow-hidden'>
                <div className='flex justify-center '>
                        <h1 className='text-[35px] font-bold my-2'><span className='text-white'>DEV</span><span>SKILL.</span></h1>
                </div>
          </div> 
          <div className=' bg-Cwhites min-h-screen my-5'>
                    <div className='max-w-md mx-auto  p-4 border border-Cgray bg-white'>
                          <h1 className='text-[28px] font-medium text-center'>Check your email</h1>
                           <div className='m-4'>
                             <p className='text-[15px] font-normal '>You'll receive a link in the email you supplied that will enable you to reset your account password.</p>
                             <div className='mt-3' >
                                  <h1 className='text-[15px] font-extrabold text-black'>skumar@techtist.com</h1>
                                  <p className='text-[15px] font-normal my-4'>if you don't see the email, check other places it might be, like your junk, spam, social, or other folders.</p>                                              
                             </div>
                             <div className='my-6'>
                                   <Link href={"/reset_password"}> <button className='w-full  md:w-[369px] h-[51px] text-center text-white bg-Cblue rounded-full md:mx-5'>Resend Email</button></Link>
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

export default checkEmail
