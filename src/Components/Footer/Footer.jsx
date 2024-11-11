import React from 'react'
import { FaPhone } from "react-icons/fa";
import { IoIosMegaphone } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import cridetCard from "../../assets/credit-cards-JstMMRFE.webp"
import { delay } from 'framer-motion';
import { motion } from 'framer-motion';






const Footer = () => {

    const fadeUp = (delay)=>{
        return {
            hidden :{
                opacity : 0,
                y : 100
            } ,

            show :{
                opacity :1 ,
                y : 0,
                transition :{
                    duration : 1 ,
                    delay : delay
                }
            }
        }
    }

  return (
    <>
      <div id='contact' className="container  bg-primary">

       <div className=' text-gray-100 py-12 gap-20 grid md:grid-cols-3'>
       <motion.div
       variants={fadeUp(0.2)}
       initial = "hidden"
       whileInView= "show"
       >
            <h5 className='text-3xl font-semibold uppercase'>Playing</h5>
            <p className='text-sm py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, numquam dolores</p>
            <div className='flex items-center gap-2 mb-4'>
                <p> <FaPhone/> </p>
                <p>+1 (123) 456-7890</p>

            </div>
            <div className='flex items-center gap-2'>
                <p><IoIosMegaphone/></p>
                <p>Noida, Uttar Pradesh</p>
            </div>
        </motion.div>

        <motion.div
           variants={fadeUp(0.4)}
           initial = "hidden"
           whileInView= "show"
        >
            <h5 className='text-3xl font-semibold mb-4 '>Quick Links</h5>
            <div className='flex items-center justify-between'>
            <ul className='space-y-2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>

            <ul className='space-y-2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
        </motion.div>

        <motion.div
           variants={fadeUp(0.6)}
           initial = "hidden"
           whileInView= "show"
        >
            <h5 className='text-3xl font-semibold '>Follow Us</h5>
            <div className='flex gap-3 py-4 text-3xl items-center'>
                <FaFacebook className='font-bold'/>
                <FaInstagram className='font-bold'/>
                <FaLinkedin className='font-bold'/>
                <FaGoogle className='font-bold'/>
            </div>

            <p className='mb-3'>Payment Methods</p>
            <img src= {cridetCard} alt="criditCard" />
        </motion.div>
       </div>

       <div className=' border-t-2 border-white'>
            <p className='text-center py-6 text-gray-50'>© 2024. All Rights Reserved || The Coding Journey</p>
        </div> 
      </div>
    </>
  )
}

export default Footer
