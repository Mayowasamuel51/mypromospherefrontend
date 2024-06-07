import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion"


const Links = () => {
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
        <ul className="flex items-center gap-5 exl:gap-10 h-fit text-base">
            <div onMouseLeave={() => handleSetSelected(null)} className="relative flex items-center gap-3 h-fit">
                {
                    TABS.map((t) => {
                        return (
                            <Tab
                                className="flex items-center gap-2"
                                key={t.id}
                                selected={selected}
                                handleSetSelected={handleSetSelected}
                                tab={t.id}
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
            <Link className={`nav-active px-2 py-1.5`} href="/">Products on Discount</Link>
            <Link className={`nav-active px-2 py-1.5`} href="/">Baby Products</Link>
        </ul>
    )
}

const Tab = ({ children, tab, handleSetSelected, selected }) => {
    const { pathname } = useLocation()
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className={`nav-active relative flex items-center gap-1 rounded-sm px-3 py-1.5 transition-colors ${selected === tab
                ? "nav-others outline-black"
                : "text-white"
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
            className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border bg-white shadow-md p-4"
        >
            <Bridge />
            <Nub selected={selected} />

            {TABS.map((T) => {
                return (
                    <div className="overflow-hidden text-black font-semibold leading-9" key={T.id}>
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
            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border bg-white"
        />
    );
};

const SubHot = () => {
    return (
        <ul className="flex flex-col">
            <Link href="/">Property</Link>
            <Link href="/">Apartment</Link>
            <Link href="/">Cars</Link>
            <Link href="/">Laptops</Link>
        </ul>
    )
}

const SubFashion = () => {
    return (
        <ul className="flex flex-col">
            <Link href="/">Womens-shirts</Link>
            <Link href="/">Womens-watches</Link>
            <Link href="/">Mens-watches</Link>
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

export default Links