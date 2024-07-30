import { useState } from "react";
import logo from "../assets/logo/h-k-handicrafts-90x90.png"

import { motion, useScroll, useMotionValueEvent, useCycle, AnimatePresence } from "framer-motion";

// import Sidebar from "./Sidebar";
const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const { scrollY } = useScroll()
    const [mobileNav, toggleMobileNav] = useCycle(false, true)
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous! && latest > 150) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    })
    return (

        <AnimatePresence>

            <motion.nav
                variants={{
                    initial: {
                        width: "100%",
                        padding: "1rem",
                        color: "#fff",
                    },
                    scroll: {
                        backgroundColor: "#fff",
                        borderBottom: "0.1rem solid #d61242",
                        color: "#fff",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        padding: "1rem",
                        zIndex: 1000

                    }
                }}
                transition={{ ease: "easeIn", delay: 0.1, duration: 0.3 }}
                initial={{ background: "transparent" }}
                animate={scroll ? "scroll" : "initial"}
                exit={{ background: "initial" }}
                className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700" >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">Handi-Craft</span>
                    </a>

                    <div
                        className="hidden md:inline-block w-full  md:w-auto" id="navbar-solid-bg">
                        <ul className=" text-gray-900 flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Product</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <motion.button
                        animate={mobileNav ? "open" : "closed"}
                        onClick={() => toggleMobileNav()}
                        data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </motion.button>

                    <AnimatePresence>

                        {mobileNav ?
                            <motion.div
                                variants={{
                                    open: {
                                        y: "0%",
                                        zIndex: 1000,

                                    },
                                    closed: {
                                        y: "-200%"
                                    }
                                }}

                                initial="closed"
                                animate="open"
                                exit="closed"
                                className=" w-full  md:w-auto" id="navbar-solid-bg">
                                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                                    <li>
                                        <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Products</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                    </li>
                                </ul>
                            </motion.div> :
                            null
                        }
                    </AnimatePresence>
                </div>
            </motion.nav >
        </AnimatePresence>

    );
}

export default Navbar;