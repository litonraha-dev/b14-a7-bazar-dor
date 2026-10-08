import AllProducts from "@/components/AllProducts";
import Hero from "@/components/Hero";
import PriceFall from "@/components/PriceFall";
import PriceRise from "@/components/PriceRise";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Hero></Hero>
      <PriceRise />
      <PriceFall />

      <AllProducts />
    </div>
  );
}
