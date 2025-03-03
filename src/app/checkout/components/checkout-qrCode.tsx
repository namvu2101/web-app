import qr from "@/assets/qr.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { setHideDialog, useActionDialog } from "../modules/dialog-status";
export function CheckoutQR() {
  const status = useActionDialog();
  return (
    <Dialog open={status === "banking"} onOpenChange={setHideDialog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Quét mã bên dưới để thanh toán</DialogTitle>
        </DialogHeader>
        <Image src={qr} alt="qrImage" width={500} height={500} />
      </DialogContent>
    </Dialog>
  );
}
