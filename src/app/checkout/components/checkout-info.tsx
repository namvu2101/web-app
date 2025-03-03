"use client";

import { FormInput } from "@/components/forms/form-input";
import { FormSelect } from "@/components/forms/form-select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Circle, Truck } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import { setShowDialog } from "../modules/dialog-status";
import { useGetLocation } from "../modules/useGetLocation";
import { TCheckoutForm } from "../page";
import { EPaymentType, EShipType } from "../types";

export function CheckoutInfo() {
  const { data } = useGetLocation();
  const { control, setValue, handleSubmit } = useFormContext<TCheckoutForm>();
  const shipType = useWatch({ control, name: "shipType", exact: true });
  const city = useWatch({ control, name: "cityId", exact: true });
  const type = useWatch({ control, name: "type", exact: true });

  const products = useWatch({ control, name: "products", exact: true });
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
    if (type == "banking") {
      return setShowDialog("banking");
    }
    setShowDialog("cod");
  };
  const shipData = Object.values(EShipType);
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit(onCreate)} className="space-y-8">
        <section>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">
              1
            </span>
            Thông tin giao hàng
          </h2>
          <Card>
            <CardContent className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput name="name" label="Họ và tên" />
              <FormInput name="email" label="Email" />
              <FormInput name="phone" label="Số điện thoại" />
              <div className="col-span-full">
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
              <div className="col-span-full flex items-start gap-2 mt-2">
                <Checkbox id="save-address" />
                <Label className="text-sm font-normal cursor-pointer">
                  Lưu thông tin này cho lần sau
                </Label>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">
              2
            </span>
            Phương thức vận chuyển
          </h2>
          <Card>
            <CardContent className="p-4 sm:p-6 space-y-3">
              {shipData.map((method) => (
                <div
                  key={method}
                  className={`flex items-center justify-between border rounded-lg p-3 sm:p-4 cursor-pointer transition-all ${
                    shipType === method
                      ? "border-blue-500 shadow-md"
                      : "border-gray-300"
                  }`}
                  onClick={() => setValue("shipType", method)}
                >
                  <div className="flex items-center gap-3">
                    <Label className="flex items-center gap-2 cursor-pointer">
                      <Circle
                        className="h-4 w-4"
                        fill={shipType === method ? "blue" : "white"}
                      />
                      <Truck className="h-5 w-5" />
                      <div>
                        <p className="font-medium">
                          {method === "standard"
                            ? "Giao hàng tiêu chuẩn"
                            : "Giao hàng nhanh"}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          {method === "standard"
                            ? "Nhận hàng trong 3-5 ngày"
                            : "Nhận hàng trong 1-2 ngày"}
                        </p>
                      </div>
                    </Label>
                  </div>
                  <div className="font-medium text-sm sm:text-base">
                    {method === "standard" ? "Miễn phí" : "150.000 VND"}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">
              3
            </span>
            Phương thức thanh toán
          </h2>
          <Card>
            <CardContent className="p-4 sm:p-6 space-y-3">
              {Object.values(EPaymentType).map((paymentType) => (
                <div
                  key={paymentType}
                  className={`flex items-center justify-between border rounded-lg p-3 sm:p-4 cursor-pointer transition-all ${
                    type === paymentType
                      ? "border-blue-500 shadow-md"
                      : "border-gray-300"
                  }`}
                  onClick={() => setValue("type", paymentType)}
                >
                  <div className="flex items-center gap-3">
                    <Label className="flex items-center gap-2 cursor-pointer">
                      <Circle
                        className="h-4 w-4"
                        fill={type === paymentType ? "blue" : "white"}
                      />
                      <div>
                        <p className="font-medium">
                          {paymentType === "banking"
                            ? "Chuyển khoản ngân hàng"
                            : "Thanh toán khi nhận hàng (COD)"}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          {paymentType === "banking"
                            ? "Chuyển khoản qua tài khoản ngân hàng"
                            : "Thanh toán bằng tiền mặt khi nhận hàng"}
                        </p>
                      </div>
                    </Label>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <div className="pt-4">
          <Button
            disabled={products.length == 0}
            type="submit"
            className="w-full py-4 sm:py-6 text-base sm:text-lg bg-primary hover:bg-primary/90"
          >
            Hoàn tất đơn hàng
          </Button>
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
            Bằng cách nhấn nút &quot;Hoàn tất đơn hàng&quot;, bạn đồng ý với các
            điều khoản và điều kiện của chúng tôi.
          </p>
        </div>
      </form>
    </div>
  );
}
