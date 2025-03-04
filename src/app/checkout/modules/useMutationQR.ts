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
          "x-client-id": "e804e5d3-de9a-45b1-9687-fc5075e296da",
          "x-api-key": "696aa40a-3af7-45be-8ecf-6a1e88566c19",
        },
      });
    },
  });
}
