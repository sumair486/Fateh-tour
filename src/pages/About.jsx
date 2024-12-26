import React, { useState, useEffect } from 'react';
import { useIntl } from "react-intl";

import about_pic from "../assets/Image 3.png";


export default function About() {

  const { formatMessage } = useIntl();

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
       
       <section class="bg-[#fdf9e3] flex flex-col md:flex-row items-center justify-betweep-[20px] rounded-[16px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] max-w-[1200px] mx-auto mt-[60px]">
 
 <div class="about-content flex-1 pl-[20px] mb-[100px] md:mb-0">
   <h2 class="text-black font-bold text-[35px] leading-[26px] mb-[20px] font-copper">{formatMessage({ id: "header.about" })}</h2>
   <p class="text-abouttextcolor text-[22px] leading-[26px] mb-[20px] font-[Gabriola]">{formatMessage({ id: "aboutText1" })}
     
   </p>
   <p class="text-abouttextcolor text-[22px] leading-[26px] font-[Gabriola]">
   {formatMessage({ id: "aboutText2" })}
   </p>
 </div>


 <div class="flex-1 flex justify-center">
   <img src={about_pic} alt="Riyadh Cityscape" class="w-full max-w-[350px] rounded-[16px] shadow-[0px_4px_10px_rgba(0,0,0,0.2)]"/>
 </div>
</section>

        </>
      )}
   
</>
  )
}
