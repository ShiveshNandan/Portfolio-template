import React from "react";
import { Button } from "../ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import { SquareArrowOutUpRightIcon } from "lucide-react";

interface ModalInterface {
  Title: String;
  type: String;
//   onClose: () => void;
//   children: React.ReactNode;
}
const LinkBtn: React.FC<ModalInterface> = ({Title , type}) => {
  return (
    <>    
    <Button variant={`"${type}"`} >{Title}<SquareArrowOutUpRightIcon className="w-4 h-4 mx-2"></SquareArrowOutUpRightIcon></Button>      
    </>
  );
};

export default LinkBtn;