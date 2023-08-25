"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import smage from '../../../../public/images/Rectangle 41.png'
import Link from 'next/link';
import Course from "../../../../public/images/4.png";
import Course2 from "../../../../public/images/5.png";
import Course3 from "../../../../public/images/6.png";
import Course4 from "../../../../public/images/7.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Profiles from "../../../../public/images/profile-user 1.png";
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { useRouter } from 'next/navigation'



function course() {
  const [navbar, setNavbar] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  // const menu=['My Courses','My Cart','My Profiles','Logout'];
  const view=useSelector((state:any)=>state.gridDetails.content_Details)
  const dispatch=useDispatch();
  const [selectedOption, setSelectedOption] = useState("Revenue Daily");
  const router = useRouter();
  

  const handleStartCourse = (course:string) => {
         if(course==='Internship'){
           router.push("/intern")
         }
         else{
           router.push("/videoContent/video")
         }
  };
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
     
      <div className='max-w-7xl container mx-auto lg:px-8'>
            <div className='my-5'>
                 <h1 className='text-[25px] font-semibold '>My Courses</h1>
                   <div className='my-4 relative'>
                      <input type='search' placeholder='Find a Course' className='w-full px-9 border border-Cborder  bg-Cbgink rounded-[50px] '/>
                        <div className='absolute right-4 top-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                   </div>
                   <div className='max-w-7xl container mx-auto lg:px-8 overflow-hidden '>
                    <div className='my-2 p-3'>
                        <div className='flex flex-wrap -mx-1 lg:-mx-4 mt-6 '>
                            {view.map((datas:{
                              Image: string | StaticImport;isIntern:boolean; id: number;course:string; category: string; Course: string; timing: string; } )=>(
                                  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4  rounded-xl p-4"  data-aos="zoom-in">
                                    <span className="hover moving-border text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full  inline-block transform -rotate-45 relative top-9 -left-7">{datas.course}</span>
                                   <article className="overflow-hidden rounded-[35px] shadow-lg  bg-Cbgs">
                                        <Image  className="block h-auto w-full" src={datas.Image} alt={"Course Image"}  />
                                    <header className="flex items-center justify-between leading-tight px-4 mt-2">
                                      <h1 className="text-[16px] w-[230px] h-[26px] text-Cbla">
                                       {datas.category}
                                      </h1>
                                    </header>
                                    <div className="text-[15px] w-[210px]  h-[40px] font-medium mx-4">
                                      <p>{datas.Course}</p>
                                    </div>
                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4 my-4">
                                        <p className="w-[184px] h-[26px] text-[15px] text-Ctblack  font-normal">{" "} {datas.timing}{" "}</p>                                                                      
                                    </footer>
                                   <div className='h-auto mx-3 -mt-6 '>
                                      <div className="w-full  bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                              <div className="bg-Cprimary h-1.5 rounded-full w-[0%]"  ></div>
                                      </div> 
                                      <div className='flex flex-wrap  justify-between mt-3'>
                                          <div className='w-[125px] h-[46px] '>
                                             <p className='text-[18px] font-semibold'>0%</p>
                                             <p className='text-[10px] font-normal'>complete</p>
                                          </div>
                                          <div className='flex items-center '>
                                          {datas.isIntern ? (
                                            <button className='w-[108px] h-[28px] text-[12px] text-white bg-gray-400 rounded-[5px]' disabled>
                                              Waiting
                                            </button>
                                          ) : (
                                              <button
                                                onClick={() => handleStartCourse(datas.course)}
                                                className='w-[108px] h-[28px] text-[12px] text-white bg-Cprimary rounded-[5px]'
                                              >
                                                Start Course
                                              </button>
                                          )}
                                          </div>
                                      </div>    
                                   </div>
                                  </article>                                  
                                 
                                </div>                
                            ))}
                          </div>                      
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default course