import React from "react";

export default function LayoutProducts({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex h-screen">{children}</div>;
}
