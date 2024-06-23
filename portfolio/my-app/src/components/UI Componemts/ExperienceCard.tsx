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
      <div  className="flex relative right-8 w-[93vw] text-xs my-5">
        <Image data-aos="fade-up" src={img} height={100} width={100} alt="ll" className="rounded-full border-4 w-14 h-14 bg-[#f5f5f5] dark:bg-[#1e1e1f]"></Image>
        <div className="flex flex-col ml-3  w-10/12 bg-[#d8d8d8] dark:bg-[#262627] px-2 rounded-xl">
            <div className="flex justify-between my-2">
                <div className="flex flex-col w-7/12">
                    <h1 className="text-lg font-[700]">{companyName}</h1>
                    <h2>{role}</h2>
                </div>
                <p className="flex items-center ">{timePeriod}</p>
            </div>
            <p>{description}</p>
        </div>
      </div>

    </>
  );
};

export default Modal;
