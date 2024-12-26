import { motion } from "framer-motion";

const Greeting = ({ toggleBackground, isCustomBackground }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 1.5, 
            },
        },
    }

    const textVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    }

    const underlineVariants = {
        hidden: { width: 0 },
        visible: { width: "100%" },
    }

    return (
        <motion.div
            className="flex flex-col items-center justify-center h-screen"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.p 
                className={`${isCustomBackground ? 'text-amber-800' : 'text-white'} text-4xl font-semibold`}
            >
                <motion.span
                    variants={textVariants}
                    transition={{ duration: 1 }}
                >
                    Hello,
                </motion.span>{' '}
                <motion.span
                    variants={textVariants}
                    transition={{ duration: 1 }}
                >
                    I'm Fazariz.
                </motion.span>{' '}
                <motion.span
                    variants={textVariants}
                    transition={{ duration: 2, delay: 3 }}
                >
                    But you can call me
                </motion.span>{' '}
                <motion.span
                    className="relative text-5xl font-bold cursor-pointer"
                    variants={textVariants}
                    transition={{ duration: 0.5, delay: 5 }}
                    onClick={toggleBackground}
                >
                    Riz.
                    <motion.div
                        className={`${isCustomBackground ? 'bg-amber-800' : 'bg-white'} absolute left-0 -bottom-2 h-1`}
                        variants={underlineVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, delay: 5.5 }}
                    />
                </motion.span>
            </motion.p>
        </motion.div>
    )
}

export default Greeting