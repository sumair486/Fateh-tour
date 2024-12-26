
import React, { useState, useEffect } from 'react';
import { useIntl } from "react-intl";

import img_1 from '../assets/jake-nebov.png'
import img_2 from '../assets/group-6850.png'
import img_3 from '../assets/arab-family.png'
import sec_pic_1 from '../assets/Union 1.png'
import sec_pic_2 from '../assets/Union 10.png'
import sec_pic_3 from '../assets/Path 16400.png'
import sec_pic_4 from '../assets/Union 3.png'
import sec_pic_5 from '../assets/Union 4.png'
import sec_pic_6 from '../assets/Union 5.png'
import sec_pic_7 from '../assets/Union 6.png'
import sec_pic_8 from '../assets/Union 7.png'
// hover images
import hover_pic_1 from '../assets/Rectangle 1116.png'
import hover_pic_2 from '../assets/Rectangle 111800.png'
import hover_pic_3 from '../assets/Rectangle 11200.png'
import hover_pic_4 from '../assets/Rectangle 11189.png'
import hover_pic_5 from '../assets/Rectangle 3901.png'
import hover_pic_6 from '../assets/Rectangle 11188.png'
import hover_pic_7 from '../assets/Rectangle 1120.png'

import hover_pic_8 from '../assets/Rectangle 1118.png'






