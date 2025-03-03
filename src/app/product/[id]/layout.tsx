import { Footer } from "@/app/main/components/home-footer";
import React from "react";

export default function LayoutProduct({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      {children}
      <Footer />
    </div>
  )
}
