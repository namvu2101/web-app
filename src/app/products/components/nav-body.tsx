"use client";

import { Button } from "@/components/ui/button";
import { type LucideIcon } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";

export function NavBody({
  items,
}: Readonly<{
  items: {
    name: string;
    href: string;
    id?: string;
    icon?: LucideIcon;
  }[];
}>) {
  const { control, setValue } = useFormContext();
  const selected = useWatch({ control, name: "category", exact: true });
  return (
    <nav className="space-y-1 px-8 mt-6">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.id}
            variant="ghost"
            className={`w-full justify-start hover:bg-green-100 ${
              selected === item.id ? "bg-green-100" : "text-gray-600"
            }`}
            onClick={() => {
              setValue("category", item.id);
              setValue("subCategory", "0");
            }}
          >
            {Icon && (
              <Icon
                className={`h-5 w-5 ${
                  selected === item.id ? "text-white" : "text-gray-400"
                }`}
              />
            )}
            {item.name}
          </Button>
        );
      })}
    </nav>
  );
}
