import IProductsCard from "@/type/type";

import ProductsCard from "./ProductsCard";
import { FaCaretDown } from "react-icons/fa";

const PriceFall = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
  const data: IProductsCard[] = await res.json();
  const fallProducts = data
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct);
    console.log(fallProducts, "from fall ");
  return (
    <div>
      <div className="container mx-auto">
        <div className="m-4 ">
        <h2 className="font-bold text-2xl flex items-center"> <FaCaretDown className='text-green-500' />
       আজ দাম কমেছে</h2>
          {/* <p className="mt-2">মোট {fallProducts.length}টি পণ্য দেখানো হচ্ছে</p> */}
        </div>
        <div className="grid grid-cols-3 ">
          {fallProducts.slice(1, 7).map((product: IProductsCard) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceFall;
