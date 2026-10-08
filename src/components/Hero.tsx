import Image from "next/image";
import React from "react";

const Hero = async() => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
const data = await res.json();
console.log(data, "from hero");

  return (
   <section className="p-5 ">
     <div className=" container mx-auto flex bg-white justify-between p-4 border-none rounded-2xl items-center">
      <div className="mx-3 ">
        <h2 className="bg-green-200 text-green-700 font-bold inline-block p-2 rounded-full mb-3">{date}</h2>
        <h1 className="font-bold text-4xl mb-7">আজকের বাজারের দাম এক নজরে</h1>
        <p className="mb-4">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, <br />
          সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <button className="btn btn-primary"> সব পণ্য দেখুন</button>
      </div>
      <div>
        <Image
          src={"/bazar-hero.png"}
          width={200}
          height={200}
          alt="hero image"
        ></Image>
      </div>
    </div>
   </section>
  );
};

export default Hero;
