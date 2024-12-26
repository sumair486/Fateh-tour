import React, {useState, useEffect} from 'react' 
import { useIntl } from "react-intl";

import contact_pic from "../assets/Group 1419.png";
import map_pic from "../assets/map-pin@2x.png";
import phone_pic from "../assets/phones.png";
import line_pic from "../assets/Path 4730.png";
import mail_pic from "../assets/mail.png";
import world_pic from "../assets/Mask Group 3.png";
import contact_logo from "../assets/Mention-amico (1).png";


  




export default function Contact() {

  const { formatMessage } = useIntl();

  const [isLoading, setIsLoading]=useState(true);

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
       
       <section className="contact-us-section bg-[#f9f6e9] p-10 rounded-xl mx-auto my-5 w-[95%] text-center font-georgia">
        <h2 className="font-copper font-bold text-[55px] leading-[46px] text-black mb-10">{formatMessage({ id: "contactTitle" })}</h2>
        <div className="contact-container flex flex-col items-center justify-center gap-5 w-full">
          <form className="contact-form bg-white rounded-xl p-10 shadow-md w-full max-w-[736px]">
            <div className="form-group flex flex-wrap gap-3 mb-5">
              <input
                className="input-color flex-1 p-3 border border-gray-300 rounded-lg bg-contactInputColor text-base"
                type="text"
                placeholder={formatMessage({ id: "namePlaceholder" })}
                required
              />
              <input
                className="input-color flex-1 p-3 border border-gray-300 rounded-lg bg-contactInputColor text-base"
                type="email"
                placeholder={formatMessage({ id: "emailPlaceholder" })}
                required
              />
            </div>
            <div className="form-group flex flex-wrap gap-3 mb-5">
              <input
                className="input-color flex-1 p-3 border border-gray-300 rounded-lg bg-contactInputColor text-base"
                type="text"
                placeholder={formatMessage({ id: "phonePlaceholder" })}
                required
              />
              <select
                className="input-color flex-1 p-3 border border-gray-300 rounded-lg bg-contactInputColor text-base"
                required
              >
                <option value="" disabled selected>
                 
                  {formatMessage({ id: "servicesPlaceholder" })}
                </option>
                <option value="booking">{formatMessage({ id: "booking" })}</option>
                <option value="visa">{formatMessage({ id: "visa" })}</option>
                <option value="tour">{formatMessage({ id: "tour" })}</option>
              </select>
            </div>
            <textarea
              className="input-color w-full p-3 border border-gray-300 rounded-lg bg-contactInputColor text-base resize-none mb-5"
              placeholder={formatMessage({ id: "descriptionPlaceholder" })}
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="block mx-auto px-5 py-3 border-2 border-[#d4a012] text-[#d4a012] rounded-lg transition-all duration-300 hover:bg-[#d4a012] hover:text-white w-[131px] float-right mt-2"
            >
             {formatMessage({ id: "sendButton" })}
            </button>
          </form>
        </div>
      </section>

      
      <section className="contact-info-section flex flex-wrap justify-evenly items-start bg-[#f9f6e9] p-5 font-georgia text-contactTimeColor">
        <div className="font-[Gabriola] text-black timing-info text-center mb-5 text-[28px] leading-[26px]">
          <p className="font-normal">{formatMessage({ id: "timings" })}</p>
          <p className="sunday mt-6">{formatMessage({ id: "sunday" })}</p>
        </div>

        <div className="font-[Gabriola] location-info flex flex-col gap-4 text-center text-[28px] leading-[1.5]">
          <div className="info-item flex items-center gap-2">
            <img src={contact_pic} alt="Email Icon" className="w-15 h-7" />
            <p>contact@fatehtour.com</p>
          </div>
          <div className="info-item flex items-center gap-2">
            <img src={map_pic} alt="Location Icon" className="w-5 h-7" />
            <p>{formatMessage({ id: "address" })}</p>
          </div>
        </div>
      </section>

    
      <section className="cont-section py-12 px-5 max-w-[1200px] mx-auto">
        <div className="cont-container flex items-center justify-evenly gap-[340px] flex-wrap md:text-center md:gap-5">
        
          <div className="cont-image">
            <img
              src={contact_logo}
              alt="Contact Illustration"
              className="w-full max-w-[400px] md:max-w-[300px]"
            />
          </div>
          
       
          <div className="cont-content font-[Gabriola] flex-1 text-[26px] leading-[26px]">
            <h3 className="font-copper dirt font-[900] text-[30px] leading-[20px]">
            {formatMessage({ id: "dirt" })}
            </h3>
            <div className="cont-details flex flex-col items-center gap-5 mt-5">
              <div className="cont-item mr-8 flex items-center gap-3">
                <img src={phone_pic} alt="Phone Icon" className="w-6 h-6" />
                <img src={line_pic} alt="Separator Icon" />
                <p className="text-base md:text-lg font-medium">+996 123 456 789</p>
              </div>

              <div className="cont-item flex items-center gap-3">
                <img src={mail_pic} alt="Email Icon" className="w-6 h-6" />
                <img src={line_pic} alt="Separator Icon" />
                <p className="text-base md:text-lg font-medium">contact@fatehtour.com</p>
              </div>

              <div className="cont-item ml-5 flex items-center gap-3">
                <img src={map_pic} alt="Location Icon" className="w-6 h-6" />
                <img src={line_pic} alt="Separator Icon" />
                <p className="text-base md:text-lg font-medium">{formatMessage({ id: "address" })}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="relative  px-5 w-[100%] overflow-hidden">
        <div className="relative w-[100%]">
          <img
            src={world_pic}
            alt="World Map"
            className="block w-full h-auto object-cover"
          />

          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#BD9C00] opacity-70 flex items-center justify-center">
            <div className="map-text-section text-center text-white px-4">
              <p className="text-base sm:text-lg md:text-xl font-normal leading-7 sm:leading-8 md:leading-10 font-[Gabriola]">
              {formatMessage({ id: "operational" })}
              </p>
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold leading-snug font-copper">
              {formatMessage({ id: "country" })}

              </h1>
            </div>
          </div>
        </div>
      </section>

        </>
      )}
   
  
    </>
  )
}
