export type dataCategory = {
  category: string;
  quantity: number;
};
export interface ICategoryWidget {
  data: dataCategory[] | undefined;
  title: string;
}
