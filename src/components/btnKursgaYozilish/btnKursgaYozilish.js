import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



const BtnKursgaYozilish = () => {
    return (
        <motion.div 
            initial = {{
                scale: 1
            }}
            whileHover = {{
                scale: 1.05
            }}
            whileTap = {{
                scale: .8
            }}
        >
            <Link to = "/royhatdan-utish" className = "bg-green-main text-white py-2 px-4 rounded-2xl hover:bg-green-secondary transition-all"
            >Kursga Yozilish</Link>
        </motion.div>
    )
}

export default BtnKursgaYozilish
