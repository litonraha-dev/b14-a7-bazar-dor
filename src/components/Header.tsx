import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
              <div className='flex justify-between m-4'>
      <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🛒</span>
          <div>
            <h1 className="text-xl font-bold text-green-700 leading-tight">
              বাজার দর
            </h1>
        
          </div>
        </Link>

        <div className='flex gap-3 '>
      <Link href='/signin' className='btn btn-accent'>
       সাইন ইন

      </Link>

      <Link href='/signup' className='btn btn-active'>
      সাইন আপ
      </Link>
        </div>
   </div>
        </div>
    );
};

export default Header;