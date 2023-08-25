"use client"
import { Inter,Poppins} from 'next/font/google'

import { global } from 'styled-jsx/css'
import { Provider } from 'react-redux';
import {Store} from '../store/store';
import { Suspense } from "react";
import Loading from './loading'
import Link from 'next/link'
import Content from '../../app/(courses)/content/page'
import Script from 'next/script'
import Footer from '../(navs)/footer/page'
import Navbar from './navbar-user/page';

const inter = Inter({ subsets: ['latin'] })
const poppins =Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: '400'
})
export const data = {
  title: 'GridDetails',
  description: 'Courses Data',
}

export default function Layout({children}:any){
 
  return (
    <html lang="en">
      <body>
          <Navbar/>
            <Suspense fallback={<Loading />}>           
                <div className={poppins.className}>
                    {children}  
                </div>  
          </Suspense>
       <Footer/>
      </body>
    </html>
  )
}
