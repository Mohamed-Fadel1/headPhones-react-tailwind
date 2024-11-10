import React from 'react';
import { servicesData } from './HeroData';
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';

const Services = () => {
    const fadeUp = (delay) => {
        return {
            hidden: {
                opacity: 0,
                y: 100
            },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.7,
                    delay: delay
                }
            }
        };
    };

    return (
        <>
            <div className='bg-gray-100'>
                <div className="container text-center py-24">
                    <motion.h1
                        variants={fadeUp(0.2)}
                        initial="hidden"
                        whileInView="show"
                        className='text-3xl font-semibold mb-14'
                    >
                        Services
                    </motion.h1>

                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-between gap-10 md:gap-20 mx-5 md:mx-0'>
                        {servicesData.map((ele, index) => (
                            <UpdateFollower
                            key={ele.id}
                        mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 2,
                        followSpeed: 0.5,
                        rotate: 720,
                     
                            scale: 5,
                            backgroundElement : <div>
                                <img src= {ele.img} alt="" />
                            </div>
                        }}
                            >
                                <motion.div
                                key={ele.id}
                                variants={fadeUp(0.2 * (index + 3))} 
                                initial="hidden"
                                whileInView="show"
                                className='bg-white p-5 rounded-xl shadow-lg'
                            >
                                <img className='w-[100px] m-auto' src={ele.img} alt={ele.title} />
                                <h4 className='text-xl font-semibold pt-5 pb-3'>{ele.title}</h4>
                                <p className='text-sm'>{ele.sub}</p>
                            </motion.div>
                            </UpdateFollower>
                           
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
