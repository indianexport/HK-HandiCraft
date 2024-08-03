import { Building2, ChartNoAxesCombined, FileText, Handshake, Scale, ScrollText } from "lucide-react";
import ScrollRevel from "./ScrollRevel";

const AboutSection = () => {
    return (
        <div className=" text-[#333333] gap-4 p-12 mt-12 mb-56 md:mb-12 justify-center items-center h-[80dvh]">
            <ScrollRevel>

                <h1
                    color="blue-gray"
                    className="mb-4 font-bold lg:!text-2xl"
                >
                    <span className="relative flex justify-center text-pink-400">
                        <div
                            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                        ></div>

                        <span className="relative z-10 bg-white px-6">About Company
                        </span>
                    </span>
                </h1>
            </ScrollRevel>
            <div className="flex flex-col-reverse gap-y-20 justify-around m-2 mt-8 ">

                <ScrollRevel>
                    <div className="flex justify-center items-center space-x-12 ">
                        <div className=" p-2 grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
                            <div className=" flex gap-2 flex-col items-center">
                                <Handshake />
                                <span>
                                    Nature of Business
                                </span>
                                <span>
                                    Manufacturer
                                </span>
                            </div>
                            <div className=" flex gap-2 flex-col items-center">
                                <Building2 />
                                <span>
                                    Year of Establishment

                                </span>
                                <span>
                                    1985
                                </span>
                            </div>
                            <div className=" flex gap-2 flex-col items-center">
                                <Scale />
                                <span>
                                    Legal Status of Firm

                                </span>
                                <span>
                                    Partnership Firm
                                </span>
                            </div>
                            <div className=" flex gap-2 flex-col items-center">
                                <ChartNoAxesCombined />
                                <span>
                                    Annual Turnover

                                </span>
                                <span>
                                    Rs. 50 Lakh - 1 Crore
                                </span>
                            </div>
                            <div className=" flex gap-2 flex-col items-center">
                                <ScrollText />
                                <span>
                                    GST No.

                                </span>
                                <span>
                                    24AALFH8951N1ZP
                                </span>
                            </div>

                            <div className=" flex gap-2 flex-col items-center">
                                <FileText />
                                <span>
                                    CIN No.

                                </span>
                                <span>
                                    AAN-8912
                                </span>
                            </div>

                        </div>
                    </div>
                </ScrollRevel>

                <div className="font-semibold ml-auto mr-auto">
                    <ScrollRevel>
                        <h1 className="py-2 bg-gradient-to-t from-gray-500 to-gray-900 bg-clip-text text-xl text-transparent text-center h-full w-[60vw] tracking-wider leading-8 ">
                            Founded in the year 1985, we “H K Handicraft LLP” are a dependable and famous Manufacturer of a broad range of Home Temple, Bangle Box, Dry Fruit Box, etc
                        </h1>
                    </ScrollRevel>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;


// Founded in the year 1985, we “H K Handicraft LLP” are a dependable and famous Manufacturer of a broad range of Home Temple, Bangle Box, Dry Fruit Box, etc


/*
Nature of Business
Manufacturer

Year of Establishment
1985

Legal Status of Firm
Partnership Firm

Annual Turnover
Rs. 50 Lakh - 1 Crore

GST No.
24AALFH8951N1ZP

CIN No.
AAN-8912

*/