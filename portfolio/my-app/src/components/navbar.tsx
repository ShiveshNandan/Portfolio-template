"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Change from "./themeChange";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Command } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Modal from "./UI Componemts/Modal";
import Comand from "./Command";

const Navbar = () => {
  const [Start, setStart] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);



  return (
    <>
      {!Start ? (
        ""
      ) : (
        <div className={`w-full fixed top-0 z-[10] `}>
          <div className="flex w-[10vw]">
          {isModalOpen && (
            <Modal Heading="Command" onClose={closeModal}>
            <Comand/>
          </Modal>
        )}
        </div>
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            className="flex backdrop-blur7 w-full m-auto lg:w-6/12 rounded-b-xl justify-between px-6 "
          >
            <div className={`menu md:flex items-center hidden mt-5`}>
              {/* <div className={`${theme == "light" ? "menu2" : "menu"} md:flex items-center hidden `}>  */}
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <h1 className="mx-2 px-1 font-[600] hover:text-sky-600 dark:hover:text-sky-500">
                  Home
                </h1>
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <h1 className="mx-2 px-1 font-[600] hover:text-sky-600 dark:hover:text-sky-500">
                  About
                </h1>
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <h1 className="mx-2 px-1 font-[600] hover:text-sky-600 dark:hover:text-sky-500">
                  Skills
                </h1>
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <h1 className="mx-2 px-1 font-[600] hover:text-sky-600 dark:hover:text-sky-500">
                  Projects
                </h1>
              </Link>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <h1 className="mx-2 px-1 font-[600] hover:text-sky-600 dark:hover:text-sky-500">
                  Experience
                </h1>
              </Link>
              <Link
                to="connect"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <h1 className="mx-2 px-1 font-[600] hover:text-sky-600 dark:hover:text-sky-500">
                  Connect
                </h1>
              </Link>
            </div>

            {/* ================= mobile ======================= */}

            <div className="flex align-center md:hidden ">
              <Sheet open={isOpen}>
                <SheetTrigger asChild>
                  <Button
                    data-aos="fade-down"
                    data-aos-delay="50"
                    variant="ghost"
                    size="icon"
                    className="mt-9"
                  >
                    <Image
                      src={"/menu.png"}
                      width={200}
                      height={100}
                      alt=""
                      className={`flex self-center dark:invert-[0.8] w-6 h-6`}
                      onClick={() => setIsOpen(true)}
                    />
                  </Button>
                </SheetTrigger>

                <SheetContent onClick={() => setIsOpen(false)} className="pt-12 sm:w-[40vw] ">
                  <div
                    
                    className="flex flex-col my-3 items-center "
                  >
                    <Link
                      to="home"
                      smooth={true}
                      duration={500}
                      className="cursor-pointer flex w-full border-b border-[#efefef] rounded-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex w-full justify-center">
                        <h1
                          className="flex mt-8 mb-2 "
                        >
                          Home
                        </h1>
                      </div>
                    </Link>
                    <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      className="cursor-pointer flex w-full border-b border-[#efefef] rounded-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex w-full justify-center">
                        <h1
                          className="flex mt-8 mb-2"
                        >
                          About
                        </h1>
                      </div>
                    </Link>
                    <Link
                      to="skills"
                      smooth={true}
                      duration={500}
                      className="cursor-pointer flex w-full border-b border-[#efefef] rounded-sm"
                        onClick={() => setIsOpen(false)}
                    >
                      <div className="flex w-full justify-center">
                        <h1
                          className="flex mt-8 mb-2"
                        >
                          Skills
                        </h1>
                      </div>
                    </Link>
                    <Link
                      to="projects"
                      smooth={true}
                      duration={500}
                      className="cursor-pointer flex w-full border-b border-[#efefef] rounded-sm"
                        onClick={() => setIsOpen(false)}
                    >
                      <div className="flex w-full justify-center">
                        <h1
                          className="flex mt-8 mb-2"
                        >
                          Projects
                        </h1>
                      </div>
                    </Link>
                    <Link
                      to="experience"
                      smooth={true}
                      duration={500}
                      className="cursor-pointer flex w-full border-b border-[#efefef] rounded-sm"
                        onClick={() => setIsOpen(false)}
                    >
                      <div className="flex w-full justify-center">
                        <h1
                          className="flex mt-8 mb-2"
                        >
                          Experience
                        </h1>
                      </div>
                    </Link>
                    <Link
                      to="connect"
                      smooth={true}
                      duration={500}
                      className="cursor-pointer flex w-full border-b border-[#efefef] rounded-sm"
                        onClick={() => setIsOpen(false)}
                    >
                      <div className="flex w-full justify-center">
                        <h1
                          className="flex mt-8 mb-2"
                        >
                          Connect
                        </h1>
                      </div>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>

              {/* ======================= dark and command ====================== */}
            </div>
            <div className="flex my-auto mt-8 mb-6 ">
              <div
                data-aos="fade-down"
                data-aos-delay="150"
                className="flex justify-center flex-col w-10 h-10 overflow-hidden rounded-xl bg-[#d8d8d8] dark:bg-[#333] mx-2 cursor-pointer"
              >

                <div
            onClick={openModal}
          >
              <Command className="w-full" />
          </div>

               
              </div>
              <div
                data-aos="fade-down"
                data-aos-delay="250"
                className="flex justify-center flex-col w-10 h-10 overflow-hidden rounded-xl bg-[#d8d8d8] dark:bg-[#333] mx-2 cursor-pointer"
              >
                <Change />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
