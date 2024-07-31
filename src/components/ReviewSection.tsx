import {
    Card,
    CardBody,
    Rating,
    Typography,
} from "@material-tailwind/react";
import ScrollRevel from "./ScrollRevel";

interface ReviewCardPropsType {
    title: string;
    name: string;
    feedback: string;
    date: string;
}

export function CardReview({
    name,
    feedback,
    date,
    title,
}: ReviewCardPropsType) {
    return (
        <Card onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} shadow={false}>
            <CardBody onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} className="pt-0">
                <Rating onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} value={4} className="text-amber-500" />
                <Typography onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""}
                    variant="h6"
                    color="blue-gray"
                    className="font-bold mb-2 mt-1"
                >
                    {title}
                </Typography>
                <Typography onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} className="text-base font-normal !text-gray-500">
                    {feedback}
                </Typography>
                <Typography onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""}
                    variant="h6"
                    color="blue-gray"
                    className="font-medium mt-3"
                >
                    {name}
                </Typography>
                <Typography onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""}
                    variant="small"
                    className="font-normal !text-gray-500"
                >
                    {date}
                </Typography>
            </CardBody>
        </Card>
    );
}

const CONTENTS = [
    {
        title: "Pooja Chowki",
        name: "Reema",
        feedback:
            "Items quality is good. Rate is fix no bargening. Stock is available. 1 day they arrange bulk items delivered in ur placed. Delivery also arrange this people. All over so genuine in material. All marriage items are available and so reasonable price thei",
        date: "21 December 23",
    },
    {
        title: "Wooden Handicraft",
        name: "shivani ",
        feedback:
            "Yaar, ye pen toh bilkul jhakkas hai! 😍👌🏻 Dekhne mein itna mast lagta hai, lagta hi nahi ki handmade hai. Wood ka finish behad smooth hai, pakad mein bilkul perfect fit hota hai. Likhne mein bhi buttery smooth feel aata hai. 🖋️✨",
        date: "26 june 2024",
    },
    {
        title: "Wooden Temple",
        name: "mohan",
        feedback:
            "Handmade wooden temple kaafi shandar hai! Iska craftsmanship bohot hi zabardast hai. Har ek detail par kaafi dhyan diya gaya hai, aur wood quality bhi top-notch hai. Isme traditional aur modern designs ka perfect blend hai jo kisi bhi ghar ki shaanta aur beauty ko enhance kar dega. Assembly bhi simple thi aur final look bilkul waise hi tha jaise photos mein dikha tha. Yeh temple ghar ke liye ek divine touch laata hai. Overall, main bohot impressed hoon is product se!",
        date: "10 February 2024",
    },
];
export function ReviewSection() {
    return (
        <section className="py-20 px-8">
            <div className="mx-auto container">
                <div className="text-center">
                    <ScrollRevel>
                        <Typography onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} variant="h6" className="mb-3 uppercase">
                            <span className="relative flex justify-center text-pink-400">
                                <div
                                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                                ></div>

                                <span className="relative z-10 bg-white px-6"> Reviews</span>
                            </span>

                        </Typography>
                    </ScrollRevel>
                    <ScrollRevel>
                        <Typography onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} variant="h3">Our Customer&apos;s Opinion</Typography>
                    </ScrollRevel>

                    <ScrollRevel>
                        <Typography onPointerLeaveCapture={""} placeholder={""} onPointerEnterCapture={""} className="mt-3 text-center text-[18px] font-normal text-gray-500">
                            From general feedback to detailed accounts, find out why our users
                            love our product.
                        </Typography>
                    </ScrollRevel>
                </div>
                <div className="mt-32 grid lg:grid-cols-3 grid-cols-1 gap-y-6">
                    {CONTENTS.map(({ name, feedback, title, date }, index) => (
                        <ScrollRevel>

                            <CardReview
                                key={index}
                                title={title}
                                name={name}
                                feedback={feedback}
                                date={date}
                            />
                        </ScrollRevel>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ReviewSection;