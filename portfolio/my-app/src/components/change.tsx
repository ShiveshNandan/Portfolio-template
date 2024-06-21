"use client"

import * as React from "react"
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ModeToggle = () => {

  const {theme, setTheme } = useTheme()
  console.log(theme)

  
  const ChangeTheme =() =>{
    // if (theme === 'dark') {
    //     setTheme('light')        
    // }else{
    //     setTheme('dark') 
    // }
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