import { StatusEnum } from "../visit/visitTypes";


export type Email = {
  id: string;
  email: string;
  date: string;
  country: string;
};

export type EmailWithoutId = Omit<Email, "id">;

export type EmailInitial = {
  email: Email[] | null,
  status: StatusEnum
}