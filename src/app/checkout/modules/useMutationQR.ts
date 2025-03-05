import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type TMutation = {
  accountNo: string | number;
  accountName?: string;
  acqId: number;
  amount: number;
  addInfo?: string;
  format?: string;
  template?: string;
};

export function useMutationQR() {
  return useMutation({
    mutationKey: ["GEN_QR"],
    mutationFn: async (body: TMutation) => {
      return await axios.post("https://api.vietqr.io/v2/generate", body, {
        headers: {
          "x-client-id": process.env.CLIENT_KEY,
          "x-api-key": process.env.API_KEY,
        },
      });
    },
  });
}
