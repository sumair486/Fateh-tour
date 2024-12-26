import React from 'react'
import { useIntl } from "react-intl";

import footer_logo from '../assets/FOOTER LOGO.png'

export default function Footer() {

  const { formatMessage } = useIntl();


  return (
    <footer class="bg-black text-white text-center py-6">
 
  <div class="mt-10">
    <img src={footer_logo} alt="Logo" class="mx-auto w-36 mb-5"/>
  </div>

 
  <nav class="footer-nav mt-12">
    <ul class="flex justify-center gap-5">
      <li><a href="#home" class="text-white text-base font-bold hover:text-colorIcon transition-colors"> {formatMessage({ id: "header.home" })}</a></li>
      <li><a href="#services" class="text-white text-base font-bold hover:text-colorIcon transition-colors"> {formatMessage({ id: "header.service" })}</a></li>
      <li><a href="#about" class="text-white text-base font-bold hover:text-colorIcon transition-colors"> {formatMessage({ id: "header.about" })}</a></li>
      <li><a href="#contact" class="text-white text-base font-bold hover:text-colorIcon transition-colors"> {formatMessage({ id: "header.contact" })}</a></li>
    </ul>
  </nav>

 
  <div class="flex justify-center mt-5 gap-4">
    <a href="https://facebook.com" target="_blank" class="text-colorIcon text-xl hover:text-colorIcon transition-colors">
      <i class="fab fa-facebook"></i>
    </a>
    <a href="https://twitter.com" target="_blank" class="text-colorIcon text-xl hover:text-colorIcon transition-colors">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com" target="_blank" class="text-colorIcon text-xl hover:text-colorIcon transition-colors">
      <i class="fab fa-instagram"></i>
    </a>
  </div>

 
  <p class="footer-copy italic text-gray-400 text-lg mt-10 font-serif">
   {formatMessage({ id: "footer.copy" })}
  </p>
</footer>
  )
}
