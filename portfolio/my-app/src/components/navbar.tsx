'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Change from "./change"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Command } from "lucide-react";
import React from 'react';
import Link from "next/link";
import { useTheme } from "next-themes";
// import { useEffect,  useState } from "react";

const Navbar = () => {

  const [Start, setStart] = React.useState(false)

  // const {theme} = useTheme()
  // console.log("paco : ",theme)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 10);    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {!Start ? "" : (
      <div className="w-full fixed top-0 z-10">
        <div data-aos="fade-down" data-aos-delay="50" className="flex backdrop-blur7 w-full m-auto lg:w-6/12 rounded-b-xl justify-between px-6 ">
          <div className={`menu md:flex items-center hidden mt-5`}> 
          {/* <div className={`${theme == "light" ? "menu2" : "menu"} md:flex items-center hidden `}>  */}
            <Link href={""}><h1 className="mx-2 px-1 font-[600] hover:text-sky-600 dark:hover:text-sky-500">Home</h1></Link>
            <Link href={""}><h1 className="mx-2 px-1 font-[600] hover:text-sky-600 dark:hover:text-sky-500">About</h1></Link>
            <Link href={""}><h1 className="mx-2 px-1 font-[600] hover:text-sky-600 dark:hover:text-sky-500">Skill</h1></Link>
            <Link href={""}><h1 className="mx-2 px-1 font-[600] hover:text-sky-600 dark:hover:text-sky-500">Project</h1></Link>
            <Link href={""}><h1 className="mx-2 px-1 font-[600] hover:text-sky-600 dark:hover:text-sky-500">Experience</h1></Link>
            <Link href={""}><h1 className="mx-2 px-1 font-[600] hover:text-sky-600 dark:hover:text-sky-500">Connect</h1></Link>
          </div>
          
          <div className="flex align-center md:hidden ">
           <Sheet>
              <SheetTrigger asChild>
                <Button data-aos="fade-down" data-aos-delay="50" variant="ghost" size="icon" className="mt-9">
                  <Image
                    src={"/menu.png"}
                    width={200}
                    height={100}
                    alt=""
                    className={`flex self-center dark:invert-[0.8] w-6 h-6`}
                  />
                </Button>
              </SheetTrigger>
              <SheetContent className="pt-12 sm:w-[40vw] ">
              <div className="flex flex-col my-3 items-center "> 
            <div className="flex w-full border-b border-[#efefef] rounded-sm justify-center">
               <Link href={""}><h1 className="flex mt-8 mb-2 w-full">Home</h1></Link>
              </div>
            <div className="flex w-full border-b border-[#efefef] rounded-sm justify-center">
               <Link href={""}><h1 className="flex mt-8 mb-2 w-full">About</h1></Link>
              </div>
            <div className="flex w-full border-b border-[#efefef] rounded-sm justify-center">
               <Link href={""}><h1 className="flex mt-8 mb-2 w-full">Skill</h1></Link>
              </div>
            <div className="flex w-full border-b border-[#efefef] rounded-sm justify-center">
               <Link href={""}><h1 className="flex mt-8 mb-2 w-full">Project</h1></Link>
              </div>
            <div className="flex w-full border-b border-[#efefef] rounded-sm justify-center">
               <Link href={""}><h1 className="flex mt-8 mb-2 w-full">Experience</h1></Link>
              </div>
            <div className="flex w-full border-b border-[#efefef] rounded-sm justify-center">
               <Link href={""}><h1 className="flex mt-8 mb-2 w-full">Connect</h1></Link>
              </div>
          </div>
              </SheetContent>
            </Sheet>


          </div>
          <div className="flex my-auto mt-8 mb-6">
            <div data-aos="fade-down" data-aos-delay="150" className="flex justify-center flex-col w-10 h-10 overflow-hidden rounded-xl bg-[#d8d8d8] dark:bg-[#333] mx-2 cursor-pointer">
              <Command className="w-full"/>
            </div>
            <div data-aos="fade-down" data-aos-delay="250" className="flex justify-center flex-col w-10 h-10 overflow-hidden rounded-xl bg-[#d8d8d8] dark:bg-[#333] mx-2 cursor-pointer">
              <Change/>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Navbar;
