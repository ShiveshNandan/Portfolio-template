import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Command, List, SunIcon } from "lucide-react";

const navbar = () => {
  return (
    <>
      <div className="w-full fixed">
        <div className="flex backdrop-blur7 backdrop-blur-[7px] w-full h-[9vh] m-auto xl:w-6/12 rounded-b-xl justify-between px-6 ">
          <div className="flex align-center ">
            {/* <Image src={'/close.png'} width={200} height={100} alt='' className={`flex self-center invert-[0.8] w-6 h-6 mt-5 hidden`} ></Image>
            <Image src={'/menu.png'} width={200} height={100} alt='' className={`flex self-center invert-[0.8] w-6 h-6 mt-5`} ></Image> */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mt-9">
                  <Image
                    src={"/menu.png"}
                    width={200}
                    height={100}
                    alt=""
                    className={`flex self-center invert-[0.8] w-6 h-6`}
                  />
                </Button>
              </SheetTrigger>
              <SheetContent className="pt-12 sm:w-[40vw] ">
                
              </SheetContent>
            </Sheet>


          </div>
          <div className="flex my-auto mt-8 mr-3">
            <div className="flex justify-center flex-col w-10 h-10 overflow-hidden border rounded-xl bg-[#333] mx-2">
              <Command className="w-full"/>
            </div>
            <div className="flex justify-center flex-col w-10 h-10 overflow-hidden border rounded-xl bg-[#333] mx-2">
              <SunIcon className="w-full"></SunIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
