import { http } from "@/http";

export const locationApi = {
  getCities: async () => {
    return http.get("/");
  },
  getProvinces: async () => {
    return http.get("https://open.oapi.vn/location/provinces");
  },
  getAll: async () => {
    return await http.get("https://provinces.open-api.vn/api/", {
      params: { depth: 2 },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
};
