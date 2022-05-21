import React from 'react'
import {FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter} from "react-icons/fa"
import {MdOutlineEmail} from "react-icons/md"
import {BsTelephone} from "react-icons/bs"
import "./Footer.scss"


const Footer = () => {
    return (
        <div className = "footer-container mt-8 py-4 px-3 md:mb-8 md:px-8 ">
            <div className = "mb-8 md:grid grid-cols-3 md:gap-8">
                    <p className = "text-4xl mb-4">Welcome to <span className ="text-green-secondary font-bold">Digital</span> Life...</p>
                    <div className = "mb-8">
                        <p className = "text-lg text-green-700 ">ALOQA</p>
                        <hr className = " border-green-main mb-3" style = {{width: "12rem"}} />
                        <p className ="mb-2 text-green-800 flex items-center gap-2"><MdOutlineEmail className = "text-green-800" />+998 99 999 99 99</p>
                        <p className ="mb-3 text-green-800 flex items-center gap-2"><BsTelephone className = "text-green-800" />nits2021@gmail.com</p>
                        <div className = "flex justify-start gap-4">
                            <FaFacebookF className = "icons text-lg text-green-700 hover:text-emer cursor-pointer" />
                            <FaInstagram className = "icons text-lg text-green-700 cursor-pointer" />
                            <FaTelegramPlane className = "icons text-lg text-green-700 cursor-pointer" />
                            <FaTwitter className = "icons text-lg text-green-700 cursor-pointer" />
                        </div>
                    </div>
                    <div className = "">
                        <p className = "text-lg text-green-700 ">BIZNING MANZIL</p>
                        <hr className = " border-green-main mb-3" style = {{width: "12rem"}} />
                        <p className = "text-green-700 w-2/3 md:w-full"> Namangan Viloyati, Namangan shahar, A.Temur ko'chasi, 101-uy</p>
                    </div>
            </div>
            <p className = "text-center text-sm">Copyright © 2021 Namangan IT School Designed by NITS</p>
        </div>
    )
}

export default Footer
