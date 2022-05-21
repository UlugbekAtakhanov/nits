import React, { useEffect, useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Kurslar from "./pages/Kurslar/Kurslar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";


function App() {
    const [scroll, setScroll] = useState(false)
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {

        const time = window.addEventListener("scroll", () => {
            if (window.scrollY > 700) {
                setScroll(true)
            } else if (window.scrollY < 700) {
                setScroll(false)
            }
        })
        return () => {
            window.removeEventListener("scroll", time)
        }

    }, [scroll])

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home isSideBarOpen = {isSideBarOpen} setIsSideBarOpen = {setIsSideBarOpen} />} />
                <Route path="/jamoa" element={<About isSideBarOpen = {isSideBarOpen} setIsSideBarOpen = {setIsSideBarOpen} />} />
                <Route path="/kurslar" element={<Kurslar isSideBarOpen = {isSideBarOpen} setIsSideBarOpen = {setIsSideBarOpen} />} />
                <Route path="/royhatdan-utish" element={<Register />} />
                <Route path="/kirish" element={<Login />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            {scroll && <ScrollToTop />}

        </div>
    );
}

export default App;
