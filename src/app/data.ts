import { Award, Truck, ShieldCheck } from "lucide-react";

const featuredCollections = [
  {
    id: 1,
    name: "Marble Collection",
    description: "Timeless elegance crafted from premium Italian marble",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    name: "Brass Essentials",
    description: "Hand-polished brass accessories with a modern twist",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    name: "Scandinavian Minimalism",
    description:
      "Clean lines and functional design for the contemporary bathroom",
    image: "/placeholder.svg?height=600&width=800",
  },
];

const bestsellingProducts = [
  {
    id: 1,
    name: "Marble Soap Dispenser",
    price: 89.99,
    rating: 5,
    reviewCount: 124,
    image: "/placeholder.svg?height=500&width=500",
    description:
      "A luxurious soap dispenser crafted from premium Italian marble.",
  },
  {
    id: 2,
    name: "Brass Towel Holder",
    price: 129.99,
    rating: 4,
    reviewCount: 86,
    image: "/placeholder.svg?height=500&width=500",
    description: "A stylish towel holder made from hand-polished brass.",
  },
  {
    id: 3,
    name: "Handcrafted Ceramic Toothbrush Holder",
    price: 69.99,
    rating: 5,
    reviewCount: 92,
    image: "/placeholder.svg?height=500&width=500",
    description:
      "A unique toothbrush holder handcrafted from high-quality ceramic.",
  },
  {
    id: 4,
    name: "Walnut Wood Bath Tray",
    price: 149.99,
    rating: 4,
    reviewCount: 57,
    image: "/placeholder.svg?height=500&width=500",
    description: "A beautiful bath tray made from rich walnut wood.",
  },
];

const features = [
  {
    id: 1,
    title: "Premium Materials",
    description:
      "We source only the finest materials from around the world to create our luxury bathroom utensils.",
    icon: Award,
  },
  {
    id: 2,
    title: "Free Shipping",
    description:
      "Enjoy complimentary shipping on all orders over $150, carefully packaged to ensure safe delivery.",
    icon: Truck,
  },
  {
    id: 3,
    title: "5-Year Warranty",
    description:
      "Our confidence in our craftsmanship is backed by an industry-leading 5-year warranty on all products.",
    icon: ShieldCheck,
  },
];
type TCategory = {
  id: string;
  name: string;
  href: string;
  subcategories?: TSubCategory[];
};
type TSubCategory = { id: string; name: string; href: string };

