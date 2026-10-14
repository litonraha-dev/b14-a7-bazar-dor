
import { IMarket } from "@/type/type";
import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}



const ProductPage = async ({ params }:ProductPageProps) => {
  const { slug } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${slug}`,
  );
  const product = await res.json();
  console.log(product, "from productpage");
  const lowestMarket = product.markets.reduce((lowest:IMarket, current:IMarket) =>
    current.min < lowest.min ? current : lowest,
  );
  const highetsMarket = product.markets.reduce((highest:IMarket, current:IMarket) =>
    current.max > highest.max ? current : highest,
  );
  const avgRate = (highetsMarket.max + lowestMarket.min) / 2;
  return (
    <div>
      <div className="  container mx-auto bg-gray-100 ">
        <h2>{`${product.categoryNameBn} > ${product.nameBn}`}</h2>

        <div className="flex justify-between m-5 p-7 bg-white">
          <div className="flex items-center  ">
            <div>
              <h1 className="text-5xl bg-gray-100 m-2 p-4 border-none rounded-2xl ">
                {product.categoryIcon}
              </h1>
            </div>
            <div className="">
              <h1 className="font-bold text-2xl">{product.nameBn}</h1>
              <h1>প্রতি কেজি {product.categoryNameBn}</h1>
              <h1 className="">
                গতকালের তুলনায় আজ দাম{" "}
                {product.change.dir === "up" ? (
                  <h2>
                    {" "}
                    <span className="font-semibold"> বেড়েছে</span>{" "}
                    {Math.abs(product.yesterday - product.today)} টাকা
                  </h2>
                ) : (
                  <h2>
                    <span className="font-semibold"> কমেছে</span>{" "}
                    {Math.abs(product.yesterday - product.today)} টাকা
                  </h2>
                )}{" "}
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 border-none rounded-2xl ">
            <h1>আজকের দাম</h1>
            <h1> {product.today}</h1>
            <h1> টাকা/কেজি</h1>
            <div className="font-bold ">
              {product.change.dir === "up" ? (
                <h2 className="text-red-500 bg-gray-100 px-2 border-none rounded-2xl flex items-center gap-1">
                  {" "}
                  <FaCaretUp className="" />
                  {product.change.pct}%
                </h2>
              ) : (
                <h2 className="text-green-500 bg-gray-100 px-2 border-none rounded-2xl flex items-center gap-1">
                  <FaCaretDown /> {Math.abs(product.change.pct)}%
                </h2>
              )}
            </div>
          </div>
        </div>
        <h1>দামের সারসংক্ষেপ</h1>
        <div className="flex justify-between">
          <div className="flex flex-col items-center m-3 p-4 bg-white">
            <h1>সর্বনিম্ন দাম</h1>
            <p className="font-bold text-2xl text-green-400">
              {" "}
              {lowestMarket.min} টাকা
            </p>
            <p>সবচেয়ে কম দামের বাজার</p>
          </div>
          <div className="flex flex-col items-center m-3 p-4 bg-white">
            <p>সর্বাধিক দাম</p>
            <p className="font-bold text-2xl text-red-400">
              {" "}
              {highetsMarket.min} টাকা
            </p>
            <p>সবচেয়ে বেশি দামের বাজার</p>
          </div>
          <div className="flex flex-col items-center m-3 p-4 bg-white">
            <p>গড় দাম</p>
            <p className="font-bold text-2xl  text-green-400">
              {" "}
              {avgRate} টাকা
            </p>
            <p>সবচেয়ে বেশি দামের বাজার</p>
          </div>
        </div>
      </div>

<div className="container mx-auto px-4 py-6">
  <h2 className="mb-4 text-xl font-bold text-gray-800">
    বাজারভিত্তিক আজকের দাম
  </h2>

  <div className="overflow-x-auto rounded-lg border border-gray-200">
    <table className="w-full min-w-[600px] text-left">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3">বাজার</th>
          <th className="px-4 py-3">বিভাগ</th>
          <th className="px-4 py-3">সর্বনিম্ন</th>
          <th className="px-4 py-3">সর্বাধিক</th>
          <th className="px-4 py-3">গড়</th>
        </tr>
      </thead>

      <tbody>
        {product.markets.map((m:IMarket,index:number) => (
          <tr
            key={index}
            className="border-t border-gray-200 hover:bg-gray-50"
          >
            <td className="px-4 py-3">{m.market}</td>
            <td className="px-4 py-3">{m.division}</td>
            <td className="px-4 py-3">{m.min} টাকা</td>
            <td className="px-4 py-3">{m.max} টাকা</td>
            <td className="px-4 py-3 font-semibold">
              {((m.min + m.max) / 2).toFixed(2)} টাকা
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
};

export default ProductPage;
