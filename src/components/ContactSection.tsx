import { Button, Input, Textarea } from "@material-tailwind/react";
import image from "../assets/images/image.png"
const ContactSection = () => {
    return (
        <section className="px-8 py-8 lg:py-16">
            <div className="container mx-auto text-center">
                <h1
                    color="blue-gray"
                    className="mb-4 font-bold lg:!text-2xl"
                >
                    <span className="relative flex justify-center text-pink-400">
                        <div
                            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                        ></div>

                        <span className="relative z-10 bg-white px-6">Customer Care
                        </span>
                    </span>
                </h1>
                <h1
                    color="blue-gray"
                    className="mb-4 !text-3xl lg:!text-5xl text-gray-900 font-bold"
                >
                    We&apos;re Here to Help
                </h1>
                <h1 className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
                    Whether it&apos;s a question about our services, a request for
                    technical assistance, or suggestions for improvement, our team is
                    eager to hear from you.
                </h1>
                <div className="grid grid-cols-1 gap-x-24 gap-y-28 lg:grid-cols-2 items-center ">
                    <img
                        src={image}
                        alt="map"
                        className="w-full h-full lg:max-h-[510px] object-cover rounded-lg"
                    />
                    <div className="flex items-center justify-center">

                        <form
                            action="#"
                            className="flex flex-col  gap-4 lg:max-w-sm "
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h1
                                        className="mb-2 text-left font-medium !text-gray-900"
                                    >
                                        First Name
                                    </h1>
                                    <Input
                                        color="gray"
                                        size="lg"
                                        placeholder="First Name"
                                        name="first-name"
                                        className="focus:border-t-gray-900"
                                        containerProps={{
                                            className: "min-w-full",
                                        }}
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        onPointerEnterCapture={() => { }}
                                        onPointerLeaveCapture={
                                            () => { }
                                        }
                                        crossOrigin={() => { }}
                                    />
                                </div>
                                <div>

                                    <h1
                                        className="mb-2 text-left font-medium !text-gray-900"
                                    >
                                        Last Name
                                    </h1>
                                    <Input
                                        color="gray"
                                        size="lg"
                                        placeholder="Last Name"
                                        name="last-name"
                                        className="focus:border-t-gray-900"
                                        containerProps={{
                                            className: "!min-w-full",
                                        }}
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        onPointerEnterCapture={() => { }}
                                        onPointerLeaveCapture={
                                            () => { }
                                        }
                                        crossOrigin={() => { }}
                                    />
                                </div>
                            </div>
                            <div>
                                <h1
                                    className="mb-2 text-left font-medium !text-gray-900"
                                >
                                    Your Email
                                </h1>
                                <Input
                                    color="gray"
                                    size="lg"
                                    placeholder="name@email.com"
                                    name="email"
                                    className="focus:border-t-gray-900"
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    onPointerEnterCapture={() => { }}
                                    onPointerLeaveCapture={
                                        () => { }
                                    }
                                    crossOrigin={() => { }}
                                />
                            </div>
                            <div>
                                <h1

                                    className="mb-2 text-left font-medium !text-gray-900"
                                >
                                    Your Message
                                </h1>
                                <Textarea
                                    rows={6}
                                    color="gray"
                                    placeholder="Message"
                                    name="message"
                                    className="focus:border-t-gray-900"
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    onPointerEnterCapture={() => { }}
                                    onPointerLeaveCapture={
                                        () => { }
                                    }
                                />
                            </div>
                            <Button
                                placeholder={""}
                                onPointerEnterCapture={() => { }}
                                onPointerLeaveCapture={() => { }}
                                className="w-full p-3 bg-[#d61242] text-white rounded-lg" color="gray">
                                Send message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;