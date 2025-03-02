"use client";
import { InputHTMLAttributes } from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Items = string | { name: string; id: string };

type TFormSelect = {
  name: string;
  label?: string;
  items?: Items[];
};

export function FormSelect(
  props: TFormSelect & InputHTMLAttributes<HTMLFormElement>
) {
  const { name, label, className, items = [], ...prop } = props;
  const getItemLabel = (item: Items) => {
    if (typeof item === "string") {
      return item;
    }
    return item.name;
  };

  const getItemValue = (item: Items) => {
    if (typeof item === "string") {
      return item;
    }
    return item.id;
  };
  return (
    <FormField
      {...prop}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={prop.disabled}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={field.value} />
            </SelectTrigger>
            <SelectContent>
              {items.map((item) => (
                <SelectItem key={getItemValue(item)} value={getItemValue(item)}>
                  {getItemLabel(item)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
