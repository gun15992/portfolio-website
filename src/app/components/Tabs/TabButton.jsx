// Import Libraries
import React from 'react';
import { motion } from 'framer-motion';

// Variants
const variants = {
    default: { width: 0 },
    animate: { width: "calc(100% - 0.75rem)" },
}

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
    return (
        <button onClick={selectTab}>
            <p className={`mr-6 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
            <motion.div className="h-1 bg-green-500 mr-3" animate={active ? "active" : "default"} variants={variants}>

            </motion.div>
        </button>
    );
}

export default TabButton;