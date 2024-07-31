import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import ScrollRevel from "../ScrollRevel";

interface ProductListCardPropsType {
    img: string;
    name: string;
    price: string;
}


import templeImage from "../../assets/images/home-temple.webp";
import dryFruitBox from "../../assets/images/meenakari-dry-fruit-box-1000x1000.webp";
import dandiyaStick from "../../assets/images/multicolor-decorated-dandiya-sticks-1000x1000.webp";
import { useNavigate } from "react-router-dom";



export function ProductListCard({
    img,
    name,
    price,
}: ProductListCardPropsType) {
    return (
        <Card onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} shadow={false} className="border border-gray-300">
            <CardBody onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} className="pb-0">
                <img src={img} alt={img} className="min-w-[280px] w-full" />
                <div className="flex justify-between">
                    <div>
                        <Typography onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} className="mb-2" color="blue-gray" variant="h5">
                            {name}
                        </Typography>
                        <div className="mb-5 flex  items-center gap-2">
                            <a href="https://wa.me/9824139927?text=I%20want%20Best%20Quote%20about%20your%20product" target="_blank" rel="noopener">
                                <button className="group border border-pink-100  hover:text-white relative h-12 overflow-hidden overflow-x-hidden rounded-full bg-neutral-950 px-8 py-2 text-neutral-50"><span className="relative z-10 hover:text-white">Get Quotet</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-pink-400  transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                            </a>
                        </div>
                    </div>
                    <Typography
                        onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""}
                        variant="h5"
                        className="text-gray-600"
                    >
                        {price}
                    </Typography>
                </div>
            </CardBody>
        </Card>
    );
}

const CONTENTS = [
    {
        img: templeImage,
        name: "wooden home temple",
        price: "$1,500"
    },
    {
        img: dryFruitBox,
        name: "Dry fruit box",
        price: "$300"
    },
    {
        img: dandiyaStick,
        name: "dandiya stick",
        price: "$40"
    },
];

export function ProductCard() {
    const navigate = useNavigate()
    return (
        <section className="py-10 px-8">
            <div className="mx-auto container">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
                    {CONTENTS.map(({ img, name, price }, index) => (
                        <ScrollRevel>
                            <ProductListCard
                                key={index}
                                img={img}
                                name={name}
                                price={price}
                            />
                        </ScrollRevel>
                    ))}
                </div>
            </div>
            <ScrollRevel>

                <div className="flex items-center justify-center mt-12">
                    <button onClick={() => { navigate("/product") }} className="bg-pink-400 p-3 w-56 rounded-full text-white hover:bg-pink-300">
                        view more
                    </button>
                </div>
            </ScrollRevel>
        </section>
    );
}

export default ProductCard;