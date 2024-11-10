import React from 'react'
import aboutImg from "../../assets/headphone4.png";
import { delay, motion } from 'framer-motion';

const About = () => {
    const fadeUp = (delay)=>{
        return {
            hidden : {
                opacity : 0,
                y :100
            } ,
            show : {
                opacity :1 ,
                y :0,
                transition :{
                    duration : 0.5,
                    delay : delay
                }
            }
        }
    }
  return (
    <>
      <div className="container py-24 flex flex-col gap-5 md:flex-row items-center justify-center space-y-4 md:space-y-0">

        <div className='md:w-1/2 mb-5 md:mb-0'>
            <motion.img
            initial ={{opacity : 0 , rotate : -180}}
            whileInView={{opacity :1 , rotate : 0}}
            transition={{duration : 0.7 , delay : 0.3}}
            className='w-[400px] md:ms-20' src= {aboutImg}  alt="aboutImg" />
        </div>

        <div className='md:w-1/2 text-center md:text-left '>
            <motion.h1
            variants={fadeUp(0.2)}
            initial = "hidden"
            whileInView= "show"
            className=' text-3xl md:text-4xl font-semibold md:w-3/4'>The Latest Headphones With The Latest Technology</motion.h1>
            <motion.p
               variants={fadeUp(0.3)}
               initial = "hidden"
               whileInView= "show"
            className='py-4 md:w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</motion.p>
            <motion.button
               variants={fadeUp(0.4)}
               initial = "hidden"
               whileInView= "show"
            className='px-6 py-2 rounded-lg  border-2 border-red-500 text-red-500 font-semibold hover:bg-red-600 hover:text-gray-50 '>Shop Now</motion.button>
        </div>

      </div>
    </>
  )
}

export default About
