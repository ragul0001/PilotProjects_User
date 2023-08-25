"use client"
import React, { useState } from 'react'
import loginImage from '../../../../public/images/login-bg 1.png';
import loginImage2 from '../../../../public/images/Login-banner.png';
import Image from "next/image";
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';


function signup() {
    const initialState={name:"",email:"",password:""};
    const [details,setDetails]=useState(initialState);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const passwordReg=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: ''
        },
        validationSchema: Yup.object({
          name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('First Name is required'),
          email: Yup.string().email('Invalid email').required('Email is required'),
          password:Yup.string()
          .required('Please Enter your password')
          .matches(passwordReg,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"), 
        }),
        onSubmit: (values) => {
            alert("Created data sucessfully") 
            setDetails(initialState);
        }
      });
      const togglePasswordVisibility = ()=> {
        setPasswordVisible((prevVisible) => !prevVisible);
      };

      const { handleSubmit, handleChange, values, errors, touched } = formik;

  return (
    <>
        <div className='bg-Cpink'>
              <div className='max-w-7xl container mx-auto lg:px-8 min-h-screen overflow-hidden '>
                    <div className='flex flex-wrap'>
                            <div className='flex basis-1/2'>
                                 <figure className=' mx-auto hidden md:block' >
                                                <Image src={loginImage2} alt='The image' className=''/>
                                               {/* <p className=' lg:text-[22px] lg:ml-4 xl:text-[34px] font-extrabold '><span className='text-white'>Find your course.</span> Change your life.</p> */}
                                 </figure>
                            </div>
                            <div className='flex basis-1/2 mx-auto items-center'>
                                <div>
                                <h1 className='text-[35px] font-semibold my-3'><span className='text-Cblue'>DEV</span><span>SKILLS.</span></h1>
                                    <form action="#" onClick={handleSubmit}>
                                    <div className='border border-Cwhite bg-Cwhites px-2 space-y-5'>
                                         <h1 className='text-[28px] font-medium text-black '>SignUp</h1>
                                         <div className='max-w-md  p-3'>
                                                <div className='my-1'>
                                                    <label htmlFor="name" className='text-[15px] font-normal'>Full Name</label><br/>
                                                    <input type="text" name='name' onChange={handleChange} value={values.name} className='rounded-md border border-Cborder bg-white p-3 w-80 md:w-96 mt-2' />
                                                    {errors.name && touched.name && <div className="text-red-500 text-[12px] mt-2">{errors.name}</div>}
                                                </div>
                                                <div className='my-3'>
                                                    <label htmlFor="email" className='text-[15px] font-normal'>Email</label><br/>
                                                    <input type="email" name='email' onChange={handleChange} value={values.email} className='rounded-md border-Cborder bg-white p-3 w-80 md:w-96 mt-2' />
                                                    {errors.email && touched.email && <div className="text-red-500 text-[12px] mt-2">{errors.email}</div>}
                                                </div>
                                                <div className='my-3 relative'>
                                                    <label htmlFor="pwd" className='text-[15px] font-normal'>Password</label><br/>
                                                    <input    type={passwordVisible ? 'text' : 'password'} name='password' onChange={handleChange} value={values.password} className='rounded-md mt-2 border-Cborder bg-white p-3 w-80 md:w-96' />
                                                    <div className='absolute  bottom-3 right-2' onClick={togglePasswordVisibility}>
                                                    {passwordVisible  ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            </svg>
                                                        ) : (
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                            </svg>

                                                        )}
                                                    </div>                                                  
                                                </div>
                                                {errors.password && touched.password && <div className="text-red-500 text-[12px] md:w-[350px]">{errors.password}</div>}
                                         </div>
                                         <div className='flex justify-center my-4 '>
                                                  <button className='w-full md:w-[369px] h-[51px] text-[20px] font-medium flex-shrink-0 bg-Cblue text-white rounded-full'>signUp</button>                                            
                                        </div>
                                        <p className='text-[14px] font-normal  text-center mt-3'>Already have an account? <Link href={'/login'}><span className='text-Chover'>login</span></Link></p>
                                    </div>
                                    </form>
                                    <h1 className='text-[15px] text-black font-normal text-center  m-5'>&copy; Techitist.All rights reserved.</h1>
                                </div>
                            </div>
                    </div> 
               </div> 
            </div>  

    </>
  )
}

export default signup;