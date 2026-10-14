import React from "react";
import ProductsCard from "./ProductsCard";
import IProductsCard from "@/type/type";
import Link from "next/link";

const AllProducts = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
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
        
        ))}
      </div>
    </div>
  
  );
};

export default AllProducts;
