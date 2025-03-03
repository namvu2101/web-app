"use-client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">LUXBATH</h3>
            <p className="text-sm text-gray-600">
              Chuyên cung cấp các sản phẩm thiết bị vệ sinh cao cấp, hiện đại
              với chất lượng hàng đầu.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              {["Trang chủ", "Sản phẩm", "Về chúng tôi", "Liên hệ"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              {[
                "FAQs",
                "Chính sách vận chuyển",
                "Chính sách đổi trả",
                "Điều khoản dịch vụ",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Liên hệ</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">Email: info@luxbath.com</li>
              <li className="text-gray-600">Điện thoại: 1900 1234</li>
              <li className="text-gray-600">
                Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
          <p>© 2023 LUXBATH. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
