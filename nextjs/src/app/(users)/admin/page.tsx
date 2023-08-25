"use client";
import React from 'react'
import { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../../../../public/images/girl-1.png";
import instructor from "../../../../public/images/instructor.png";
import User from "../../../../public/images/working.png";
import Courses from "../../../..//public/images/elearning.png";
import Image2 from "../../../..//public/images/img1 1.png";
import Course from "../../../../public/images/Rectangle 13.png";
import Course2 from "../../../../public/images/Rectangle 15.png";
import Course3 from "../../../..//public/images/Rectangle 17.png";
import Instructor2 from "../../../../public/images/become-instructor 1.png";
import Profiles from "../../../../public/images/profile-user 1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import CountUp from "react-countup";
import { list } from 'postcss';
import { request } from 'http';

function admin() {
    const [navbar, setNavbar] = useState(false);
    const [showModal, setShowModal] = React.useState(false);
    // const menu=['My Courses','My Cart','My Profiles','Logout'];
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
    <div className="bg-Cblue">
      <div className="max-w-7xl container mx-auto lg:px-8 overflow-hidden">
      
        {/* Sections */}
        <div>
          <div className="flex flex-wrap">
            <div
              className="flex items-center basis-1/2 "
              data-aos="fade-up-right"
            >
              <div className="m-auto">
                <div className="font-bold text-white text-[30px] md:text-[42px]  px-3 md:px-1 mt-3 ">
                  <h1>Take Your Learning</h1>
                  <h1>To the Next Level.</h1>
                </div>
                <div className="text-white text-[14px] font-normal w-[360px] h-[61px] px-4  md:px-1">
                  <span>
                    Cras eu est sed tortor sodales tempor ac sed lorem.Sed
                    venenatis fringilla enim. Aliquam placerat eget lorem ut
                    interdum.{" "}
                  </span>
                </div>
                <div className="flex flex-wrap mt-9 mx-4 md:mx-2">
                  <button className="border rounded-md w-[133px] h-[52px] bg-white text-Cblue hover:bg-Chover hover:text-white">
                    Enroll Now
                  </button>
                  <div className="mx-8">
                    <div className="">
                      <button>
                        <div className="Ellipse2 w-[79px] h-[79px] -mt-3 rounded-full border border-indigo-400">
                          <div className="Ellipse6 w-[68px] h-[68px] mx-1 my-1  rounded-full border border-indigo-400" />
                          <div className="Ellipse1 w-14 h-14 relative -top-[66px] left-2.5 bg-white rounded-full" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 relative -top-[107px] left-[26px] fill-Cblue text-Cblue "
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Image Sections */}
                <div className="">
                  <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3  gap-4 justify-items-stretch">
                    <div className="Rectangle5 w-9/12 md:w-[124px] md:h-[145px] bg-white rounded-3xl border  border-violet-300 content-center mx-auto xxs:mx-auto md:mx-0">
                      <div className="flex flex-wrap ">
                        <div className="flex basis-4/12  py-2 mx-6 md:basis-6/12 md:bg-Csandal md:rounded-full  md:mx-auto md:mt-2 md:p-2">
                          <Image
                            src={instructor}
                            alt={"instructor"}
                            className=""
                          />
                        </div>
                        <div className="my-auto mx-4 md:mx-auto md:mt-2">
                          <p className="font-extrabold text-[30px] md:text-[20px] text-Cgreen">
                            <CountUp start={0} end={16032} duration={2} delay={0}/>
                          </p>
                          <p className="text-[13px]">Instructor</p>
                        </div>
                      </div>
                    </div>
                    <div className="Rectangle5  w-9/12  md:w-[124px] md:h-[145px] bg-white rounded-3xl border  border-violet-300  mx-auto xs:mx-0 md:mx-0">
                      <div className="flex flex-wrap ">
                        <div className="flex basis-4/12  py-2 mx-6 md:basis-6/12 md:bg-Csandal md:rounded-full  md:mx-auto md:mt-2 md:p-2">
                          <Image src={User} alt={"user"} className="" />
                        </div>
                        <div className="my-auto mx-4 md:hidden ">
                          <p className="font-extrabold text-[30px] md:text-[20px]  text-Cpurple ">
                          <CountUp start={0} end={10} duration={3} delay={0}/>M+
                          </p>
                          <p className="text-[13px] ">Users</p>
                        </div>
                      </div>
                      <div className="hidden md:text-center md:block md:mt-2">
                        <p className="font-extrabold text-[30px] md:text-[20px] text-Cpurple ">
                        <CountUp start={0} end={100} duration={3} delay={0}/>M+
                        </p>
                        <p className="text-[13px]">Users</p>
                      </div>
                    </div>
                    <div className="Rectangle5  w-9/12 md:w-[124px] md:h-[145px] bg-white rounded-3xl border  border-violet-300  mx-auto xs:mx-0 md:mx-0">
                      <div className="flex flex-wrap ">
                        <div className=" basis-4/12  py-2 mx-6 md:basis-6/12 md:bg-Csandal md:rounded-full  md:mx-auto md:mt-2 md:p-2">
                          <Image src={Courses} alt={"user"} className="" />
                        </div>
                        <div className="my-auto mx-4 md:hidden ">
                          <p className="font-extrabold text-[30px] md:text-[20px]  text-Cpurple ">
                          <CountUp start={0} end={119} duration={2} delay={0}/>
                          </p>
                          <p className="text-[13px] ">Courses</p>
                        </div>
                      </div>
                      <div className=" hidden md:text-center md:block md:mt-2">
                        <p className="font-extrabold text-[30px] md:text-[20px] text-Cpurple ">
                        <CountUp start={0} end={119} duration={2} delay={0}/>
                        </p>
                        <p className="text-[13px]">Courses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex basis-1/2" data-aos="fade-left">
              <Image
                src={profile}
                alt={"image"}
                className="p-5 hidden md:block lg:block xl:block "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Sections-2 */}
    <div className="max-w-7xl container mx-auto lg:px-8 mt-4 overflow-hidden">
      {/* Benfits  */}
      <div className="flex flex-wrap ">
        <div className="flex w-full md:basis-1/2" data-aos="flip-right">
          <Image src={Image2} alt={"Content-Image"} />
        </div>
        <div className="flex basis-1/2 items-center" data-aos="zoom-in-up">
          <div>
            <div className="text-[30px] font-bold w-[351px] h-[86px] mx-auto md:mx-auto">
              <h1>Benefit from our online Learning</h1>
            </div>
            <div className="mt-4 ">
              <div className="flex mx-2 md:mx-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                >
                  <circle cx="21.5" cy="21.5" r="21.5" fill="#D9D9D9" />
                </svg>
                <div className="mx-4">
                  <h1 className="font-bold text-[16px] w-[125px]">
                    Online Courses
                  </h1>
                  <p className="text-[12px] w-[288px] font-normal text-Cgrey">
                    Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra
                  </p>
                </div>
              </div>
              <div className="flex mx-2 md:mx-0 mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                >
                  <circle cx="21.5" cy="21.5" r="21.5" fill="#D9D9D9" />
                </svg>
                <div className="mx-4">
                  <h1 className="font-bold text-[16px] ">Short Courses</h1>
                  <p className="text-[12px] w-[288px] font-normal text-Cgrey">
                    Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra
                  </p>
                </div>
              </div>
              <div className="flex mx-2 md:mx-0 mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                >
                  <circle cx="21.5" cy="21.5" r="21.5" fill="#D9D9D9" />
                </svg>
                <div className="mx-4">
                  <h1 className="font-bold text-[16px] ">
                    Learn with Experts
                  </h1>
                  <p className="text-[12px] w-[288px] font-normal text-Cgrey">
                    Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* popular course  */}
      <div className="mt-3 ">
        <div className="flex justify-center">
          <div>
            <h1 className="text-[30px]  w-[317px] h-[43px] font-bold mx-5">
              Our Popular Courses
            </h1>
            <p className="text-[12px] w-[368px] h-[33px] text-Cgrey text-center">
              Mauris arcu enim, interdum a fringilla eu, ultricies id mauris.
              Vestibulum ante ipsum primis in faucibus
            </p>
          </div>
        </div>
        {/*courses  */}
        <div className="flex flex-wrap -mx-1 lg:-mx-4 mt-6">
          <div
            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  "
            data-aos="zoom-in"
          >
            <article className="overflow-hidden rounded-lg shadow-lg">
              <Image
                className="block h-auto w-full"
                src={Course}
                alt={"Course Image"}
              />
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-[17px] w-[111px] h-[26px]">
                  UI/UX Course
                </h1>
              </header>
              <div className="text-[20px] w-[302px] h-[60px] font-medium mx-4">
                <p>Figma training from beginner to pro course</p>
              </div>
              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <p className="w-[184px] h-[26px] text-[17px] font-normal">
                    {" "}
                    9h 20min . 14 lesson{" "}
                  </p>
                </a>
              </footer>
            </article>
          </div>
          {/* course2 */}
          <div
            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            data-aos="zoom-in-up"
          >
            <article className="overflow-hidden rounded-lg shadow-lg">
              <Image
                className="block h-auto w-full"
                src={Course2}
                alt={"Course Image"}
              />
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-[17px] w-[111px] h-[26px]">
                  UI/UX Course
                </h1>
              </header>
              <div className="text-[20px] w-[302px] h-[60px] font-medium mx-4">
                <p>Python coding teaching from beginner to pro</p>
              </div>
              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <p className="w-[184px] h-[26px] text-[17px] font-normal">
                    {" "}
                    9h 20min . 14 lesson{" "}
                  </p>
                </a>
              </footer>
            </article>
          </div>
          {/* Course 3 */}
          <div
            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            data-aos="zoom-in-down"
          >
            <article className="overflow-hidden rounded-lg shadow-lg">
              <Image
                className="block h-auto w-full"
                src={Course3}
                alt={"Course Image"}
              />
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-[17px] w-[111px] h-[26px]">
                  UI/UX Course
                </h1>
              </header>
              <div className="text-[20px] w-[302px] h-[60px] font-medium mx-4">
                <p>Digital marketing course beginner to pro</p>
              </div>
              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <p className="w-[184px] h-[26px] text-[17px] font-normal">
                    {" "}
                    9h 20min . 14 lesson{" "}
                  </p>
                </a>
              </footer>
            </article>
          </div>
        </div>
      </div>
      {/* Instructor */}
      <div className="mt-5">
        <div className="flex flex-wrap">
          <div
            className="flex basis-1/2 items-center mx-4 md:mx-0"
            data-aos="zoom-out-right"
          >
            <div className="mx-auto">
              <p className="w-[333px] h-[43px] text-[30px] font-bold leading-[43px]">
                Become an instructor
              </p>
              <p className="w-[368px] h-[129px] text-[12px] leading-[20px] text-Cgrey">
                Etiam placerat, lorem at mollis luctus, velit elit imperdiet
                massa, a faucibus augue diam ut ante. Cras a lacus faucibus,
                pretium est quis, luctus lectus. Aenean maximus nisl eu nisl
                iaculis lobortis. Vestibulum lobortis, magna eu gravida
                ullamcorper, justo dolor feugiat tellus, quis porta risus dui
                in ante.
              </p>
              <div className="mt-3">
                <button className="w-[153px] h-[41px] border rounded-md flex-shrink p-1.5 text-[12px] hover:bg-Chover hover:text-white  ">
                  Click Here to Apply
                </button>
              </div>
            </div>
          </div>
          <div className="flex basis-1/2 " data-aos="zoom-out-left">
            <Image
              src={Instructor2}
              alt={"ReferenceImage"}
              className="hidden md:block"
            />
          </div>
        </div>
      </div>
      {/* Get In touch */}
      <div className="mt-9 flex justify-center">
        <div className="w-[850px] h-[277px] border-4 rounded-3xl border-black">
          <div className="grid justify-items-center">
            <h1 className="w-[229px] h-[54px] text-[36px] font-bold ">
              Get In Touch
            </h1>
            <div className=" ">
              <p className="w-[310px] h-[38px] text-[12px] font-normal text-Cgrey text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam gravida iaculis eros at pulvinar.
              </p>
            </div>
            <div className="my-8 relative ">
              <input
                type="text"
                className="w-80 py-6 px-2 md:p-6  h-[30px] md:w-[462px] md:h-[71px] border border-Cblue rounded-lg"
              />
              <div className="hidden md:absolute top-1 right-1 md:block ">
                <button className="w-[150px] h-[40px] md:w-[139px] md:h-[62px] border text-white bg-Cblue rounded-md">
                  Subscribe
                </button>
              </div>
              <div className=" mt-2 block md:hidden">
                <div className="flex justify-center">
                  <button className="w-[150px] h-[40px] md:w-[139px] md:h-[62px] border text-white bg-Cblue rounded-md">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer */}
 
  </>
  )
}

export default admin