import React from 'react'
import { motion , AnimatePresence } from 'framer-motion'

const NavBarResponsiveMenu = ({open}) => {
    return (
        <>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="lg:hidden absolute top-20 w-full left-0 h-screen z-20"
              >
                <ul className=" bg-primary flex flex-col items-center text-gray-100 text-2xl gap-10 py-4 font-semibold rounded-3xl m-6 ">
            
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#subject">Subject</a>
                  </li>
                  <li>
                    <a href="#testimonial">Testimonial</a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      );
}

export default NavBarResponsiveMenu
