import { createContext, useContext, useState, useEffect } from "react";
import { Toaster, toast } from 'sonner';

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { }
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState("")
    const [FullScreen, setFullScreen] = useState(false)
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("user-details")))
    useEffect(()=> {
        const handleResize = ()=> {
            const size = window.innerWidth;
            size > 1024 ? setFullScreen(true) : setFullScreen(false)
        }
        handleResize()
        window.addEventListener("resize", handleResize)

        return ()=> window.removeEventListener("resize", handleResize)
    }, [FullScreen])

    const LogOut = ()=>{
        localStorage.removeItem("user-details")
        setToken(null)
        setUser(null)
        toast.success("Successfull Logged Out")
    }
    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            FullScreen,
            LogOut
        }}>
            {children}
            <Toaster position="top-center" />
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)