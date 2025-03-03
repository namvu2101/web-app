import { Circle, CreditCard, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormInput } from "@/components/forms/form-input";
import { FormSelect } from "@/components/forms/form-select";
import { useFormContext, useWatch } from "react-hook-form";
import { TCheckoutForm } from "../page";
import { AnimatePresence, motion } from "framer-motion";
import { useGetLocation } from "../modules/useGetLocation";

export function CheckoutInfo() {
  const { data } = useGetLocation();

  const { control, setValue } = useFormContext<TCheckoutForm>();
  const shipType = useWatch({ control, name: "shipType", exact: true });
  const city = useWatch({ control, name: "city", exact: true });
  const type = useWatch({ control, name: "type", exact: true });
  const convertProvines = () => {
    return data?.data.map((p) => ({ name: p.name, id: p.code }));
  };
  const convertDistrict = () => {
    const filter = data?.data.find((p) => p.code == city);
    return filter?.districts.map((d) => ({ name: d.name, id: d.code })) ?? [];
  };

  return (
    <div className="lg:col-span-3 space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">
            1
          </span>
          Thông tin giao hàng
        </h2>
        <Card>
          <CardContent className="p-6 grid grid-cols-2 gap-4">
            <FormInput name="fullname" label="Họ và tên" />

            <FormInput name="email" label="Email" />
            <FormInput name="phone" label="Số điện thoại" />

            <div className="col-span-2">
              <FormInput name="address" label="Địa chỉ" />
            </div>
            <FormSelect
              name="city"
              label="Thành phố"
              items={convertProvines()}
              className="w-full"
            />
            <FormSelect
              name="district"
              label="Quận/Huyện"
              items={convertDistrict()}
              className="w-full"

            />

            <div className="col-span-2 flex items-start gap-2 mt-2">
              <Checkbox id="save-address" />
              <Label
                htmlFor="save-address"
                className="text-sm font-normal cursor-pointer"
              >
                Lưu thông tin này cho lần sau
              </Label>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">
            2
          </span>
          Phương thức vận chuyển
        </h2>
        <Card>
          <CardContent className="p-6">
            <div
              className={`flex items-center justify-between border rounded-lg p-4 mb-3 cursor-pointer transition-all ${
                shipType === "standard"
                  ? "border-blue-500 shadow-md"
                  : "border-gray-300"
              }`}
              onClick={() => {
                setValue("shipType", "standard");
              }}
            >
              <div className="flex items-center gap-3">
                <Label
                  htmlFor="standard"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Circle
                    className="h-4 w-4"
                    fill={shipType === "standard" ? "black" : "white"}
                  />
                  <Truck className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Giao hàng tiêu chuẩn</p>
                    <p className="text-sm text-gray-500">
                      Nhận hàng trong 3-5 ngày
                    </p>
                  </div>
                </Label>
              </div>
              <div className="font-medium">Miễn phí</div>
            </div>

            <div
              className={`flex items-center justify-between border rounded-lg p-4 mb-3 cursor-pointer transition-all ${
                shipType === "express"
                  ? "border-blue-500 shadow-md"
                  : "border-gray-300"
              }`}
              onClick={() => {
                setValue("shipType", "express");
              }}
            >
              <div className="flex items-center gap-3">
                <Label
                  htmlFor="express"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Circle
                    className="h-4 w-4"
                    fill={shipType === "express" ? "black" : "white"}
                  />
                  <Truck className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Giao hàng nhanh</p>
                    <p className="text-sm text-gray-500">
                      Nhận hàng trong 1-2 ngày
                    </p>
                  </div>
                </Label>
              </div>
              <div className="font-medium">150.000 VND</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">
            3
          </span>
          Phương thức thanh toán
        </h2>
        <Card>
          <CardContent className="p-6">
            <div
              className={`flex items-center justify-between border rounded-lg p-4 mb-3 cursor-pointer transition-all ${
                type === "card"
                  ? "border-blue-500 shadow-md"
                  : "border-gray-300"
              }`}
              onClick={() => {
                setValue("type", "card");
              }}
            >
              <div className="flex items-center gap-3">
                <Label
                  htmlFor="card"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Circle
                    className="h-4 w-4"
                    fill={type === "card" ? "black" : "white"}
                  />
                  <CreditCard className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Thẻ tín dụng/Ghi nợ</p>
                    <p className="text-sm text-gray-500">
                      Visa, Mastercard, JCB
                    </p>
                  </div>
                </Label>
              </div>
            </div>

            <div
              className={`flex items-center justify-between border rounded-lg p-4 mb-3 cursor-pointer transition-all ${
                type === "banking"
                  ? "border-blue-500 shadow-md"
                  : "border-gray-300"
              }`}
              onClick={() => {
                setValue("type", "banking");
              }}
            >
              <div className="flex items-center gap-3">
                <Label
                  htmlFor="card"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Circle
                    className="h-4 w-4"
                    fill={type === "banking" ? "black" : "white"}
                  />
                  <div>
                    <p className="font-medium">Chuyển khoản ngân hàng</p>
                    <p className="text-sm text-gray-500">
                      Chuyển khoản qua tài khoản ngân hàng
                    </p>
                  </div>
                </Label>
              </div>
            </div>

            <div
              className={`flex items-center justify-between border rounded-lg p-4 mb-3 cursor-pointer transition-all ${
                type === "cod" ? "border-blue-500 shadow-md" : "border-gray-300"
              }`}
              onClick={() => {
                setValue("type", "cod");
              }}
            >
              <div className="flex items-center gap-3">
                <Label
                  htmlFor="card"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Circle
                    className="h-4 w-4"
                    fill={type === "cod" ? "black" : "white"}
                  />
                  <div>
                    <p className="font-medium">
                      Thanh toán khi nhận hàng (COD)
                    </p>
                    <p className="text-sm text-gray-500">
                      Thanh toán bằng tiền mặt khi nhận hàng
                    </p>
                  </div>
                </Label>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {type === "card" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="mt-6 overflow-hidden border rounded-lg"
                >
                  <div className="p-4">
                    <h3 className="font-medium mb-3">Thông tin thẻ</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardname">Tên chủ thẻ</Label>
                        <Input id="cardname" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cardnumber">Số thẻ</Label>
                        <Input
                          id="cardnumber"
                          className="mt-1"
                          placeholder="XXXX XXXX XXXX XXXX"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Ngày hết hạn</Label>
                          <Input
                            id="expiry"
                            className="mt-1"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">Mã bảo mật (CVV)</Label>
                          <Input id="cvv" className="mt-1" placeholder="XXX" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>

      <div className="pt-4">
        <Button className="w-full py-6 text-lg bg-primary hover:bg-primary/90">
          Hoàn tất đơn hàng
        </Button>
        <p className="text-center text-sm text-gray-500 mt-4">
          Bằng cách nhấn nút "Hoàn tất đơn hàng", bạn đồng ý với các điều khoản
          và điều kiện của chúng tôi
        </p>
      </div>
    </div>
  );
}
