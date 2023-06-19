export interface IAuthSlice {
  id: string | null;
  email: string | null;
  token: string | null;
  error: null;
  role: RollуEnum | null
}
export enum RollуEnum {
  admin =  "admin",
  manager = "manager",
}