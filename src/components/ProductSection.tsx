import { Typography } from "@material-tailwind/react";
import { ProductCard } from "./ui/ProductCard";

// import PoojaThali from "../assets/images/pooja-thali.png"
const ProductSection = () => {
    return (
        <div className="h-full p-6 ">
            <h1 className=" text-center text-3xl mt-12 text-[#d61242] font-bold p-2">
                <span className="relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-white px-6">Our collection</span>
                </span>
                </h1>
            <div className="flex flex-col">
                {/* product card */}
                <div className="mx-auto text-center mb-16">
                    <Typography onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} className="font-medium text-lg">
                        Tailored Product Search
                    </Typography>
                    <Typography onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} variant="h1" className="my-4 text-4xl">
                        Find What You Need
                    </Typography>
                    <Typography onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} className="!font-normal text-gray-500 mx-auto max-w-2xl">
                        Simplify your shopping experience with our intuitive filter system.
                        Whether you&apos;re looking for specific features, price ranges, or
                        brands.
                    </Typography>
                </div>
                <ProductCard />
            </div>
        </div>
    );
}

export default ProductSection;