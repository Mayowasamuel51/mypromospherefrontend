import { FaChevronDown } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion"
import PropTypes from 'prop-types';

const Links = ({hidden, bg}) => {
    const [selected, setSelected] = useState(null);
    const [dir, setDir] = useState(null);
    const { pathname } = useLocation();

    const handleSetSelected = (val) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
        } else if (val === null) {
            setDir(null);
        }
        setSelected(val);
    };

    return (
        <ul className={`flex items-center gap-5 exl:gap-6 h-fit text-base`}>
            <div onMouseLeave={() => handleSetSelected(null)} className="relative flex items-center gap-3 h-fit">
                {
                    TABS.map((t) => {
                        return (
                            <Tab
                                className="flex items-center gap-6"
                                key={t.id}
                                selected={selected}
                                handleSetSelected={handleSetSelected}
                                tab={t.id}
                                hidden={hidden}
                                bg={bg}
                            >
                                {t.title}
                            </Tab>
                        );
                    })
                }
                <AnimatePresence>
                    {selected && <Content dir={dir} selected={selected} />}
                </AnimatePresence>
            </div>
            <NavLink to="/category/discount" className={({isActive})=> isActive ? "font-black nav-active px-2 py-1.5" : "nav-active px-2 py-1.5"}>Products on Discount</NavLink>
            <NavLink className={`nav-active px-2 py-1.5`} to="/category/Kids_Baby_dresses">Baby Products</NavLink>
        </ul>
    )
}

const Tab = ({ children, tab, handleSetSelected, selected, bg, hidden }) => {
    // const { pathname } = useLocation()
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className={`duration-300 nav-active relative flex items-center gap-1 rounded-sm px-3 py-1.5 transition-colors ${selected === tab
                ? "nav-others outline-black"
                : bg && hidden ? "text-black dark:text-white" : ""
                }`}
        >
            <span>{children}</span>
            <FiChevronDown
                className={`transition-transform duration-200 ${selected === tab ? "rotate-180" : ""}`}
            />
        </button>
    );
};

const Content = ({ selected, dir }) => {
    return (
        <motion.div
            id="overlay-content"
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: 8,
            }}
            className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border bg-white dark:bg-darkBg shadow-md p-4"
        >
            <Bridge />
            <Nub selected={selected} />

            {TABS.map((T) => {
                return (
                    <div className="overflow-hidden text-black dark:bg-darkGray font-medium leading-9" key={T.id}>
                        {selected === T.id && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                <T.Component />
                            </motion.div>
                        )}
                    </div>
                );
            })}
        </motion.div>
    );
};

const Bridge = () => (
    <div className="absolute -top-[24px] left-0 right-0 h-[24px]"></div>
);

const Nub = ({ selected }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");

            if (!hoveredTab || !overlayContent) return;

            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();

            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

            setLeft(tabCenter);
        }
    };

    return (
        <motion.span
            style={{
                clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
            }}
            animate={{ left }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border bg-white dark:bg-darkBg"
        />
    );
};

const SubHot = () => {
    return (
        <ul className="flex flex-col">
            <NavLink to="/category/property">Property</NavLink>
            <NavLink to="/category/apartment">Apartment</NavLink>
            <NavLink to="/category/cars">Cars</NavLink>
            <NavLink to="/category/laptops">Laptops</NavLink>
        </ul>
    )
}

const SubFashion = () => {
    return (
        <ul className="flex flex-col">
            <NavLink to="/category/womens-shirts">Womens-shirts</NavLink>
            <NavLink to="/category/womens-watches">Womens-watches</NavLink>
            <NavLink to="/category/mens-watches">Mens-watches</NavLink>
        </ul>
    )
}


const TABS = [
    {
        title: "Hot🔥",
        Component: SubHot,
        icon: <FaChevronDown />
    },
    {
        title: "Fashion",
        Component: SubFashion,
        icon: <FaChevronDown />
    }
].map((n, idx) => ({ ...n, id: idx + 1 }));

Links.propTypes = {
    hidden : PropTypes.boolean,
    bg : PropTypes.boolean,
}

Tab.propTypes = {
    children:  PropTypes.any,
    tab:  PropTypes.any, 
    handleSetSelected:  PropTypes.any, 
    selected:  PropTypes.any,
    hidden : PropTypes.boolean,
    bg : PropTypes.boolean,
}

Content.propTypes = {
    selected:  PropTypes.any,
    dir : PropTypes.any,
}

Nub.propTypes = {
    selected:  PropTypes.any,
}

export default Links