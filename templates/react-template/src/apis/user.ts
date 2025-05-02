import { apiGet } from "./index";

export interface IGetMeRes {
  id: string;
  name: string;
}

export const getMe = async () => {
  return await apiGet<IGetMeRes>("/me");
};
