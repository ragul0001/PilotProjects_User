"use client"
import React, { useState } from 'react'
import data, { dynamic_detail, user_detail } from '../../store/slice/userSlice';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux';
import Image from "next/image";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link';
import Images from '../../../../public/images/BgImages.png'
import { useRouter } from 'next/navigation'


function courseDetails() {
  const view=useSelector((state:any)=>state.gridDetails.course);
  const selectedFilter = useSelector((state: any) => state.gridDetails.selectedFilter);
  const dispatch=useDispatch();
  const [selectedOption, setSelectedOption] = useState("Revenue Daily");
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  const dropdownOptions = ["Categories", "Course", "Details"];
  const handleSubmit=(id:number)=>{
      dispatch(dynamic_detail(id))
      //naviagate
      router.push('/content')
  }
  const handleSubmitAll=()=>{
    dispatch(user_detail("All"))
}
  const handleSubmitFree=()=>{
    dispatch(user_detail("free Course"))
}
const handleSubmitIntern=()=>{
  dispatch(user_detail("Internship"))
}
const handleSubmitCertificate=()=>{
  dispatch(user_detail("Certificate"))
}
const filteredCourses =
    selectedFilter === 'All'
      ? view
      : view.filter((course: any) => course.course === selectedFilter);
  return (
    <> 
        <div className="max-w-7xl container mx-auto lg:px-8 overflow-hidden">
          {/* Categories and search */}
         <div className='relative block md:hidden p-3' >
                     <input type="search" placeholder='search course' className='rounded-full w-full px-7 placeholder:font-medium  placeholder:text-[12px] placeholder:text-black ' />
                      <div className='absolute bottom-5 right-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                     </div>
                  </div>
                  <div className='flex justify-between'>
                 <div className='flex items-center mx-6'> 
                      <div >  
                             <ul className='flex justify-around space-x-7 cursor-pointer'>  
                             <button onClick={handleSubmitAll}> <li className='cool-link'>All</li></button>
                            <button onClick={handleSubmitFree}><li className='cool-link'  >Free Course</li></button>
                            <button onClick={handleSubmitIntern}><li className='cool-link'>Internship</li></button>
                            <button onClick={handleSubmitCertificate}><li className='cool-link'>Certificates Courses</li></button>
                             </ul>
                      </div>
                 </div>
                  <div className='flex '>
                    <div className='my-4 mr-2'>
                        <div className=''>
                                <select  className="px-2 py-1 border-none outline-none text-[15px] font-medium" value={selectedOption} onChange={handleChange}>
                                {dropdownOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                    {option}
                                    </option>
                                ))}
                                </select>
                        </div>
                    </div>
                    <div className='flex items-center '>
                        <div className='relative hidden md:block' >
                            <input type="search" placeholder='search course' className='rounded-full w-64 px-7 placeholder:font-medium  placeholder:text-[12px] placeholder:text-black ' />
                            <div className='absolute bottom-2 right-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                        </div>                
                    </div>
                 </div>
          </div>
        </div>
             {/* Courses */}
             <div className='bg-Cpink'>
                <div className='max-w-7xl container mx-auto lg:px-8 overflow-hidden '>
                    <div className='my-2 p-3'>
                        <div className='flex flex-wrap -mx-1 lg:-mx-4 mt-6 ' >
                        {filteredCourses.map((datas:{ 
                              Image: string | StaticImport; id: number;course:string, category: string; Course: string; timing: string; } )=>(
                                  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4  rounded-xl" data-aos="zoom-in">
                                <span className="hover moving-border text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full  inline-block transform -rotate-45 relative top-9 -left-7">{datas.course}</span>
                                 <a href='#' onClick={() => handleSubmit(datas.id)}>
                                 <article className="overflow-hidden rounded-[35px] shadow-lg bg-white">
                                        <Image  className="block h-auto w-full" src={datas.Image} alt={"Course Image"}  />
                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                      <h1 className="text-[17px] w-[230px] h-[26px]">
                                       {datas.category}
                                      </h1>
                                    </header>
                                    <div className="text-[20px]  h-[80px] font-medium mx-4">
                                      <p>{datas.Course}</p>
                                    </div>
                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4 my-3">
                                      <a className="flex items-center no-underline hover:underline text-black" href="#">
                                        <p className="w-[184px] h-[26px] text-[16px] font-normal">
                                          {" "}
                                          {datas.timing}{" "}
                                        </p>
                                      </a>                                   
                                    </footer>
                                  </article></a>
                                </div>                
                            ))}
                          </div>                      
                    </div>
                </div>
             </div>
    </>
  )
}

export default courseDetails