'use client'
import Image from "next/image";

import DateDisplay from "./DateDisplay";


const HeaderPage = () => {
 
  return (
   <header className="w-full">
     <div className="flex  justify-between container mx-auto mt-3 ">
    
      <div className="flex gap-3 items-center   ">
        <div>
          <Image
            src={"/logo.png"}
            height={50}
            width={50}
            alt="logo image"
            className=""
          ></Image>
        </div>
        <div>
          <h1 className="font-extrabold text-2xl">বাজার দর</h1>
          <DateDisplay/>
        </div>
      </div>
      <div className="flex gap-4 ">
        <button className="btn btn-primary">Sign In</button>
        <button className="btn btn-accent">Sign Out</button>
      </div>
    </div>
   </header>
  );
};

export default HeaderPage;
