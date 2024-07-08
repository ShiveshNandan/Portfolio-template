"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"


const ModeToggle = () => {

  const {theme, setTheme } = useTheme()

  
  const ChangeTheme =() =>{
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
    <div onClick={() => ChangeTheme()}>   
    {useTheme().theme === 'light' ? 
    <SunIcon  className="w-full"></SunIcon> 
    : 
    <MoonIcon className="w-full"></MoonIcon> }
    </div>
    </>
  )
};

export default ModeToggle;