"use client"
import { Inter,Poppins} from 'next/font/google'




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
        {children}
      </body>
    </html>
  )
}
