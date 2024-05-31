import { createContext, useContext, useState, useEffect } from "react";
import { Toaster, toast } from 'sonner';

const StateContext = createContext({
    user: null,
    // userid:null, 
    token: null,
    setUser: () => { },
    setToken: () => { }
});

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [FullScreen, setFullScreen] = useState(false)
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("user-details")))
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const pos = document.documentElement.scrollTop;
            const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollValue = Math.round((pos * 100) / calcHeight);
            setScrollValue(scrollValue);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleClick = () => {
        document.documentElement.scrollTop = 0;
    };
    useEffect(() => {
        const handleResize = () => {
            const size = window.innerWidth;
            size > 1026 ? setFullScreen(true) : setFullScreen(false)
        }
        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [FullScreen])

    const LogOut = () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem("user-details")
        toast.success("Successfull Logged Out")
    }
    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            FullScreen,
            LogOut,
            scrollValue,
            handleClick,
        }}>
            {children}
            <Toaster position="top-center" />
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)