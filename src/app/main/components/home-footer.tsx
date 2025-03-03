"use-client";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto py-10 px-6">
        <div className="grid md:grid-cols-4 gap-8">
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
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Chính sách vận chuyển
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Điều khoản dịch vụ
                </a>
              </li>
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
