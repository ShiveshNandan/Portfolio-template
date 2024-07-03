import Image from 'next/image';
import React, { useRef } from 'react';
import { Button } from '../ui/button';
import { ArrowUpRightFromSquareIcon, NotebookTextIcon } from 'lucide-react';
import Link from 'next/link';

interface CardInterface {
  Title: String;
  Img: any;
  link:any;
  code:any;
  techUse:any;
  Description:String;
}

const Card: React.FC<CardInterface> = ({Img,Title,Description,link,code,techUse}) => {

  return (
    <>
    <div
      className={`card bg-[#d8d8d8] dark:bg-[#262627] rounded-xl m-auto sm:w-5/12 md:w-[300px] md:mx-auto transition-all duration-500 py-3 my-5 shadow-xl justify-between flex flex-col`} 
    >
      <div>
      <div className='rounded-xl w-11/12 m-auto border  overflow-hidden '>
     <Image height={10000} width={10000} src={`/Projects/${Img}`} alt='' className='bg-white w-fit fill '/> 
      </div>
      <div className='px-4 py-2'>
      <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{Title}</h1>
      <p className='text-xs font-normal text-gray-700 dark:text-gray-400'>{Description}</p>
      </div>
      </div>
        
        <div>
        <div className="flex my-4 mx-5">
          {/* <NotebookTextIcon className='w-4 h-4'></NotebookTextIcon> */}
          {techUse.map((items:any,index:any) => (
            <div key={index}>
     <Image height={100} width={1000} src={`/${items}.png`} alt='' className='rounded-full w-5 h-5 border mr-1'/>               
            </div>
          ))}
        </div>
      <div className="flex justify-end px-2">
        <div className='flex items-end h-[100%] '>
        {link.length < 2 ? "" : 
        <Link href={link}  target='_blank'>
        <Button size={"sm"}>Try it out <ArrowUpRightFromSquareIcon className='h-4 w-4 mx-2'></ArrowUpRightFromSquareIcon></Button>
        </Link>
        }
        <Link href={code}  target='_blank'>
        <Button size={"sm"} variant={"link"}>GitHub <ArrowUpRightFromSquareIcon className='h-4 w-4 mx-2'></ArrowUpRightFromSquareIcon></Button>
        </Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Card;
