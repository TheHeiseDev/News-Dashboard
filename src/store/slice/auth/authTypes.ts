export interface IAuthSlice {
  user: UserType | null;
  error: Error | null;
}
export enum RoleEnum {
  admin = "admin",
  editor = "editor",
}
export type UserType = {
  id: string | null;
  email: string | null;
  token: string | null;
  role: RoleEnum | null;
};
type Error = {
  status: boolean;
  message: string | null;
};
