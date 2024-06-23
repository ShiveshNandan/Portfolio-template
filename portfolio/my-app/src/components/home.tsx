"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import About from "./about";
import { TypeAnimation } from "react-type-animation";
import Modal from "./UI Componemts/Modal";
import { Button } from "./ui/button";
import {
  ArrowUpRightFromSquare,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";
import { Badge } from "./ui/badge";
import Card from "./UI Componemts/ProjectCard";
import expData from "./data/ExpData";
import ExpCard from "./UI Componemts/ExperienceCard";
import { useTheme } from "next-themes";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "SASS",
  "ReactJS",
  "NodeJS",
  "MongoDB",
  "Tailwind",
  "Bootstrap",
  "jQuery",
  "Git",
  "ESLint",
  "C++",
  "C",
  "MySQL",
  "PostgreSQL",
];

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [Start, setStart] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const { theme } = useTheme();
  console.log(theme);
  useEffect(() => {}, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 2000);    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <div className="px-8">
      {/* =========================== Intro ============================= */}
      <div className="flex flex-col pt-[10vh] mt-10 mb-14">
        <Image
          data-aos="zoom-in"
          src={`/photo-${theme === "light" ? "light" : "dark"}.jpg`}
          height={100}
          width={100}
          alt={"f"}
          className="border rounded-full w-[90px] mb-8 border-[#333] dark:border-white"
        ></Image>
        <div data-aos="fade-right" className="">
          <h1 className="text-3xl font-[700] ">Shivesh Nandan</h1>
          <p className="mt-1">
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
        <h1 data-aos="fade-left" className=" pt-6 text-sm text-[#333] dark:text-[#d8d8d8] leading-[21px] ">
          Trying to build a faster web application. Learning about web
          development, React / Next.js and data structure and algorithm.
        </h1>
      </div>

      {/* ========================= About me ========================= */}

      <div className="transition-all duration-1000 flex flex-col">
        <h1 data-aos="fade-right" className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased ">
          About Me
        </h1>
        <p data-aos="fade-left" className="line-clamp- my-3 tracking-[0.3px] ">
          Hello! I'm final-year CSE student at USICT, GGSIPU Delhi. Over the
          past year, I've immersed myself in web development, creating projects
          with frameworks like React.js and now focusing on Next.js. This
          portfolio showcases my work using Next.js, Tailwind CSS, and ShadCN to
          build dynamic, responsive applications. I'm eager to find internships
          or freelance opportunities to expand my skills further. Besides
          coding, I enjoy photography. Let's connect and create something
          amazing together!
        </p>
        <div data-aos="fade-left" className="flex antialiased justify-end text-sky-600 dark:text-sky-500 relative font-bold">
          <Button
            onClick={openModal}
            variant={"outline"}
            className="text-sky-600 dark:text-sky-500 font-bold w-fit"
          >
            {" "}
            Read More <ArrowUpRightFromSquare className="mx-2 h-4 w-4" />
          </Button>
        </div>

        {isModalOpen && (
          <Modal Heading="About Me" onClose={closeModal}>
            <About />
          </Modal>
        )}
      </div>

      {/* =========================== skills ============================= */}
      <div className="flex flex-col mt-10">
        <h1 data-aos="fade-right" className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased ">
          Skills
        </h1>
        <div data-aos="fade-left" className="my-4">
          {skills.map((skill, index) => (
            <Badge
              variant="outline"
              key={index}
              className="my-1 mx-1 text-[14px]"
            >
              <Image
                src={`/${skill}.png`}
                alt={`${skill}`}
                height={18}
                width={18}
                className="mr-2"
              />
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* =============================== projects ============================ */}
      <div className="flex flex-col mt-10">
        <h1 data-aos="fade-right" className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased ">
          Projects
        </h1>
        <div data-aos="fade-left" className="my-2 rounded-xl bg">
          {!Start ? (
            "loading"
          ) : (
            <Card
              Heading={"Make engineering Easy"}
              Description={"lorem20"}
              link={"gdgg"}
              Img={"/ggsipu.png"}
              techUse={"ddd"}
            ></Card>
          )}
        </div>
      </div>

      {/* <Button variant={"outline"} >Project<SquareArrowOutUpRightIcon className="w-4 h-4 mx-2"></SquareArrowOutUpRightIcon></Button>       */}

      {/* ====================== Experience ================================= */}
      <div className="flex flex-col mt-8">
        <h1 data-aos="fade-right" className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased ">
          Experience
        </h1>
        <div className="my-2 rounded-xl bg">
          <div className="border-l-8 ">
            {!Start
              ? "loading ! "
              : expData.map((exp, index) => (
                  <div>
                    <ExpCard
                      img={exp.img}
                      companyName={exp.companyName}
                      role={exp.role}
                      description={exp.description}
                      timePeriod={exp.timePeriod}
                    ></ExpCard>
                  </div>
                ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <h1 className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased ">
          Get in Touch
        </h1>
        <div className="flex flex-col my-2 rounded-xl items-center">
          <h1 className="m-auto my-4 text-center">Feel free to connect</h1>
          <div className="flex">
            <Link href={""}>
              <Button size={"icon"} className="mx-1">
                <InstagramIcon />
              </Button>
            </Link>
            <Link href={""}>
              <Button size={"icon"} className="mx-1">
                {" "}
                <TwitterIcon />{" "}
              </Button>
            </Link>
            <Link href={""}>
              <Button size={"icon"} className="mx-1">
                {" "}
                <MailIcon />{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-sm border-t-2 py-5 mt-8 text-center">
        <h1 className="text-left">
          Powered by <Link href={"https://nextjs.org"}><span className="text-sky-600 dark:text-sky-500">Next.js</span></Link> and <Link href={"https://tailwindcss.com"}><span className="text-sky-600 dark:text-sky-500">TailwindCSS</span></Link>. Hosted on <Link href={"https://vercel.com"}><span className="text-sky-600 dark:text-sky-500">Vercel</span></Link>.
        </h1>
        <h1 className="mb-6 py-2">© 2024 Shivesh Nandan</h1>
      </div>
    </div>
  );
};

export default Home;
