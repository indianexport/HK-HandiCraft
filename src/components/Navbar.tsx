import { useState } from "react";
import logo from "../assets/logo/logo.png"

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Button } from "@material-tailwind/react";
import MobileNav from "./MobileNav";

// import Sidebar from "./Sidebar";
const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous! && latest > 150) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    })
    return (

        <>
            <MobileNav />
            <AnimatePresence>

                <motion.nav
                    variants={{
                        scroll: {
                            backgroundColor: "#000",
                            color: "#fff",
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            // paddingBottom: "0.4rem",
                            zIndex: 1000
                        },
                        stable: {
                            width: "100%",
                            // paddingBottom: "0.9rem",
                            color: "#fff",
                        }

                    }}
                    animate={scroll ? "scroll" : "stable"}
                    transition={{ duration: 0.4 }}
                    exit={"stable"}
                    className="hidden md:flex justify-around items-center p-3 bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
                    <div className="flex justify-center items-center">
                        <img src={logo} alt="" className="h-16" />
                        <div className="flex flex-col">
                            <span className="text-sm font-bold">Handi-Craft</span>
                            <span className="text-sm font-bold">LLP</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-8">

                        <ul className="flex gap-x-20 items-center ">
                            <li>
                                <a href="/" className="hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="/product" target="_blank" className="hover:underline">Product</a>
                            </li>
                            <li>
                                <a href="/about" rel="noopener noreferrer" className="hover:underline">About</a>
                            </li>
                            <li>

                                <Button
                                    onPointerEnterCapture={() => { }}
                                    onPointerLeaveCapture={() => { }}
                                    placeholder={""}
                                    className="!bg-[#d61242] !text-white !font-bold rounded-full hover:bg-pink-300"
                                >
                                    <a href="/contact">Contact</a>
                                </Button>

                            </li>
                        </ul>

                    </div>
                </motion.nav>
            </AnimatePresence >
        </>
    );
}

export default Navbar;