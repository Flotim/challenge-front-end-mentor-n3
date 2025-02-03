import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Highlight from "../animation/animated-number";

const MainContainer = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    const currentDayIndex = new Date().getDay();
    const [activeIndex, setActiveIndex] = useState(currentDayIndex - 1);

    useEffect(() => {
        setTimeout(() => setTotalAmount(478), 150);
    }, []);

    const barsData = [
        { index: "mon", value: 17.45 },
        { index: "tue", value: 34.91 },
        { index: "wed", value: 52.36 },
        { index: "thu", value: 31.07 },
        { index: "fru", value: 23.39 },
        { index: "sat", value: 43.28 },
        { index: "sun", value: 25.48 }
    ];

    return (
        <div className="p-6 bg-[var(--very-pale-orange)] h-[440px] w-[400px] rounded-xl flex flex-col py-8 justify-between items-start">
            <motion.h1
                initial={{ opacity: 0, translateY: 100, rotateX: 90 }}
                whileInView={{ opacity: 1, rotateX: 0, translateY: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="text-[var(--dark-brown)] font-semibold text-3xl"
            >
                Spending - Last 7 days
            </motion.h1>

            <div className="w-full h-fit pb-6 border-b-2 border-[var(--cream)] flex flex-row justify-center items-end">
                {barsData.map(({ value, index }, i) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-1.5">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={activeIndex === i ? { opacity: 1 } : { scale: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-[var(--dark-brown)] py-2 px-2 rounded-md"
                        >
                            <p className="text-xs text-[var(--very-pale-orange)]">${value}</p>
                        </motion.div>

                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `calc(${value} * 2.9px)` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            onClick={() => setActiveIndex(i)}
                            className={`relative rounded-sm hover:bg-[var(--cream)] bg-[var(--soft-red)] transition duration-500 w-10 cursor-pointer overflow-hidden 
                                ${i === currentDayIndex ? "bg-[var(--cyan)]" : ""}`}
                        >
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={activeIndex === i ? { scaleY: 1 } : { scaleY: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="bg-[var(--cyan)] w-full h-full absolute bottom-0 origin-bottom"
                            />
                        </motion.div>

                        <p className="text-xs text-[var(--medium-brown)]">{index}</p>
                    </div>
                ))}
            </div>

            <div className="w-full flex flex-row justify-between items-end">
                <motion.div
                    initial={{ opacity: 0, translateX: -10 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1 }} className="flex flex-col gap-2 justify-start items-start">
                    <h2 className="text-[var(--medium-brown)]">Total this month</h2>
                    <h1 className="flex flex-row font-semibold text-4xl text-[var(--dark-brown)]">
                        $<Highlight className="" trigger={totalAmount} duration={1500} />
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateX: 10 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-end">
                    <h2
                        className="text-[var(--dark-brown)] font-semibold">+2.4%</h2>
                    <h2
                        className="text-[var(--medium-brown)]">from last month</h2>
                </motion.div>
            </div>
        </div>
    );
};

export default MainContainer;
