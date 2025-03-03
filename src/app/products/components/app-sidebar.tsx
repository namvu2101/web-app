"use client";

import { categories } from "@/app/data";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import * as React from "react";
import { NavBody } from "./nav-body";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { toggleSidebar, state } = useSidebar();
  const isOpen = state === "expanded";

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="h-16" />
      </SidebarHeader>
      <SidebarMenu />
      {isOpen && (
        <SidebarContent>
          <Button
            variant="ghost"
            className="w-full flex gap-2 justify-center items-center "
            onClick={toggleSidebar}
          >
            <Menu />
            Danh sách sản phẩm
          </Button>
          <NavBody items={categories} />
        </SidebarContent>
      )}
      {!isOpen && (
        <Button variant="ghost" onClick={toggleSidebar}>
          <Menu />
        </Button>
      )}
      <SidebarRail />
    </Sidebar>
  );
}
