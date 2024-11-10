import React, { useState } from 'react'
import { Links } from './NavBarLinks'
import { FaHeadphones } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import NavBarResponsiveMenu from './NavBarResponsiveMenu';
import { UpdateFollower } from 'react-mouse-follower';


const NavBar = () => {
    const [open , setOpen] = useState(false)
  return (
    <>
      <nav className='bg-secondary'>
        <div className="container py-8 flex items-center justify-between">

            <div>
                <p className='text-xl font-semibold text-gray-100 uppercase'>Playing / <span className='text-white/70'>Market</span> </p>
            </div>

            <div className='flex items-center'>
                <ul className=' space-x-8 hidden lg:flex'>
                    {Links.map((link)=>{
                        return (
                            <li key= {link.id}  className='text-gray-300  uppercase'>
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: 'white',
                                        zIndex: 2,
                                        followSpeed: 1.5,
                                        scale: 5,
                                        mixBlendMode: 'difference',
                                      }}>
                                    
                                <a href= {link.link} > {link.name} </a>
                                </UpdateFollower>
                               
                                </li>
                        )
                    })}
                </ul>
                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: 'white',
                                        zIndex: 2,
                                        followSpeed: 1.5,
                                        scale: 5,
                                        mixBlendMode: 'difference',
                                      }}>
                                    
                                    {<FaHeadphones className=' ms-24 text-2xl text-gray-300'/>}

                                </UpdateFollower>
            </div>
            <MdMenu onClick={()=>{setOpen(!open)}} className='text-gray-200 text-3xl cursor-pointer lg:hidden'/>
        </div>
      </nav>
    
        <NavBarResponsiveMenu open = {open} />
    </>
  )
}

export default NavBar
