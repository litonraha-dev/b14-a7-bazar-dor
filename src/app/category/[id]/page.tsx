
import ProductsCard from "@/components/ProductsCard";
import IProductsCard from "@/type/type";

// interface CategoryPageProps {
//   id: string;
//   slug: string;
//   nameBn: string;
//   icon: string;
// params:Promise<{id:string}>

// }
interface CategoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { id } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${id}`,
  );
  const CategoryProduct: IProductsCard[] = await res.json();
  const categoryName = CategoryProduct[0]?.categoryNameBn;
  console.log(CategoryProduct, "from category");
  return (
    <div>
      <div className="container mx-auto bg-gray-300 border-none rounded-2xl">
        <div className="m-4 ">
          <h2 className="font-bold text-2xl">{categoryName}</h2>
          <p className="mt-2">
            মোট {CategoryProduct.length}টি পণ্য দেখানো হচ্ছে
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {CategoryProduct.map((product: IProductsCard) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* {CategoryProduct.map((product: IProductsCard) => (
        <Marquee key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default CategoryPage;
