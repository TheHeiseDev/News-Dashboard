export type visitData = {
  country: string;
  quantity: number;
};

export interface ILargeWidget {
  data: visitData[] | undefined;
  title: string;
}
