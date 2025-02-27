'use-client'
import { categories } from "@/app/data";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useFormContext, useWatch } from "react-hook-form";

export function SidebarNav() {
  const { control, setValue } = useFormContext();
  const selected = useWatch({ control, name: "categorySelected", exact: true });

  return (
    <div className="w-80 p-4 border-r h-screen">
      <div className="flex items-center gap-2 mb-8">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg"
          alt="Chili POS Logo"
          className="w-8 h-8"
        />
        <Link href="./" className="font-semibold">
          Trang chủ
        </Link>
      </div>
      <nav className="space-y-2">
        <div className="flex gap-2">
          <Menu className="text-green-600" />
          <span className="text-green-600">Danh sách sản phẩm</span>
        </div>
        {categories.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`w-full justify-start hover:bg-green-100 ${
              selected === item.id ? "bg-green-100" : "text-gray-600"
            }`}
            onClick={() => setValue("categorySelected", item.id)}
          >
            {item.name}
          </Button>
        ))}
      </nav>
    </div>
  );
}
