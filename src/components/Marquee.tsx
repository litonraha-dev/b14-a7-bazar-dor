import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

// interface ICategories{
// id: string,
//     slug: string,
//     nameBn: string,
//     icon: string
// }

const Marquee = () => {
  // const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
  // const data:ICategories[]  = await res.json();
  // console.log(product, 'from marquee ');

  return (
    <div className="">
   
        {/* Bazar Dor */}
        {/* {
            data.map(product=>(
                <div>
                    <h1>{product.nameBn}</h1> 
        <div className='flex gap-2' key={product.id}>
         <h1>{product.categoryIcon}</h1>
         <h1>{product.categoryNameBn}</h1>
        </div> 
                </div>
            ))
        } */}

        {/* <div>
          <h1>{product.markets.bameBn}</h1>
          <div className="flex gap-2" key={product.id}>
            <h1>{product.categoryIcon}</h1>
            <h1>{product.categoryNameBn}</h1>
          </div>
        </div> */}
   
    </div>
  );
};

export default Marquee;
