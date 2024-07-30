import { Building2, ChartNoAxesCombined, FileText, Handshake, Scale, ScrollText } from "lucide-react";

const AboutSection = () => {
    return (
        <div className="h-full gap-4 p-12 mt-12 mb-2 justify-center items-center">
            <h1 className="capitalize text-3xl text-center p-4 m-2 text-[#d61242] font-bold">About company</h1>
            <div className="flex flex-col-reverse gap-y-12 justify-around m-2 mt-8">

                <div className="grid grid-cols-2 gap-8">
                    <div className=" flex gap-2 flex-col">
                        <Handshake />
                        <span>
                            Nature of Business

                        </span>
                        <span>
                            Manufacturer
                        </span>
                    </div>
                    <div className=" flex gap-2 flex-col">
                        <Building2 />
                        <span>
                            Year of Establishment

                        </span>
                        <span>
                            1985
                        </span>
                    </div>
                    <div className=" flex gap-2 flex-col">
                        <Scale />
                        <span>
                            Legal Status of Firm

                        </span>
                        <span>
                            Partnership Firm
                        </span>
                    </div>
                    <div className=" flex gap-2 flex-col">
                        <ChartNoAxesCombined />
                        <span>
                            Annual Turnover

                        </span>
                        <span>
                            Rs. 50 Lakh - 1 Crore
                        </span>
                    </div>
                    <div className=" flex gap-2 flex-col">
                        <ScrollText />
                        <span>
                            GST No.

                        </span>
                        <span>
                            24AALFH8951N1ZP
                        </span>
                    </div>
                    <div className=" flex gap-2 flex-col">
                        <FileText />
                        <span>
                            CIN No.

                        </span>
                        <span>
                            AAN-8912
                        </span>
                    </div>

                </div>
                <div className="font-semibold ">
                    <h1 className="py-2 h-full w-full tracking-wider leading-8">
                        Founded in the year 1985, we “H K Handicraft LLP” are a dependable and famous Manufacturer of a broad range of Home Temple, Bangle Box, Dry Fruit Box, etc
                    </h1>
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