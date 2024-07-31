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
                            <button className="group border border-pink-100  hover:text-white relative h-12 overflow-hidden overflow-x-hidden rounded-full bg-neutral-950 px-8 py-2 text-neutral-50"><span className="relative z-10 hover:text-white">Get Quot</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-pink-400  transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
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
        img: "https://aarsunwoods.com/wp-content/uploads/2019/02/Wooden-Pooja-Temple-with-Drawers-YT-36-G-jpg.webp",
        name: "wooden home temple",
        price: "$1,500"
    },
    {
        img: "https://boontoon.b-cdn.net//assets/images/catalog-product/Oxidised-wooden-and-metal-dry-fruit-box-beautified-with-stunning-design-BH-1027.webp",
        name: "Dry fruit box",
        price: "$300"
    },
    {
        img: "https://images-eu.ssl-images-amazon.com/images/I/51bJnDA6zlL._AC_UL600_SR600,600_.jpg",
        name: "Premium Suit",
        price: "$1,240"
    },
];

export function ProductCard() {
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
        </section>
    );
}

export default ProductCard;