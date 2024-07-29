import PoojaThali from "../assets/images/pooja-thali.png"
const ProductSection = () => {
    return (
        <div className="h-full p-6 ">
            <h1 className=" text-center text-3xl font-medium mt-12">Our collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-4">
                <div className="flex justify-center">
                    <div className="w-96 mt-6 mb-2 flex justify-center flex-col p-2">
                        <img src={PoojaThali} alt="" className="h-52 ease-in duration-300 hover:h-56 object-scale-down" />
                        <div>
                            <p>price : 2999rs</p>
                            <button>
                                Get quote
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-96 mt-6 mb-2 flex justify-center flex-col p-2">
                        <img src={PoojaThali} alt="" className="h-52 ease-in duration-300 hover:h-56 object-scale-down" />
                        <div>
                            <p>price : 2999rs</p>
                            <button>
                                Get quote
                            </button>
                        </div>
                    </div>
                </div><div className="flex justify-center">
                    <div className="w-96 mt-6 mb-2 flex justify-center flex-col p-2">
                        <img src={PoojaThali} alt="" className="h-52 ease-in duration-300 hover:h-56 object-scale-down" />
                        <div>
                            <p>price : 2999rs</p>
                            <button>
                                Get quote
                            </button>
                        </div>
                    </div>
                </div><div className="flex justify-center">
                    <div className="w-96 mt-6 mb-2 flex justify-center flex-col p-2">
                        <img src={PoojaThali} alt="" className="h-52 ease-in duration-300 hover:h-56 object-scale-down" />
                        <div>
                            <p>price : 2999rs</p>
                            <button>
                                Get quote
                            </button>
                        </div>
                    </div>
                </div><div className="flex justify-center">
                    <div className="w-96 mt-6 mb-2 flex justify-center flex-col p-2">
                        <img src={PoojaThali} alt="" className="h-52 ease-in duration-300 hover:h-56 object-scale-down" />
                        <div>
                            <p>price : 2999rs</p>
                            <button>
                                Get quote
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-96 mt-6 mb-2 flex justify-center flex-col p-2">
                        <img src={PoojaThali} alt="" className="h-52 ease-in duration-300 hover:h-56 object-scale-down" />
                        <div>
                            <p>price : 2999rs</p>
                            <button>
                                Get quote
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductSection;