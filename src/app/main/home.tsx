'use-client'
import { Header } from "./components/home-header";

import { Body } from "./components/home-body";
import { Footer } from "./components/home-footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}



