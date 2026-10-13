
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface ICategories {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
  categoryIcon: string;
  today: string;
  change: { pct: number; dir: string };
}

const Marquee = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: ICategories[] = await res.json();
  console.log(data, "from marquee ");

  return (
    <div className="">
      <MarqueeText>
        {data.map((product) => (
          <div className="flex gap-2 m-4" key={product.id}>
            <h1>{product.categoryIcon}</h1>
            <h1>{product.nameBn}</h1>
            <h1>{product.today} টাকা/কেজি </h1>

            {product.change.dir === "up" ? (
              <h2 className="text-red-500 bg-gray-100 px-2 border-none rounded-2xl flex items-center gap-1">
                {" "}
                <FaCaretUp className="" />
                {product.change.pct}%
              </h2>
            ) : (
              <h2 className="text-green-500 bg-gray-100 px-2 border-none rounded-2xl flex items-center gap-1">
                <FaCaretDown /> {Math.abs(product.change.pct)}%
              </h2>
            )}
          </div>
        ))}
            </MarqueeText>

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
