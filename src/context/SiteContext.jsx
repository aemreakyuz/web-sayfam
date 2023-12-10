import { createContext, useEffect, useState } from "react";
import {Data} from "../assets/data/Data.jsx"

export const SiteContext = createContext()

export const SiteContextProvider = ({children}) =>{
   
    const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
    
    const localizedTexts = Data;
    const texts = localizedTexts[lang];

    const toggleLang = () => {
        const newLang = lang === "en" ? "tr" : "en";
        setLang(newLang);
    }
 
    useEffect (()=>{
       localStorage.setItem("lang", lang)
    },[lang])

    return (
        <SiteContext.Provider value = {{lang, toggleLang, texts}}>
            {children}
        </SiteContext.Provider>
    )
}

