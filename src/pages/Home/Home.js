import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa"
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Carousel2 from '../../components/Carousel2/Carousel2'
import Footer from '../../components/Footer/Footer'
import Map from "../../components/Map/Box9"
import Carousel from '../../components/Swiper/Carousel'
import "./Home.scss"


const pageTransition = {
    exit: {
        x: "-100vw",
        transition: {
            duration: .3,
            ease: "easeInOut"
        }
    },
    hidden: {
        x: "100vw",
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut"
        }
    }
}


const tumanlar = [
    { id: "1", tuman: "Pop tumani", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores odit, impedit inventore, dicta dolorem repudiandae id natus porro delectus nostrum saepe iste non tempora error sit recusandae aliquam temporibus!", url: "https://it-park.uz/ru/itpark" },
    { id: "2", tuman: "Chust tumani", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores odit, impedit inventore, dicta dolorem repudiandae id natus porro delectus nostrum saepe iste non tempora error sit recusandae aliquam temporibus!", url: "https://it-park.uz/ru/itpark" },
    { id: "3", tuman: "Mingbuloq tumani", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores odit, impedit inventore, dicta dolorem repudiandae id natus porro delectus nostrum saepe iste non tempora error sit recusandae aliquam temporibus!", url: "https://it-park.uz/ru/itpark" },
    { id: "4", tuman: "Kosonsoy tumani", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores odit, impedit inventore, dicta dolorem repudiandae id natus porro delectus nostrum saepe iste non tempora error sit recusandae aliquam temporibus!", url: "https://it-park.uz/ru/itpark" },
    { id: "5", tuman: "Namangan tumani", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores odit, impedit inventore, dicta dolorem repudiandae id natus porro delectus nostrum saepe iste non tempora error sit recusandae aliquam temporibus!", url: "https://it-park.uz/ru/itpark" },
    { id: "6", tuman: "Yangiqo'rg'on tumani", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores odit, impedit inventore, dicta dolorem repudiandae id natus porro delectus nostrum saepe iste non tempora error sit recusandae aliquam temporibus!", url: "https://it-park.uz/ru/itpark" },
    { id: "7", tuman: "Chortoq tumani", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores odit, impedit inventore, dicta dolorem repudiandae id natus porro delectus nostrum saepe iste non tempora error sit recusandae aliquam temporibus!", url: "https://it-park.uz/ru/itpark" },
    { id: "8", tuman: "Uychi tumani", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores odit, impedit inventore, dicta dolorem repudiandae id natus porro delectus nostrum saepe iste non tempora error sit recusandae aliquam temporibus!", url: "https://it-park.uz/ru/itpark" },
    { id: "9", tuman: "Uchqorg'on tumani", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores odit, impedit inventore, dicta dolorem repudiandae id natus porro delectus nostrum saepe iste non tempora error sit recusandae aliquam temporibus!", url: "https://it-park.uz/ru/itpark" },
    { id: "10", tuman: "Norin tumani", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores odit, impedit inventore, dicta dolorem repudiandae id natus porro delectus nostrum saepe iste non tempora error sit recusandae aliquam temporibus!", url: "https://it-park.uz/ru/itpark" },
    { id: "11", tuman: "Toraqorg'on tumani", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores odit, impedit inventore, dicta dolorem repudiandae id natus porro delectus nostrum saepe iste non tempora error sit recusandae aliquam temporibus!", url: "https://it-park.uz/ru/itpark" },
]

const Home = ({ isSideBarOpen, setIsSideBarOpen }) => {
    const [openVideo, setOpenVideo] = useState(false)
    const [choosedTuman, setChoosedTuman] = useState(tumanlar[0])


    const chooseTumanHandler = (e) => {
        const currentTumanId = e.target.id
        const specTuman = tumanlar.find(tuman => {
            if (currentTumanId === tuman.id) {
                return tuman
            }
            return null
        })
        setChoosedTuman(specTuman)
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setOpenVideo(false)
            setIsSideBarOpen(false)
        })
        return () => {
            window.removeEventListener("scroll", () => {
                setOpenVideo(false)
                setIsSideBarOpen(false)
            })
        }
    }, [])





    return (
        <motion.div className=" pt-"
            variants={pageTransition}
            exit="exit"
            initial="hidden"
            animate="visible"
        >


            <div className=' relative pt-4 lg:px-8'>

                <Carousel />

                <Navbar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />

                <div className=" min-h-screen flex md:w-[80%] lg:w-[50%] md:items-center">
                    <motion.div className="  grid place-content-center flex-1  lg:w-3/5 pl-6 md:w-3/4"
                        initial={{
                            x: "-100vw"
                        }}
                        animate={{
                            x: 0
                        }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            stiffness: 120,
                        }}
                    >
                        <h2 className="text-white sm:text-5xl font-extrabold mb-4  ">Billim uchun qilingan sarmoya bu eng yahshi sarmoya.</h2>
                        <h3 className="text-white sm:text-lg text-sm mb-4">Hozirdanoq uzing uchun sarmoya qilishni boshla!</h3>
                        <p className="mb-8 text-green-secondary ">Namangan IT School</p>
                        <div className="flex flex-col sm:flex-row gap-4 w-max">
                            <Link to="" className=" text-sm backdrop-blur-sm bg-white/30 rounded-lg border border-slate-300/50 leading-[50px] px-[45px]  text-white hover:bg-white/50 hover:text-white">Biz bilan bog'lanish  </Link>
                            <Link to="/register" className=" text-sm backdrop-blur-sm bg-white/30 rounded-lg border border-slate-300/50 leading-[50px] px-[45px] text-white hover:bg-white/50 hover:text-white">Kursga Yozilish</Link>
                        </div>
                    </motion.div>
                </div>

            </div>

            <div className="xl:container mx-auto">




                <div className="container2 px-4 pb-6 pt-16 md:bg-none mb-6">

                    <div className=" sm:w-3/4 lg:w-1/2 md:mx-auto mb-6">
                        <p className="text-4xl text-center mb-4 sm:text-left md:text-5xl">Create your <span className="text-green-secondary">Digital</span> future with <span className="text-green-secondary">NITS</span></p>
                        <p className="mb-4 sm:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, amet.</p>
                        <p className="sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, possimus quos. Suscipit, voluptates saepe consequuntur consectetur officia ducimus quis error molestiae, obcaecati dicta nihil labore vel, libero ab rerum blanditiis!</p>
                    </div>


                    <div className="video-container pt-16 pb-28 grid items-end lg:grid-cols-2 md:gap-4  md:px-4 overflow-hidden">

                        <div className="left  mb-8 lg:m-0">

                            <div className="circle  rounded-full grid place-content-center mb-8"><img src="./images/icons/about.svg" alt="" /></div>
                            <h2 className="video-container-h2 text-4xl mb-4 leading-10" >Learn new skills online with top educators</h2>
                            <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                            <p className="video-p2 mt-10">
                                <img src="./images/icons/right-icon.svg" alt="" />
                                Techniques to engage effectively with vulnerable children and young people.</p>
                            <p className="video-p2 mt-6">
                                <img src="./images/icons/right-icon.svg" alt="" />
                                Join millions of people from around the world learning together.</p>
                            <p className="video-p2 mt-6">
                                <img src="./images/icons/right-icon.svg" alt="" />
                                Join millions of people from around the world learning together. Online learning is as easy and natural.</p>

                        </div>

                        <motion.div className="right grid place-items-center"

                        >
                            <Link to="" className="video-icon grid place-items-center">
                                <motion.img className="w-2/4 md:w-1/3" src="./images/icons/play.png" alt=""
                                    whileHover={{
                                        scale: .7,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500
                                    }}
                                    onClick={() => setOpenVideo(true)}
                                />
                            </Link>

                            <motion.div className="video  "
                                animate={{
                                    x: openVideo ? 0 : "100vw",
                                    opacity: openVideo ? 1 : 0,
                                    scale: openVideo ? 1 : 0
                                }}
                                transition={{
                                    duration: .5
                                }}
                            >
                                <iframe className="video-iframe w-full h-full" src="https://www.youtube.com/embed/_9zG3eWGq1U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                            </motion.div>

                        </motion.div>

                    </div>


                    {/* Map */}
                    <div className="grid md:grid-cols-2 place-items-center">
                        <div className="map-container">
                            <Map choosedTuman={choosedTuman} setChoosedTuman={setChoosedTuman} tumanlar={tumanlar} chooseTumanHandler={chooseTumanHandler} />
                        </div>
                        <div className="map-info row-start-1 md:col-start-2 md:ml-12 mb-4 md:mb-0">
                            <h3 className="text-3xl mb-8 lg:text-4xl">{choosedTuman.tuman}</h3>
                            <p className="text-sm mb-8">{choosedTuman.info}</p>
                            <motion.a
                                initial={{ scale: 1 }}
                                whileHover={{
                                    scale: 1.2
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500
                                }}
                                className="map-info-a inline-block" href={choosedTuman.url} target="_blank" rel="noreferrer">Koproq ma'lumot</motion.a>
                        </div>
                    </div>




                </div>

                <div className="container3 relative">
                    <Carousel2 />
                </div>


                <div className="container4  mt-20 py-4 md:grid grid-cols-2 place-items-center md:gap-4 md:px-4">
                    <div className=" stuff w-1/2 aspect-[1/1] rounded-full overflow-hidden m-auto mb-4">
                        <img className="w-full" src="./images/stuff/boshliq.jpg" alt="" />
                    </div>
                    <div className="">
                        <p className=" text-center text-md font-bold text-green-800">Ubaydullayev Muhammadali</p>
                        <p className="text-center mb-6 text-green-800">Director NITS(CEO)</p>
                        <p className="text-center mb-4 text-green-800 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veniam impedit consequuntur sit exercitationem odio voluptate totam, labore nihil cupiditate!</p>
                        <div className="flex justify-center gap-4">
                            <FaFacebookF className="icons text-xl text-green-secondary hover:text-emer cursor-pointer" />
                            <FaInstagram className="icons text-xl text-green-secondary cursor-pointer" />
                            <FaTelegramPlane className="icons text-xl text-green-secondary cursor-pointer" />
                            <FaTwitter className="icons text-xl text-green-secondary cursor-pointer" />
                        </div>
                    </div>
                </div>

                <Footer />



            </div>

        </motion.div>
    )
}

export default Home
