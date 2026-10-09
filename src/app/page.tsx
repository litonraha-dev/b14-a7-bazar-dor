import AllProducts from "@/components/AllProducts";
import Hero from "@/components/Hero";
import PriceFall from "@/components/PriceFall";
import PriceRise from "@/components/PriceRise";
import { Suspense } from "react";


export default function Home() {
  return (
    <div className="bg-gray-200">
      <Hero></Hero>
     <Suspense fallback={ <h1>Loading...</h1> }> <PriceRise /></Suspense>
     <Suspense fallback={ <h1>Loading...</h1> }> <PriceFall /></Suspense>
     <Suspense fallback={ <h1>Loading...</h1> }> <AllProducts /></Suspense>
  
      
    </div>
  );
}
