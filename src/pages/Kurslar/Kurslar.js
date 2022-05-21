import React, { useEffect} from 'react'


import {FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter} from "react-icons/fa"
import {MdOutlineEmail} from "react-icons/md"
import {BsTelephone} from "react-icons/bs"

import "./Kurslar.scss"
import { dataKurslar } from './dataKurslar'
import Card2 from '../../components/Card2/Card2'
import Navbar from "../../components/Navbar/Navbar"
import { isDisabled } from '@testing-library/user-event/dist/utils'



const Kurslar = ({ isSideBarOpen, setIsSideBarOpen}) => {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (

            <div className = "kurs-container pt-4">
                
                <Navbar isSideBarOpen={isSideBarOpen} setIsSideBarOpen = {setIsSideBarOpen}  />
                
                {dataKurslar.map((item, index) => {
                    return <Card2 item = {item} key = {index} />
                })}
        


                <div className = "footer-container mt-8 py-4 px-3  md:px-8 md:bg-white md:bg-opacity-20 ">
                    <div className = "mb-8 md:grid grid-cols-3 md:gap-8">
                            <p className = "text-4xl mb-4 text-white">Welcome to <span className ="text-green-secondary font-bold">Digital</span> Life...</p>
                            <div className = "mb-8">
                                <p className = "text-lg text-white ">ALOQA</p>
                                <hr className = " border-green-main mb-3" style = {{width: "12rem"}} />
                                <p className ="mb-2 text-white flex items-center gap-2"><MdOutlineEmail className = "text-white" />+998 99 999 99 99</p>
                                <p className ="mb-3 text-white flex items-center gap-2"><BsTelephone className = "text-white" />nits2021@gmail.com</p>
                                <div className = "flex justify-start gap-4">
                                    <FaFacebookF className = "icons text-lg text-white hover:text-emer cursor-pointer" />
                                    <FaInstagram className = "icons text-lg text-white cursor-pointer" />
                                    <FaTelegramPlane className = "icons text-lg text-white cursor-pointer" />
                                    <FaTwitter className = "icons text-lg text-white cursor-pointer" />
                                </div>
                            </div>
                            <div className = "">
                                <p className = "text-lg text-white ">BIZNING MANZIL</p>
                                <hr className = " border-green-main mb-3" style = {{width: "12rem"}} />
                                <p className = "text-white w-2/3 md:w-full">Namangan Viloyati, Namangan shahar, A.Temur ko'chasi, 101-uy</p>
                            </div>
                    </div>
                    <p className = "text-center text-xs sm:text-sm text-white">Copyright © 2021 Namangan IT School Designed by NITS</p>
                </div>
                
                
            </div>

    )
}

export default Kurslar

