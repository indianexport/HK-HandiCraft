import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"


interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%"
}

const ScrollRevel = ({ children, width }: Props) => {

    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation()

    useEffect(() => {

        if (isInView) {
            // animation
            mainControls.start("visible")
        }

    }, [isInView])

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}

                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.3 }}
            >{children}</motion.div>
        </div>
    );
}

export default ScrollRevel;