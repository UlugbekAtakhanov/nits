import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
// import { useGlobalContext } from '../../context'
import { motion } from 'framer-motion'
import "./login.scss"

const pageTransition = {
    exit: {
        scale: 0,
        opacity: 0,
        transition: {
            duration: .3,
            ease: "easeIn",
        }
    },
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeInOut"
        }
    }
}

const svgVariant = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: .2,
            duration: 3,
            type: "spring",
            stiffness: 250
        }
    }
}
    

const Login = () => {
    


    return (
        <div className = "login-container">
            <motion.form autoComplete = "off" 
                variants = {pageTransition}
                exit = "exit"
                initial = "hidden"
                animate = "visible"
            >
                <div className = "col-span-2 flex items-center justify-between mb-6">
                    <Link to = "/">
                        <motion.img whileHover = {{rotate: -90}} className = "w-16" src="./images/home-icon.png" alt="" />
                    </Link>
                    <h3 style = {{textAlign: "right"}} className = " text-2xl md:text-4xl">Login</h3>
                </div>

                <label htmlFor="email">Email</label>
                <div className = "inp">
                    <svg className="svg-icon" viewBox="0 0 20 20">
							
                            <motion.path
                            d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"                         
                            variants = {svgVariant}
                            initial = "hidden"
                            animate = "visible"
                            fill="#5a84a2" 
                           ></motion.path>
						
                        </svg>
                    <input type="email" 
                    name="email" 
                    id="email" 

                    />
                </div>

                <label htmlFor="password">Password</label>
                <div className = "inp">
                    <svg className ="svg-icon" viewBox="0 0 20 20">
							
                            <motion.path
                            variants = {svgVariant}
                            initial = "hidden"
                            animate = "visible"
                            fill="#5a84a2"
                            d="M17.696,9.368H2.305c-0.189,0-0.367,0.092-0.478,0.245c-0.11,0.155-0.141,0.352-0.08,0.532l2.334,6.918c0.081,0.238,0.305,0.4,0.556,0.4h10.735c0.253,0,0.478-0.162,0.557-0.402l2.323-6.917c0.062-0.179,0.03-0.376-0.079-0.531C18.062,9.459,17.886,9.368,17.696,9.368z M14.95,16.287H5.062l-1.938-5.743h13.753L14.95,16.287z"></motion.path>
							
                            <motion.path
                            variants = {svgVariant}
                            initial = "hidden"
                            animate = "visible"
                            fill="#5a84a2"
                            d="M6.345,7.369c0.325,0,0.588-0.263,0.588-0.588c0-1.691,1.376-3.067,3.067-3.067c1.691,0,3.067,1.376,3.067,3.067c0,0.325,0.264,0.588,0.588,0.588c0.326,0,0.589-0.263,0.589-0.588c0-2.34-1.904-4.243-4.244-4.243c-2.34,0-4.244,1.903-4.244,4.243C5.757,7.106,6.02,7.369,6.345,7.369z"></motion.path>
						
                        </svg>
                    <input type="password" 
                    name="password" 
                    id="password" 

                    />
                </div>
                <motion.button className = "btn" type = "button"
                    transition = {{duration: .1}}
                    whileHover = {{
                        scale: 1.01
                    }}
                    whileTap = {{
                        scale: .6
                    }}
                ><span>Log in</span></motion.button>
                <div className="forgot-password">
                    <Link className = "forgot" to = "#">Forgot password?</Link> <span>or</span>  <Link className = "forgot" to = "/register">Sign up</Link>
                </div>
            </motion.form>
        </div>
    )
}

export default Login
