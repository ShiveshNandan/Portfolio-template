import React from "react";

interface ModalInterface {
  Heading: String;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal: React.FC<ModalInterface> = ({ Heading, onClose, children }) => {
  return (
    <>
      <div className="flex flex-col fixed backdrop-blur-[16px] top-0 left-0 w-full h-screen">
        <div className="w-11/12 bg-[#0a0a0a99] backdrop-blur-[66px] m-auto  min-h-[40vh] max-h-[80vh] rounded-xl border ">
          <div className="flex justify-between py-3 px-4 text-2xl border-b backdrop-blur-[16px]">
            <h1>{Heading}</h1>
            <button onClick={onClose} className="text-sm underline underline-offset-4 decoration-red-400 ">
              Close
            </button>
          </div>
          <div className="flex relative max-h-[70vh] min-h-[20vh] overflow-y-scroll my-3">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
