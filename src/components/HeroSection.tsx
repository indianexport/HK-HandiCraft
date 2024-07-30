import { Carousel } from "@material-tailwind/react";
import PoojaThali from "../assets/images/pooja-thali.png"



const HeroSection = () => {
    return (
        <div className="top-0 z-[-2] h-screen w-full transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
            <Carousel
                placeholder={""}
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <div className="h-full w-full object-cover flex flex-col md:flex-row justify-evenly items-center p-2">
                    <div className="flex flex-col gap-y-7 ">
                        <div className="flex flex-col gap-7">
                            <p className="text-[#d61242] font-bold">HANDMADE PRODUCTS</p>
                            <h1 className="text-6xl capitalize">new collection <span className="text-[#d61242] font-bold">
                                2024
                            </span>
                            </h1>
                        </div>
                        <button className="group relative h-12 overflow-hidden overflow-x-hidden hover:text-white font-bold border border-gray-500 hover:border-none rounded-full w-56 bg-neutral-950 px-8 py-2 text-neutral-50"><span className="relative z-10 ">view Product</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#d61243] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                    </div>
                    <img
                        src={PoojaThali}
                        alt="image 3"
                        className="h-[60vh]"
                    />
                </div>
                <div className="h-full w-full object-cover flex flex-col md:flex-row justify-evenly items-center p-2">
                    <div className="flex flex-col gap-y-7 ">
                        <div className="flex flex-col gap-7">
                            <p className="text-[#d61242] font-bold">HANDMADE PRODUCTS</p>
                            <h1 className="text-6xl capitalize">new collection <span className="text-[#d61242] font-bold">
                                2024
                            </span>
                            </h1>
                        </div>
                        <button className="group relative h-12 overflow-hidden overflow-x-hidden hover:text-white font-bold border border-gray-500 hover:border-none rounded-full w-56 bg-neutral-950 px-8 py-2 text-neutral-50"><span className="relative z-10 ">view Product</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#d61243] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                    </div>
                    <img
                        src={PoojaThali}
                        alt="image 3"
                        className="h-[60vh]"
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default HeroSection;