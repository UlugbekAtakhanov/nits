import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import "./Navbar.scss"
import { Menu, Transition } from '@headlessui/react'


const navbarRoutes = [
    {
        mainTitle: "Bosh sahifa",
        mainUrl: "/bosh-sahifa",
        subRoutes: [

        ]
    },
    {
        mainTitle: "Biz haqimizda",
        mainUrl: "",
        subRoutes: [
            { subTitle: "Biz haqimizda", subUrl: "/biz-haqimizda" },
            { subTitle: "Jamoa", subUrl: "/jamoa" }
        ]
    },
    {
        mainTitle: "Kurslar",
        mainUrl: "/kurslar",
        subRoutes: [

        ]
    },
    {
        mainTitle: "Kirish",
        mainUrl: "/kirish",
        subRoutes: [

        ]
    }
]




const Navbar = ({ isSideBarOpen, setIsSideBarOpen, bgGreen }) => {

    const [list, setList] = useState(false)

    // const [openIndex, setOpenIndex] = useState("")

    // const hoverHandler = (index) => {
    //     setOpenIndex(index)
    // }


    const variants = {
        default: {
            opacity: 0,
            y: 100
        },
        hover: {
            opacity: 1,
            y: 0
        }
    }

    return (

        <>

                {/* <div className={`${bgGreen ? "bg-green-secondary/90 sticky top-0 z-10" : "bg-white/50"} backdrop-blur-sm p-4 rounded-lg border-slate-400 border mx-4`}> */}
            <div className={`${bgGreen ? "bg-green-secondary/90 " : "bg-white/50"} backdrop-blur-sm p-4 rounded-lg border-slate-400 border mx-4`}>

                <div className="flex justify-between items-center w-full sm:w-auto">

                    {/* logo */}
                    <Link to="/" className="cursor-pointer">
                        <motion.p className="text-4xl text-white"
                            whileHover={{
                                scale: 1.05,
                                color: "#fff"
                            }}
                            transition={{
                                duration: .2,
                                type: "spring",
                                stiffness: 500
                            }}
                        ><img className='w-[100px] sm:w-[180px]' src="./images/logo1.png" alt="" /></motion.p>
                    </Link>

                    {/* hamburger */}
                    <div className={isSideBarOpen ? "flex md:hidden fixed-sidebar active text-white" : "flex md:hidden fixed-sidebar text-white"} onClick={() => {
                        setIsSideBarOpen(!isSideBarOpen)
                        setList(false)
                    }}></div>

                    {/* row list */}
                    <motion.ul className="w-full divide-x-2 divide-green-500 sm:w-auto hidden md:flex md:items-center text-sm">

                        {navbarRoutes.map((route, index) => (
                            <>
                                {route.mainUrl ? (
                                    <Link key={index} to={route.mainUrl} className="px-2 lg:px-4 text-white p-2   font-bold tracking-[2px] relative "><span className='border border-transparent hover:border-green-300 transition-all  py-1 px-2 hover:rounded-lg hover:bg-slate-500/50 hover:backdrop-blur-lg box-border'>{route.mainTitle}</span></Link>
                                ) : (
                                    <Menu key={index} as="div" className="relative">
                                        <Menu.Button as="button" className="px-2 lg:px-4 text-white p-[3px]  font-bold  tracking-[2px] relative ">
                                            <span className='border border-transparent hover:border-green-300 transition-all  py-1 px-2 hover:rounded-lg flex items-center hover:bg-slate-500/50  box-border'>
                                                {route.mainTitle}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </Menu.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items as="div" className=" bg-white p-[1px] shadow-lg rounded absolute w-[100%] top-[140%] left-1/2 transform -translate-x-1/2 z-10 divide-y">
                                                {route.subRoutes.map((item, index) => (
                                                    <Menu.Item as="div" key={index} className=' ' >
                                                        {({ active }) => (
                                                            <a href="/jamoa" className={`${active ? "bg-green-300" : null}  block m-[3px] rounded p-2`}>{item.subTitle}</a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                )}
                            </>
                        ))}
                    </motion.ul>

                </div>

                {/* col list */}
                <motion.ul
                    animate={{ height: isSideBarOpen ? "auto" : 0 }}
                    className="overflow-hidden">
                    {navbarRoutes.map((route, index) => (
                        <li onClick={() => {
                            if (route.mainUrl) {
                                setIsSideBarOpen(false)
                            } else {
                                setList(!list)
                            }
                        }} className='w-full overflow-hidden' key={index}>
                            <Link to={route.mainUrl} className={`text-white  font-bold tracking-wider flex justify-between items-center  ${route.mainUrl ? "hover:text-green-200" : null} sm:px-3 border-b w-full border-white/20 pt-4`} >
                                {route.mainTitle}
                                {!route.mainUrl ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${list ? "-rotate-180" : "rotate-0"} transition-all`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                ) : null}
                            </Link>
                            <motion.div
                                animate={{ height: list ? "auto" : 0, marginTop: "8px" }}
                            >
                                {route.subRoutes.length > 0 && route.subRoutes.map((item, index) => (
                                    <div key={index} onClick={() => setIsSideBarOpen(false)} className='ml-8 py-1 text-white hover:text-green-300'>
                                        <Link className='block' to={item.subUrl}>{item.subTitle}</Link>
                                    </div>
                                ))}
                            </motion.div>
                        </li>
                    ))}
                </motion.ul>


            </div>

        </>

    )
}

export default Navbar
