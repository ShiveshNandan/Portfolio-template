import Image from 'next/image';
import React from 'react'


const about = () => {

    return (
        <div className="flex flex-col relative mx-auto p-4 text-justify indent-0.5">
            <h1>I am Shivesh Nandan, a second year CSE Student at USICT, GGSIPU Delhi. I am learning about web development since last year and now building some projects like this portfolio using React.js framework. Currently i am learning more about the Web Development and looking for an internship or free lancing on web development. I love to do photograpy too. The images used in this website are captured by me XD.</h1>
            <h1 className='text-2xl mt-6'>Education</h1>
            <div className='flex flex-col text-left'>
                <Image src={"/ggsipu.png"} width={100} height={100} alt='gg' className='rounded-full w-20 h-20 my-2  border border-gray-600 p-1'></Image>
                
                <p>University school of information communication and technology, GGSIPU</p>
                <p className='flex relative justify-end italic text-xs my-2'>current CGPA: 7.46(till 5 semester)</p>
            </div>
            <div className='flex flex-col text-left'>
                <Image src={"/kvs.png"} width={100} height={100} alt='gg' className='rounded-full w-20 h-20 my-2 border border-gray-600 p-1'></Image>
                
                <p>Kendriya Vidhalaya No.2 Delhi Cantt</p>
                <p className='flex relative justify-end italic text-xs mt-2'>12th standard: 87.2%</p>
                <p className='flex relative justify-end italic text-xs my-1'>10th standard: 83%</p>
            </div>
        </div>
    );
};

export default about