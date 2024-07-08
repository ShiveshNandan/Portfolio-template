import {
  Code2,
  FingerprintIcon,
  Folder,
  Glasses,
  Home,
  LinkIcon,
  PenIcon,
  PhoneCallIcon,
  SunDimIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

const Command = ({ onClose }: any) => {
  const { theme, setTheme } = useTheme();
  const hoverProp =
    "flex py-2 px-5 dark:hover:bg-[#333] hover:bg-[#afafaf] hover:border-sky-600 hover:border-l-2 cursor-pointer border-l-2 border-transparent";
  const itemProp = "flex items-center self-center px-2";
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <h1 className="text-xs mx-2 ">Navigation</h1>
          <div className="flex flex-col m-1 border-b border-gray-500 w-full">
            <Scroll
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <p onClick={onClose} className={`${hoverProp}`}>
                <Home />
                <span className={`${itemProp}`}>Home</span>
              </p>
            </Scroll>
            <Scroll
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <p onClick={onClose} className={`${hoverProp}`}>
                <FingerprintIcon />
                <span className={`${itemProp}`}>About</span>
              </p>
            </Scroll>
            <Scroll
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <p onClick={onClose} className={`${hoverProp}`}>
                <PenIcon />
                <span className={`${itemProp}`}>Skills</span>
              </p>
            </Scroll>
            <Scroll
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <p onClick={onClose} className={`${hoverProp}`}>
                <Folder />
                <span className={`${itemProp}`}>Projects</span>
              </p>
            </Scroll>
            <Scroll
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <p onClick={onClose} className={`${hoverProp}`}>
                <Glasses />
                <span className={`${itemProp}`}>Experience</span>
              </p>
            </Scroll>
            <Scroll
              to="connect"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <p onClick={onClose} className={`${hoverProp}`}>
                <PhoneCallIcon />
                <span className={`${itemProp}`}>Connect</span>
              </p>
            </Scroll>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <h1 className="text-xs mt-5 mx-2">Socials</h1>
          <div className="flex flex-col p-1 border-b border-gray-500 w-full">
            <Link href={"https://github.com/shiveshnandan"} target="_blank">
              <p onClick={onClose} className={`${hoverProp}`}>
                <LinkIcon />
                <span className={`${itemProp}`}>Github</span>
              </p>
            </Link>
            <Link
              href={"https://github.com/ShiveshNandan/personal_website"}
              target="_blank"
            >
              <p onClick={onClose} className={`${hoverProp}`}>
                <Code2 />
                <span className={`${itemProp}`}>Source code</span>
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-xs mt-5 mx-2">Setting</h1>
          <div className="flex flex-col p-1 w-full">
            <p
              onClick={() => {
                {
                  theme === "dark" ? setTheme("light") : setTheme("dark");
                }
                onClose();
              }}
              className={`${hoverProp}`}
            >
              <SunDimIcon />
              <span className={`${itemProp}`}>Switch theme</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Command;
