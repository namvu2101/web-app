import { locationApi } from "@/api/location";
import { QUERY_KEYS } from "@/lib";
import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetLocation() {
  return useQuery({
    queryKey: [QUERY_KEYS.POST],
    queryFn: async () =>
      await axios.get("https://provinces.open-api.vn/api/", {
        params: { depth: 2 },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
  });
}
