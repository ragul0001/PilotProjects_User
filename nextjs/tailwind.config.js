/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      
      },
        
      fontFamily:{
        poppins: ['var(--font-poppins)'],
      },
       //Colors
     colors:{
       Cblue:"#6C7AFF",
       Cprimary:"#5D6AEB",
       Chover:"#4e5bd3",
       Csandal:"#C6F1E7",
       Cgreen:"#00CF99",
       Cpurple:"#704DCD",
       Cgrey:"#6B6A8C",
       Cviolet:"#0B033C",
       Cpink:"#F1F1F1",
       Cwhite:"#F8F8F8",
       Cwhites:"#FAFAFA",
       Cborder:"#E2E2E9",
       Cgray:"#E3E3E3",
       Cradiant:"#DBFF00",
       Cdarkblue:"#014BAE",
       Cbpink:"#F4EBEB",
       Cbgink:"#F9F9F9",
       Ctext:"#A7A7A7",
       Cbor:"#FAF1F1",
       Cbgs:"#EFEFEF",
       Cbord:"#ABABAB",
       Cborde:"#D9D9D9",
       Cdada:"#DBDADA",
       Ctext:"#676363",
       Cbla:"#383838",
       Cbgg:"#2D3945",
       Cttxt:"#8FA9C3",
       bgbl:"#3997EE",
       Cstone:"#EBEBEB",
       Cviolet:"#0B033C",
       Ctblack:"#383838"
       
      }
    },
    //Customize
    screens: {
      'xxs': '440px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 78px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
   
  },
  plugins: [
    require('flowbite/plugin')
]
}
