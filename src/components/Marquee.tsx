import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface ICategories{
id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const Marquee = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
    const data:ICategories[]  = await res.json();
    // console.log(data, 'from marquee ');
    return (
        <div className=''>
            <MarqueeText  >

{
    data.map(product=>(
       <div className='flex gap-2' key={product.id}>
         <h1>{product.categoryIcon}</h1>
         <h1>{product.categoryNameBn}</h1>
       </div>
    ))
}
            </MarqueeText>
        </div>
    );
};

export default Marquee;