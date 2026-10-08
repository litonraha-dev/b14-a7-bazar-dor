export default interface IProductsCard {
  id: string;
  nameBn: string;
  today: string;
  categoryIcon: string;
  change: {
    dir: string;
    pct: number;
  };
}