const categories: TCategory[] = [
  { id: "0", name: "Tất cả sản phẩm", href: "#" },
  {
    id: "1",
    name: "Bồn cầu",
    href: "#",
    subcategories: [
      { id: "1-1", name: "Bồn cầu 1 khối", href: "#" },
      { id: "1-2", name: "Bồn cầu 2 khối", href: "#" },
      { id: "1-3", name: "Bồn cầu thông minh", href: "#" },
    ],
  },
  {
    id: "2",
    name: "Nắp bồn cầu",
    href: "#",
    subcategories: [
      { id: "2-1", name: "Nắp đóng êm", href: "#" },
      { id: "2-2", name: "Nắp rửa cơ", href: "#" },
      { id: "2-3", name: "Nắp rửa điện tử", href: "#" },
    ],
  },
  {
    id: "3",
    name: "Sen tắm",
    href: "#",
    subcategories: [
      { id: "3-1", name: "Sen cây", href: "#" },
      { id: "3-2", name: "Sen tắm thường", href: "#" },
      { id: "3-3", name: "Sen âm trần", href: "#" },
    ],
  },
  {
    id: "4",
    name: "Vòi",
    href: "#",
    subcategories: [
      { id: "4-1", name: "Vòi chậu âm tường", href: "#" },
      { id: "4-2", name: "Vòi chậu rửa mặt", href: "#" },
      { id: "4-3", name: "Vòi bồn tắm", href: "#" },
      { id: "4-4", name: "Vòi bếp", href: "#" },
      { id: "4-5", name: "Vòi tự động", href: "#" },
      { id: "4-6", name: "Vòi lạnh", href: "#" },
      { id: "4-7", name: "Bộ xả Lavabo", href: "#" },
      { id: "4-8", name: "Vòi mạ màu", href: "#" },
    ],
  },
  {
    id: "5",
    name: "Chậu rửa",
    href: "#",
    subcategories: [
      { id: "5-1", name: "Chậu rửa âm bàn", href: "#" },
      { id: "5-2", name: "Chậu rửa đặt bàn", href: "#" },
      { id: "5-3", name: "Chậu rửa treo tường", href: "#" },
    ],
  },
  {
    id: "6",
    name: "Bồn tắm",
    href: "#",
    subcategories: [
      { id: "6-1", name: "Bồn tắm nằm", href: "#" },
      { id: "6-2", name: "Bồn tắm góc", href: "#" },
      { id: "6-3", name: "Bồn tắm massage", href: "#" },
    ],
  },
  {
    id: "7",
    name: "Phụ kiện nhà tắm",
    href: "#",
    subcategories: [
      { id: "7-1", name: "Kệ để đồ", href: "#" },
      { id: "7-2", name: "Gương phòng tắm", href: "#" },
      { id: "7-3", name: "Móc treo khăn", href: "#" },
    ],
  },
];
const products = [
  // Bồn cầu
  {
    id: "1",
    name: "Bồn cầu 1 khối cao cấp",
    category_id: "1",
    subcategory_id: "1-1",
    image: "https://via.placeholder.com/150",
    price: 4500000,
    star: 4.5,
    description: "Bồn cầu 1 khối thiết kế sang trọng, tiết kiệm nước.",
    code: "BC001",
  },
  {
    id: "2",
    name: "Bồn cầu 2 khối tiện dụng",
    category_id: "1",
    subcategory_id: "1-2",
    image: "https://via.placeholder.com/150",
    price: 3200000,
    star: 4.3,
    description: "Bồn cầu 2 khối với hệ thống xả mạnh mẽ, dễ dàng lắp đặt.",
    code: "BC002",
  },
  {
    id: "3",
    name: "Bồn cầu thông minh Nhật Bản",
    category_id: "1",
    subcategory_id: "1-3",
    image: "https://via.placeholder.com/150",
    price: 12000000,
    star: 4.8,
    description: "Bồn cầu thông minh với hệ thống tự động rửa, sưởi ấm.",
    code: "BC003",
  },

  // Nắp bồn cầu
  {
    id: "4",
    name: "Nắp đóng êm nhựa cao cấp",
    category_id: "2",
    subcategory_id: "2-1",
    image: "https://via.placeholder.com/150",
    price: 750000,
    star: 4.0,
    description: "Nắp bồn cầu đóng êm, hạn chế tiếng ồn khi sử dụng.",
    code: "NBC001",
  },
  {
    id: "5",
    name: "Nắp rửa cơ tiện dụng",
    category_id: "2",
    subcategory_id: "2-2",
    image: "https://via.placeholder.com/150",
    price: 1500000,
    star: 4.2,
    description: "Nắp bồn cầu rửa cơ giúp vệ sinh sạch sẽ hơn.",
    code: "NBC002",
  },
  {
    id: "6",
    name: "Nắp rửa điện tử cảm ứng",
    category_id: "2",
    subcategory_id: "2-3",
    image: "https://via.placeholder.com/150",
    price: 8500000,
    star: 4.9,
    description: "Nắp rửa điện tử cảm ứng, tự động xả nước.",
    code: "NBC003",
  },

  // Sen tắm
  {
    id: "7",
    name: "Sen cây inox 304",
    category_id: "3",
    subcategory_id: "3-1",
    image: "https://via.placeholder.com/150",
    price: 2800000,
    star: 4.6,
    description: "Bộ sen cây inox 304 chống rỉ sét, thiết kế hiện đại.",
    code: "ST001",
  },
  {
    id: "8",
    name: "Sen tắm thường giá rẻ",
    category_id: "3",
    subcategory_id: "3-2",
    image: "https://via.placeholder.com/150",
    price: 1200000,
    star: 4.0,
    description: "Sen tắm thường với giá cả phải chăng, phù hợp mọi gia đình.",
    code: "ST002",
  },
  {
    id: "9",
    name: "Sen âm trần sang trọng",
    category_id: "3",
    subcategory_id: "3-3",
    image: "https://via.placeholder.com/150",
    price: 6000000,
    star: 4.7,
    description: "Sen âm trần thiết kế sang trọng, tạo không gian spa.",
    code: "ST003",
  },

  // Vòi
  {
    id: "10",
    name: "Vòi chậu rửa mặt nóng lạnh",
    category_id: "4",
    subcategory_id: "4-2",
    image: "https://via.placeholder.com/150",
    price: 1800000,
    star: 4.7,
    description: "Vòi chậu rửa mặt với chế độ nóng lạnh tiện lợi.",
    code: "V001",
  },
  {
    id: "11",
    name: "Vòi bồn tắm mạ crom",
    category_id: "4",
    subcategory_id: "4-3",
    image: "https://via.placeholder.com/150",
    price: 3500000,
    star: 4.5,
    description: "Vòi bồn tắm mạ crom sang trọng, độ bền cao.",
    code: "V002",
  },

  // Chậu rửa
  {
    id: "12",
    name: "Chậu rửa âm bàn gốm sứ",
    category_id: "5",
    subcategory_id: "5-1",
    image: "https://via.placeholder.com/150",
    price: 2500000,
    star: 4.8,
    description: "Chậu rửa âm bàn bằng gốm sứ cao cấp, dễ vệ sinh.",
    code: "CR001",
  },
  {
    id: "13",
    name: "Chậu rửa đặt bàn hình tròn",
    category_id: "5",
    subcategory_id: "5-2",
    image: "https://via.placeholder.com/150",
    price: 2100000,
    star: 4.6,
    description: "Chậu rửa đặt bàn hình tròn tinh tế, hiện đại.",
    code: "CR002",
  },

  // Bồn tắm
  {
    id: "14",
    name: "Bồn tắm massage cao cấp",
    category_id: "6",
    subcategory_id: "6-3",
    image: "https://via.placeholder.com/150",
    price: 15000000,
    star: 4.9,
    description: "Bồn tắm massage với hệ thống sục khí, thư giãn tối đa.",
    code: "BT001",
  },
  {
    id: "15",
    name: "Bồn tắm nằm hiện đại",
    category_id: "6",
    subcategory_id: "6-1",
    image: "https://via.placeholder.com/150",
    price: 11000000,
    star: 4.8,
    description: "Bồn tắm nằm thiết kế tối giản, phù hợp mọi không gian.",
    code: "BT002",
  },

  // Phụ kiện nhà tắm
  {
    id: "16",
    name: "Kệ để đồ inox chống rỉ",
    category_id: "7",
    subcategory_id: "7-1",
    image: "https://via.placeholder.com/150",
    price: 1200000,
    star: 4.5,
    description: "Kệ để đồ inox giúp sắp xếp nhà tắm gọn gàng hơn.",
    code: "PK001",
  },
  {
    id: "17",
    name: "Gương phòng tắm cảm ứng",
    category_id: "7",
    subcategory_id: "7-2",
    image: "https://via.placeholder.com/150",
    price: 3200000,
    star: 4.7,
    description: "Gương phòng tắm cảm ứng đèn LED chống mờ.",
    code: "PK002",
  },
  {
    id: "18",
    name: "Móc treo khăn inox",
    category_id: "7",
    subcategory_id: "7-3",
    image: "https://via.placeholder.com/150",
    price: 500000,
    star: 4.4,
    description: "Móc treo khăn bằng inox chắc chắn, không gỉ.",
    code: "PK003",
  },

  // Thêm nhiều sản phẩm đa dạng
  {
    id: "19",
    name: "Bồn cầu âm tường",
    category_id: "1",
    subcategory_id: "1-1",
    image: "https://via.placeholder.com/150",
    price: 7000000,
    star: 4.6,
    description: "Bồn cầu âm tường thiết kế tối giản, tiết kiệm không gian.",
    code: "BC004",
  },
  {
    id: "20",
    name: "Bồn cầu trẻ em",
    category_id: "1",
    subcategory_id: "1-2",
    image: "https://via.placeholder.com/150",
    price: 2500000,
    star: 4.5,
    description: "Bồn cầu nhỏ gọn, phù hợp với trẻ em.",
    code: "BC005",
  },

  // ... Tiếp tục thêm cho đủ 40 sản phẩm
];

export {
  featuredCollections,
  features,
  bestsellingProducts,
  categories,
  products,
};
