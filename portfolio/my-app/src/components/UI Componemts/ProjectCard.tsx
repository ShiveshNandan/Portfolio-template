import Image from 'next/image';
import React, { useRef } from 'react';
import { Button } from '../ui/button';
import { ArrowUpRightFromSquareIcon, NotebookTextIcon } from 'lucide-react';

interface CardInterface {
  Heading: String;
  Img: any;
  link:String;
  techUse:String;
  Description:String;
}

const Card: React.FC<CardInterface> = ({Img,Heading,Description,link,techUse}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement>(document.createElement('style'));

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    let pos: [number, number];
    if ('touches' in e) {
      pos = [e.touches[0].clientX, e.touches[0].clientY];
    } else {
      pos = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
    }

    const card = cardRef.current;
    if (!card) return;

    const l = pos[0];
    const t = pos[1];
    const h = card.clientHeight;
    const w = card.clientWidth;
    const px = Math.abs(Math.floor(100 / w * l) - 100);
    const py = Math.abs(Math.floor(100 / h * t) - 100);
    const pa = (50 - px) + (50 - py);
    const lp = (50 + (px - 50) / 2);
    const tp = (50 + (py - 50) / 2);
    const px_spark = (50 + (px - 50) / 8);
    const py_spark = (50 + (py - 50) / 8);
    const p_opc = 20 + (Math.abs(pa) * 1.5);
    const ty = ((tp - 50) / 1.5) * -0.8;
    const tx = ((lp - 50) / 1.5) * 0.8;

    const grad_pos = `background-position: ${lp}% ${tp}%;`;
    const sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
    const opc = `opacity: ${p_opc / 100};`;
    const tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;

    const style = `
      .card:hover:before { ${grad_pos} }  /* gradient */
      .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
    `;
    card.setAttribute('style', tf);
    styleRef.current.innerHTML = style;
    document.head.appendChild(styleRef.current);
  };

  const handleMouseOut = () => {
    const card = cardRef.current;
    if (card) {
      card.removeAttribute('style');
    }
    styleRef.current.innerHTML = '';
  };

  return (
    <>
    <div
      className={`card bg-[#d8d8d8] dark:bg-[#262627] rounded-xl m-auto md:w-5/12 transition-all duration-500 py-3 my-5 shadow-xl`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseOut}
      onTouchCancel={handleMouseOut}
    >
      <div className='rounded-xl w-11/12 m-auto h-40 border  overflow-hidden '>
     {/* <Image height={100} width={100} src={'/ggsipu.png'} alt=''/>  */}
     <Image height={100} width={100} src={Img} alt='' className='bg-white w-full'/> 
      </div>
      <div className='px-4 py-2'>
      <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{Heading}</h1>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{Description}</p>
      {/* <p className='py-1'>{link}</p> */}
      {/* <p className='py-1'>{techUse}</p> */}
      </div>
        
      <div className="flex justify-between px-2">
        <div className="flex">
          <NotebookTextIcon className='w-4 h-4'></NotebookTextIcon>
        </div>
        <div className=''>
        <Button size={"sm"}>Try it out <ArrowUpRightFromSquareIcon className='h-4 w-4 mx-2'></ArrowUpRightFromSquareIcon></Button>
        <Button size={"sm"} variant={"link"}>GitHub <ArrowUpRightFromSquareIcon className='h-4 w-4 mx-2'></ArrowUpRightFromSquareIcon></Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
