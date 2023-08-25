"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";
import Profiles from "../../../../public/images/profile-user 1.png";
import smage from '../../../../public/images/Rectangle 41.png'
import smage1 from '../../../../public/images/Rectangle 91.png'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

function cart() {
    const [navbar, setNavbar] = useState(false);
    const [showModal, setShowModal] = React.useState(false);
    // const menu=['My Courses','My Cart','My Profiles','Logout'];
    const view=useSelector((state:any)=>state.gridDetails.content_Details)
    const dispatch=useDispatch();
    const [selectedOption, setSelectedOption] = useState("Revenue Daily");
  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value);
    };
    const menu=[
        {Image:require('../../../../public/images/user 1.png'),name:"Shankar Kumar",email:"skumar@techtist.com",course:'My Courses',course1:'My Cart',course2:'My Profiles',course3:'Logout'},
    ];
    const [open,setOpen]=useState(false);
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <>
            {/* Sections */}
            <div className='max-w-7xl container mx-auto lg:px-8 overflow-hidden h-screen'>
          <h1 className='text-[25px] font-semibold my-5'>My Cart</h1>
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
                                        <Link href={"#"}><button className='w-[193px] h-[37px] border border-Cdarkblue bg-Cdarkblue text-white rounded-lg' >CheckOut</button></Link>
                                        </div>
                                  </div>
                            </div>
                          </div>
                          <div className='flex basis-8/12 my-4 '>
                                      <div className='flex justify-between my-3 border- border-t '>
                                                <div className='w-[176px] mt-4'>
                                                  <Image src={smage1} alt={"The images"} className=''/>
                                                </div>
                                                <div className='flex my-auto '>
                                                  <div className='flex'>
                                                      <div className='mx-5'> 
                                                        <p className='w-[271px] h-[49px] text-[16px] font-semibold'>Artificial Intelligence (ARS):Build he Most Powerful AI</p>
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
                        </div>
          </div>  
    </>
  )
}

export default cart