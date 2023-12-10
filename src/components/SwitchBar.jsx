import React from 'react'
import { useContext } from 'react'
import { SiteContext } from '../context/SiteContext'
import { DarkModeContext } from '../context/DarkModeContext'
import "./SwitchBar.css"
import "../index.css"


function SwitchBar() {
    const {lang,  texts, toggleLang} = useContext(SiteContext)
    const {theme, toggleTheme} = useContext(DarkModeContext)
  
    
    
  return (
    <div className='w-[80%] pt-2 flex justify-end mx-auto'>
        <div className='flex   gap-4 items-center'>
            <div className='toggle-switch '>
                <label className='flex'>
                    <input type ="checkbox" onClick= {toggleTheme}/>
                        <span className= "slider align-top" /> 
                </label>
            </div>
        
        <div className="light-text-paragraph-bold pt-2 ">{theme} MODE</div>
        <span className='pt-2'>|</span>
        <button className="light-text-paragraph-bold pt-2 ">
    {lang === "en" ? (
        <>
            {texts.langSwitch[0]}<span onClick={toggleLang} className='text-[#4731D3]'>{texts.langSwitch[1]}</span>
        </>
    ) : (
        <>
            <span onClick={toggleLang} className='text-[#4731D3]'>{texts.langSwitch[0]}</span>{texts.langSwitch[1]}
        </>
    )}
</button>
       </div>
    </div>
  )
}

export default SwitchBar