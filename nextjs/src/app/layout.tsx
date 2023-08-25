"use client"

import './globals.css'
import { Inter,Poppins} from 'next/font/google'
import { Provider } from 'react-redux';
import {Store} from './store/store';

const inter = Inter({ subsets: ['latin'] })
const poppins =Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: '400'
})
// export const metadata = {
//   title: 'Main Pages',
//   description: 'Landing Website',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Provider store={Store}>
        {children}
        </Provider>
      </body>
    </html>
  )
}
