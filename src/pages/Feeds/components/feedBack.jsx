import { motion } from 'framer-motion';
import { useStateContext } from "../../../contexts/ContextProvider";

const containerVariant = {
    initial: {
        opacity: 0,
        zIndex: -1
    },
    animate: {
        opacity: 1,
        zIndex: 99999999,
        transition: {
            duration: 0.5, delayChildren: 0.4
        }
    },
    exit: {
        opacity: 0,
        zIndex: -1,
        transition: {
            when: "afterChildren", staggerChildren: 0.3, duration: 0.3
        }
    }
}

const divVariant = {
    initial: {
        opacity: 0,
        y: "-100%",
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring", staggerChildren: 0.3, delayChildren: 0.5, duration: 0.5, stiffness: 250
        }
    },
    exit: {
        opacity: 0,
        y: "-100%",
        transition: {
            when: "afterChildren", duration: 0.3, staggerChildren: 0.3,
        }
    }
}

const FeedBack = () => {
    const { token } = useStateContext();
    return (
        <motion.section variants={containerVariant} initial="initial" animate="animate" exit="exit" className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80">
            <motion.div variants={divVariant} className="flex flex-col gap-2 w-[80%] md:w-[750px] bg-white dark:bg-darkBg py-4 px-4 md:px-6 rounded-md">
                {!token && <input className="w-full md:h-14 h-12" type="text" />}
                <textarea name="" id="" className="w-full resize-none md:h-32"></textarea>
                <button>Send FeedBack</button>
            </motion.div>
        </motion.section>
    )
}

export default FeedBack;