import { useState } from "react"
import logo from "../../public/logo.svg"
import Highlight from "../animation/animated-number"
import { useEffect } from "react"
import { motion } from "framer-motion";

"use client"

const Header = () => {
    const [totalAmount, setTotalAmount] = useState(0)
    useEffect(() => {
        setTimeout(() => setTotalAmount(921.48), 0);
    }, []);
    return (
        <header className="px-5 bg-[var(--soft-red)] w-full h-30 rounded-xl flex flex-row justify-between items-center">
            <motion.div
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1 }} className="text-[var(--very-pale-orange)] flex flex-col h-full items-start gap-2 justify-center">
                <h2>My balance</h2>
                <h1 className="flex flex-row text-[var(--very-pale-orange)] font-semibold text-3xl">$<Highlight className="text-[var(--very-pale-orange)]" trigger={totalAmount} duration={1500} /></h1>

            </motion.div>
            <motion.img
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }} src={logo} alt="logo" />
        </header>

    )

}


export default Header