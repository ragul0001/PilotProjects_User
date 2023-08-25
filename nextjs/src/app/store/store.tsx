"use client"
import { configureStore } from "@reduxjs/toolkit";
import Datas from '../store/slice/userSlice'

export  const Store=configureStore({
    reducer:{
        gridDetails:Datas,
    }
})




