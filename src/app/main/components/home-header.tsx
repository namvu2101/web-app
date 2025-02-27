"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-yellow-500">
          TOTO TUANTU
        </Link>

        {/* Search Bar */}
        <div className="flex items-center gap-2 w-1/3,">
          <Search />
          <Input
            type="text"
            placeholder="Tìm kiếm..."
            className="border-none"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 text-sm">
          <div>
            <p className="text-gray-400">Gọi mua hàng</p>
            <p className="font-bold text-white">093.179.1818</p>
          </div>
          <Link href="/stores" className="hover:text-yellow-500">
            Hệ thống cửa hàng
          </Link>
          <Link href="/account" className="hover:text-yellow-500">
            Tài khoản <br /> <span className="text-gray-400">Đăng nhập</span>
          </Link>
          {/* Cart Icon */}
          <Button
            variant="ghost"
            className="relative p-2 hover:bg-gray-800 rounded-lg"
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-yellow-500 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
            Giỏ hàng
          </Button>
        </div>
      </div>

      {/* Second Row: Navigation */}
      <nav className="bg-gray-900">
        <div className="container mx-auto flex items-center py-2 px-6 space-x-6">
          {/* Dropdown Danh mục sản phẩm */}
          <div className="relative group">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg">
              <Menu className="w-5 h-5" />
              <span>Danh mục sản phẩm</span>
            </button>
            {/* Dropdown List */}
            <div className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-lg hidden group-hover:block">
              <Link
                href="/products/category1"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Bồn cầu
              </Link>
              <Link
                href="/products/category2"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Sen tắm
              </Link>
              <Link
                href="/products/category3"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Vòi lavabo
              </Link>
            </div>
          </div>

          {/* Other Navigation Links */}
          <Link href="/about" className="text-white hover:text-yellow-500">
            Giới thiệu
          </Link>
          <Link href="/news" className="text-white hover:text-yellow-500">
            Tin tức
          </Link>
          <Link href="/contact" className="text-white hover:text-yellow-500">
            Liên hệ
          </Link>
          <Link href="/gallery" className="text-white hover:text-yellow-500">
            Phối cảnh
          </Link>
        </div>
      </nav>
    </header>
  );
}
