
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import logo from "../assets/logo/logo.png"
export default function MobileNav() {
    const [open, setOpen] = useState(false);
    const [scope, animate] = useAnimate();
    const items = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Product",
            link: "/product"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ];

    // the stagger effect
    const staggerList = stagger(0.1, { startDelay: 0.25 });

    // create the animations that will be applied
    // whenever the open state is toggled

    useEffect(() => {
        animate(
            "ul",
            {
                width: open ? "100%" : 0,
                height: open ? 200 : 0,
                opacity: open ? 1 : 0
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.4
            }
        );
        animate(
            "a",
            open
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, scale: 0.3, x: -50 },
            {
                duration: 0.2,
                delay: open ? staggerList : 0
            }
        );
    }, [open]);

    return (
        <div className="p-4 md:hidden  z-50 bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white w-full" ref={scope}>
            <div className=" flex flex-row-reverse justify-between items-center">
                <div>

                </div>
                <div className="flex items-center gap-x-2">
                    <img src={logo} alt="" className="h-16" />
                    <div className="flex flex-col">
                        <span className="text-sm font-bold">Handi-Craft</span>
                        <span className="text-sm font-bold">LLP</span>
                    </div>
                </div>

                <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
                    <IconButton
                        placeholder={""}
                        onPointerEnterCapture={""}
                        onPointerLeaveCapture={""}
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </motion.button>

            </div>
            <ul className="flex flex-col gap-y-5  justify-center w-screen p-1">
                {items.map((item, index) => (
                    // <motion.li key={index} className="w-screen">
                    <a key={index} href={item.link} className="hover:bg-gray-900 rounded-md p-2 hover:text-white">
                        {item.name}
                    </a>
                    // </motion.li>
                ))}
            </ul>
        </div>
    );
}
