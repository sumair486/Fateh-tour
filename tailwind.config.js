/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {


      fontFamily: {
        gabriola: ['Gabriola', 'sans-serif'], 
        copper: ['cooper'], 
        
      },

      colors: {
        customOrange: '#F65934', 
        customgrey: '#646464', 
        customyellow: '#BD9C0080', 

        fromGd: '#BD9C00', 
        blackGd: '#00162499',
        yellowGd: '#BD9C00',
        colorIcon:'#c79e2f',
        // customBg:'#fdf9e3',
        abouttextcolor:'#182F43',
        contactBgColor:'#f9f6e9',
        contactInputColor:'#F2F2F2',
        contactSubmit:'#d4a012',
        contactTimeColor:'#333',
        contactMapBgcolor:'#BD9C00',
        serviceColor:'#515151',
        // serviceNumberColor:'#',
        serviceHeadColor:'#182F43',
        serviceSubmit:'#BD9C00',
        serviceHoverSubmit:'#b38e00',
        


      },

    },

   
  },

  plugins: [],
}

