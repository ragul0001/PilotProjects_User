"use client"
import { createSlice } from "@reduxjs/toolkit";
import { chartType } from "../chartType";

const initialState:chartType={
        course: [
                { id: 1, Image: require("../../../../public/images/1.png"),course:"free Course", category: "UI/UX Course", Course: "UI/UX coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 2, Image: require("../../../../public/images/2.png"),course:"Internship", category: "Python Course", Course: "Python coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 3, Image: require("../../../../public/images/3.png"),course:"Certificate", category: "UX Course", Course: "UX coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 4, Image: require("../../../../public/images/4.png"),course:"Internship", category: "React Course", Course: "React coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 5, Image: require("../../../../public/images/5.png"),course:"Certificate", category: "AI Course", Course: "Artificial Intelligence coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 6, Image: require("../../../../public/images/6.png"),course:"Internship", category: "Next  Course", Course: "Next Js coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 7, Image: require("../../../../public/images/7.png"),course:"Certificate", category: "C++ Course", Course: "C++ coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 8, Image: require("../../../../public/images/8.png"),course:"Internship", category: "PHP with Mysql Course", Course: "PHP coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 9, Image: require("../../../../public/images/9.png"),course:"Internship", category: "Modern Javascript  Course", Course: "Modern Javascript coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 10, Image: require("../../../../public/images/10.png"),course:"Certificate", category: "Django Course", Course: "Django coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 11, Image: require("../../../../public/images/11.png"),course:"Internship", category: "Vue js Course", Course: "Vue Js coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 12, Image: require("../../../../public/images/12.png"),course:"Internship", category: "C# Course", Course: "C# Microsoft .Net coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 13, Image: require("../../../../public/images/13.png"),course:"Certificate", category: "Game Unity  Course", Course: "Game with unity 3D tutorial teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 14, Image: require("../../../../public/images/14.png"),course:"Internship", category: "Spring Boot Course", Course: "Spring Boot coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 15, Image: require("../../../../public/images/15.png"),course:"Certificate", category: "Mango DB Course", Course: "Mango coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
        ],
        content_Details: [
                { id: 1, Image: require("../../../../public/images/4.png"),course:"free Course", category: "React Course", Course: "React coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson",isIntern:false },
                { id: 2, Image: require("../../../../public/images/5.png"),course:"Internship", category: "AI Course", Course: "Artificial Intelligence coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson",isIntern:true },
                { id: 3, Image: require("../../../../public/images/6.png"),course:"Certificate", category: "Next  Course", Course: "Next Js coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson",isIntern:false },
                { id: 4, Image: require("../../../../public/images/7.png"),course:"Internship", category: "C++  Course", Course: "C++ coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson",isIntern:false },
        ],
        dynamic_detail: [
                { id: 1, Image: require("../../../../public/images/BgImages.png"), title: "Python Coding", subTitle: "Full Stack Web Developer Bootcamp", course: "Learn to build websites with HTML , CSS , Bootstrap, Javascript , jQuery , Python 3 , and Django!" },
                { id: 2, Image: require("../../../../public/images/BgImages.png"), title: "Python with Django", subTitle: "Full Stack Python Developer Bootcamp", course: "Learn to build websites with HTML , CSS , Bootstrap, Javascript , jQuery , Python 3 , and Django!" },
                { id: 3, Image: require("../../../../public/images/BgImages.png"), title: "UX Coding ", subTitle: "UX/UI Coding development", course: "Learn to build websites with HTML , CSS , Bootstrap, Javascript , jQuery , Python 3 , and Django!" },
                { id: 4, Image: require("../../../../public/images/BgImages.png"), title: "React Full stack", subTitle: "Full Stack React Developer Bootcamp", course: "Learn to build websites with HTML , CSS , Bootstrap, Javascript , jQuery , Python 3 , and Django!" },
                { id: 5, Image: require("../../../../public/images/BgImages.png"), title: "Artificial Intelligence", subTitle: "AI Coding & Machine Learning", course: "Learn to build websites with HTML , CSS , Bootstrap, Javascript , jQuery , Python 3 , and Django!" },
                { id: 6, Image: require("../../../../public/images/BgImages.png"), title: "Next Js Course", subTitle: "NextJs Full Stack Developer Bootcamp", course: "Learn to build websites with HTML , CSS , Bootstrap, Javascript , jQuery , Python 3 , and Django!" },

        ],
        userCourse: [
                { id: 1, Image: require("../../../../public/images/1.png"),course:"free Course", category: "UI/UX Course", Course: "UI/UX coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 2, Image: require("../../../../public/images/2.png"),course:"Internship", category: "Python Course", Course: "Python coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 3, Image: require("../../../../public/images/3.png"),course:"Certificate", category: "UX Course", Course: "UX coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 4, Image: require("../../../../public/images/4.png"),course:"Internship", category: "React Course", Course: "React coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 5, Image: require("../../../../public/images/5.png"),course:"Certificate", category: "AI Course", Course: "Artificial Intelligence coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 6, Image: require("../../../../public/images/6.png"),course:"Internship", category: "Next  Course", Course: "Next Js coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 7, Image: require("../../../../public/images/7.png"),course:"Certificate", category: "C++ Course", Course: "C++ coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 8, Image: require("../../../../public/images/8.png"),course:"Internship", category: "PHP with Mysql Course", Course: "PHP coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 9, Image: require("../../../../public/images/9.png"),course:"Internship", category: "Modern Javascript  Course", Course: "Modern Javascript coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 10, Image: require("../../../../public/images/10.png"),course:"Certificate", category: "Django Course", Course: "Django coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 11, Image: require("../../../../public/images/11.png"),course:"Internship", category: "Vue js Course", Course: "Vue Js coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 12, Image: require("../../../../public/images/12.png"),course:"Internship", category: "C# Course", Course: "C# Microsoft .Net coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 13, Image: require("../../../../public/images/13.png"),course:"Certificate", category: "Game Unity  Course", Course: "Game with unity 3D tutorial teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 14, Image: require("../../../../public/images/14.png"),course:"Internship", category: "Spring Boot Course", Course: "Spring Boot coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
                { id: 15, Image: require("../../../../public/images/15.png"),course:"Certificate", category: "Mango DB Course", Course: "Mango coding teaching from beginner to pro", timing: "9h 20 min.14 Lesson" },
        ],
        getallCourses: null,
        selectcontent: null,
        selectactiveCourses: null,
        getUserCourse:null,
        selectedFilter: "All",
}

const sample=createSlice({
        name:"gridDetails",
        initialState,
        reducers:{
                CoureDetails:(state:any,action)=>{
                        state.push(action.payload);                           
                } , 
                Content_Details:(state:any,action)=>{
                        state.push(action.payload);       
                },
                dynamic_detail:(state:any,action)=>{
                        state.selectactiveCourses = state.dynamic_detail.find(
                                (Courses: any) => Courses.id === action.payload
                            ) || null;
                                                        
                },  
                user_detail: (state: any, action) => {
                        state.getUserCourse = state.userCourse.filter(
                                (Courses: any) => Courses.course === action.payload
                        )
                        state.selectedFilter = action.payload; // Update the selected filter

                },
                setCourseFilter: (state: any, action: any) => {
                        state.selectedFilter = action.payload; 
                }, 
          
        }
});
export const {CoureDetails,Content_Details,dynamic_detail,user_detail,setCourseFilter} = sample.actions;
export  default sample.reducer;