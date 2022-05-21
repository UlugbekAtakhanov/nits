import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./register.scss"
import { motion } from 'framer-motion'
import Footer from "../../components/Footer/Footer"

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

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const registerHandler = async (e) => {
        e.preventDefault()
        

    }

    return (
        <>

            <div className = "register-container py-12 ">
                <motion.form  autoComplete = "off" onSubmit = {registerHandler}
                    className = "  md:grid md:gap-x-6"
                    variants = {pageTransition}
                    exit = "exit"
                    initial = "hidden"
                    animate = "visible"
                >
                    <div className = "col-span-2 flex items-center justify-between mb-6">
                        <Link to = "/">
                            <motion.img whileHover = {{rotate: -90}} className = "w-16" src="./images/home-icon.png" alt="" />
                        </Link>
                        <h3 style = {{textAlign: "right"}} className = " text-2xl md:text-4xl">Registration</h3>
                    </div>
                    <div>
                        <label htmlFor="username">Ism/Familiya</label>
                        <div className = "inp">
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                    <motion.path
                                    variants = {svgVariant}
                                    initial = "hidden"
                                    animate = "visible"
                                    fill="#5a84a2" d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512
                                        c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186
                                        c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646
                                        c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367
                                        c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328
                                        C15.328,9.982,12.943,12.367,10,12.367z"></motion.path>
                                </svg>
                            <input type="text" 
                            name="username" 
                            id="username"
                            placeholder = "John Smith"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="username">Passport seriya</label>
                        <div className = "inp">
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                    <motion.path
                                    variants = {svgVariant}
                                    initial = "hidden"
                                    animate = "visible"
                                    fill="#5a84a2" d="M8.749,9.934c0,0.247-0.202,0.449-0.449,0.449H4.257c-0.247,0-0.449-0.202-0.449-0.449S4.01,9.484,4.257,9.484H8.3C8.547,9.484,8.749,9.687,8.749,9.934 M7.402,12.627H4.257c-0.247,0-0.449,0.202-0.449,0.449s0.202,0.449,0.449,0.449h3.145c0.247,0,0.449-0.202,0.449-0.449S7.648,12.627,7.402,12.627 M8.3,6.339H4.257c-0.247,0-0.449,0.202-0.449,0.449c0,0.247,0.202,0.449,0.449,0.449H8.3c0.247,0,0.449-0.202,0.449-0.449C8.749,6.541,8.547,6.339,8.3,6.339 M18.631,4.543v10.78c0,0.248-0.202,0.45-0.449,0.45H2.011c-0.247,0-0.449-0.202-0.449-0.45V4.543c0-0.247,0.202-0.449,0.449-0.449h16.17C18.429,4.094,18.631,4.296,18.631,4.543 M17.732,4.993H2.46v9.882h15.272V4.993z M16.371,13.078c0,0.247-0.202,0.449-0.449,0.449H9.646c-0.247,0-0.449-0.202-0.449-0.449c0-1.479,0.883-2.747,2.162-3.299c-0.434-0.418-0.714-1.008-0.714-1.642c0-1.197,0.997-2.246,2.133-2.246s2.134,1.049,2.134,2.246c0,0.634-0.28,1.224-0.714,1.642C15.475,10.331,16.371,11.6,16.371,13.078M11.542,8.137c0,0.622,0.539,1.348,1.235,1.348s1.235-0.726,1.235-1.348c0-0.622-0.539-1.348-1.235-1.348S11.542,7.515,11.542,8.137 M15.435,12.629c-0.214-1.273-1.323-2.246-2.657-2.246s-2.431,0.973-2.644,2.246H15.435z"></motion.path>
                                </svg>
                            <input type="text" 
                            name="username" 
                            id="username"
                            placeholder = "AA1234567"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <div className = "inp">
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                    <motion.path
                                    variants = {svgVariant}
                                    initial = "hidden"
                                    animate = "visible"
                                    fill="#5a84a2" d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></motion.path>
                                </svg>
                            <input type="email" 
                            style = {{textTransform: "lowercase"}}
                            name="email" 
                            id="email" 
                            value = {email} 
                            onChange = {(e) => setEmail(e.target.value)}
                            placeholder = "your@gmail.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password">Telefon raqam</label>
                        <div className = "inp" style = {{marginBottom: "2rem"}}>
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                    <motion.path
                                    variants = {svgVariant}
                                    initial = "hidden"
                                    animate = "visible"
                                    fill="#5a84a2" d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z"></motion.path>
                                    <motion.path
                                    variants = {svgVariant}
                                    initial = "hidden"
                                    animate = "visible"
                                    fill="#5a84a2" d="M6.345,7.369c0.325,0,0.588-0.263,0.588-0.588c0-1.691,1.376-3.067,3.067-3.067c1.691,0,3.067,1.376,3.067,3.067c0,0.325,0.264,0.588,0.588,0.588c0.326,0,0.589-0.263,0.589-0.588c0-2.34-1.904-4.243-4.244-4.243c-2.34,0-4.244,1.903-4.244,4.243C5.757,7.106,6.02,7.369,6.345,7.369z"></motion.path>
                                </svg>
                            <input type="text" 
                            name="password" 
                            id="password" 
                            value = {password} 
                            onChange = {(e) => setPassword(e.target.value)}
                            placeholder = "+998 99 999 99 99"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password">Tug'ilgan sana</label>
                        <div className = "inp" style = {{marginBottom: "2rem"}}>
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                    <motion.path
                                    variants = {svgVariant}
                                    initial = "hidden"
                                    animate = "visible"
                                    fill="#5a84a2" d="M17.728,4.419H2.273c-0.236,0-0.429,0.193-0.429,0.429v10.304c0,0.234,0.193,0.428,0.429,0.428h15.455c0.235,0,0.429-0.193,0.429-0.428V4.849C18.156,4.613,17.963,4.419,17.728,4.419 M17.298,14.721H2.702V9.57h14.596V14.721zM17.298,8.712H2.702V7.424h14.596V8.712z M17.298,6.566H2.702V5.278h14.596V6.566z M9.142,13.005c0,0.235-0.193,0.43-0.43,0.43H4.419c-0.236,0-0.429-0.194-0.429-0.43c0-0.236,0.193-0.429,0.429-0.429h4.292C8.948,12.576,9.142,12.769,9.142,13.005"></motion.path>
                                    <motion.path
                                    variants = {svgVariant}
                                    initial = "hidden"
                                    animate = "visible"
                                    fill="#5a84a2" d="M6.345,7.369c0.325,0,0.588-0.263,0.588-0.588c0-1.691,1.376-3.067,3.067-3.067c1.691,0,3.067,1.376,3.067,3.067c0,0.325,0.264,0.588,0.588,0.588c0.326,0,0.589-0.263,0.589-0.588c0-2.34-1.904-4.243-4.244-4.243c-2.34,0-4.244,1.903-4.244,4.243C5.757,7.106,6.02,7.369,6.345,7.369z"></motion.path>
                                </svg>
                            <input type="date" 
                            name="password" 
                            id="password" 
                            placeholder = "+998 99 999 99 99"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password">Filialni tanlang</label>
                        <div className = "inp" style = {{marginBottom: "2rem"}}>
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                <motion.path
                                variants = {svgVariant}
                                initial = "hidden"
                                animate = "visible"
                                fill="#5a84a2" d="M17.391,2.406H7.266c-0.232,0-0.422,0.19-0.422,0.422v3.797H3.047c-0.232,0-0.422,0.19-0.422,0.422v10.125c0,0.232,0.19,0.422,0.422,0.422h10.125c0.231,0,0.422-0.189,0.422-0.422v-3.797h3.797c0.232,0,0.422-0.19,0.422-0.422V2.828C17.812,2.596,17.623,2.406,17.391,2.406 M12.749,16.75h-9.28V7.469h3.375v5.484c0,0.231,0.19,0.422,0.422,0.422h5.483V16.75zM16.969,12.531H7.688V3.25h9.281V12.531z"></motion.path>
                                <motion.path
                                variants = {svgVariant}
                                initial = "hidden"
                                animate = "visible"
                                fill="#5a84a2" d="M6.345,7.369c0.325,0,0.588-0.263,0.588-0.588c0-1.691,1.376-3.067,3.067-3.067c1.691,0,3.067,1.376,3.067,3.067c0,0.325,0.264,0.588,0.588,0.588c0.326,0,0.589-0.263,0.589-0.588c0-2.34-1.904-4.243-4.244-4.243c-2.34,0-4.244,1.903-4.244,4.243C5.757,7.106,6.02,7.369,6.345,7.369z"></motion.path>
                            </svg>
                            <select name="" id="" className = "w-full border-none bg-transparent outline-none">
                                <option value="" className = "options">Namangan shahar</option>
                                <option value="" className = "options">Namangan shahar</option>
                                <option value="" className = "options">Namangan shahar</option>
                                <option value="" className = "options">Namangan shahar</option>
                                <option value="" className = "options">Namangan shahar</option>
                                <option value="" className = "options">Namangan shahar</option>
                                <option value="" className = "options">Namangan shahar</option>
                                <option value="" className = "options">Namangan shahar</option>
                            </select>
                        </div>
                    </div>

                    <motion.button type = "submit" className = "col-span-2"
                        transition = {{duration: .1}}
                        whileHover = {{
                            scale: 1.01
                        }}
                        whileTap = {{
                            scale: .6
                        }}
                    ><span>Ro'yhatdan utish</span></motion.button>
                </motion.form>

            </div>

            <div className = " py-8 px-4" style = {{background: "#f2f3f7"}}>
                <div className = "map p-4 sm:p-0 mx-auto">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.29728520821!2d71.63785341526525!3d40.99686592807616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4b53b3d1aa1d%3A0xf01247f941cd093c!2sNamangan%20IT%20School!5e0!3m2!1suz!2s!4v1638788941541!5m2!1suz!2s" style={{border: "0"}} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>

            <div className = "xl:container mx-auto">
                <Footer className = "" />
            </div>

        </>
    )
}

export default Register
