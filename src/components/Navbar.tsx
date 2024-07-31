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
                            backgroundColor: "#fff",
                            color: "#000",
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            padding: "0.4rem",
                            zIndex: 1000
                        },
                        stable: {
                            width: "100%",
                            padding: "0.9rem",
                            color: "#000",
                        }

                    }}
                    animate={scroll ? "scroll" : "stable"}
                    transition={{ ease: "easeInOut", duration: 0.4 }}
                    className="hidden md:flex justify-around items-center ">
                    <div className="flex justify-center items-center">
                        <img src={logo} alt="" className="h-16" />
                        {/* <span className="text-3xl font-bold">Handi-craft</span> */}
                    </div>
                    <div className="flex items-center space-x-8">

                        <ul className="flex gap-x-20 items-center ">
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Product</a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">About</a>
                            </li>
                            <li>

                                <Button
                                    onPointerEnterCapture={() => { }}
                                    onPointerLeaveCapture={() => { }}
                                    placeholder={""}
                                    className="!bg-[#d61242] !text-white !font-bold rounded-full hover:bg-pink-300"
                                >
                                    <a href="#" target="" rel="noopener noreferrer">Contact</a>
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