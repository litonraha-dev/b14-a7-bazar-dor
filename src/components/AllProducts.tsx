import React from "react";
import ProductsCard from "./ProductsCard";
import IProductsCard from "@/type/type";

const AllProducts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: IProductsCard[] = await res.json();
  // console.log(data, "from products card");
  return (
    <div className="container mx-auto">
      <div className="m-4 ">
        <h2 className="font-bold text-2xl">সব পণ্য</h2>
        <p className="mt-2">মোট {data.length}টি পণ্য দেখানো হচ্ছে</p>
      </div>
      <div className="grid grid-cols-3 ">
        {data.map((product: IProductsCard) => (
          <ProductsCard key={product.id} product ={product} />
        //  <div key={product.id}  className="bg-white m-4 p-3 border-none rounded-2xl">
        //   <div className="flex gap-2 items-center">
        //     <h1 className="text-3xl bg-gray-300 p-2 border-none rounded-2xl">
        //       {product.categoryIcon}
        //     </h1>
        //     <div className="">
        //       <h1>{product.nameBn}</h1>
        //       <h1>প্রতি কেজি</h1>
        //     </div>
        //   </div>
        //   <div className="flex justify-between items-center mt-4">
        //     <div>
        //       <h2> আজকের দাম </h2>
        //       <div className="flex gap-2 items-center">
        //         <h2 className="font-bold text-2xl"> {product.today} </h2> 
        //       <h2>টাকা</h2>
        //       </div>
        //     </div>
        //     <div className="font-bold ">
        //       {product.change.dir === "up" ? (
        //         <h2 className="text-red-500 bg-red-100 px-2 border-none rounded-2xl">{product.change.pct}%</h2>
        //       ) : (
        //         <h2 className="text-green-500 bg-green-100 px-2 border-none rounded-2xl">
        //           {Math.abs(product.change.pct)}%
        //         </h2>
        //       )}
        //     </div>
        //   </div>
        // </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
