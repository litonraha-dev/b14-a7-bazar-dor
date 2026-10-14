export default interface IProductsCard {
  id: string;
  nameBn: string;
  today: string;
  categoryIcon: string;
  slug:string,
  category:string,
  categoryNameBn:string,
 yesterday:string,
lastWeek:string,
lastMonth:string,
  change: {
    dir: string;
    pct: number;
  };

}

// export default interface Category{

// }

export interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}