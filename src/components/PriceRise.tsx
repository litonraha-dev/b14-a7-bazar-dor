import IProductsCard from '@/type/type';

import ProductsCard from './ProductsCard';
import { FaCaretUp } from 'react-icons/fa';

const PriceRise = async() => {
 const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
  const data: IProductsCard[] = await res.json();
const upProducts = data.filter((product)=>product.change.dir === "up").sort((a,b)=> b.change.pct-a.change.pct);

// console.log(upProducts,"from PriceRise");
    return (
    

    <div className="container mx-auto">
        <div className="m-4 ">
            <h2 className="font-bold text-2xl flex items-center"> <FaCaretUp className='text-red-500' />
আজ দাম বেড়েছে</h2>
        {/* <p className="mt-2">মোট {upProducts.length}টি পণ্য দেখানো হচ্ছে</p> */}
        </div>
        <div className="grid grid-cols-3 ">
        
      {upProducts.slice(0,6).map((product: IProductsCard) => (
        <ProductsCard key={product.id} product={product}/>
      ))}
    </div>
    </div>
  );
    
 
};

export default PriceRise;