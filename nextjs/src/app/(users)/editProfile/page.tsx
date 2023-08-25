"use client"
import Link from 'next/link';
import React, {useState} from 'react';
import Profiles from "../../../../public/images/profile-user 1.png";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Image from "next/image";
const Myprofile: React.FC = () => {

  const [selectedCountry, setSelectedCountry]=useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  const handleCountryChange = (country:string)=>{
    setSelectedCountry(country)
  }

  const handleRegionChange = (Region:string) => {
    setSelectedRegion(Region)
  }
  const [navbar, setNavbar] = useState(false);
    const [showModal, setShowModal] = React.useState(false);
    // const menu=['My Courses','My Cart','My Profiles','Logout'];
    const menu=[
        {Image:require('../../../../public/images/user 1.png'),name:"Shankar Kumar",email:"skumar@techtist.com",course:'My Courses',course1:'My Cart',course2:'My Profiles',course3:'Logout'},
    ];
    const [open,setOpen]=useState(false);  
    return (
      <>
    
    <div className="h-auto">
      <div className=" flex mt-7" />
      <div className="justify-center w-1/2 flex">
        <div className="text-slate-900 text-2xl font-semibold leading-snug ">
          <h2>My Profile</h2>
        </div>
      </div>

      <div className="flex flex-row ">
        {/* for edit profile */}

        <form className="flex w-1/2 justify-end">
          {/* for edit profile */}
          <div className="px-12 mb-6 md:mb-0">
            <div className="text-slate-900 text-xl font-medium leading-snug mt-5 mx-2">
              <h3>Edit Profile</h3>
            </div>
            <div className="w-96 h-px mx-2 bg-zinc-300"></div>
            <br />
            <div className="px-3 py-3">
              <label
                className="w-40 h-5 text-neutral-700 text-base font-normal"
                htmlFor="name"
              >
                Full Name
              </label>
              <br />
              <input
                className="w-96 h-10 px-2 bg-white rounded border border-zinc-200 text-zinc-600 text-base font-medium leading-snug"
                id="fullName"
                type="text"
                placeholder="Shankar Kumar"
              ></input>
              <br />
              <br />
              <label
                className="w-40 h-5 text-neutral-700 text-base font-normal"
                htmlFor="email"
              >
                Email
              </label>
              <br />
              <input
                className="w-96 h-10 px-2 bg-white rounded border border-zinc-200 text-zinc-600 text-base font-medium leading-snug"
                id="email"
                type="email"
                placeholder="skumar@techtist.com"
              ></input>
              <br />
              <br />
              <label
                className="w-40 h-5 text-neutral-700 text-base font-normal"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <br />
              <input
                className="w-96 h-10 px-2 bg-white rounded border border-zinc-200 text-zinc-600 text-base font-medium leading-snug"
                id="phoneNumber"
                type="bigint"
                placeholder="+91 1237894560"
              ></input>
              <br />
              <br />
              <label
                className="w-40 h-5 text-neutral-700 text-base font-normal"
                htmlFor="password"
              >
                Password
              </label>
              <br />
              <div className="relative">
                <input
                  className=" w-96 h-10 px-2 bg-white rounded border border-zinc-200 text-zinc-600 text-base font-medium leading-snug"
                  id="fullName"
                  type="password"
                  placeholder="************"
                />
                <p className="absolute right-2 top-3 text-[12px]">Change</p>
              </div>
              <br />
              <br />
            </div>
          </div>
        </form>

        <form className="flex w-1/2 justify-start">
          {/*for billing Address*/}
          <div className="w-1/2 px-8 mb-6 md:mb-0  justify-start">
            <div className="text-slate-900 text-xl font-medium leading-snug mt-5">
              <h3>Billing Address</h3>
            </div>
            <div className="w-96 h-px bg-zinc-300" />
            <br />
            <div className="px-2 py-2"></div>
            <label
              className="w-40 h-5 text-neutral-700 text-base font-normal"
              htmlFor="country"
            >
              Country
            </label>
            <br />
            <CountryDropdown
            value={selectedCountry} 
            onChange={handleCountryChange}
            className="w-96 h-10 px-2 bg-white rounded border border-zinc-200 text-zinc-600 text-base font-medium leading-snug"
            >
            </CountryDropdown>
            <br />
            <br />
            <label
              className="w-40 h-5 text-neutral-700 text-base font-normal"
              htmlFor="srtAddress"
            >
              Street Address
            </label>
            <br />
            <input
              className="w-96 h-10 px-2 bg-white rounded border border-zinc-200 text-zinc-600 text-base font-medium leading-snug"
              id="strAddress"
              type="text"
            ></input>
            <br />
            <br />
            <label
              className="w-40 h-5 text-neutral-700 text-base font-normal"
              htmlFor="strAddress2"
            >
              Street Address Line 2 (optional)
            </label>
            <br />
            <input
              className="w-96 h-10 px-2 bg-white rounded border border-zinc-200 text-zinc-600 text-base font-medium leading-snug"
              id="strAddress2"
              type="text"
            ></input>
            <br />
            <br />
            {/* for row flex */}
            <div className="flex flex-row">
              <div className="flex-col pr-[4px]">
                <label
                  className="w-40 h-5 text-neutral-700 text-base font-normal"
                  htmlFor="city"
                >
                  City
                </label>
                <br />
                <input
                  className="w-32 h-10 px-2 bg-white rounded border border-zinc-200 text-zinc-600 text-base font-medium leading-snug"
                  id="city"
                  type="text"
                ></input>
                <br />
                <br />
              </div>
              <div className="flex-col pr-[4px]">
                <label
                  className="w-40 h-5 text-neutral-700 text-base font-normal"
                  htmlFor="state"
                >
                  State
                </label>
                <br />
                <RegionDropdown
                  disableWhenEmpty= {true}
                  country={selectedCountry}
                  value={selectedRegion}
                  onChange = {handleRegionChange}
                  className="w-32 h-10 px-2 bg-white rounded border border-zinc-200 text-zinc-600 text-base font-medium leading-snug"
                ></RegionDropdown>
                <br />
                <br />
              </div>
              <div className="flex-col">
                <label
                  className="w-40 h-5 text-neutral-700 text-base font-normal"
                  htmlFor="zipCode"
                >
                  Zip Code
                </label>
                <br />
                <input
                  className="w-32 h-10 px-2 bg-white rounded border border-zinc-200 text-zinc-600 text-base font-medium leading-snug"
                  id="zipCode"
                  type="text"
                ></input>
                <br />
                <br />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-center">
        <button className="w-96 h-12 bg-indigo-500 rounded-3xl text-white text-xl font-medium leading-snug">
          Update
        </button>
      </div>
    </div>
    </>
  );
}

export default Myprofile;
