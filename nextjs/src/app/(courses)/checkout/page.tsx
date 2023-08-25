"use client"
import React from 'react'
import Image from 'next/image';
import pay1  from '../../../../public/images/paypal 1.png'
import pay2  from '../../../../public/images/card 1.png'
import pay3  from '../../../../public/images/visa 1.png'
import pay4  from '../../../../public/images/success 1.png'
import Link from 'next/link';

function checkOut() {
    const [showModal, setShowModal] = React.useState(false);
    const [showSucess, setSucess] = React.useState(false);
  return (
    <>
         <div>
            <div className='max-w-7xl container mx-auto lg:px-8 overflow-hidden my-4'>
                 <h1 className='text-[25px] font-semibold '>Checkout</h1>
                  <div className='my-3 p-4'>
                      <h1 className='text-[20px] font-semibold mb-3'>Order Summary</h1>
                      <div className='border-y border-Cborde p-3'>
                          <div className=''>
                                 <div className='flex justify-between'>
                                      <div className=''>
                                          <p className='text-[16px] font-medium'>Subtotal</p>
                                          <p className='text-[16px] font-medium my-2'>Discount</p>   
                                      </div>
                                      <div className=''>
                                         <p className='text-[16px] font-medium'>$1500</p>
                                        <p className='text-[16px] font-medium my-2'>$0</p>
                                      </div>
                                 </div>
                          </div>
                      </div>
                      <div className=''>
                                 <div className='flex justify-between p-3'>
                                      <div className=''>
                                          <p className='text-[20px] font-medium'>Total</p>
                                      </div>
                                      <div>
                                         <p className='text-[25px] font-medium'>$1500</p>
                                      </div>
                                 </div>
                    </div>
                 </div>
                 <div className='border bg-Cbgs rounded-[15px] py-6 '>
                       <h1  className='text-[20px] font-semibold px-3 mx-10'>Select Your Payment Option</h1>
                        <div>
                        <div className="flex justify-evenly px-4 mt-8">
                            <div className="flex  mr-4">
                                <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-[25px] h-[25px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="inline-radio" className="w-[106px] h-[106px] -mt-10 mx-5"><Image src={pay1} alt="The Image"/></label>
                            </div>
                            <div className="flex  mr-4">
                                <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-[25px] h-[25px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="inline-2-radio" className=" mx-5 text-sm font-medium  -mt-2 text-gray-900 dark:text-gray-300"><Image src={pay2} alt="The Image"/></label>
                            </div>
                            <div className="flex  mr-4">
                                <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-[25px] h-[25px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="inline-checked-radio" className="ml-2 w-[106px] h-[106px] -mt-9 mx-5"><Image src={pay3} alt="The Image"/></label>
                            </div>
                            </div>
                        </div>
                 </div>
                 <div className='flex justify-center my-5'>
                        <button className='text-white text-[14px] font-semibold border bg-Cdarkblue p-3 rounded-[10px]'     onClick={() => setShowModal(true)}>Proceed Payment</button>
                 </div>
            </div>
       </div>
                {/* Modals popup */}
                <div>
   
                    {showModal ? (
                        <>
                        <div
                            className="mt-10 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-end p-5">
                                
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
                                <div className="relative  flex-auto mx-3">
                                      <div className='p-3'>
                                            <div>
                                                <label className='text-[16px] font-normal'>Name on the Card</label><br/>
                                                <input type='text' className='w-full p-2 border border-Cdada rounded-[5px] bg-Cdada mt-3'/>
                                            </div>
                                            <div className='my-4'>
                                                <label className='text-[16px] font-normal'>Card Number</label><br/>
                                                <input type='text' className='w-full p-2 border border-Cdada rounded-[5px] bg-Cdada mt-3'/>
                                            </div>
                                            <div className='flex flex-wrap justify-between'>
                                                    <div>
                                                        <label className='text-[16px] font-normal'>Expiration</label><br/>
                                                        <input type='text' className='w-80 p-2 border border-Cdada rounded-[5px] bg-Cdada mt-3'/>
                                                    </div>
                                                    <div className=''>
                                                        <label className='text-[16px] font-normal'>CVV</label><br/>
                                                        <input type='text' className='w-80 p-2 border border-Cdada rounded-[5px] bg-Cdada mt-3'/>
                                                    </div>
                                            </div>
                                            <div className='flex justify-center my-5'>
                                           <button className='text-white text-[14px] font-semibold border bg-Cdarkblue p-3 rounded-[10px]'     onClick={() => setSucess(true)}>Confirm Payment</button>
                                            </div>
                                      </div>                                     
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null} 
                </div>
                {/* Modal-2 */}
                <div>
   
                    {showSucess ? (
                        <>
                        <div
                            className="mt-10 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-end p-5">                               
                                <button
                                        className=""
                                        type="button"
                                        onClick={() => setSucess(false)}
                                    >
                                        <span className="bg-transparent text-black  h-8 w-8 text-2xl block outline-none focus:outline-none">
                                        ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative  flex-auto mx-3">
                                        <div className='flex justify-center'>
                                                  <figure>
                                                    <Image src={pay4} alt='The Image'/>
                                                    <figcaption className='text-[20px] font-semibold'>Successful Payment!</figcaption>
                                                  </figure>                                                                                                 
                                        </div>     
                                        <div className='flex justify-center items-center mt-4'>
                                             <p className='w-[481px] h-[72px] text-[15px] font-normal text-center'>Fusce egestas ante eu porta dignissim. Donec at nisi in lectus lobortis consequat vitae sed velit</p>  
                                         </div>   
                                       <div className='flex justify-center mb-10'>
                                       <Link href={"/admin"}> <button className='text-white text-[14px] font-semibold border bg-Cdarkblue  rounded-[10px] w-[193px] h-[40px]'     onClick={() => setSucess(true)}>Go to learning</button></Link>
                                       </div>                                    
                                </div>
                                
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

export default checkOut