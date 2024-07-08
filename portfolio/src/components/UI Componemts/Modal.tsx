import React from "react";
import { Button } from "../ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";

interface ModalInterface {
  Heading: String;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal: React.FC<ModalInterface> = ({ Heading, onClose, children }) => {
  return (
    <>
      <div data-aos="fade-up" className=" backdrop-blur7 flex flex-col fixed top-0 left-0 w-full lg:m-auto h-screen z-[100]">
        <div className=" w-11/12 lg:w-[730px] bg-[#d8d8d8ea] dark:bg-[#1e1e1fea]  mx-auto mt-[6vh] min-h-[40vh] max-h-[90vh] rounded-xl border border-[#3c3d3ed1] ">
          <div  className="flex justify-between py-3 px-4 text-2xl border-b border-[#3c3d3ed1] ">
            <h1 className="items-center flex font-[500]">{Heading}</h1>
            <Button onClick={onClose} variant="outline" size={"icon"} ><Cross2Icon className="h-6 w-6" /></Button>
          </div>
          <div className="flex relative max-h-[75vh] min-h-[20vh] overflow-y-scroll my-3 mb-6 px-2">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
