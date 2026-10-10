import Link from 'next/link';
import React from 'react';
interface ICategories{
id: string,
    slug: string,
    nameBn: string,
    icon: string
}
const NavLinks = async() => {
    const res =await fetch('https://openapi.programming-hero.com/api/bazardor/categories');
    const data:ICategories[] = await res.json();
// console.log(data, "from navlinks");
  
    return (
        <div className='flex  gap-3 mt-2 container mx-auto'>
           {
           data.map((product:ICategories)=>
           ( 
           
          <Link className='flex' key={product.id} href={`/category/${product.slug}`} >
             <h2>{product.icon}</h2> 
             <h2>{product.nameBn}</h2>
                   
          </Link>



           )
           )
           }
           
        </div>
    );
};

export default NavLinks;