export default function Home() {


  const { formatMessage } = useIntl();
  const adventureHeading = formatMessage({ id: "adventureHeading" });

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);


  return (
    <>
     {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <>
         <section class="relative flex items-center justify-center h-[300px] w-[94%] mx-auto my-5 bg-gradient-to-r from-fromGd to-[#e7da96] rounded-xl overflow-hidden">
 
 <div class="adventure-content relative z-10 flex-1  px-5">
   <h1 class="text-white text-5xl  font-extrabold leading-tight text-shadow-md font-copper">
   

   <div dangerouslySetInnerHTML={{ __html: adventureHeading }} />
   
   </h1>
 </div>


 <div class="absolute top-0 left-0 flex items-center justify-evenly w-full h-full">
   <img src={img_1} alt="Adventure 1" class="h-full object-cover rounded-xl opacity-90 max-w-[33%]" />
   <img src={img_2} alt="Adventure 2" class="h-[470px] object-cover rounded-xl opacity-40 max-w-[33%]" />
   <img src={img_3} alt="Adventure 3" class="h-full object-cover rounded-xl opacity-90 max-w-[33%]" />
 </div>
 
</section>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-10  p-12">
 
  <div class="relative h-[150px] sm:h-[180px] md:h-[200px] bg-cover bg-center rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105"
    style={{ backgroundImage: `url(${hover_pic_1})` }}>
    <div class="rounded-3xl absolute inset-0 bg-gradient-to-b from-blackGd to-yellowGd text-white flex flex-col justify-center items-center text-center font-[Gabriola] text-base sm:text-lg md:text-xl opacity-100 transition-opacity duration-300 hover:opacity-0">
      <img src={sec_pic_1} alt="Icon" class="mb-2 w-8 sm:w-10 md:w-12" />
      <p class="sect-head-1">{formatMessage({ id: "serviceTitle1" })}</p>
    </div>
  </div>

  <div class="relative h-[150px] sm:h-[180px] md:h-[200px] bg-cover bg-center rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105" 
 style={{ backgroundImage: `url(${hover_pic_2})` }}>
    <div class="rounded-3xl absolute inset-0 bg-gradient-to-b from-blackGd to-yellowGd text-white flex flex-col justify-center items-center text-center font-[Gabriola] text-base sm:text-lg md:text-xl opacity-100 transition-opacity duration-300 hover:opacity-0">
      <img src={sec_pic_2} alt="Icon" class="mb-2 w-8 sm:w-10 md:w-12" />
      <p class="sect-head-2">{formatMessage({ id: "serviceTitle2" })}</p>
    </div>
  </div>

  <div class="relative h-[150px] sm:h-[180px] md:h-[200px] bg-cover bg-center rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105" 
  style={{ backgroundImage: `url(${hover_pic_3})` }}>
    <div class="rounded-3xl absolute inset-0 bg-gradient-to-b from-blackGd to-yellowGd text-white flex flex-col justify-center items-center text-center font-[Gabriola] text-base sm:text-lg md:text-xl opacity-100 transition-opacity duration-300 hover:opacity-0">
      <img src={sec_pic_3} alt="Icon" class="mb-2 w-8 sm:w-10 md:w-12" />
      <p class="sect-head-3">{formatMessage({ id: "serviceTitle3" })}</p>
    </div>
  </div>

  <div class="relative h-[150px] sm:h-[180px] md:h-[200px] bg-cover bg-center rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105" 
  style={{ backgroundImage: `url(${hover_pic_4})` }}>
    <div class="rounded-3xl absolute inset-0 bg-gradient-to-b from-blackGd to-yellowGd text-white flex flex-col justify-center items-center text-center font-[Gabriola] text-base sm:text-lg md:text-xl opacity-100 transition-opacity duration-300 hover:opacity-0">
      <img src={sec_pic_4} alt="Icon" class="mb-2 w-8 sm:w-10 md:w-12" />
      <p class="sect-head-4">{formatMessage({ id: "serviceTitle4" })}</p>
    </div>
  </div>

  <div class="relative h-[150px] sm:h-[180px] md:h-[200px] bg-cover bg-center rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105" 
  style={{ backgroundImage: `url(${hover_pic_5})` }}>
    <div class="rounded-3xl absolute inset-0 bg-gradient-to-b from-blackGd to-yellowGd text-white flex flex-col justify-center items-center text-center font-[Gabriola] text-base sm:text-lg md:text-xl opacity-100 transition-opacity duration-300 hover:opacity-0">
      <img src={sec_pic_5} alt="Icon" class="mb-2 w-8 sm:w-10 md:w-12" />
      <p class="sect-head-5">{formatMessage({ id: "serviceTitle5" })}</p>
    </div>
  </div>
 
  <div class="relative h-[150px] sm:h-[180px] md:h-[200px] bg-cover bg-center rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105" 
   style={{ backgroundImage: `url(${hover_pic_6})` }}>
    <div class="rounded-3xl absolute inset-0 bg-gradient-to-b from-blackGd to-yellowGd text-white flex flex-col justify-center items-center text-center font-[Gabriola] text-base sm:text-lg md:text-xl opacity-100 transition-opacity duration-300 hover:opacity-0">
      <img src={sec_pic_6} alt="Icon" class="mb-2 w-8 sm:w-10 md:w-12" />
      <p class="sect-head-6">{formatMessage({ id: "serviceTitle6" })}</p>
    </div>
  </div>




  <div class="relative h-[150px] sm:h-[180px] md:h-[200px] bg-cover bg-center rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105" 
 style={{ backgroundImage: `url(${hover_pic_7})` }}>
    <div class="rounded-3xl absolute inset-0 bg-gradient-to-b from-blackGd to-yellowGd text-white flex flex-col justify-center items-center text-center font-[Gabriola] text-base sm:text-lg md:text-xl opacity-100 transition-opacity duration-300 hover:opacity-0">
      <img src={sec_pic_7} alt="Icon" class="mb-2 w-8 sm:w-10 md:w-12" />
      <p class="sect-head-7">{formatMessage({ id: "serviceTitle7" })}</p>
    </div>
  </div>


  <div class="relative h-[150px] sm:h-[180px] md:h-[200px] bg-cover bg-center rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105" 
  style={{ backgroundImage: `url(${hover_pic_8})` }}>
    <div class="rounded-3xl absolute inset-0 bg-gradient-to-b from-blackGd to-yellowGd text-white flex flex-col justify-center items-center text-center font-[Gabriola] text-base sm:text-lg md:text-xl opacity-100 transition-opacity duration-300 hover:opacity-0">
      <img src={sec_pic_8} alt="Icon" class="mb-2 w-8 sm:w-10 md:w-12" />
      <p class="sect-head-8">{formatMessage({ id: "serviceTitle8" })}</p>
    </div>
  </div>
  
</div>
        </>
      )}
    </>
  )
}
