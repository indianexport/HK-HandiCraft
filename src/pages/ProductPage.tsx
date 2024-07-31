import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollRevel from "../components/ScrollRevel";
import { ProductListCard } from "../components/ui/ProductCard";

import templeImage from "../../src/assets/images/home-temple.webp";
import dryFruitBox from "../../src/assets/images/meenakari-dry-fruit-box-1000x1000.webp";
import dandiyaStick from "../../src/assets/images/multicolor-decorated-dandiya-sticks-1000x1000.webp";
import BangalBox from "../../src/assets/images/designer-bangle-box-1000x1000.webp";
import poojaThali from "../../src/assets/images/fancy-pooja-thali-with-diya-1000x1000.webp";
import jhula from "../../src/assets/images/laddu-gopal-jhula-1000x1000.webp";
import jewelleryBox from "../../src/assets/images/m1-roll-jewellery-box-1000x1000.webp";
import woodenBox from "../../src/assets/images/meenakari-box-1000x1000.webp";
import keyHolder from "../../src/assets/images/meenakari-wooden-key-holder-1000x1000.webp";
import woodenDoli from "../../src/assets/images/minakari-wooden-doli-1000x1000.webp";
import key from "../../src/assets/images/n-40-key-1000x1000.webp";
import bullockCart from "../../src/assets/images/n-300-wooden-bullock-cart-500x500.webp";
import servingGlass from "../../src/assets/images/peacock-design-glass-and-serving-tray-set-1000x1000.webp";
import woodenSinghasan from "../../src/assets/images/wooden-meenakari-singhasan-1000x1000.webp";
import mukhwas from "../../src/assets/images/square-mukhwas-box-1000x1000.webp";
import woodenBajot from "../../src/assets/images/wooden-bajot-1000x1000.webp";
import woodenCharpai from "../../src/assets/images/mini-charpai-1000x1000.webp";

const CONTENTS = [
    {
        img: templeImage,
        name: "Wooden Home Temple",
        price: "$1,500"
    },
    {
        img: dryFruitBox,
        name: "Dry Fruit Box",
        price: "$300"
    },
    {
        img: dandiyaStick,
        name: "Dandiya Stick",
        price: "$40"
    },
    {
        img: poojaThali,
        name: "Pooja Thali",
        price: ""
    },
    {
        img: jhula,
        name: "Meenakari jhula",
        price: ""
    },
    {
        img: woodenBajot,
        name: "Meenakari Handcraft Bajot",
        price: ""
    },
    {
        img: woodenSinghasan,
        name: "Wooden Singhasan",
        price: ""
    },
    {
        img: BangalBox,
        name: "Bangle Box",
        price: ""
    },
    {
        img: jewelleryBox,
        name: "Jewelry Box",
        price: ""
    },
    {
        img: bullockCart,
        name: "Bullock Cart",
        price: ""
    },
    {
        img: mukhwas,
        name: "Mukhwas Box",
        price: ""
    },
    {
        img: key,
        name: "Handicraft Items",
        price: ""
    },
    {
        img: servingGlass,
        name: "Serving Tray And Glass",
        price: ""
    },
    {
        img: keyHolder,
        name: "Key Holder",
        price: ""
    },
    {
        img: woodenDoli,
        name: "Minakari Doli",
        price: ""
    },
    {
        img: woodenBox,
        name: "Wooden Box",
        price: ""
    },
    {
        img: woodenCharpai,
        name: "Wooden Charpai",
        price: ""
    },
];

const productPage = () => {
    return (
        <>
            <div>
                <Navbar />
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
                <Footer />
            </div>
        </>
    );
}

export default productPage;