export type VisitSliceInitial = {
  visits: VisitStatisticsType | null;
  status: StatusType;
};

export type VisitStatisticsType = {
  numberOfVisits: number;
  byCountry: CountryStats[];
  byDevice: DeviceStats[];
};

export type VisitType = {
  id: string;
  date: string;
  country: string;
  ip: string;
  device: string;
  os: string;
};

export enum StatusType {
  loading = "loadig",
  success = "success",
  error = "error",
}
interface CountryStats {
  country: string;
  quantity: number;
}

interface DeviceStats {
  platform: string;
  quantity: number;
}