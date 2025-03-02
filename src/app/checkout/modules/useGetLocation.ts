"use-client";

import { QUERY_KEYS } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

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
  districts: TDistrict[];
};

export function useGetLocation() {
  return useQuery({
    queryKey: [QUERY_KEYS.POST],
    queryFn: async (): Promise<AxiosResponse<TResponse[]>> =>
      await axios.get("https://provinces.open-api.vn/api/", {
        params: { depth: 2 },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
  });
}
