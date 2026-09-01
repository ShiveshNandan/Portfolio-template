import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col relative mx-auto py-4 px-2 text-justify indent-0.5 text-sm">
      <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100" className="my-1 px-2 mb-3">
        Hello! I&apos;m Shivesh Nandan, a Software Engineer at Samsung R&D and a Computer Science graduate from USICT, GGSIPU, Delhi. Over the years, I&apos;ve built a strong foundation in software development, working with technologies such as React.js, Next.js, TypeScript, Node.js, Python, FastAPI, Flask, and MongoDB to build scalable web and AI-powered applications.
      </h1>
      <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="250" className="my-1 px-2 mb-3">
        My journey in software development has involved working across modern web technologies, backend systems, and real-world engineering challenges. At Samsung R&D, I gained industry experience working on Smart TV software and Tizen-based products, strengthening my understanding of software engineering, debugging, and building reliable products. I have also worked with GenAI technologies and tools such as LangChain, RAG, and LLMs, and built a RAG-based chatbot for internal use that could process PDF documents and answer specific questions based on their content.
      </h1>
      <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="350" className="my-1 px-2 mb-3">
        In this portfolio, you&apos;ll find projects built using technologies like Next.js, React, TypeScript, Node.js, Python, and various AI tools. My work reflects my interest in clean code, intuitive user experiences, and building practical software and AI-powered solutions that solve real problems. I&apos;m always looking for interesting challenges that push me to build better products and grow as a Software Engineer.
      </h1>
      <h1 className="text-2xl mt-8 underline underline-offset-4 decoration-sky-500 dark:decoration-sky-500/80 ">
        Links
      </h1>
      <ul className="list-disc pl-5 mt-3">
        <li className="mt-1">
          GitHub:{" "}
          <Link target="_blank" href={"https://github.com/ShiveshNandan"}>
            {" "}
            <span className="underline underline-offset-2 text-sky-600 dark:text-sky-500 font-[500]">
              @ShiveshNandan
            </span>
          </Link>
        </li>
        <li className="mt-1">
          Instagram:{" "}
          <Link target="_blank" href={"https://instagram.com/shivesh_nandan"}>
            {" "}
            <span className="underline underline-offset-2 text-sky-600 dark:text-sky-500 font-[500]">
              @shivesh_nandan
            </span>
          </Link>
        </li>
        <li className="mt-1">
          Twitter:{" "}
          <Link target="_blank" href={"https://github.com/ShiveshNandan"}>
            {" "}
            <span className="underline underline-offset-2 text-sky-600 dark:text-sky-500 font-[500]">
              @ShiveshNandan
            </span>
          </Link>
        </li>
        {/* <li className="mt-1">
          Quicklinks:{" "}
          <Link
            target="_blank"
            href={"https://shiveshnandan.github.io/LinkTree/"}
          >
            {" "}
            <span className="underline underline-offset-2 text-sky-600 dark:text-sky-500 font-[500]">
              https://shiveshnandan.github.io/LinkTree/
            </span>
          </Link>
        </li> */}
      </ul>

      <h1 className="text-2xl mt-8 underline underline-offset-4 decoration-sky-500 dark:decoration-sky-500/80 ">
        Education
      </h1>
      <div className="flex flex-col text-left">
        <Image
          src={"/ggsipu.png"}
          width={100}
          height={100}
          alt="gg"
          className="rounded-full w-20 h-20 my-2  border border-gray-600 p-1"
        ></Image>

        <p>
          University school of information communication and technology, GGSIPU
        </p>
        <p className="flex relative justify-end italic text-xs my-2">
          current CGPA: 7.92
        </p>
      </div>
      <div className="flex flex-col text-left">
        <Image
          src={"/kvs.png"}
          width={100}
          height={100}
          alt="gg"
          className="rounded-full w-20 h-20 my-2 border border-gray-600 p-1"
        ></Image>

        <p>Kendriya Vidhalaya No.2 Delhi Cantt</p>
        <p className="flex relative justify-end italic text-xs mt-2">
          12th standard: 87.2%
        </p>
        <p className="flex relative justify-end italic text-xs my-1">
          10th standard: 83%
        </p>
      </div>
    </div>
  );
};

export default About;
