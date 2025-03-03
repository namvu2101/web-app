"use client";

import { categories } from "@/app/data";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import * as React from "react";
import { NavBody } from "./nav-body";
import Link from "next/link";
import { Menu } from "lucide-react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex justify-center items-center gap-2 mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg"
            alt="Chili POS Logo"
            className="w-8 h-8"
          />
          <Link href="../" className="font-semibold">
            Trang chủ
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="flex gap-2 justify-center">
          <Menu />
          <span>Danh sách sản phẩm</span>
        </div>
        <NavBody items={categories} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
