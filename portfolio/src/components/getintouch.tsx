"use client"
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [loading,setloading] = useState(false)

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")

  function isValidEmail(email:any) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function isNameValid(username:String) {
    return username.length > 3;
  }

  const messageSend = () => {
    setTimeout(() => {
        if(isValidEmail(email)){
          if(isNameValid(username)){
            if(isNameValid(message)){
                // const res = AddMessage(message,setmessage,email,setemail,username,setusername,setloading);
                // res.then(result => {
                //   console.log(result);
                //   if(!result){
                //     toast.success("Thanks for your words!",{theme:"colored", position: "top-center",autoClose: 2000});          
                //   }else{
                //     setloading(false);
                //     toast.error("can't send message at the moment",{theme:"colored", position: "top-center",autoClose: 2000});
                //   }
                // }).catch(error => {
                //     console.error(error);
                // });
            }else{
              setloading(false);
              toast.error("Message is too short to be send !",{theme:"colored", position: "top-center",autoClose: 2000});
            }
          }else{
            setloading(false);
            toast.error("Enter Valid User Name",{theme:"colored", position: "top-center",autoClose: 2000});
          }
        }else{
          setloading(false);
          toast.error("Enter Valid email",{theme:"colored", position: "top-center",autoClose: 2000});
        }
          
    }, 1000);
    setloading(true);
  }
  return (
    <>
    
    <ToastContainer/>
    
      <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='flex mt-5'>

        <div className="flex flex-col  w-full rounded-3xl m-auto shadow-xl bg-[#d8d8d8] dark:bg-[#262627] ">
          <div className="flex">
            <div className="flex text-sm flex-col m-auto py-8 w-11/12 max-md:m-auto max-md:px-2 max-sm:py-5">
              <input
                type="text"
                className="w-full px-2 py-2 border-2 rounded border-[#3333] my-1 bg-[#f5f5f5] dark:bg-[#1e1e1f] "
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="Full Name"
              />
              <input
                type="email"
                className="w-full px-2 py-2 border-2 rounded border-[#3333] my-1 bg-[#f5f5f5] dark:bg-[#1e1e1f] "
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email Address"
              />
              <textarea
                id="review"
                className="w-full border-2 border-[#3333] rounded-lg px-2 py-2 my-1 resize-none  bg-[#f5f5f5] dark:bg-[#1e1e1f] "
                rows={5}
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                placeholder={`Hello, I would like to...`}
                
              ></textarea>
              <div className="flex justify-end w-full mx-auto my-4">
                <button onClick={() => {messageSend(), console.log("hello")}} disabled={loading} className={`${loading? "bg-sky-300 cursor-not-allowed" : "bg-sky-500 dark:bg-sky-500/80"} w-full rounded-md px-5 py-2 text-white max-[800px]:text-sm`}>
                  {loading? "Sending..." : "Send !"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
