import image from "../assets/images/image.png"
import ScrollRevel from "./ScrollRevel";

import { IoLogoWhatsapp } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
    return (
        <section id="contact" className="p-8 mb-16 lg:py-16 h-screen md:h-[80dvh]">
            <div className="container mx-auto text-center">
                <ScrollRevel>

                    <h1
                        color="blue-gray"
                        className="mb-4 font-bold lg:!text-2xl"
                    >
                        <span className="relative flex justify-center text-pink-400">
                            <div
                                className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                            ></div>

                            <span className="relative z-10 bg-white px-6">Customer Care
                            </span>
                        </span>
                    </h1>
                </ScrollRevel>
                <ScrollRevel>

                    <h1
                        color="blue-gray"
                        className="mb-4 !text-3xl lg:!text-5xl text-gray-900 font-bold"
                    >
                        We&apos;re Here to Help
                    </h1>
                </ScrollRevel>
                <ScrollRevel>
                    <h1 className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
                        Whether it&apos;s a question about our product, a request for
                        product quotet assistance, or suggestions for improvement, our team is
                        eager to hear from you.
                    </h1>
                </ScrollRevel>
                <div className="grid grid-cols-1 gap-x-24 gap-y-28 lg:grid-cols-2 items-center ">
                    <img
                        src={image}
                        alt="map"
                        className="w-full h-full lg:max-h-[510px] object-cover rounded-lg"
                    />
                    <div className=" flex justify-around flex-col md:flex-row gap-y-6 md:gap-x-6 h-full">

                        <div className="font-medium">
                            <div className="flex items-end gap-x-2 justify-center">

                                <a href="https://www.google.com/maps?q=23.02554560,72.58655230" target="_blank" rel="noopener"> <FaMapMarkerAlt color="red" size={22} /></a>
                                <span className="font-semibold">
                                    Address:</span> <br />
                            </div>
                            <div className="tracking-wide mt-2">
                                H K Handicraft LLP
                                Shop No. 4, Sahajanand Market, Pirmohammad Sha Road, Pankore Naka, Ahmedabad - 380001, Gujarat, India
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-end md:gap-x-4 gap-y-2">
                            <div className=" flex gap-x-2 md:flex-col md:gap-y-2 ">
                                <div className="flex gap-x-2">
                                    <IoLogoWhatsapp className="text-green-300" size={26} />
                                    <a href="https://wa.me/919825583224?text=I%20want%20Best%20Quote%20about%20your%20product" target="_blank" rel="noopener">+91 9825583224</a>
                                </div>
                                <div className="flex gap-x-2">
                                    <IoLogoWhatsapp className="text-green-300" size={26} />
                                    <a href="https://wa.me/919824139927?text=I%20want%20Best%20Quote%20about%20your%20product" target="_blank" rel="noopener">+91 9824139927</a>
                                </div>
                            </div>

                            <div className="flex gap-x-2 items-center md:flex-col md:gap-y-2">
                                <div className="flex gap-x-2">
                                    <FaPhoneAlt color="green" /><a href="tel:+91 98255 83224">+91 9825583224</a>
                                </div>

                                <div className="flex gap-x-2">
                                    <FaPhoneAlt color="green" /><a href="tel:+91 98241 39927">+91 9824139927</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <CgMail className="text-red-300" size={26} />
                                <a href="mailto:Hkhandicraftllp@gmail.com?subject=HK Handicraft Product&body=I want to talk business">
                                    Hkhandicraftllp@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;