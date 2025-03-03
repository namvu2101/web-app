"use-client";

import { Circle, Truck } from "lucide-react";

import { FormInput } from "@/components/forms/form-input";
import { FormSelect } from "@/components/forms/form-select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "framer-motion";
import { useFormContext, useWatch } from "react-hook-form";
import { useGetLocation } from "../modules/useGetLocation";
import { TCheckoutForm } from "../page";

export function CheckoutInfo() {
  const { data } = useGetLocation();

  const { control, setValue, handleSubmit } = useFormContext<TCheckoutForm>();
  const shipType = useWatch({ control, name: "shipType", exact: true });
  const city = useWatch({ control, name: "cityId", exact: true });
  const type = useWatch({ control, name: "type", exact: true });
  const convertProvinces = () => {
    return data?.data.map((p) => ({ name: p.name, id: p.code.toString() }));
  };
  const convertDistrict = () => {
    const filter = data?.data.find((p) => p.code.toString() == city);
    return (
      filter?.districts.map((d) => ({ name: d.name, id: d.code.toString() })) ??
      []
    );
  };

  const onCreate = async (value: TCheckoutForm) => {
    console.log(value);
  };

  return (
    <div className="lg:col-span-3 space-y-8">
      <form onSubmit={handleSubmit(onCreate)}>
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">
              1
            </span>
            Thông tin giao hàng
          </h2>
          <Card>
            <CardContent className="p-6 grid grid-cols-2 gap-4">
              <FormInput name="name" label="Họ và tên" />

              <FormInput name="email" label="Email" />
              <FormInput name="phone" label="Số điện thoại" />

              <div className="col-span-2">
                <FormInput name="address" label="Địa chỉ" />
              </div>
              <FormSelect
                name="cityId"
                label="Thành phố"
                items={convertProvinces()}
              />
              <FormSelect
                name="districtId"
                label="Quận/Huyện"
                items={convertDistrict()}
              />

              <div className="col-span-2 flex items-start gap-2 mt-2">
                <Checkbox id="save-address" />
                <Label className="text-sm font-normal cursor-pointer">
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
                  <Label className="flex items-center gap-2 cursor-pointer">
                    <Circle
                      className="h-4 w-4"
                      fill={shipType === "standard" ? "blue" : "white"}
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
                  <Label className="flex items-center gap-2 cursor-pointer">
                    <Circle
                      className="h-4 w-4"
                      fill={shipType === "express" ? "blue" : "white"}
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
                  type === "banking"
                    ? "border-blue-500 shadow-md"
                    : "border-gray-300"
                }`}
                onClick={() => {
                  setValue("type", "banking");
                }}
              >
                <div className="flex items-center gap-3">
                  <Label className="flex items-center gap-2 cursor-pointer">
                    <Circle
                      className="h-4 w-4"
                      fill={type === "banking" ? "blue" : "white"}
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
                  type === "cod"
                    ? "border-blue-500 shadow-md"
                    : "border-gray-300"
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
                      fill={type === "cod" ? "blue" : "white"}
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
                          <Label>Tên chủ thẻ</Label>
                          <Input id="cardname" className="mt-1" />
                        </div>
                        <div>
                          <Label>Số thẻ</Label>
                          <Input
                            id="cardnumber"
                            className="mt-1"
                            placeholder="XXXX XXXX XXXX XXXX"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Ngày hết hạn</Label>
                            <Input
                              id="expiry"
                              className="mt-1"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <Label>Mã bảo mật (CVV)</Label>
                            <Input
                              id="cvv"
                              className="mt-1"
                              placeholder="XXX"
                            />
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
          <Button
            type="submit"
            className="w-full py-6 text-lg bg-primary hover:bg-primary/90"
          >
            Hoàn tất đơn hàng
          </Button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Bằng cách nhấn nút &quot;Hoàn tất đơn hàng&quot;, bạn đồng ý với các
            điều khoản và điều kiện của chúng tôi.
          </p>
        </div>
      </form>
    </div>
  );
}
