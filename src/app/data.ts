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
const products: Product[] = [
  // Bồn cầu
  {
    id: "1",
    name: "Bồn cầu 1 khối cao cấp",
    category_id: "1",
    subcategory_id: "1-1",
    images: [
      "https://product.hstatic.net/1000238289/product/cw542hme5unw1_tcf802c2z_4x_ad1b8afad3f24d86993a3d1d21a9c36a_medium.png",
      "https://product.hstatic.net/1000238289/product/cw553_toto_tuantu2_dc03b21f49024554a95d91d67f80fa9b_medium.jpg",
      "https://product.hstatic.net/1000238289/product/cw542hme5unw1_tcf802c2z_4x_ad1b8afad3f24d86993a3d1d21a9c36a_medium.png",
    ],
    price: 4500000,
    star: 4,
    description: "Bồn cầu 1 khối thiết kế sang trọng, tiết kiệm nước.",
    code: "BC001",
  },
  {
    id: "2",
    name: "Bồn cầu 2 khối tiện dụng",
    category_id: "1",
    subcategory_id: "1-2",
    images: [
      "https://product.hstatic.net/1000238289/product/cw553_toto_tuantu2_dc03b21f49024554a95d91d67f80fa9b_medium.jpg",
      "https://product.hstatic.net/1000238289/product/cw553_toto_tuantu2_dc03b21f49024554a95d91d67f80fa9b_medium.jpg",
      "https://product.hstatic.net/1000238289/product/cw553_toto_tuantu2_dc03b21f49024554a95d91d67f80fa9b_medium.jpg",
    ],
    price: 3200000,
    star: 4,
    description: "Bồn cầu 2 khối với hệ thống xả mạnh mẽ, dễ dàng lắp đặt.",
    code: "BC002",
  },
  {
    id: "3",
    name: "Bồn cầu thông minh Nhật Bản",
    category_id: "1",
    subcategory_id: "1-3",
    images: [
      "https://product.hstatic.net/1000238289/product/cw822rea-w-tcf4911ez-nw1-2_744820aa3d5b49608936c77511fb5bd6_grande.jpg",
      "https://product.hstatic.net/1000238289/product/cw553_toto_tuantu2_dc03b21f49024554a95d91d67f80fa9b_medium.jpg",
      "https://product.hstatic.net/1000238289/product/cw822rea-w-tcf4911ez-nw1-2_744820aa3d5b49608936c77511fb5bd6_grande.jpg",
    ],
    price: 12000000,
    star: 4,
    description: "Bồn cầu thông minh với hệ thống tự động rửa, sưởi ấm.",
    code: "BC003",
  },

  // Nắp bồn cầu
  {
    id: "4",
    name: "Nắp đóng êm nhựa cao cấp",
    category_id: "2",
    subcategory_id: "2-1",
    images: [
      "https://product.hstatic.net/1000238289/product/tc395vs_w_ab2d27275c0a485ca9c154e053ae961a_medium.jpg",
      "https://product.hstatic.net/1000238289/product/tc395vs_w_ab2d27275c0a485ca9c154e053ae961a_medium.jpg",
      "https://product.hstatic.net/1000238289/product/tc395vs_w_ab2d27275c0a485ca9c154e053ae961a_medium.jpg",
    ],
    price: 750000,
    star: 4,
    description: "Nắp bồn cầu đóng êm, hạn chế tiếng ồn khi sử dụng.",
    code: "NBC001",
  },
  {
    id: "5",
    name: "Nắp rửa cơ tiện dụng",
    category_id: "2",
    subcategory_id: "2-2",
    images: [
      "https://product.hstatic.net/1000238289/product/tc385vs_f3b71098d9d34ac08a8e496bd77aa15d_2fd140bdd9f84596a00f9745e85771ea_medium.jpg",
      "https://product.hstatic.net/1000238289/product/tc385vs_f3b71098d9d34ac08a8e496bd77aa15d_2fd140bdd9f84596a00f9745e85771ea_medium.jpg",
      "https://product.hstatic.net/1000238289/product/tc385vs_f3b71098d9d34ac08a8e496bd77aa15d_2fd140bdd9f84596a00f9745e85771ea_medium.jpg",
    ],
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
    images: [
      "https://product.hstatic.net/1000238289/product/s5-tcf34320gaa_nw1_9d3d42966b0541b9af4a9ffd12e9341f_medium.jpeg",
      "https://product.hstatic.net/1000238289/product/s5-tcf34320gaa_nw1_9d3d42966b0541b9af4a9ffd12e9341f_medium.jpeg",
      "https://product.hstatic.net/1000238289/product/s5-tcf34320gaa_nw1_9d3d42966b0541b9af4a9ffd12e9341f_medium.jpeg",
    ],
    price: 8500000,
    star: 4,
    description: "Nắp rửa điện tử cảm ứng, tự động xả nước.",
    code: "NBC003",
  },

  // Sen tắm
  {
    id: "7",
    name: "Sen cây inox 304",
    category_id: "3",
    subcategory_id: "3-1",
    images: [
      "https://product.hstatic.net/1000238289/product/dbx114_1cam_e9d59501bd5c4f0e9a0458789f136d5e_5ecb9d4ff2624d1f85b6f905ca16b699_medium.jpg",
      "https://product.hstatic.net/1000238289/product/dbx114_1cam_e9d59501bd5c4f0e9a0458789f136d5e_5ecb9d4ff2624d1f85b6f905ca16b699_medium.jpg",
      "https://product.hstatic.net/1000238289/product/dbx114_1cam_e9d59501bd5c4f0e9a0458789f136d5e_5ecb9d4ff2624d1f85b6f905ca16b699_medium.jpg",
    ],
    price: 2800000,
    star: 4,
    description: "Bộ sen cây inox 304 chống rỉ sét, thiết kế hiện đại.",
    code: "ST001",
  },
  {
    id: "8",
    name: "Sen tắm thường giá rẻ",
    category_id: "3",
    subcategory_id: "3-2",
    images: [
      "https://product.hstatic.net/1000238289/product/anh_chup_man_hinh_2024-04-06_luc_13.52.38_1b40f539bfca4e92806d01e211c8de8d_medium.png",
      "https://product.hstatic.net/1000238289/product/anh_chup_man_hinh_2024-04-06_luc_13.52.38_1b40f539bfca4e92806d01e211c8de8d_medium.png",
      "https://product.hstatic.net/1000238289/product/anh_chup_man_hinh_2024-04-06_luc_13.52.38_1b40f539bfca4e92806d01e211c8de8d_medium.png",
      "https://product.hstatic.net/1000238289/product/anh_chup_man_hinh_2024-04-06_luc_13.52.38_1b40f539bfca4e92806d01e211c8de8d_medium.png",
    ],
    price: 1200000,
    star: 4,
    description: "Sen tắm thường với giá cả phải chăng, phù hợp mọi gia đình.",
    code: "ST002",
  },
  {
    id: "9",
    name: "Sen âm trần sang trọng",
    category_id: "3",
    subcategory_id: "3-3",
    images: [
      "https://product.hstatic.net/1000238289/product/tbw02003b1b_mbl_f959387d1d49405780eb197a0ceb42f1_medium.jpeg",
      "https://product.hstatic.net/1000238289/product/tbw02003b1b_mbl_f959387d1d49405780eb197a0ceb42f1_medium.jpeg",
      "https://product.hstatic.net/1000238289/product/tbw02003b1b_mbl_f959387d1d49405780eb197a0ceb42f1_medium.jpeg",
    ],
    price: 6000000,
    star: 4,
    description: "Sen âm trần thiết kế sang trọng, tạo không gian spa.",
    code: "ST003",
  },

  // Vòi
  {
    id: "10",
    name: "Vòi chậu rửa mặt nóng lạnh",
    category_id: "4",
    subcategory_id: "4-2",
    images: [
      "https://product.hstatic.net/1000238289/product/tbp02303a_bn_91b072ee69b442f29ea1e25b3dec0db2_medium.jpg",
      "https://product.hstatic.net/1000238289/product/tbp02303a_bn_91b072ee69b442f29ea1e25b3dec0db2_medium.jpg",
    ],
    price: 1800000,
    star: 4,
    description: "Vòi chậu rửa mặt với chế độ nóng lạnh tiện lợi.",
    code: "V001",
  },
  {
    id: "11",
    name: "Vòi bồn tắm mạ crom",
    category_id: "4",
    subcategory_id: "4-3",
    images: [
      "https://product.hstatic.net/1000238289/product/tbp02202a_bn_457f1bddbe5d4ec7b9e82fdef3e5037c_medium.jpg",
      "https://product.hstatic.net/1000238289/product/tbp02202a_bn_457f1bddbe5d4ec7b9e82fdef3e5037c_medium.jpg",
      "https://product.hstatic.net/1000238289/product/tbp02202a_bn_457f1bddbe5d4ec7b9e82fdef3e5037c_medium.jpg",
    ],
    price: 3500000,
    star: 4,
    description: "Vòi bồn tắm mạ crom sang trọng, độ bền cao.",
    code: "V002",
  },

  // Chậu rửa
  {
    id: "12",
    name: "Chậu rửa âm bàn gốm sứ",
    category_id: "5",
    subcategory_id: "5-1",
    images: [
      "https://product.hstatic.net/1000238289/product/capture_5_1da2c9e41b944365ae7cff50dd041ba8_c0f5258c98ce4f9d98496890f0e4d83a_medium.png",
    ],
    price: 2500000,
    star: 4,
    description: "Chậu rửa âm bàn bằng gốm sứ cao cấp, dễ vệ sinh.",
    code: "CR001",
  },
  {
    id: "13",
    name: "Chậu rửa đặt bàn hình tròn",
    category_id: "5",
    subcategory_id: "5-2",
    images: [
      "https://product.hstatic.net/1000238289/product/img_1752_3f2dbc5660e545728ad8692533149732_medium.jpg",
    ],
    price: 2100000,
    star: 5,
    description: "Chậu rửa đặt bàn hình tròn tinh tế, hiện đại.",
    code: "CR002",
  },

  // Bồn tắm
  {
    id: "14",
    name: "Bồn tắm massage cao cấp",
    category_id: "6",
    subcategory_id: "6-3",
    images: [
      "https://product.hstatic.net/1000238289/product/video_gxobabtzvos_5701ea9e3699417eb03ca08ec0ced516_medium.png",
    ],
    price: 15000000,
    star: 4,
    description: "Bồn tắm massage với hệ thống sục khí, thư giãn tối đa.",
    code: "BT001",
  },
  {
    id: "15",
    name: "Bồn tắm nằm hiện đại",
    category_id: "6",
    subcategory_id: "6-1",
    images: [
      "https://product.hstatic.net/1000238289/product/pjy1724hpwe_gw_pjy1724hpwe_mw_23bd341de31d4d639eef71ee0b9db94c_medium.jpg",
    ],
    price: 11000000,
    star: 5,
    description: "Bồn tắm nằm thiết kế tối giản, phù hợp mọi không gian.",
    code: "BT002",
  },

  // Phụ kiện nhà tắm
  {
    id: "16",
    name: "Kệ để đồ inox chống rỉ",
    category_id: "7",
    subcategory_id: "7-1",
    images: [
      "https://product.hstatic.net/1000238289/product/ys406n3v_a6bfdd45b7b94893a2949cce451ccf4f_a3a67f3938e54cd989996cfe2567b99a_medium.jpg",
    ],
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
    images: [
      "https://product.hstatic.net/1000238289/product/ym4545fg1_0a8fae76c2ee4a2cab346625d01ee94f_801197867041428a9949a715247ad765_medium.jpg",
    ],
    price: 3200000,
    star: 5,
    description: "Gương phòng tắm cảm ứng đèn LED chống mờ.",
    code: "PK002",
  },
  {
    id: "18",
    name: "Móc treo khăn inox",
    category_id: "7",
    subcategory_id: "7-3",
    images: [
      "https://product.hstatic.net/1000238289/product/yt406w6v_307e42b4d2684a93bebb45224c966766_49a86972e8184647bedfeeb86c75a14c_medium.jpg",
    ],
    price: 500000,
    star: 5,
    description: "Móc treo khăn bằng inox chắc chắn, không gỉ.",
    code: "PK003",
  },

  // Thêm nhiều sản phẩm đa dạng
  {
    id: "19",
    name: "Bồn cầu âm tường",
    category_id: "1",
    subcategory_id: "1-1",
    images: [
      "https://product.hstatic.net/1000238289/product/cw542hme5unw1_tcf802c2z_4x_ad1b8afad3f24d86993a3d1d21a9c36a_medium.png",
    ],
    price: 7000000,
    star: 4,
    description: "Bồn cầu âm tường thiết kế tối giản, tiết kiệm không gian.",
    code: "BC004",
  },
  {
    id: "20",
    name: "Bồn cầu trẻ em",
    category_id: "1",
    subcategory_id: "1-2",
    images: [
      "https://product.hstatic.net/1000238289/product/cw542hme5unw1_tcf802c2z_4x_ad1b8afad3f24d86993a3d1d21a9c36a_medium.png",
    ],
    price: 2500000,
    star: 5,
    description: "Bồn cầu nhỏ gọn, phù hợp với trẻ em.",
    code: "BC005",
  },
];
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category_id: string;
  subcategory_id: string;
  star: number;
  code: string;
  detail?: string;
  colors?: string[];
}

export { categories, products };
