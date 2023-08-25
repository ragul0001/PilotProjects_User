"use client"
import { useState } from "react";
//import addNewCourse from "../Instructor/AddNewCourse";
import { Link } from "react-router-dom";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}
const SideNavBar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  //const SideNavBar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: "Admin", imgName: "dashboards" },
    { title: "Courses", src: "CourseDetails", imgName: "course" },
    { title: "Users", src: "User Details", imgName: "users" },
    { title: "Instructors", src: "instructorDetails", imgName: "instructors" },
    { title: "Payments", src: "Payments", imgName: "payments" },
    { title: "Settings", src: "Setting", imgName: "settings" },
  ];

  return (
    <div>
      <div className="flex font-poppins">
        <div
          className={` ${open ? "w-72" : "w-20 "
            } bg-Cblues h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src="/assets/control.png" alt=""
            className={`absolute cursor-pointer -right-3 top-10 w-7 border-indigo-900
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <div className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}>
              <span className="text-indigo-500 text-4xl font-semibold">DEV</span>
              <span className="text-white text-4xl font-semibold">SKILL</span>
              <span className="text-indigo-500 text-5xl font-semibold ">.</span></div>
            {/* <img alt=""
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          /> */}
            {/* <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                }`}
            >
              Designer
            </h1> */}
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-indigo-500 text-white text-xl items-center gap-x-4 
              ${index === 0 && "bg-gray"
                  } `}
              >
                <img src={`/image/${Menu.imgName}.png`} alt="" />
                <span className={`${!open && "hidden"} origin-left duration-200 p-3`}>
                  <Link to={`/${Menu.src}`}>  {Menu.title}</Link>
                </span>
              </li>
            ))}
          </ul>
        </div>
       
      </div>
    </div>
  );
};
export default SideNavBar;