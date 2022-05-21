import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { dataStuff } from './dataStuff'
import "./About.scss"
import {FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter} from "react-icons/fa"
import {MdOutlineEmail} from "react-icons/md"
import {BsTelephone} from "react-icons/bs"



const About = ({isSideBarOpen, setIsSideBarOpen}) => {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        // <div className = "  border border-red-500">
                <div className="about-container container mx-auto pt-4 w-full overflow-hidden">

                    <Navbar isSideBarOpen={isSideBarOpen} setIsSideBarOpen = {setIsSideBarOpen} bgGreen = {true} />

                {dataStuff.map((item, index) => {
                    const {img, fname, lname, lavozimi, malumot, email, tel} = item           
                    return (

                        <motion.div
                            key={index}
                            initial = {{
                                opacity: 0,
                                x:50
                            }}
                            whileInView = {{
                                opacity: 1,
                                x:0
                            }}
                            transition = {{
                                duration:.5,
                                delay:.3,
                                type: "spring",
                                stiffness: 120
                            }}
                        className="stuff-container shadow-md bg-white mb-8 p-12 md:grid grid-cols-2 place-items-center  md:px-4">
                            <div className =" stuff overflow-hidden m-auto mb-4 md:w-3/4 sm:h-full">
                                <img className = "w-full h-full" src={img} alt="" />
                            </div>
                            <div className ="">
                                <p className = "text-red-800 text-md tracking-wider font-bold uppercase mb-2">{lavozimi}</p>
                                <p className = " text-xl font-extrabold mb-2">{fname} {lname}</p>
                                <p className = "mb-2 leading-6">{malumot}</p>
                                <p className = "mb-3 flex items-center gap-2"><MdOutlineEmail className = "text-red-800" /> {email}</p>
                                <p className = "mb-4 flex items-center gap-2"><BsTelephone className = "text-red-800" /> {tel}</p>
                                <div className = "flex gap-4">
                                    <FaFacebookF className = "icons text-xl text-red-800 hover:text-emer cursor-pointer" />
                                    <FaInstagram className = "icons text-xl text-red-800 cursor-pointer" />
                                    <FaTelegramPlane className = "icons text-xl text-red-800 cursor-pointer" />
                                    <FaTwitter className = "icons text-xl text-red-800 cursor-pointer" />
                                </div>
                            </div>
                        </motion.div>
                    )
                })}

                <Footer />

            </div>

        // </div>
    )
}

export default About
