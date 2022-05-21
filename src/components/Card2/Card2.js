import React, {useEffect} from 'react'
import "./Card2.scss"

import {useState} from "react"
import { motion, AnimateSharedLayout } from 'framer-motion'
import {AiOutlineArrowRight} from "react-icons/ai"
import BtnKursgaYozilish from '../btnKursgaYozilish/btnKursgaYozilish'



const Card2 = ({item}) => {
    const [expand, setExpand] = useState(false)

    useEffect(() => {
        const scroll = window.addEventListener("scroll", () => setExpand(false))
        return () => {
            window.removeEventListener("scroll", scroll)
        }
    }, [])


    const {yonalish, textMini, textMaxi} = item
    return (
        <>

            {/* <AnimateSharedLayout> */}
                <div className = "motion-animation-kurslar xl:container mx-auto ">

                    {/* MAXI */}
                    <motion.div className = "course-card-maxi px-4 md:w-2/3 lg:w-1/2"
                        transition = {{duration: .4}}
                        animate = {{
                            x: expand ? 0 : "-100vw",
                        }}
                    >
                        <div className = "card-item-maxi-article card-item mt-6 rounded-lg p-4 mb-4 col-span-2 bg-white overflow-y-auto" >
                            <p className = "text-center text-green-secondary text-lg mb-3 lg:text-3xl ">{yonalish}</p>
                            <p className = "mb-3  text-base lg:leading-6"><span className = "text-green-secondary">Max James:</span>{textMaxi}</p>
                            <hr className ="mb-3" />
                            <div className ="flex items-center justify-between">
                                <BtnKursgaYozilish />
                                <button onClick = {() => setExpand(false)} className = "bg-green-main text-white py-2 px-4 rounded-2xl hover:bg-green-secondary transition-all">Back</button>
                            </div>
                        </div>
                    </motion.div>

                    {/* MINI */}
                    <motion.div className = "course-card-mini px-2 sm:ml-6 "
                        transition = {{delay: 0.05, duration: 2, type: "spring", stiffness: 60,}}
                        animate = {{
                            x: expand ? 
                            (window.innerWidth > 1000 ? window.innerWidth/2 : window.innerWidth/3)
                            : 0,
                        }}
                    >
                        <div className = "card-item-mini-article mt-6 rounded-lg p-4 mb-4 col-span-2 md:col-span-1 bg-white" >
                            <p className = "text-center text-green-secondary text-lg mb-3">{yonalish}</p>
                            <p className = "mb-3"><span className = "text-green-secondary">Max James:</span>{textMini}</p>
                            <hr className ="mb-3" />
                            <div className ="flex items-center justify-between">
                                <BtnKursgaYozilish />
                                <button onClick = {() => setExpand(!expand)}  className = "text-green-secondary flex items-center gap-2">Kurs Haqida <AiOutlineArrowRight /></button>
                            </div>
                        </div>
                    </motion.div>

                </div>
            {/* </AnimateSharedLayout> */}

        </>
    )
}

export default Card2
