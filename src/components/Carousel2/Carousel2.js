import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./Carousel2.scss"
import {FaArrowCircleRight} from "react-icons/fa"
import {IconContext} from 'react-icons'



const Carousel2 = () => {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <motion.div whileHover = {{y:-30}} transition = {{type: "spring", stiffness: 120}} className = "relative carousel2-item-container">
            <img className = "w-1/4" src="./images/project-images/project-image01.jpg" onDragStart={handleDragStart} alt = "img1" />
            <div className="dropdown bg-white px-4 py-2 ">
                <div>
                    <p className = "text-xs">Lorem, ipsum.</p>
                    <p className = "text-lg text-green-secondary">Race Bycicle.</p>
                </div>
                <Link to = "">
                    <FaArrowCircleRight className = "cursor-pointer" />
                </Link>
            </div>
        </motion.div>,
        <motion.div whileHover = {{y:-30}} transition = {{type: "spring", stiffness: 120}} className = "relative carousel2-item-container">
            <img className = "w-1/4" src="./images/project-images/project-image02.jpg" onDragStart={handleDragStart} alt = "img1" />
            <div className="dropdown bg-white px-4 py-2 ">
                <div>
                    <p className = "text-xs">Lorem, ipsum.</p>
                    <p className = "text-lg text-green-secondary">Race Bycicle.</p>
                </div>
                <Link to = "">
                    <FaArrowCircleRight className = "cursor-pointer" />
                </Link>
            </div>
        </motion.div>,
        <motion.div whileHover = {{y:-30}} transition = {{type: "spring", stiffness: 120}} className = "relative carousel2-item-container">
            <img className = "w-1/4" src="./images/project-images/project-image03.jpg" onDragStart={handleDragStart} alt = "img1" />
            <div className="dropdown bg-white px-4 py-2 ">
                <div>
                    <p className = "text-xs">Lorem, ipsum.</p>
                    <p className = "text-lg text-green-secondary">Race Bycicle.</p>
                </div>
                <Link to = "">
                    <FaArrowCircleRight className = "cursor-pointer" />
                </Link>
            </div>
        </motion.div>,
        <motion.div whileHover = {{y:-30}} transition = {{type: "spring", stiffness: 120}} className = "relative carousel2-item-container">
            <img className = "w-1/4" src="./images/project-images/project-image04.jpg" onDragStart={handleDragStart} alt = "img1" />
            <div className="dropdown bg-white px-4 py-2 ">
                <div>
                    <p className = "text-xs">Lorem, ipsum.</p>
                    <p className = "text-lg text-green-secondary">Race Bycicle.</p>
                </div>
                <Link to = "">
                    <FaArrowCircleRight className = "cursor-pointer" />
                </Link>
            </div>
        </motion.div>,
        <motion.div whileHover = {{y:-30}} transition = {{type: "spring", stiffness: 120}} className = "relative carousel2-item-container">
            <img className = "w-1/4" src="./images/project-images/project-image05.jpg" onDragStart={handleDragStart} alt = "img1" />
            <div className="dropdown bg-white px-4 py-2 ">
                <div>
                    <p className = "text-xs">Lorem, ipsum.</p>
                    <p className = "text-lg text-green-secondary">Race Bycicle.</p>
                </div>
                <Link to = "">
                    <FaArrowCircleRight className = "cursor-pointer" />
                </Link>
            </div>
        </motion.div>,
    ];
    const responsive = {
        300: { items: 1 },
        650: { items: 2 },
        1024: { items: 3 },
    };

    return (
        <IconContext.Provider value = {{size: "30px", color: "hsl(205, 77%, 27%)"}}>
            <div className = "carousel2">
                    <AliceCarousel 
                        mouseTracking
                        items={items} 
                        autoPlay = {true} 
                        autoPlayInterval = {0} 
                        animationEasingFunction = "linear"
                        animationDuration = {5000}
                        responsive = {responsive}
                        infinite = {true}
                        disableDotsControls = {false}
                        disableButtonsControls = {true}
                        className = "border-4 border-red-500"
                        />   
            </div>
        </IconContext.Provider>

    )
}

export default Carousel2
