import React , {useState, useEffect} from 'react' 
import { useIntl } from "react-intl";

import section_pic1 from '../assets/Rectangle 1116.png';
import section_pic2 from '../assets/Rectangle 111800.png';
import section_pic3 from '../assets/Rectangle 11200.png';
import section_pic4 from '../assets/Rectangle 11189.png';
import section_pic5 from '../assets/Rectangle 3901.png';
import section_pic6 from '../assets/Rectangle 11188.png';
import section_pic7 from '../assets/Rectangle 1120.png';
import section_pic8 from '../assets/Rectangle 1118.png';






export default function Service() {

  const { formatMessage } = useIntl();
  const serviceDescription = formatMessage({ id: "serviceDescription" });



  const [isLoading,setIsLoading]=useState(true);

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
       
       <section class="bg-serviceBgcolor py-8 ">
  
  <div class="text-center px-5 mt-10">
    <h2 id="service-heading" class="font-copper text-[40px] font-extrabold leading-[33px]">
    {formatMessage({ id: "serviceHeading" })}
    </h2>
    <p id="service-description"  class="font-[Gabriola] text-[26px] text-[#515151] leading-[30px] mt-4">
    {/* {formatMessage({ id: "serviceDescription" })} */}
   <div dangerouslySetInnerHTML={{ __html: serviceDescription }} />

    </p>
  </div>

  
  <div class="flex flex-wrap items-center justify-center gap-8 p-8 max-w-screen-xl mx-auto">
    <div class="flex flex-col md:flex-row items-center justify-center gap-x-16">
  
      <div class="w-full max-w-[500px]">
        <img src={section_pic1} alt="Flight Tickets" class="w-full rounded-lg" />
      </div>

      
      <div class="flex-1 max-w-[700px] md:text-left">
        <h3 class="text-[3.5rem] text-[#BD9C0080] font-medium mb-2">01</h3>
        <h3 id="service-title-1" class="font-copper text-[#182F43] text-[36px] font-extrabold leading-[52px] mb-4">
        {formatMessage({ id: "serviceTitle1" })}
        </h3>
        <p id="service-desc-1"  class="font-[Gabriola]  text-[#182F43] text-[22px] leading-[30px] mb-5">
        {formatMessage({ id: "serviceDesc1" })}
          
          {/* Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. */}
        </p>
        <button  class="font-[Gabriola] cta-button bg-[#BD9C00] hover:bg-[#b38e00] text-white text-[24px] py-[8px] px-[20px] rounded-[5px] cursor-pointer transition-all duration-300">
        {formatMessage({ id: "sendButton" })}
        </button>
      </div>
    </div>
  </div>


  <div class="flex flex-wrap items-center justify-center gap-8 p-8 max-w-screen-xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-center gap-x-16">
      
       
  
        <div class="flex-1 max-w-[700px]  md:text-left">
          <h3 class="text-[3.5rem] text-[#BD9C0080] font-medium mb-2">02</h3>
          <h3 id="service-title-2" class="font-copper text-[#182F43] text-[36px] font-extrabold leading-[52px] mb-4">
          {formatMessage({ id: "serviceTitle2" })}
          </h3>
          <p id="service-desc-2"  class="font-[Gabriola]  text-[#182F43] text-[22px] leading-[30px] mb-5">
          {formatMessage({ id: "serviceDesc1" })}
              {/* Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. */}
          </p>
          <button  class="font-[Gabriola]  cta-button bg-[#BD9C00] hover:bg-[#b38e00] text-white text-[24px] py-[8px] px-[20px] rounded-[5px] cursor-pointer transition-all duration-300">
          {formatMessage({ id: "sendButton" })}
          </button>
        </div>
        <div class="w-full max-w-[500px] mt-5">
          <img src={section_pic2} alt="Flight Tickets" class="w-full rounded-lg" />
        </div>
      </div>
    </div>



  <div class="flex flex-wrap items-center justify-center gap-8 p-8 max-w-screen-xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-center gap-x-16">
     
        <div class="w-full max-w-[500px]">
          <img src={section_pic3} alt="Flight Tickets" class="w-full rounded-lg" />
        </div>
  
     
        <div class="flex-1 max-w-[700px]  md:text-left">
          <h3 class="text-[3.5rem] text-[#BD9C0080] font-medium mb-2">03</h3>
          <h3 id="service-title-3" class="font-copper text-[#182F43] text-[36px] font-extrabold leading-[52px] mb-4">
          {formatMessage({ id: "serviceTitle3" })}
          </h3>
          <p id="service-desc-3" class="font-[Gabriola] text-[#182F43] text-[22px] leading-[30px] mb-5">
          {formatMessage({ id: "serviceDesc1" })}
              {/* Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. */}
          </p>
          <button  class="font-[Gabriola] cta-button bg-[#BD9C00] hover:bg-[#b38e00] text-white text-[24px] py-[8px] px-[20px] rounded-[5px] cursor-pointer transition-all duration-300">
          {formatMessage({ id: "sendButton" })}
          </button>
        </div>
      </div>
    </div>


    <div class="flex flex-wrap items-center justify-center gap-8 p-8 max-w-screen-xl mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-center gap-x-16">
          
         
    
         
          <div class="flex-1 max-w-[700px]  md:text-left">
            <h3 class="text-[3.5rem] text-[#BD9C0080] font-medium mb-2">04</h3>
            <h3 id="service-title-4" class="font-copper text-[#182F43] text-[36px] font-extrabold leading-[52px] mb-4">
            {formatMessage({ id: "serviceTitle4" })}
            </h3>
            <p id="service-desc-4"  class="font-[Gabriola] text-[#182F43] text-[22px] leading-[30px] mb-5">
            {formatMessage({ id: "serviceDesc1" })}
              {/* Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. */}
            </p>
            <button class="font-[Gabriola]cta-button bg-[#BD9C00] hover:bg-[#b38e00] text-white text-[24px] py-[8px] px-[20px] rounded-[5px] cursor-pointer transition-all duration-300">
            {formatMessage({ id: "sendButton" })}
            </button>
          </div>
          <div class="w-full max-w-[500px] mt-5">
            <img src={section_pic4} alt="Flight Tickets" class="w-full rounded-lg" />
          </div>
        </div>
      </div>



    

     
  <div class="flex flex-wrap items-center justify-center gap-8 p-8 max-w-screen-xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-center gap-x-16">
     
        <div class="w-full max-w-[500px]">
          <img src={section_pic5} alt="Flight Tickets" class="w-full rounded-lg" />
        </div>
  
       
        <div class="flex-1 max-w-[700px]  md:text-left">
          <h3 class="text-[3.5rem] text-[#BD9C0080] font-medium mb-2">05</h3>
          <h3 id="service-title-5" class="font-copper text-[#182F43] text-[36px] font-extrabold leading-[52px] mb-4">
          {formatMessage({ id: "serviceTitle5" })}
          </h3>
          <p id="service-desc-5"  class="font-[Gabriola] text-[#182F43] text-[22px] leading-[30px] mb-5">
          {formatMessage({ id: "serviceDesc1" })}
              {/* Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. */}
          </p>
          <button  class="font-[Gabriola] cta-button bg-[#BD9C00] hover:bg-[#b38e00] text-white text-[24px] py-[8px] px-[20px] rounded-[5px] cursor-pointer transition-all duration-300">
          {formatMessage({ id: "sendButton" })}
          </button>
        </div>
      </div>
    </div>


    <div class="flex flex-wrap items-center justify-center gap-8 p-8 max-w-screen-xl mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-center gap-x-16">
         
          <div class="flex-1 max-w-[700px]  md:text-left">
            <h3 class="text-[3.5rem] text-[#BD9C0080] font-medium mb-2">06</h3>
            <h3 id="service-title-6" class="font-copper text-[#182F43] text-[36px] font-extrabold leading-[52px] mb-4">
            {formatMessage({ id: "serviceTitle6" })}
            </h3>
            <p id="service-desc-6"  class="font-[Gabriola] text-[#182F43] text-[22px] leading-[30px] mb-5">
            {formatMessage({ id: "serviceDesc1" })}
              {/* Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. */}
            </p>
            <button class="font-[Gabriola] cta-button bg-[#BD9C00] hover:bg-[#b38e00] text-white text-[24px] py-[8px] px-[20px] rounded-[5px] cursor-pointer transition-all duration-300">
            {formatMessage({ id: "sendButton" })}
            </button>
          </div>
          <div class="w-full max-w-[500px] mt-5">
            <img src={section_pic6} alt="Flight Tickets" class="w-full rounded-lg" />
          </div>
        </div>
      </div>


     
   <div class="flex flex-wrap items-center justify-center gap-8 p-8 max-w-screen-xl mx-auto">
       <div class="flex flex-col md:flex-row items-center justify-center gap-x-16">
        
         <div class="w-full max-w-[500px]">
           <img src={section_pic7} alt="Flight Tickets" class="w-full rounded-lg" />
         </div>
   
        
         <div class="flex-1 max-w-[700px]  md:text-left">
           <h3 class="text-[3.5rem] text-[#BD9C0080] font-medium mb-2">07</h3>
           <h3 id="service-title-7" class="font-copper text-[#182F43] text-[36px] font-extrabold leading-[52px] mb-4">
           {formatMessage({ id: "serviceTitle7" })}
           </h3>
           <p id="service-desc-7" class="font-[Gabriola] text-[#182F43] text-[22px] leading-[30px] mb-5">
           {formatMessage({ id: "serviceDesc1" })}
              {/* Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. */}
           </p>
           <button class="font-[Gabriola] cta-button bg-[#BD9C00] hover:bg-[#b38e00] text-white text-[24px] py-[8px] px-[20px] rounded-[5px] cursor-pointer transition-all duration-300">
           {formatMessage({ id: "sendButton" })}
           </button>
         </div>
       </div>
     </div>
 
 
     <div class="flex flex-wrap items-center justify-center gap-8 p-8 max-w-screen-xl mx-auto">
         <div class="flex flex-col md:flex-row items-center justify-center gap-x-16">
         
          
     
         
           <div class="flex-1 max-w-[700px]  md:text-left">
             <h3 class="text-[3.5rem] text-[#BD9C0080] font-medium mb-2">08</h3>
             <h3 id="service-title-8" class="font-copper text-[#182F43] text-[36px] font-extrabold leading-[52px] mb-4">
             {formatMessage({ id: "serviceTitle8" })}
             </h3>
             <p id="service-desc-8"  class="font-[Gabriola] text-[#182F43] text-[22px] leading-[30px] mb-5">
             {formatMessage({ id: "serviceDesc1" })}
              {/* Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. */}
             </p>
             <button class="font-[Gabriola] cta-button bg-[#BD9C00] hover:bg-[#b38e00] text-white text-[24px] py-[8px] px-[20px] rounded-[5px] cursor-pointer transition-all duration-300">
             {formatMessage({ id: "sendButton" })}
             </button>
           </div>
           <div class="w-full max-w-[500px] mt-5">
             <img src={section_pic8} alt="Flight Tickets" class="w-full rounded-lg" />
           </div>
         </div>
       </div>

</section>

        </>
      )}
    </>
  )
}
