import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar2.scss"
import { motion } from 'framer-motion'


const Navbar2 = ({isSideBarOpen, setIsSideBarOpen}) => {
    return (
        <>
            <div className=" bg-green-main/80 backdrop-blur-sm flex flex-col sm:hidden  items-center pl-4  pr-4 py-2 fixed top-0 left-0 z-10 w-full ">
                <div className="flex justify-between w-full sm:w-auto">
                    <img className='w-[180px]' src="./images/logo1.png" alt="" />
                    <div className={isSideBarOpen ? "flex sm:hidden fixed-sidebar active" : "flex sm:hidden fixed-sidebar "} onClick={() => setIsSideBarOpen(!isSideBarOpen)}></div>
                </div>
                <ul className={isSideBarOpen ?
                    " sm:flex sm:gap-10 transition-all h-56 w-full sidebar-list flex flex-col justify-center overflow-hidden"
                    : "w-full sm:w-auto flex sm:flex-row sm:gap-7 md:gap-10 sm:h-auto h-0 overflow-hidden transition-all flex-col justify-center"}>
                    <motion.li
                        whileHover={{
                            scale: 1.3,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300
                        }}
                        className="text-center text-xl mb-4 sm:text-base sm:mb-0"><Link to="/" className="text-white tracking-wider hover:text-gray-200  transition-all" >Bosh sahifa</Link></motion.li>
                    <motion.li
                        whileHover={{
                            scale: 1.3,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300
                        }}
                        className="text-center text-xl mb-4 sm:text-base sm:mb-0"><Link to="/about" className="text-white tracking-wider hover:text-gray-200  transition-all" >Biz haqimizda</Link></motion.li>
                    <motion.li
                        whileHover={{
                            scale: 1.3,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300
                        }}
                        className="text-center text-xl mb-4 sm:text-base sm:mb-0"><Link to="/kurslar" className="text-white tracking-wider hover:text-gray-200  transition-all" >Kurslar</Link></motion.li>
                    <motion.li
                        whileHover={{
                            scale: 1.3,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300
                        }}
                        className="text-center text-xl mb-4 sm:text-base sm:mb-0"><Link to="/login" className="text-white tracking-wider hover:text-gray-200  transition-all" >Kirish</Link></motion.li>
                </ul>
            </div>

            <div className="fixed top-0 left-0 z-10 w-full bg-green-main/80 backdrop-blur-sm ">
                <div className="hidden sm:flex items-center justify-between px-8 py-4 xl:container mx-auto">
                    <img className='w-[180px]' src="./images/logo1.png" alt="" />
                    <ul className="w-full sm:w-auto flex sm:flex-row sm:gap-7 md:gap-10 sm:h-auto h-0 overflow-hidden transition-all flex-col justify-center">
                        <li><Link to="/" className="text-white tracking-wider hover:text-gray-200" >Bosh sahifa</Link></li>
                        <li><Link to="/about" className="text-white tracking-wider hover:text-gray-200" >Jamoa</Link></li>
                        <li><Link to="/kurslar" className="text-white tracking-wider hover:text-gray-200" >Kurslar</Link></li>
                        <li><Link to="/login" className="text-white tracking-wider hover:text-gray-200" >Kirish</Link></li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Navbar2
