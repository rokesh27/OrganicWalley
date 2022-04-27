import React from "react";
import "./Footer.css";
import logo from "./logo.jpg"
import {FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope,FaPhone} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
function Footer() {
  return (
<>
<body width={'100%'} overflow-x={'hidden'}>
<div className="footer">

     <br/><div class="hline"><hr/></div><br/>
 
    <div class="soc-media">
    <div class="heading">FOLLOW US</div>
    <ul>
        <li><a href="https://www.facebook.com/"><FaFacebookF className="fa"/></a></li>
        <li><a href="https://twitter.com/?lang=en"><BsTwitter className="fa"/></a></li>
        <li><a href="https://www.instagram.com/"><FaInstagram className="fa"/></a></li>
        <li><a href="https://web.whatsapp.com/"><FaWhatsapp className="fa"/></a></li>
        <li><a href="https://mail.google.com/mail/u/1/"><FaEnvelope className="fa"/></a></li>
    </ul>


</div>
</div>
</body>
</>
  )
}

export default Footer;