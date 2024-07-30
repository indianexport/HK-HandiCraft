import { Carousel } from "@material-tailwind/react";
import PoojaThali from "../assets/images/pooja-thali.png"



const HeroSection = () => {
    return (
        <div className="p-6 mt-8">

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
                <div className="h-full w-full object-cover flex flex-col md:flex-row justify-around items-center">
                    <div>
                        <div className="flex flex-col gap-7">
                            <p className="text-[#d61242] font-bold">HANDMADE PRODUCTS</p>
                            <h1 className="text-6xl capitalize">new collection <span className="text-[#d61242] font-bold">
                                2024
                            </span>
                            </h1>
                        </div>
                        <button className="mt-12 w-56 p-4 rounded-full hover:bg-[#d61242] font-bold border-black hover:border-none hover:text-white border">
                            view product
                        </button>
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