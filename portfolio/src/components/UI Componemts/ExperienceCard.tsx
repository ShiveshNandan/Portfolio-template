import Image from "next/image";
import React, { useEffect } from "react";

interface ModalInterface {
  img: any;
  companyName: String;
  role: String;
  description: String;
  timePeriod: String;
}
const Modal: React.FC<ModalInterface> = ({
  img,
  companyName,
  role,
  description,
  timePeriod,
}) => {

  return (
    <>
      <div  className="flex relative right-8 lg:w-full w-[93vw] text-xs my-5">
        <Image data-aos="zoom-in" data-aos-anchor-placement="top-bottom" src={img} height={100} width={100} alt="ll" className="rounded-full border-4 w-14 h-14 bg-[#f5f5f5] dark:bg-[#1e1e1f]"></Image>
        <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className="flex flex-col ml-3 py-4 w-10/12 bg-[#d8d8d8] dark:bg-[#262627] px-2 lg:px-6 rounded-xl">
            <div className="flex justify-between my-2">
                <div className="flex flex-col w-7/12">
                    <h1 className="text-lg font-[700]">{companyName}</h1>
                    <h2 className="text-sky-600 dark:text-sky-500 lg:font-[600] lg:tracking-[0.3px]">{role}</h2>
                </div>
                <p className="flex items-center ">{timePeriod}</p>
            </div>
            <p className="px-2 tracking-[0.5px] text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </div>

    </>
  );
};

export default Modal;
