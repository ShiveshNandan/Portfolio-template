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
      <div className=" backdrop-blur3 flex flex-col fixed top-0 left-0 w-full h-screen z-10">
        <div className="w-11/12 bg-[#1e1e1f]  mx-auto mt-[10vh] min-h-[40vh] max-h-[80vh] rounded-xl border border-[#3c3d3ed1]">
          <div className="flex justify-between py-3 px-4 text-2xl border-b border-[#3c3d3ed1] ">
            <h1 className="items-center flex">{Heading}</h1>
            <Button onClick={onClose} variant="outline" size={"icon"} ><Cross2Icon className="h-6 w-6" /></Button>
          </div>
          <div className="flex relative max-h-[60vh] min-h-[20vh] overflow-y-scroll my-3 mb-6 px-2">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
