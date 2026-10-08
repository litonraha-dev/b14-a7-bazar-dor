import IProductsCard from "@/type/type";

interface ProductsCardProps{
    product:IProductsCard
}
const ProductsCard =  ({product}:ProductsCardProps) => {
    console.log(product, "allProduct page");
  
  return (
    <div  className="bg-white m-4 p-3 border-none rounded-2xl">
          <div className="flex gap-2 items-center">
            <h1 className="text-3xl bg-gray-300 p-2 border-none rounded-2xl">
              {product.categoryIcon}
            </h1>
            <div className="">
              <h1>{product.nameBn}</h1>
              <h1>প্রতি কেজি</h1>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <h2> আজকের দাম </h2>
              <div className="flex gap-2 items-center">
                <h2 className="font-bold text-2xl"> {product.today} </h2> 
              <h2>টাকা</h2>
              </div>
            </div>
            <div className="font-bold ">
              {product.change.dir === "up" ? (
                <h2 className="text-red-500 bg-red-100 px-2 border-none rounded-2xl">{product.change.pct}%</h2>
              ) : (
                <h2 className="text-green-500 bg-green-100 px-2 border-none rounded-2xl">
                  {Math.abs(product.change.pct)}%
                </h2>
              )}
            </div>
          </div>
        </div>
  );
};

export default ProductsCard;
