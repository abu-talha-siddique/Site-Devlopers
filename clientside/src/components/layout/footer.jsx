import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from './footer.module.css'

 function Footer () {
  return (
    <>
    <footer>
    <div className={styles.container}>
      <div className={styles.aboutus}>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dicta amet eligendi vero recusandae enim quis fugit optio quae itaque, saepe reiciendis velit sapiente quos corporis hic cupiditate quam vel?</p>
        <ul className={styles.linkicons}>
          <li><a href ='#'><FaFacebookSquare /></a></li>
          <li><a href ='#'></a><FaInstagramSquare /></li>
          <li><a href ='#'></a><FaWhatsappSquare /></li>
          <li><a href ='#'></a><FaSquareTwitter /></li>
         

        </ul>
      </div>
      <div className={styles.Support}>
        <h2>Support</h2>
        <ul>
          <li><a href='#'>FAQ</a></li>
          <li><a href='#'>Privacy Policy</a></li>
          <li><a href='#'>Help</a></li>
          <li><a href='#'>Contact</a></li>

        </ul>
      </div>
      <div className={styles.shop}>
        <h2>Shop</h2>
        <ul>
          <li><a href='#'>Men</a></li>
          <li><a href='#'>Women</a></li>
          <li><a href='#'>Kids</a></li>
          <li><a href='#'>Shoes</a></li>
        </ul>
      </div>
      <div className={styles.contactus}> 
      <h2>Contact Us</h2>
      <ul class={styles.info}>
        <li>
          <span><FaPhoneAlt /></span><p><a href='6202966240'>+19 6202966240</a></p>
        </li>
        <li>
          <span><MdEmail /></span><a href ='talhalali384672@gmail.com'>talhaali384672@gmail.com</a>
        </li>
      </ul>
      </div>
       </div>
    </footer>
    <div className={styles.copyrighttext}>
      <p>Copyright 2024 Online Tutorials.All Right Reserver</p>
    </div>
   

    </>
    
  )
}
export default Footer;