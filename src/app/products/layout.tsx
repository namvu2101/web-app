import React, { Suspense } from "react";

export default function LayoutProducts({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
}
