import { Typography } from "@material-tailwind/react";
import { ProductCard } from "./ui/ProductCard";
import ScrollRevel from "./ScrollRevel";
const ProductSection = () => {
    return (
        <div className="h-full p-6 ">
            <ScrollRevel>

                <h1 className=" text-center text-3xl mt-12 text-[#d61242] font-bold p-2">
                    <span className="relative flex justify-center">
                        <div
                            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                        ></div>

                        <span className="relative z-10 bg-white px-6">Our collection</span>
                    </span>
                </h1>

            </ScrollRevel>

            <div className="flex flex-col">
                {/* product card */}
                <div className="mx-auto text-center mb-16">
                    <ScrollRevel>
                        <Typography onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} className="font-medium text-lg">
                            Tailored Product Search
                        </Typography>
                    </ScrollRevel>
                    <ScrollRevel>
                        <Typography onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} variant="h1" className="my-4 text-4xl">
                            Find What You Need
                        </Typography>
                    </ScrollRevel>
                    <ScrollRevel>
                        <Typography onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} className="!font-normal text-gray-500 mx-auto max-w-2xl">
                            Simplify your shopping experience with our intuitive filter system.
                            Whether you&apos;re looking for specific features, price ranges, or
                            brands.
                        </Typography>
                    </ScrollRevel >
                </div>

                <ProductCard />
            </div>
        </div >
    );
}

export default ProductSection;