import React from 'react'

function footer() {
  return (
    <>
    
    <div className="bg-Cviolet mt-3 rounded-t-[50px] md:rounded-t-[200px]">
        <div className="max-w-7xl container mx-auto lg:px-8 overflow-hidden">
          <div className="p-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">
              <div className="mt-auto hidden md:block">
                <div>
                  <span className="text-white text-3xl font-semibold">DEV</span>
                  <span className="text-Cblue text-3xl font-semibold">
                    SKILL
                  </span>
                  <span className="text-white text-[35px] font-semibold">
                    .
                  </span>
                  <p className="w-40 h-70 md:w-[183px] md:h-[72px] text-[12px] font-normal leading-[20px] text-white mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam gravida iaculis eros at pulvinar.
                  </p>
                </div>
                {/* 2 */}
              </div>
              <div className="mt-4 md:mt-auto">
                <h1 className="text-[13px] font-bold text-white">Company</h1>
                <ul className="leading-[24px] mt-3">
                  <li className="font-normal text-[12px] text-white">
                    About us
                  </li>
                  <li className="font-normal text-[12px] text-white">
                    Services
                  </li>
                  <li className="font-normal text-[12px] text-white">
                    Community
                  </li>
                  <li className="font-normal text-[12px] text-white">
                    Testimonial
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <h1 className="text-[13px] font-bold text-white">Support</h1>
                <ul className="leading-[24px] mt-3">
                  <li className="font-normal text-[12px] text-white">
                    Help Center
                  </li>
                  <li className="font-normal text-[12px] text-white">
                    Tweet@us
                  </li>
                  <li className="font-normal text-[12px] text-white">
                    Webians
                  </li>
                  <li className="font-normal text-[12px] text-white">
                    FeedBack
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <h1 className="text-[13px] font-bold text-white">Links</h1>
                <ul className="leading-[24px] mt-3">
                  <li className="font-normal text-[12px] text-white">
                    Courses
                  </li>
                  <li className="font-normal text-[12px] text-white">
                    Become Teacher
                  </li>
                  <li className="font-normal text-[12px] text-white">
                    Service
                  </li>
                  <li className="font-normal text-[12px] text-white">
                    All in One
                  </li>
                </ul>
              </div>
              <div className="mt-auto md:mt-3">
                <h1 className="text-[13px] font-bold text-white">Contact Us</h1>
                <ul className="leading-[24px] mt-3">
                  <li className="font-normal text-[12px] text-white">
                    (880) 112 345 678{" "}
                  </li>
                  <li className="font-normal text-[12px] text-white">
                    Support@mai.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* TradeMark */}
          <div className="border-t border-white m-8">
            <div className="flex justify-center">
              <p className="text-[14px] font-normal text-white mt-4">
                © 2023 Techtist. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default footer