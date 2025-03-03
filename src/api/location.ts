import { http } from "@/http";
import { AxiosResponse } from "axios";

type TDistrict = {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  phone_code: number;
  wards: string[];
};

type TResponse = {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  phone_code: number;
  district: TDistrict[];
};

export const locationApi = {
  getCities: async () => {
    return http.get("/");
  },
  getProvinces: async () => {
    return http.get("https://open.oapi.vn/location/provinces");
  },
  getAll: async (): Promise<AxiosResponse<TResponse[]>> => {
    return http.get("https://provinces.open-api.vn/api/", {
      params: { depth: 2 },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
};
