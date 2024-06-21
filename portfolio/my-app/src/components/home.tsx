"use client";
import Image from "next/image";
import React, { useState } from "react";
import About from "./about";
import { TypeAnimation } from "react-type-animation";
import Modal from "./UI Componemts/Modal";
import { Button } from "./ui/button";
import { Link, Mail , Linkedin, ArrowUpRightFromSquare, Twitter } from "lucide-react";
import { Badge } from "./ui/badge";
import LinkBtn from "./UI Componemts/LinkBtn";
// import Btn from "./UI Componemts/Buttn";


const skills = ['JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'NodeJS',
  'MongoDB',
  'Git',
  'C++',
  'Python',
  'Java',
  'MySQL',
  'PostgreSQL']

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="px-8 ">

      {/* =========================== Intro ============================= */}
      <div className="flex flex-col pt-[11vh] mb-14">
        <Image
          src={"/"}
          height={100}
          width={100}
          alt={"f"}
          className="border rounded-full w-[90px] mb-8"
        ></Image>
        <div className="">
          <h1 className="text-3xl font-[700] ">Shivesh Nandan</h1>
          <p className='mt-1'>
              <TypeAnimation
                sequence={[
                  "Software engineering student",
                  2000,
                  "MERN stack developer",
                  2000,
                ]}
                wrapper="span"
                speed={65}
                deletionSpeed={85}
                repeat={Infinity}
              />
            </p>
          {/* <p>hello ! </p> */}
        </div>
        <h1 className=" py-3 text-sm text-gray-300 ">
          Trying to build a faster web application. Learning about web development, React / Next.js and data structure and algorithm.
        </h1>
      </div>


      {/* ========================= About me ========================= */}

      <div className="transition-all duration-1000 flex flex-col">
        <h1 className="text-2xl underline decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased ">About Me</h1>
        <p className="line-clamp-4 my-3">I am Shivesh Nandan, a second year CSE Student at USICT, GGSIPU Delhi. I am learning about web development since last year and now building some projects like this portfolio using React.js framework. Currently i am learning more about the Web Development and looking for an internship or free lancing on web development. I love to do photograpy too. The images used in this website are captured by me XD.</p>
        <div className="flex antialiased justify-end text-sky-500 relative font-bold">
        <Button onClick={openModal} variant={"outline"} className="text-sky-500 font-bold w-fit">  Read More <ArrowUpRightFromSquare className="mx-2 h-4 w-4" /></Button>
        </div>

        
        {isModalOpen && (
          <Modal Heading="About Me" onClose={closeModal}>
            <About />
          </Modal>
        )}
      </div>

      {/* =========================== skills ============================= */}
      <div className="flex flex-col mt-10">
        <h1 className="text-2xl underline decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased ">Skills</h1>
        <div className="my-4">
        {skills.map((skill, index) => (
        <Badge variant="outline" key={index} className="my-1 mx-1 text-[14px]">{skill}</Badge>
      ))}

        </div>
      </div>

      {/* =============================== projects ============================ */}
      <div className="flex">Projects</div>
      <LinkBtn Title={"hello"} type={"outline"}></LinkBtn>

      {/* ====================== Experience ================================= */}
      <div className="flex">Experience</div>
    </div>
  );
};

export default Home;
