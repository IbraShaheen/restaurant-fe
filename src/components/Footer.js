import React from 'react'
import { Link } from 'react-router-dom'

//icons
import {FiMail} from "@react-icons/all-files/fi/FiMail"
import {FcIphone} from "@react-icons/all-files/fc/FcIphone"
import {GrFacebook} from "@react-icons/all-files/gr/GrFacebook"
import {FaTwitterSquare} from "@react-icons/all-files/fa/FaTwitterSquare"
import {FaInstagramSquare} from "@react-icons/all-files/fa/FaInstagramSquare"
import {SiYoutube} from "@react-icons/all-files/si/SiYoutube"
const Footer = () => {
    return (
        <div>
             <div className="footer-cont">
        <div>
        
         <h4> Restaurant Name  </h4> <p>Set on a picturesque view of nature, Tal pine welcomes visitors that seek a deﬁnitive dining destination like no other. And with a seating area that welcomes up to 850 visitors, with 660 outdoor seats and 190 indoors, Tal pine meet you overall attention to your requests and requirements.</p>
        </div>
        <div>
        
          <h4> Quick Links </h4> 
          <ul>
          <li><Link to="/about" className="footer-link">ABOUT US</Link></li>
          <li><Link to="/gallary" className="footer-link">GALLARY</Link></li> 
          <li><Link to="/reservation" className="footer-link">RESERVATION</Link></li>
         

          </ul>
        </div>
        <div>
        
          <h4> Contact </h4>
          
              <p><a href="mailto: example@restaurantdomain.com" rel="opener"><FiMail size={25}/> example@restaurantdomain.com</a></p>
              <p><a href="tel: +9665425454" rel="opener"><FcIphone size={25}/> +9625425454</a></p>
          
        </div>
        <div>
        
        <h4> Follow Us  </h4>
        <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" ><GrFacebook size={25} color="#1877f2"/></a> &nbsp;
       <a href="https://twitter.com/" rel="noreferrer" target="_blank"> <FaTwitterSquare size={30} color="#1DA1F2"/></a> &nbsp;
      <a href="https://www.instagram.com/" rel="noreferrer" target="_blank" > <FaInstagramSquare size={30} color="#c13584"/></a> &nbsp;
       <a href="https://www.youtube.com/" rel="noreferrer" target="_blank" > <SiYoutube color="red" size={35}/> </a> 
      </div>
      </div>
        </div>
    )
}

export default Footer
