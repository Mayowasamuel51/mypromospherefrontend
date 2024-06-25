import { motion } from 'framer-motion';
import { useStateContext } from "../../../contexts/ContextProvider";
import { FaXmark } from "react-icons/fa6";
import PropTypes from 'prop-types';

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

const FeedBack = ({ setComment, postId }) => {
    const { token } = useStateContext();
    return (
        <motion.section variants={containerVariant} initial="initial" animate="animate" exit="exit" className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80">
            <motion.div variants={divVariant} className="relative flex flex-col gap-6 w-[80%] md:w-[750px] bg-white dark:bg-darkBg py-4 px-4 md:px-6 rounded-md">
                <FaXmark size={40} className="z-[99999999999] text-black dark:text-white absolute -top-10 -right-10" onClick={() => setComment(false)} />
                {!token && <input className="w-full md:h-14 h-12" type="text" />}
                <textarea name="" id="" className="p-4 w-full resize-none md:h-44 bg-slate-100 dark:bg-inputDark border rounded-md "></textarea>
                <button className="border border-purple bg-purple py-2 md:py-4 w-full text-white rounded-md font-bold duration-300 hover:bg-transparent hover:text-purple">Send FeedBack</button>
            </motion.div>
        </motion.section>
    )
}

FeedBack.propTypes = {
    setComment: PropTypes.func,
    postId: PropTypes.any
}

export default FeedBack;