// Dữ liệu sản phẩm mẫu (Array of Objects) đã bổ sung Specs đầy đủ
const products = [
  {
    id: 1,
    name: "Điện thoại Xiaomi Redmi Note 15 Pro+",
    category: "phone",
    price: 9490000,
    image: "images/phone1.jpg",
    description: "Màn hình AMOLED 120Hz, khung viền titan cao cấp, sạc siêu nhanh 120W.",
    specs: {
      "Màn hình": "6.67 inch AMOLED 1.5K, 120Hz, 3000 nits",
      "Khung viền": "Hợp kim Titan siêu bền, chuẩn kháng nước IP69",
      "Vi xử lý": "Qualcomm Snapdragon 7s Gen 4 (4nm)",
      "RAM & Bộ nhớ": "12GB LPDDR5X | 256GB UFS 3.1",
      "Camera sau": "200MP OIS (chính) + 8MP (góc rộng) ",
      "Pin & Sạc": "6500 mAh, HyperCharge 120W (19 phút 100%)"
    }
  },
  {
    id: 2,
    name: "Sò lạnh tản nhiệt từ tính Memo DLA6",
    category: "accessory",
    price: 350000,
    image: "images/cooler.jpg",
    description: "Công nghệ sò peltier làm lạnh nhanh, đèn LED RGB, ngàm kẹp linh hoạt.",
    specs: {
      "Công nghệ": "Bán dẫn Peltier diện tích lớn, làm lạnh đóng băng",
      "Công suất": "Tối đa 27W ép nhiệt siêu tốc",
      "Kiểu ngàm": "Hít từ tính MagSafe + Kèm ngàm kẹp đa năng",
      "Hệ thống LED": "LED RGB chuyển màu tự động chuẩn Gaming",
      "Cổng cấp nguồn": "Type-C (nguồn khuyên dùng 9V/3A)"
    }
  },
  {
    id: 3,
    name: "Chuột không dây Gaming Free Wolf X8",
    category: "gear",
    price: 280000,
    image: "images/mouse.jpg",
    description: "Cảm biến quang học 3 mức DPI, pin sạc độ trễ thấp, switch bấm êm.",
    specs: {
      "Cảm biến": "Quang học Gaming Optical Engine",
      "Độ phân giải DPI": "800 - 1600 - 2400 DPI (3 nấc chỉnh)",
      "Kết nối": "Không dây 2.4GHz USB Receiver chống nhiễu",
      "Độ bền switch": "10 triệu lượt bấm (Silent click chống ồn)",
      "Dung lượng pin": "Pin sạc Lithium 500mAh, cổng sạc Type-C"
    }
  },
  {
    id: 4,
    name: "Bàn phím cơ Aula F75 Không dây",
    category: "gear",
    price: 1250000,
    image: "images/keyboard.jpg",
    description: "Gasket mount êm ái, hotswap 5 pin, kết nối 3 chế độ mượt mà.",
    specs: {
      "Layout": "75% (80 phím) kèm núm xoay kim loại đa năng",
      "Cấu trúc": "Gasket Mount 5 lớp foam tiêu âm chống vang",
      "Hotswap": "Hỗ trợ switch 3 pin và 5 pin tiện lợi thay thế",
      "Kết nối": "3 chế độ: Type-C, Bluetooth 5.0, Wireless 2.4G",
      "Thời lượng pin": "4000 mAh cho thời gian dùng tới 200 giờ"
    }
  },
  {
    id: 5,
    name: "Củ sạc nhanh GaN 100W 3 cổng",
    category: "accessory",
    price: 690000,
    image: "images/charger.jpg",
    description: "Công nghệ GaN III thu nhỏ kích thước, hỗ trợ sạc nhanh laptop và điện thoại.",
    specs: {
      "Công nghệ bán dẫn": "GaN III (Gallium Nitride) tối ưu nhiệt độ",
      "Tổng công suất": "100W Max chuẩn PD 3.0 / PPS / QC 4.0",
      "Cổng ra": "2 x Type-C (tối đa 100W), 1 x USB-A (tối đa 22.5W)",
      "Bảo vệ an toàn": "Chống quá tải, quá áp, tự ngắt thông minh",
      "Tương thích": "Laptop, MacBook, iPhone, Android, iPad"
    }
  },
  {
    id: 6,
    name: "Máy tính bảng iPad Gen 10 64GB",
    category: "phone",
    price: 9890000,
    image: "images/ipad.jpg",
    description: "Chip A14 Bionic mạnh mẽ, màn hình Liquid Retina 10.9 inch sắc nét.",
    specs: {
      "Màn hình": "10.9 inch Liquid Retina IPS, True Tone, 500 nits",
      "Vi xử lý": "Apple A14 Bionic 6 lõi (4 lõi GPU)",
      "Bộ nhớ": "64GB lưu trữ mượt mà",
      "Camera": "12MP Ultra Wide trước (Center Stage) & 12MP sau",
      "Kết nối": "Wi-Fi 6, Cổng sạc và truyền dữ liệu USB-C",
      "Phụ kiện hỗ trợ": "Apple Pencil (USB-C / Gen 1), Magic Keyboard Folio"
    }
  },
  {
    id: 7,
    name: "iPhone 18 Pro Max 256GB",
    category: "phone",
    price: 41990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-18-pro-01_2.jpg",
    description: "Thiết kế titan thế hệ mới, camera tiềm vọng nâng cấp, hiệu năng đỉnh cao.",
    specs: {
      "Màn hình": "6.9 inch Super Retina XDR ProMotion 1-120Hz",
      "Chất liệu": "Titanium Grade 5 phủ Nano chống trầy",
      "Vi xử lý": "Apple A19 Pro Bionic (tiến trình 2nm siêu tiết kiệm điện)",
      "Camera": "Bộ 3 camera 48MP Fusion, Telephoto zoom quang 10x",
      "Hệ điều hành": "iOS 19 tích hợp sâu Apple Intelligence",
      "Cổng kết nối": "USB-C chuẩn Thunderbolt 4 tốc độ 40Gbps"
    }
  },
  {
    id: 8,
    name: "iPhone Duo 256GB",
    category: "phone",
    price: 64990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-duo-01.jpg",
    description: "Điện thoại màn hình gập cao cấp đầu tiên từ Apple, công nghệ bản lề tàng hình.",
    specs: {
      "Màn hình chính": "7.8 inch Foldable OLED 120Hz không nếp gấp",
      "Màn hình ngoài": "6.3 inch Super Retina XDR Always-On",
      "Bản lề": "Bản lề kim loại lỏng thế hệ mới gập phẳng hoàn toàn",
      "Vi xử lý": "Apple A19 Pro Dual Engine tối ưu gập đa nhiệm",
      "Pin": "5400 mAh Cell kép, sạc nhanh 45W & MagSafe Duo"
    }
  },
  {
    id: 9,
    name: "Ốp lưng iPhone 18 Pro Apple Silicone With Magsafe",
    category: "accessory",
    price: 1499000,
    image: "https://tse4.mm.bing.net/th/id/OIP.qltMEseqfVUyXXQ0_hM0_QHaHa?r=0&pid=Api&h=220&P=0",
    description: "Chất liệu silicone mềm mại, nam châm MagSafe hít chắc chắn, chống sốc tốt.",
    specs: {
      "Chất liệu": "Silicone lỏng phủ Nano chống bám bẩn, lót nỉ mịn bên trong",
      "Công nghệ MagSafe": "Vòng nam châm Neodymium N52 lực hút cực mạnh",
      "Bảo vệ viền": "Gờ nhô cao bảo vệ cụm camera và màn hình",
      "Trọng lượng": "Khoảng 32g nhẹ nhàng, ôm khít thân máy"
    }
  },
  {
    id: 10,
    name: "Ốp lưng iPhone 18 Pro Max Apple With Magsafe Clear",
    category: "accessory",
    price: 1499000,
    image: "https://tse1.mm.bing.net/th/id/OIP.e6Dw3zfysYAQy5GC1Q8wXAHaHa?r=0&pid=Api&h=220&P=0",
    description: "Nhựa trong suốt chống ố vàng, khoe trọn màu máy sang trọng, hỗ trợ MagSafe.",
    specs: {
      "Chất liệu": "Polycarbonate quang học trong suốt + TPU dẻo cạnh viền",
      "Kháng ố vàng": "Lớp phủ chống tia UV ngăn ngả vàng sau thời gian dài",
      "Khả năng chống va đập": "Đạt chuẩn thả rơi quân đội MIL-STD-810H",
      "Tương thích sạc": "Hỗ trợ MagSafe và sạc không dây chuẩn Qi2"
    }
  },
  {
    id: 11,
    name: "Bàn phím iPad Pro 11 M4/M5 Apple Magic Keyboard",
    category: "gear",
    price: 8190000,
    image: "https://tse4.mm.bing.net/th/id/OIP.7IJin2pLUiYBixL9cGDOmwHaHa?r=0&pid=Api&h=220&P=0",
    description: "Thiết kế lơ lửng độc đáo, trackpad tích hợp hỗ trợ đa điểm, gõ êm ái.",
    specs: {
      "Thiết kế": "Cantilever nổi lơ lửng điều chỉnh góc nhìn mượt mà",
      "Trackpad": "Trackpad kính lớn phản hồi xúc giác Haptic Touch",
      "Hàng phím chức năng": "14 phím Function tiện lợi tùy chỉnh độ sáng, âm lượng",
      "Cổng sạc": "Cổng USB-C tích hợp sạc truyền thẳng (Passthrough charging)",
      "Chất liệu kê tay": "Nhôm nguyên khối phay xước cao cấp"
    }
  },
  {
    id: 12,
    name: "Chuột Apple Magic Mouse 3 2024 (MXK53)",
    category: "gear",
    price: 1690000,
    image: "https://tse4.mm.bing.net/th/id/OIP.X4q8XO7PY0mUKOGe8PqwVgHaHa?r=0&pid=Api&h=220&P=0",
    description: "Bề mặt cảm ứng Multi-Touch mượt mà, kết nối Bluetooth ổn định, sạc Type-C.",
    specs: {
      "Bề mặt": "Cảm ứng Multi-Touch vuốt cuộn và chuyển trang mượt",
      "Cổng sạc": "Chuẩn Type-C hiện đại",
      "Kết nối": "Bluetooth & Wireless không dây tự động ghép nối",
      "Thời lượng pin": "Dùng liên tục khoảng 1 tháng cho một lần sạc đầy",
      "Trọng lượng": "99g siêu nhẹ"
    }
  },
  {
    id: 13,
    name: "Cáp USB-C to Type-C Apple 60W dây dù 1m",
    category: "accessory",
    price: 540000,
    image: "https://tse2.mm.bing.net/th/id/OIP.rIllASnU_NvMAhHokBtqEgHaFl?r=0&pid=Api&h=220&P=0",
    description: "Dây bện dù siêu bền, hỗ trợ sạc nhanh công suất tối đa 60W và truyền dữ liệu.",
    specs: {
      "Công suất tải": "Tối đa 60W sạc nhanh Power Delivery",
      "Chất liệu vỏ": "Vải dù dệt xoắn chống rối, chống gãy gập",
      "Tốc độ truyền dữ liệu": "USB 2.0 (lên đến 480 Mbps)",
      "Độ dài dây": "1 mét tiêu chuẩn",
      "Đầu cắm": "Type-C bọc kim loại gia cố hai đầu"
    }
  },
  {
    id: 14,
    name: "Tay cầm chống rung DJI OM 7 (Osmo Mobile 7)",
    category: "accessory",
    price: 1320000,
    image: "https://tse4.mm.bing.net/th/id/OIP.VBfdjDGXLGQDSrURGTYQbAAAAA?r=0&pid=Api&h=220&P=0",
    description: "Chống rung 3 trục, thuật toán ActiveTrack 7.0 theo dõi chủ thể thông minh.",
    specs: {
      "Cơ chế ổn định": "Chống rung cơ học 3 trục chuyên sâu",
      "Tải trọng điện thoại": "170 - 290g, tương thích hầu hết smartphone hiện nay",
      "Tính năng thông minh": "ActiveTrack 7.0, DynamicZoom, Timelapse",
      "Thời lượng pin": "Lên tới 8 giờ hoạt động liên tục",
      "Ngàm gắn": "Kẹp từ tính tháo lắp nhanh chỉ trong 1 giây"
    }
  },
  {
    id: 15,
    name: "Tay cầm chống rung máy ảnh DJI Ronin-RS4 Pro",
    category: "gear",
    price: 20190000,
    image: "https://tse1.mm.bing.net/th/id/OIP.Q07EQMsZ1P7GijPPadU2mgAAAA?r=0&pid=Api&h=220&P=0",
    description: "Tải trọng lên tới 4.5kg, cánh tay trục bằng sợi carbon, khóa trục tự động thế hệ 2.",
    specs: {
      "Tải trọng tối đa": "4.5 kg",
      "Chất liệu khung": "Sợi Carbon cao cấp",
      "Thời lượng pin": "Lên đến 29 giờ (kèm grip mở rộng)",
      "Kết nối": "Bluetooth 5.1, Cổng điều khiển USB-C",
      "Trọng lượng gimbal": "Khoảng 1.24 kg",
      "Tính năng nổi bật": "Khóa trục tự động Gen 2, Động cơ Focus Pro"
    }
  },
  {
    id: 16,
    name: "Tay cầm chống rung DJI OM 8",
    category: "accessory",
    price: 2360000,
    image: "https://tse2.mm.bing.net/th/id/OIP.3vWOWFhwXA249zbqGP73CQHaHa?r=0&pid=Api&h=220&P=0",
    description: "Gậy kéo dài tích hợp, thời lượng pin 10 giờ, thiết kế gấp gọn tiện dụng.",
    specs: {
      "Gậy nối dài": "Tích hợp sẵn kéo dài 215mm cho góc quay selfie rộng",
      "Hệ thống ổn định": "Thuật toán chống rung thế hệ thứ 8",
      "Thời lượng pin": "10 giờ liên tục, hỗ trợ sạc ngược cho điện thoại",
      "Màn hình trạng thái": "Hiển thị mức pin, chế độ quay trực quan",
      "Trọng lượng": "309g gập gọn trong lòng bàn tay"
    }
  },
  {
    id: 17,
    name: "Tay cầm chống rung máy ảnh DJI Ronin RS4 mini",
    category: "gear",
    price: 5790000,
    image: "https://tse4.mm.bing.net/th/id/OIP.3agBKle1DwadBpPFplBg3QHaHa?r=0&pid=Api&h=220&P=0",
    description: "Thiết kế siêu nhẹ chỉ nặng vài lạng, hỗ trợ quay khung dọc tự nhiên không cần phụ kiện.",
    specs: {
      "Tải trọng chịu lực": "Lên tới 2.0 kg (phù hợp máy ảnh Mirrorless + ống kính)",
      "Chế độ quay dọc": "Chuyển đổi góc quay dọc 90 độ bản địa không cần plate nối",
      "Trọng lượng thân máy": "795g siêu cơ động",
      "Thời lượng pin": "10 giờ, sạc nhanh PD 2.5 giờ đầy",
      "Màn hình": "Cảm ứng màu 1.4 inch tiện lợi tinh chỉnh"
    }
  },
  {
    id: 18,
    name: "Tay cầm chống rung máy ảnh DJI Ronin-RS4 Combo",
    category: "gear",
    price: 14290000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_558_3_.png",
    description: "Phiên bản Combo đi kèm Focus Pro Motor, truyền hình ảnh mượt mà cho quay phim chuyên nghiệp.",
    specs: {
      "Tải trọng tối đa": "3.0 kg",
      "Trang bị phiên bản Combo": "Kèm Focus Pro Motor, Bánh xe lấy nét, Cáp điều khiển",
      "Khóa trục": "Tự động mở khóa và khóa trục khi bật/tắt nguồn",
      "Chất liệu": "Hợp kim nhôm siêu nhẹ và bền bỉ",
      "Thời lượng pin": "12 giờ hoạt động liên tục"
    }
  },
  {
    id: 19,
    name: "Máy chơi game MSI Claw A8 BZ2EM",
    category: "gear",
    price: 25990000,
    image: "https://tse2.mm.bing.net/th/id/OIP.J-gAfQiHrr4BjtTvkNhY1wHaHa?r=0&pid=Api&h=220&P=0",
    description: "Vi xử lý AMD Ryzen Z2 Extreme, 24GB RAM LPDDR5x 8000MHz, màn hình sắc nét.",
    specs: {
      "Vi xử lý": "AMD Ryzen Z2 Extreme (8 nhân 16 luồng)",
      "RAM & Ổ cứng": "24GB LPDDR5x 8000MHz | 1TB SSD NVMe PCIe 4.0",
      "Màn hình": "7 inch Full HD (1920x1080), 120Hz IPS, 500 nits, cảm ứng",
      "Cần gạt & Cò": "Hall Effect chống trôi tuyệt đối",
      "Hệ thống tản nhiệt": "Cooler Boost HyperFlow 2 quạt thổi mát",
      "Hệ điều hành": "Windows 11 Home bản quyền"
    }
  },
  {
    id: 20,
    name: "Máy chơi game MSI Claw 8 AI+ A2VM",
    category: "gear",
    price: 33990000,
    image: "https://tse3.mm.bing.net/th/id/OIP.MjPb84JN8eJow5sYd6WuYQHaFR?r=0&pid=Api&h=220&P=0",
    description: "Chip Intel Core Ultra 7 258V tích hợp NPU AI, RAM 32GB, tản nhiệt Cooler Boost HyperFlow.",
    specs: {
      "Vi xử lý": "Intel Core Ultra 7 258V tích hợp NPU AI 47 TOPS",
      "Đồ họa": "Intel Arc Graphics 140V hiệu năng đồ họa ấn tượng",
      "RAM & Ổ cứng": "32GB LPDDR5X on-package | 1TB SSD M.2 2280",
      "Màn hình": "8 inch 120Hz VRR độ phân giải sắc nét",
      "Dung lượng pin": "80Whr lớn nhất trong phân khúc máy cầm tay",
      "Cổng kết nối": "2 x Thunderbolt 4 Type-C"
    }
  },
  {
    id: 21,
    name: "Tai nghe chụp tai Gaming Sony Inzone H3",
    category: "gear",
    price: 1090000,
    image: "https://tse2.mm.bing.net/th/id/OIP.Whv4nptA9nm2dAKDFrx7mAHaHa?r=0&pid=Api&h=220&P=0",
    description: "Công nghệ không gian 360 Spatial Sound cho game thủ, driver 40mm, đệm tai thoáng khí.",
    specs: {
      "Âm thanh": "360 Spatial Sound định vị tiếng bước chân chuẩn xác",
      "Driver": "40mm Dynamic dome màng loa độ nhạy cao",
      "Microphone": "Boom mic dạng gập định hướng âm, gạt lên để tắt tiếng",
      "Đệm tai": "Vải Nylon êm ái thoáng khí, không gây nóng tai",
      "Kết nối": "Dây 3.5mm kèm hộp chuyển đổi âm thanh USB"
    }
  },
  {
    id: 22,
    name: "Máy cầm tay chơi game ROG Xbox Ally",
    category: "gear",
    price: 14690000,
    image: "https://tse1.mm.bing.net/th/id/OIP.hkubuZZOAEK-gYfa4PBsAAHaHa?r=0&pid=Api&h=220&P=0",
    description: "Thiết kế công thái học cao cấp, tích hợp hệ sinh thái Xbox mượt mà, màn hình 120Hz.",
    specs: {
      "Vi xử lý": "AMD Ryzen Z1 Extreme kiến trúc Zen 4 & RDNA 3",
      "Màn hình": "7 inch FHD 120Hz, FreeSync Premium, 500 nits kính Gorilla Glass",
      "RAM & Bộ nhớ": "16GB LPDDR5 | 512GB PCIe 4.0 NVMe SSD",
      "Âm thanh": "Loa kép Dolby Atmos khuếch đại thông minh Smart Amp",
      "Hệ điều hành": "Windows 11 tích hợp sẵn Xbox Game Pass"
    }
  },
  {
    id: 23,
    name: "Máy chơi game Sony Playstation 5 Slim ASIA",
    category: "gear",
    price: 18590000,
    image: "https://tse1.mm.bing.net/th/id/OIP.RraBHBuc11OcRrOmjTNMvwHaEI?r=0&pid=Api&h=220&P=0",
    description: "Thiết kế mỏng nhẹ hơn 30%, ổ cứng 1TB SSD tốc độ cực cao, hỗ trợ Ray Tracing chân thực.",
    specs: {
      "Vi xử lý": "AMD Zen 2 8 nhân 16 luồng xung nhịp 3.5GHz",
      "GPU": "Kiến trúc RDNA 2 hỗ trợ Ray Tracing phần cứng, 10.3 TFLOPS",
      "Ổ cứng": "1TB SSD siêu tốc độ (5.5 GB/s load game tức thì)",
      "Độ phân giải": "Hỗ trợ 4K 120Hz và hiển thị hình ảnh 8K HDR",
      "Tay cầm kèm theo": "DualSense không dây phản hồi xúc giác Haptic Feedback"
    }
  },
  {
    id: 24,
    name: "Máy tính bảng iPad A16 WiFi 128GB",
    category: "phone",
    price: 12090000,
    image: "https://tse1.mm.bing.net/th/id/OIP.min_JvCH_hG-cOXzLfrCZQHaEI?r=0&pid=Api&h=220&P=0",
    description: "Chip A16 Bionic siêu nhanh, màn hình Liquid Retina hỗ trợ quay video 4K/120fps.",
    specs: {
      "Màn hình": "10.9 inch Liquid Retina, độ phân giải 2360x1640 pixels",
      "Vi xử lý": "Apple A16 Bionic 5 lõi đồ họa",
      "RAM & Bộ nhớ": "6GB RAM | 128GB lưu trữ",
      "Camera": "12MP trước góc siêu rộng, 12MP sau quay 4K 60fps",
      "Kết nối": "Wi-Fi 6E băng tần kép, Bluetooth 5.3, cổng USB-C"
    }
  },
  {
    id: 25,
    name: "Honor Pad X7 WiFi 4GB 128GB",
    category: "phone",
    price: 3590000,
    image: "https://tse2.mm.bing.net/th/id/OIP.rAJtqSL4YlnHVBtI9z3UTwHaEZ?r=0&pid=Api&h=220&P=0",
    description: "Pin 7020 mAh, Snapdragon 680 ổn định, màn hình bảo vệ mắt đạt chứng nhận TÜV Rheinland.",
    specs: {
      "Màn hình": "10.1 inch IPS LCD độ phân giải HD+ bảo vệ mắt",
      "Vi xử lý": "Snapdragon 680 8 nhân tiết kiệm năng lượng",
      "RAM & Bộ nhớ": "4GB RAM (+3GB RAM ảo) | 128GB (hỗ trợ thẻ nhớ 512GB)",
      "Dung lượng pin": "7020 mAh xem video học tập cả ngày dài",
      "Âm thanh": "Hệ thống loa kép âm thanh nổi vòm Histen"
    }
  },
  {
    id: 26,
    name: "Honor Pad X9a WiFi 6GB 128GB - Kèm bao da bàn phím",
    category: "phone",
    price: 6990000,
    image: "https://tse1.mm.bing.net/th/id/OIP.riLBgFhx1Md-W_txSJf36wHaHa?r=0&pid=Api&h=220&P=0",
    description: "Màn hình 11.5 inch 120Hz độ phân giải 2.5K, pin 8300 mAh, tặng kèm phụ kiện bàn phím tiện lợi.",
    specs: {
      "Màn hình": "11.5 inch 2.5K (2000x1200) tần số quét cao 120Hz",
      "Vi xử lý": "Qualcomm Snapdragon 6 Gen 1 (4nm)",
      "RAM & Bộ nhớ": "6GB RAM | 128GB ROM",
      "Hệ thống âm thanh": "6 loa vòm vây quanh chứng nhận Hi-Res Audio",
      "Pin & Sạc": "8300 mAh, sạc nhanh 35W SuperCharge",
      "Phụ kiện tặng kèm": "Bao da kiêm bàn phím Bluetooth chính hãng"
    }
  },
  {
    id: 27,
    name: "Samsung Galaxy Tab S10 Lite WiFi 6GB 128GB",
    category: "phone",
    price: 8390000,
    image: "https://tse4.mm.bing.net/th/id/OIP.ZkRJHvw6P8Aw2rztWcS4QQHaHa?r=0&pid=Api&h=220&P=0",
    description: "Chip Exynos 1380, pin 8000 mAh, bộ công cụ Galaxy AI thông minh hỗ trợ học tập và vẽ vời.",
    specs: {
      "Màn hình": "10.9 inch TFT WQXGA sắc nét, viền mỏng",
      "Vi xử lý": "Samsung Exynos 1380 8 nhân xử lý mượt mà",
      "Bút cảm ứng": "Kèm sẵn bút S-Pen không cần sạc pin, độ trễ thấp",
      "Tính năng AI": "Galaxy AI: Trợ lý ghi chú, khoanh tròn để tìm kiếm",
      "Pin & Kháng nước": "8000 mAh sạc nhanh 45W, chống nước chuẩn IP68"
    }
  },
  {
    id: 28,
    name: "iPad Pro 11 M5 2025 WiFi 12GB 256GB",
    category: "phone",
    price: 33990000,
    image: "https://tse3.mm.bing.net/th/id/OIP.zxFUFUQxy2p-O8sRtoEF4gAAAA?r=0&pid=Api&h=220&P=0",
    description: "Chip M5 AI siêu tốc, màn hình Ultra Retina XDR siêu mỏng 5.3mm sắc sảo.",
    specs: {
      "Màn hình": "11 inch Ultra Retina XDR Tandem OLED 1000 nits, 120Hz ProMotion",
      "Độ mỏng thân máy": "5.3mm siêu mỏng nhẹ, vỏ nhôm tái chế",
      "Vi xử lý": "Apple M5 với bộ tăng tốc đồ họa Ray Tracing và AI NPU",
      "RAM & Bộ nhớ": "12GB RAM thống nhất | 256GB SSD siêu tốc",
      "Camera & Cảm biến": "12MP Wide, cảm biến LiDAR Scanner đo chiều sâu 3D",
      "Cổng sạc & truyền": "Thunderbolt / USB 4 lên tới 40Gb/s"
    }
  },
  {
    id: 29,
    name: "Xiaomi POCO C81 Pro 4GB 128GB",
    category: "phone",
    price: 3890000,
    image: "https://tse4.mm.bing.net/th/id/OIP.pPb1DE8nq3R1F6TytNeIrwHaHa?r=0&pid=Api&h=220&P=0",
    description: "Màn hình 6.9 inch tần số quét 120Hz, pin khủng 6000 mAh hỗ trợ sạc nhanh 33W.",
    specs: {
      "Màn hình": "6.88 inch IPS LCD 120Hz mượt mà, độ sáng 600 nits",
      "Vi xử lý": "Helio G91-Ultra ổn định cho các tác vụ thường ngày",
      "RAM & Lưu trữ": "4GB RAM (mở rộng thêm 4GB) | 128GB ROM",
      "Camera chính": "50MP AI chụp rõ nét ban đêm",
      "Dung lượng pin": "6000 mAh cực trâu, sạc nhanh Type-C 33W"
    }
  },
  {
    id: 30,
    name: "Xiaomi Poco M8 Pro 5G 8GB 256GB",
    category: "phone",
    price: 8490000,
    image: "https://tse2.mm.bing.net/th/id/OIP.OtElxhaEoDsr9tMQM7So5wHaIj?r=0&pid=Api&h=220&P=0",
    description: "Snapdragon 7s Gen 4 mạnh mẽ, pin 6500 mAh, chuẩn kháng nước bụi siêu bền IP69k.",
    specs: {
      "Màn hình": "6.67 inch AMOLED CrystalRes 1.5K 120Hz, HDR10+",
      "Vi xử lý": "Qualcomm Snapdragon 7s Gen 4 hỗ trợ 5G đa băng tần",
      "RAM & Bộ nhớ": "8GB LPDDR5X | 256GB UFS 3.1",
      "Độ bền & Kháng nước": "Kính cường lực Gorilla Glass Victus 2, kháng nước IP68/IP69K",
      "Pin & Sạc nhanh": "6500 mAh công nghệ pin Silicon-Carbon, sạc siêu tốc 67W"
    }
    
  },
  {
    id: 31,
    name: "Đồng hồ thông minh Huawei Watch GT 5 Pro 46mm dây cao su",
    category: "gear",
    price: 4090000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/m/smart_band_6_1.jpg",
    description: "Khung hợp kim titan siêu nhẹ, mặt kính Sapphire cao cấp, pin bền bỉ đến 14 ngày kèm khả năng đàm thoại rõ nét.",
    specs: {
      "Kích thước mặt": "46 mm - Khung viền Hợp kim Titan & Kính Sapphire",
      "Màn hình": "1.43 inch AMOLED sắc nét, độ phân giải 466 x 466 pixels",
      "Thời lượng pin": "Lên đến 14 ngày (sử dụng thông thường), sạc không dây",
      "Tính năng sức khỏe": "Cảm biến TruSense, đo điện tâm đồ ECG, đo nhịp tim & SpO2",
      "Tiện ích": "Nghe gọi qua Bluetooth, kháng nước chuẩn 5 ATM & lặn tự do 40m"
    }
  },
  {
    id: 32,
    name: "Đồng hồ định vị trẻ em myALO K64t",
    category: "accessory",
    price: 990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/_/n/_nh_v_tr_em_1_6_1.png",
    description: "Hỗ trợ lắp Nano SIM 4G, định vị GPS đa tầng, gọi video call sắc nét và nút gọi khẩn cấp SOS bảo vệ trẻ em.",
    specs: {
      "Màn hình": "1.3 inch cảm ứng màu chống lóa, viền gờ bảo vệ chống va đập",
      "Kết nối di động": "Hỗ trợ Nano SIM chuẩn 4G tốc độ cao",
      "Công nghệ định vị": "Định vị đa chế độ GPS / LBS / Wi-Fi siêu chính xác",
      "Tính năng liên lạc": "Gọi thoại 2 chiều, Video Call chất lượng cao, gửi tin nhắn thoại",
      "An toàn & Pin": "Nút khẩn cấp SOS, chuẩn kháng nước IP67, pin dùng đến 3 ngày"
    }
  },
  {
    id: 33,
    name: "Đồng hồ thông minh Samsung Galaxy Watch8 44mm",
    category: "gear",
    price: 3990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/sansung_2_1_1_1_1.png",
    description: "Theo dõi chỉ số sức khỏe toàn diện với cảm biến BioActive, đo huyết áp, ECG và pin tối ưu đến 40 giờ.",
    specs: {
      "Kích thước mặt": "44 mm - Khung nhôm Armor Aluminum bền bỉ",
      "Màn hình": "Super AMOLED độ sáng cao, kính cường lực Sapphire chống trầy",
      "Hệ điều hành": "Wear OS tích hợp sâu giao diện One UI Watch",
      "Cảm biến sức khỏe": "BioActive: Đo nhịp tim, điện tâm đồ ECG, phân tích thành phần cơ thể BIA",
      "Thời lượng pin": "Khoảng 40 giờ hoạt động liên tục, sạc nhanh không dây"
    }
  },
  {
    id: 34,
    name: "Đồng hồ thông minh Xiaomi Redmi Watch 4",
    category: "gear",
    price: 890000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_25__1_9_1_1_2_1.png",
    description: "Màn hình AMOLED 1.97 inch siêu lớn, viền kim loại núm xoay tinh tế, pin trâu lên tới 20 ngày sử dụng.",
    specs: {
      "Màn hình": "1.97 inch AMOLED LTPS 60Hz, độ sáng tối đa 600 nits",
      "Khung viền": "Hợp kim nhôm cứng cáp kèm núm xoay kim loại tiện lợi",
      "Thời lượng pin": "Pin 470 mAh dùng lên tới 20 ngày (ở chế độ cơ bản)",
      "Đàm thoại": "Tích hợp micro và loa đàm thoại Bluetooth rõ ràng",
      "Chế độ tập luyện": "Hơn 150 môn thể thao, GPS vệ tinh độc lập"
    }
  },
  {
    id: 35,
    name: "Đồng hồ thông minh Samsung Galaxy Watch Ultra LTE 47mm",
    category: "gear",
    price: 7890000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_565_4__1_1_1.png",
    description: "Phiên bản Ultra thiết kế Titanium chuẩn quân đội, tích hợp eSIM nghe gọi độc lập và thời lượng pin khủng 100 giờ.",
    specs: {
      "Kích thước & Chất liệu": "47 mm - Thân vỏ Titanium cấp hàng không, kính Sapphire",
      "Màn hình": "1.5 inch Super AMOLED, độ sáng cực đại 3000 nits hiển thị ngoài trời",
      "Kết nối di động": "Tích hợp eSIM 4G LTE nghe gọi độc lập không cần điện thoại",
      "Độ bền & Kháng nước": "Chuẩn 10 ATM / IP68, chứng nhận quân đội MIL-STD-810H",
      "Pin": "Pin 590 mAh, chế độ tiết kiệm năng lượng lên tới 100 giờ"
    }
  },
  {
    id: 36,
    name: "Đồng hồ thông minh Samsung Galaxy Watch Ultra LTE 47mm",
    category: "gear",
    price: 7190000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_565_4__1_1_1_2.png",
    description: "Dòng đồng hồ thông minh dã ngoại chuyên nghiệp, hỗ trợ còi báo động khẩn cấp 86dB và GPS băng tần kép.",
    specs: {
      "Kích thước mặt": "47 mm - Thiết kế Cushion sang trọng, khung viền Titanium",
      "Định vị": "GPS tần số kép L1 + L5 định vị chuẩn xác cả trong rừng sâu",
      "Tính năng cảnh báo": "Còi cứu hộ khẩn cấp Siren âm lượng lên tới 86 decibel",
      "Sức khỏe AI": "Điểm số năng lượng Energy Score, phân tích giấc ngủ chuyên sâu",
      "Khả năng chịu nhiệt": "Hoạt động bền bỉ từ -20°C đến 55°C"
    }
  },
  {
    id: 37,
    name: "Đồng hồ thông minh Huawei Watch GT 5 Pro 42mm Dây cao su",
    category: "gear",
    price: 3690000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/m/smart_band_8__4.png",
    description: "Phiên bản thiết kế gốm tinh thể trắng thanh lịch, viền vát cạnh trang nhã cùng thời lượng pin 7 ngày.",
    specs: {
      "Kích thước mặt": "42 mm - Thiết kế Gốm Nanocrystal trắng kết hợp viền vát vàng kim",
      "Màn hình": "1.32 inch AMOLED sắc nét, kính bảo vệ Sapphire",
      "Thời lượng pin": "Dùng liên tục 7 ngày (tối đa) hoặc 5 ngày dùng thường",
      "Tính năng chuyên sâu": "Chế độ Sân Golf với hơn 15.000 bản đồ sân toàn cầu, ECG",
      "Tương thích": "Kết nối mượt mà với cả điện thoại Android và iOS"
    }
  },
  {
    id: 38,
    name: "Đồng hồ thông minh Samsung Galaxy Watch8 44mm",
    category: "gear",
    price: 4390000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/sansung_2_1_1_1.png",
    description: "Ngoại hình đẹp như mới, hỗ trợ đầy đủ các tính năng chăm sóc sức khỏe, theo dõi giấc ngủ và nghe gọi rõ ràng.",
    specs: {
      "Kích thước mặt": "44 mm - Mặt kính Sapphire phẳng cao cấp",
      "Màn hình": "Super AMOLED rực rỡ, tính năng Always-on Display",
      "Hệ thống đo lường": "Cảm biến nhịp tim quang học, cảm biến huyết áp, nồng độ oxy trong máu",
      "Kết nối": "Bluetooth 5.3, Wi-Fi băng tần kép, NFC thanh toán",
      "Kháng nước": "Chuẩn chống nước 5 ATM chuẩn bơi lội"
    }
  },
  {
    id: 39,
    name: "Vòng đeo tay thông minh Xiaomi Mi Band 9",
    category: "accessory",
    price: 590000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/v/o/vong-deo-tay-thong-minh-xiaomi-mi-band-9_2__1_1_1_1.png",
    description: "Màn hình AMOLED 60Hz độ sáng 1200 nits vượt trội, thiết kế khung kim loại sang trọng, pin dùng tới 21 ngày.",
    specs: {
      "Màn hình": "1.62 inch AMOLED 60Hz, độ sáng cực đại 1200 nits tự động điều chỉnh",
      "Khung viền": "Khung hợp kim mờ hoàn thiện tinh xảo, tháo lắp dây đeo nhanh",
      "Thời lượng pin": "Sử dụng lên đến 21 ngày sau một lần sạc đầy",
      "Tính năng luyện tập": "Hơn 150 chế độ thể thao, kháng nước 5 ATM",
      "Cảm biến": "Theo dõi SpO2 liên tục cả ngày, đo mức độ stress & nhịp tim"
    }
  },
  {
    id: 40,
    name: "Đồng hồ định vị trẻ em Wonlex CT24",
    category: "accessory",
    price: 690000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/_/n/_nh_v_tr_em_1__1_8_1_1_1.png",
    description: "Trang bị chip xử lý định vị nhanh, hỗ trợ mạng 4G Video Call, loa to rõ ràng và pin 600mAh dùng bền bỉ 72 giờ.",
    specs: {
      "Màn hình": "1.52 inch IPS độ phân giải 240 x 280 pixels, màu sắc tươi sáng",
      "Vi xử lý": "Chipset ASR3603C kết nối mạng 4G ổn định",
      "Công nghệ định vị": "Định vị vệ tinh GPS kết hợp LBS trạm phát sóng",
      "Dung lượng pin": "Pin Lithium 600 mAh cho thời gian hoạt động lên tới 72 giờ",
      "Tiện ích": "Nghe gọi 2 chiều, gọi Video call, chế độ lớp học không làm phiền"
    }
  },
  {
    id: 41,
    name: "Laptop MSI Cyborg 15 A13UC-2082VN",
    category: "gear",
    price: 30690000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_7_126.png",
    description: "Thiết kế cyberpunk vỏ bán trong suốt độc đáo, chip Core i7 Gen 13 và card đồ họa RTX 3050 chiến mượt mọi tựa game.",
    specs: {
      "Bộ vi xử lý": "Intel Core i7-13620H (10 nhân 16 luồng, turbo 4.9GHz)",
      "Card đồ họa": "NVIDIA GeForce RTX 3050 6GB GDDR6",
      "Bộ nhớ RAM": "16GB DDR5 5200MHz (Hỗ trợ nâng cấp tối đa 64GB)",
      "Ổ cứng lưu trữ": "512GB SSD NVMe PCIe Gen 4",
      "Màn hình": "15.6 inch Full HD (1920x1080), 144Hz IPS-level chống chói",
      "Trọng lượng & Pin": "1.98 kg - Pin 3-cell 53.5Whr"
    }
  },
  {
    id: 42,
    name: "Laptop ASUS TUF Gaming F16 FX607VJ-RL034W",
    category: "gear",
    price: 22990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_7_36.png",
    description: "Độ bền đạt chuẩn quân đội Mỹ MIL-STD-810H, màn hình 16 inch tỷ lệ 16:10 rộng rãi, hiệu năng Core 5 mới mẻ.",
    specs: {
      "Bộ vi xử lý": "Intel Core 5-210H thế hệ mới",
      "Card đồ họa": "NVIDIA GeForce RTX 3050 6GB GDDR6",
      "Bộ nhớ RAM": "16GB DDR5 tốc độ cao",
      "Ổ cứng lưu trữ": "512GB SSD PCIe NVMe M.2",
      "Màn hình": "16.0 inch WUXGA (1920x1200), 165Hz, IPS 100% sRGB",
      "Tản nhiệt": "Hệ thống quạt Arc Flow kép với 4 khe thoát nhiệt"
    }
  },
  {
    id: 43,
    name: "Laptop Acer Gaming Nitro ProPanel ANV15-52-50VA",
    category: "gear",
    price: 29990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_975_17.png",
    description: "Dòng Nitro thế hệ mới với màn hình ProPanel siêu mượt, quạt kép làm mát tối ưu cho game thủ cày cuốc.",
    specs: {
      "Bộ vi xử lý": "Intel Core 5-210H xung nhịp cao",
      "Card đồ họa": "NVIDIA GeForce RTX 3050 6GB GDDR6",
      "Bộ nhớ RAM": "16GB DDR5 5600MHz",
      "Ổ cứng lưu trữ": "512GB SSD M.2 PCIe Gen 4",
      "Màn hình": "15.6 inch Full HD, IPS 144Hz tần số quét cao",
      "Âm thanh": "DTS:X Ultra Audio tái tạo âm thanh vòm sống động"
    }
  },
  {
    id: 44,
    name: "Laptop HP Victus 15-FA2451TX D17WPPA",
    category: "gear",
    price: 30490000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_8_50.png",
    description: "Sức mạnh vượt trội từ GPU RTX 4050 kiến trúc Ada Lovelace, ngoại hình lịch lãm thanh lịch phù hợp cả học tập và gaming.",
    specs: {
      "Bộ vi xử lý": "Intel Core i5-13420H (8 nhân 12 luồng)",
      "Card đồ họa": "NVIDIA GeForce RTX 4050 6GB GDDR6 (DLSS 3)",
      "Bộ nhớ RAM": "16GB DDR4 3200MHz",
      "Ổ cứng lưu trữ": "512GB SSD PCIe NVMe",
      "Màn hình": "15.6 inch Full HD IPS 144Hz viền siêu mỏng",
      "Phần mềm hỗ trợ": "OMEN Gaming Hub điều chỉnh hiệu năng và quạt gió"
    }
  },
  {
    id: 45,
    name: "Laptop MSI Katana 15 B13VEK-2440VN",
    category: "gear",
    price: 34990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_1__4_62.png",
    description: "Vũ khí gaming tối thượng với ổ cứng khủng 1TB SSD, bàn phím RGB 4 vùng và card đồ họa thế hệ RTX 40 Series.",
    specs: {
      "Bộ vi xử lý": "Intel Core i7-13620H (10 nhân 16 luồng)",
      "Card đồ họa": "NVIDIA GeForce RTX 4050 6GB GDDR6",
      "Bộ nhớ RAM": "16GB DDR5 5200MHz",
      "Ổ cứng lưu trữ": "1TB SSD NVMe PCIe Gen 4x4",
      "Màn hình": "15.6 inch Full HD IPS 144Hz",
      "Bàn phím": "Gaming Keyboard RGB 4-Zone kèm cụm phím WASD nổi bật"
    }
  },
  {
    id: 46,
    name: "Laptop Acer Gaming Aspire 7 A715-59G-59RD",
    category: "gear",
    price: 25990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_1042.png",
    description: "Laptop gaming quốc dân phân khúc dưới 30 triệu, tản nhiệt 2 quạt 3 ống đồng mát mẻ, thiết kế vỏ nhôm cao cấp.",
    specs: {
      "Bộ vi xử lý": "Intel Core 5-210H thế hệ mới",
      "Card đồ họa": "NVIDIA GeForce RTX 3050 6GB GDDR6",
      "Bộ nhớ RAM": "16GB DDR4 3200MHz",
      "Ổ cứng lưu trữ": "512GB SSD PCIe Gen 4",
      "Màn hình": "15.6 inch Full HD IPS 144Hz SlimBezel",
      "Bản lề": "Góc mở rộng 180 độ linh hoạt chia sẻ góc nhìn"
    }
  },
  {
    id: 47,
    name: "Laptop Lenovo Legion 5 15IRX10 83LY00HRVN",
    category: "gear",
    price: 48990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_902_1.png",
    description: "Dòng Legion cao cấp trang bị vi xử lý HX cực mạnh và GPU RTX 5050 thế hệ tương lai, màn hình chuẩn đồ họa 100% sRGB.",
    specs: {
      "Bộ vi xử lý": "Intel Core i7-13650HX (14 nhân 20 luồng)",
      "Card đồ họa": "NVIDIA GeForce RTX 5050 8GB GDDR7 thế hệ mới",
      "Bộ nhớ RAM": "16GB DDR5 5600MHz",
      "Ổ cứng lưu trữ": "512GB SSD NVMe M.2 2280",
      "Màn hình": "15.3 inch WUXGA 165Hz IPS, 100% sRGB, Dolby Vision",
      "Tản nhiệt": "Legion Coldfront 5.0 buồng hơi làm mát cấp tốc"
    }
  },
  {
    id: 48,
    name: "Laptop HP Victus 15-FA2731TX B85LNPA",
    category: "gear",
    price: 27990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_7_78.png",
    description: "Phiên bản Victus cân bằng hoàn hảo giữa học tập kỹ thuật, lập trình và giải trí thể thao điện tử.",
    specs: {
      "Bộ vi xử lý": "Intel Core i5-13420H (8 nhân 12 luồng)",
      "Card đồ họa": "NVIDIA GeForce RTX 3050 6GB GDDR6",
      "Bộ nhớ RAM": "16GB DDR4 3200MHz",
      "Ổ cứng lưu trữ": "512GB SSD NVMe PCIe",
      "Màn hình": "15.6 inch Full HD 144Hz IPS chống chói",
      "Cổng kết nối": "1x USB Type-C, 2x USB Type-A, 1x HDMI 2.1, cổng mạng LAN RJ45"
    }
  },
  {
    id: 49,
    name: "Laptop ASUS TUF Gaming A15 FA506NCG-HN329W",
    category: "gear",
    price: 28990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_9_14.png",
    description: "Sức mạnh từ chip AMD Ryzen 7 dòng 8000 Series tích hợp nhân xử lý AI, bền bỉ và tiết kiệm điện năng.",
    specs: {
      "Bộ vi xử lý": "AMD Ryzen 7 8845HS (8 nhân 16 luồng, NPU AI Ryzen AI)",
      "Card đồ họa": "NVIDIA GeForce RTX 3050 4GB/6GB GDDR6",
      "Bộ nhớ RAM": "16GB DDR5 5600MHz",
      "Ổ cứng lưu trữ": "512GB SSD NVMe PCIe Gen 4",
      "Màn hình": "15.6 inch Full HD 144Hz Adaptive-Sync chống xé hình",
      "Bàn phím": "Bàn phím cơ hành trình sâu, đèn nền RGB đồng bộ Aura Sync"
    }
  },
  {
    id: 50,
    name: "Laptop ASUS TUF Gaming A15 FA506NCG-HN396W",
    category: "gear",
    price: 25990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_11_19.png",
    description: "Cấu hình chuẩn phổ thông cho sinh viên IT & game thủ esport, giá cực hời trong phân khúc dưới 26 triệu.",
    specs: {
      "Bộ vi xử lý": "AMD Ryzen 7-155 (8 nhân 16 luồng)",
      "Card đồ họa": "NVIDIA GeForce RTX 3050 GDDR6",
      "Bộ nhớ RAM": "8GB DDR5 (hỗ trợ nâng cấp thêm 1 khe trống)",
      "Ổ cứng lưu trữ": "512GB SSD PCIe NVMe M.2",
      "Màn hình": "15.6 inch Full HD IPS 144Hz góc nhìn rộng 178°",
      "Độ bền": "Khung vỏ kim loại chịu va đập theo tiêu chuẩn quân sự"
    }
  },
  {
    id: 51,
    name: "Laptop Lenovo LOQ 15IRH11E 83Y9003VVN",
    category: "gear",
    price: 24990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_1__4_87.png",
    description: "Dòng LOQ thế hệ mới màn hình tỷ lệ 16:10 WUXGA nét căng, chip Core 5 đa nhân tối ưu xử lý đa nhiệm.",
    specs: {
      "Bộ vi xử lý": "Intel Core 5-205H hiệu năng cao",
      "Card đồ họa": "NVIDIA GeForce RTX 3050 6GB GDDR6",
      "Bộ nhớ RAM": "8GB DDR5 5200MHz",
      "Ổ cứng lưu trữ": "512GB SSD M.2 PCIe Gen 4",
      "Màn hình": "15.3 inch WUXGA (1920x1200) 144Hz, 100% sRGB, G-SYNC",
      "Bàn phím": "Công nghệ TrueStrike gõ êm, hành trình phím 1.5mm"
    }
  },
  {
    id: 52,
    name: "Laptop Gigabyte Gaming A16 GA6H-CMHH2VN893SH",
    category: "gear",
    price: 27990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_7_29.png",
    description: "Màn hình 16 inch Full HD+ viền mỏng ấn tượng kết hợp card RTX 4050 chiến mượt các game AAA ở độ phân giải cao.",
    specs: {
      "Bộ vi xử lý": "Intel Core i5-13420H (8 nhân 12 luồng)",
      "Card đồ họa": "NVIDIA GeForce RTX 4050 6GB GDDR6 Max TGP",
      "Bộ nhớ RAM": "16GB DDR5 4800MHz",
      "Ổ cứng lưu trữ": "512GB SSD NVMe PCIe M.2",
      "Màn hình": "16.0 inch Full HD+ (1920x1200), IPS 165Hz mượt mà",
      "Tản nhiệt": "Windforce Cooling 2 quạt 5 ống đồng tản nhiệt độc lập"
    }
  },
  {
    id: 53,
    name: "Laptop Acer Gaming Aspire 7 A715-59G-57TU",
    category: "gear",
    price: 22490000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_1__4_8.png",
    description: "Phiên bản quốc dân với chip Core i5 dòng H kết hợp RTX 3050, đáp ứng trọn vẹn nhu cầu render đồ họa và chơi game.",
    specs: {
      "Bộ vi xử lý": "Intel Core i5-12450H (8 nhân 12 luồng, turbo 4.4GHz)",
      "Card đồ họa": "NVIDIA GeForce RTX 3050 4GB/6GB GDDR6",
      "Bộ nhớ RAM": "16GB DDR4 3200MHz",
      "Ổ cứng lưu trữ": "512GB SSD PCIe NVMe",
      "Màn hình": "15.6 inch Full HD IPS 144Hz viền siêu mỏng",
      "Kết nối": "Wi-Fi 6 AX201, Bluetooth 5.2, Thunderbolt 4 Type-C"
    }
  },
  {
    id: 54,
    name: "Laptop Lenovo LOQ 15ARP10E 83S000DEVN",
    category: "gear",
    price: 26490000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_8_51.png",
    description: "Bộ khung tản nhiệt buồng kín chống bụi, sức mạnh từ vi xử lý Ryzen 7 thế hệ mới cân mọi tác vụ nặng.",
    specs: {
      "Bộ vi xử lý": "AMD Ryzen 7-170 (8 nhân 16 luồng)",
      "Card đồ họa": "NVIDIA GeForce RTX 3050 6GB GDDR6",
      "Bộ nhớ RAM": "16GB DDR5 5600MHz",
      "Ổ cứng lưu trữ": "512GB SSD PCIe Gen 4",
      "Màn hình": "15.6 inch Full HD IPS 144Hz, 100% sRGB màu sắc chuẩn xác",
      "Công nghệ quản lý": "Lenovo AI Engine+ với chip LA1 tối ưu khung hình tự động"
    }
  },
  {
    id: 55,
    name: "MacBook Pro 14 M5 10CPU 10GPU 16GB 1TB",
    category: "phone",
    price: 52990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_1__7_5.png",
    description: "Siêu phẩm sáng tạo nội dung và lập trình chuyên nghiệp, chip Apple M5 thế hệ mới kèm màn hình Liquid Retina XDR đỉnh cao.",
    specs: {
      "Bộ vi xử lý": "Apple M5 10 nhân CPU (4 nhân hiệu năng + 6 nhân tiết kiệm điện)",
      "Đồ họa": "10 nhân GPU hỗ trợ Ray Tracing phần cứng thế hệ mới",
      "Bộ nhớ RAM": "16GB Unified Memory (Bộ nhớ RAM thống nhất)",
      "Ổ cứng lưu trữ": "1TB SSD siêu tốc độ đọc ghi",
      "Màn hình": "14.2 inch Liquid Retina XDR (3024x1964), ProMotion 120Hz, 1600 nits",
      "Thời lượng pin": "Lên đến 22 giờ sử dụng liên tục, sạc MagSafe 3"
    }
  },
  {
    id: 56,
    name: "Pin sạc dự phòng Anker A1695 25.000mAh 165W tích hợp cáp sạc",
    category: "accessory",
    price: 1450000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_511_5_.png",
    description: "Công suất khủng 165W sạc mượt laptop và điện thoại, tích hợp cáp Type-C tiện lợi và màn hình kỹ thuật số hiển thị thông số sạc.",
    specs: {
      "Dung lượng pin": "25.000 mAh (Chuẩn hàng không cho phép mang lên máy bay)",
      "Tổng công suất ra": "Tối đa 165W chuẩn sạc nhanh Power Delivery 3.1",
      "Cổng kết nối": "1x Type-C, 1x USB-A kèm 1 dây cáp sạc Type-C liền thân",
      "Màn hình thông minh": "Màn hình kỹ thuật số hiển thị dung lượng pin và công suất W thực tế",
      "Công nghệ sạc": "ActiveShield 2.0 kiểm soát nhiệt độ thông minh"
    }
  },
  {
    id: 57,
    name: "Pin sạc dự phòng Ugreen không dây Magnetic PB561 10.000mAh 20W",
    category: "accessory",
    price: 690000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/p/i/pin-sac-du-phong-khong-day-ugreen-magnetic-pb561-10-000mah-20w.png",
    description: "Hít từ tính MagSafe tiện dụng, dung lượng 10.000mAh nhỏ gọn, hỗ trợ sạc nhanh có dây 20W cho iPhone và Android.",
    specs: {
      "Dung lượng pin": "10.000 mAh lõi pin Polymer an toàn",
      "Sạc không dây": "Chuẩn MagSafe từ tính hít chặt lực hút 10N",
      "Công suất có dây": "Tối đa 20W qua cổng Type-C",
      "Thiết kế": "Lớp vỏ phủ silicone chống trơn trượt, mỏng nhẹ bỏ túi",
      "Bảo vệ": "Chống đoản mạch, kiểm soát nhiệt độ, bảo vệ quá dòng"
    }
  },
  {
    id: 58,
    name: "Pin sạc dự phòng Anker Nano Maggo Ultra Slim A1665 Qi2 5.000mAh",
    category: "accessory",
    price: 1290000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/p/i/pin-sac-du-phong-anker-nano-maggo-ultra-slim-qi2-5000mah-a1665_1_.png",
    description: "Thiết kế Ultra Slim siêu mỏng ôm sát mặt lưng máy, đạt chứng nhận sạc nhanh không dây Qi2 công suất 15W.",
    specs: {
      "Dung lượng pin": "5.000 mAh thiết kế siêu mỏng tối ưu độ dày",
      "Chuẩn sạc không dây": "Chuẩn Qi2 thế hệ mới đạt công suất tối đa 15W",
      "Sạc có dây": "Type-C 2 chiều hỗ trợ công suất 20W",
      "Độ mỏng": "Thiết kế thanh mảnh không gây cấn cụm camera",
      "Tương thích": "Tối ưu hoàn hảo cho iPhone 12/13/14/15/16 Series"
    }
  },
  {
    id: 59,
    name: "Pin sạc dự phòng Baseus Enerfill FC11 10.000mAh 22.5W kèm dây sạc",
    category: "accessory",
    price: 490000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/p/i/pin-sac-du-phong-baseus-enerfill-fc11-10000mah-22-5w_1_.png",
    description: "Trang bị sẵn dây sạc tiện dụng, sạc nhanh công suất 22.5W đa giao thức, màn hình LED hiển thị mức pin.",
    specs: {
      "Dung lượng pin": "10.000 mAh (37Wh)",
      "Công suất đầu ra": "Tối đa 22.5W chuẩn SuperCharge / PD / QC",
      "Cổng sạc": "2x Type-C, 1x USB-A, 1x Lightning tiện lợi",
      "Dây cáp tích hợp": "Dây treo kiêm cáp sạc nhanh độ bền cao",
      "Màn hình hiển thị": "LED kỹ thuật số hiển thị chính xác % pin"
    }
  },
  {
    id: 60,
    name: "Pin sạc dự phòng StarGO Power 60000mAh 22.5W",
    category: "accessory",
    price: 890000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/p/i/pin-du-phong-stargo-power-60000mah-22-5w-nhieu-cong-co-den_1_.png",
    description: "Trạm sạc di động dung lượng khủng 60.000mAh dùng cho dã ngoại, nhiều cổng ra sạc cùng lúc 4 thiết bị, tích hợp quai xách.",
    specs: {
      "Dung lượng pin": "60.000 mAh (Dung lượng khổng lồ cho chuyến đi dài ngày)",
      "Công suất ra": "Sạc nhanh đa chuẩn 22.5W",
      "Cổng kết nối": "1x Type-C và 3x USB-A cấp nguồn cùng lúc nhiều máy",
      "Tiện ích": "Quai xách da thời trang, tích hợp đèn LED trợ sáng ban đêm",
      "Lõi pin": "Lõi Lithium Polymer mật độ cao chống cháy nổ"
    }
  },
  {
    id: 61,
    name: "Pin sạc dự phòng Mophie Essentials Snap+ 10000mAh Chân chống",
    category: "accessory",
    price: 1290000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/p/i/pin-sac-du-phong-mophie-essentials-snap-10000mah-co-chan-dung.png",
    description: "Thương hiệu cao cấp đạt chuẩn an toàn hàng không, hít từ tính Snap+ kèm chân dựng xem phim tiện lợi.",
    specs: {
      "Dung lượng pin": "10.000 mAh (Đạt chuẩn an toàn CCC khi bay)",
      "Công nghệ hít": "Snap+ Magnetic tương thích hoàn hảo MagSafe",
      "Chân dựng Kickstand": "Chân chống gập mở thông minh dựng đứng hoặc ngang",
      "Công suất sạc": "20W có dây qua cổng Type-C và sạc không dây 7.5W - 15W",
      "Chất liệu": "Hoàn thiện vân vải nhám cao cấp chống bám vân tay"
    }
  },
  {
    id: 62,
    name: "Pin sạc dự phòng Baseus Enerfill FC11 20.000mAh 22.5W kèm dây",
    category: "accessory",
    price: 690000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_647_-_2025-09-16t162241.374.png",
    description: "Dung lượng lớn 20.000mAh cung cấp năng lượng nhiều ngày, tích hợp sẵn dây sạc bện dù bền bỉ.",
    specs: {
      "Dung lượng pin": "20.000 mAh sạc đầy điện thoại từ 4 - 5 lần",
      "Công suất sạc": "22.5W hỗ trợ sạc nhanh iPhone 50% trong 30 phút",
      "Cổng kết nối": "2x Type-C, 1x USB-A, 1x Lightning",
      "Tích hợp": "Dây cáp sạc nhanh liền thân siêu bền",
      "Kích thước": "Thiết kế bo cong công thái học cầm nắm êm tay"
    }
  },
  {
    id: 63,
    name: "Pin sạc dự phòng Robot RT180S 10000mAh 12W 2 cổng",
    category: "accessory",
    price: 185000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_524_4.png",
    description: "Pin dự phòng giá rẻ quốc dân, mỏng nhẹ chỉ nặng hơn 200g, trang bị cổng Type-C và USB-A sạc ổn định.",
    specs: {
      "Dung lượng pin": "10.000 mAh tiêu chuẩn",
      "Công suất sạc": "12W dòng ra ổn định bảo vệ tuổi thọ pin",
      "Cổng ra & vào": "2 cổng sạc Type-C và 1 cổng USB-A",
      "Trọng lượng": "Khoảng 225g nhẹ nhàng bỏ túi",
      "Tính năng an toàn": "9 lớp bảo vệ mạch chống quá tải, chập điện"
    }
  },
  {
    id: 64,
    name: "Pin sạc dự phòng StarGO Star X2 Lite 20000mAh 22.5W",
    category: "accessory",
    price: 390000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/p/i/pin-sac-du-phong-stargo-star-x2-lite-20000mah-22-5w.png",
    description: "Dung lượng 20.000mAh chuẩn an toàn hàng không CCC, hỗ trợ sạc nhanh 22.5W cho nhiều thiết bị di động.",
    specs: {
      "Dung lượng pin": "20.000 mAh dung lượng chuẩn",
      "Công suất ra": "Sạc nhanh 22.5W hỗ trợ PD và QC",
      "Chuẩn an toàn": "Chứng nhận CCC an toàn tuyệt đối khi bay",
      "Thiết kế": "Vỏ nhựa PC + ABS chống cháy, bề mặt nhám mờ sang trọng",
      "Hệ thống đèn": "Đèn LED báo dung lượng pin trực quan"
    }
  },
  {
    id: 65,
    name: "Pin sạc dự phòng Xiaomi 10000mAh 22.5W tích hợp cáp sạc",
    category: "accessory",
    price: 390000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/sac-pin-du-phong-xiaomi-10000mah-22-5w.png",
    description: "Thiết kế màu sắc pastel trang nhã, tích hợp dây cáp Type-C thời trang, sạc nhanh 22.5W hai chiều tiện lợi.",
    specs: {
      "Dung lượng pin": "10.000 mAh (37Wh)",
      "Công suất sạc": "22.5W sạc nhanh hai chiều (In/Out)",
      "Cáp tích hợp": "Dây Type-C liền thân màu sắc đồng bộ",
      "Cổng kết nối bổ sung": "1x Type-C, 1x USB-A sạc cùng lúc 3 thiết bị",
      "Chế độ đặc biệt": "Hỗ trợ sạc dòng nhỏ cho tai nghe và vòng đeo tay thông minh"
    }
  },
  {
    id: 66,
    name: "iPhone 15 256GB | Chính hãng VN/A",
    category: "phone",
    price: 24990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus-256gb_3.png",
    description: "Thiết kế Dynamic Island thông minh, mặt lưng kính pha màu mờ sang trọng, camera chính 48MP và cổng kết nối Type-C hiện đại.",
    specs: {
      "Màn hình": "6.1 inch Super Retina XDR OLED, Dynamic Island",
      "Vi xử lý": "Apple A16 Bionic (4nm)",
      "RAM & Bộ nhớ": "6GB RAM | 256GB ROM",
      "Camera sau": "Camera kép 48MP + 12MP (góc siêu rộng)",
      "Cổng sạc & kết nối": "USB-C, hỗ trợ sạc không dây MagSafe 15W"
    }
  },
  {
    id: 67,
    name: "iPhone 14 128GB | Chính hãng VN/A",
    category: "phone",
    price: 16990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14_2_1.jpg",
    description: "Kích thước 6.1 inch cầm nắm nhỏ gọn, hiệu năng mượt mà ổn định lâu dài cùng tính năng an toàn phát hiện va chạm thông minh.",
    specs: {
      "Màn hình": "6.1 inch Super Retina XDR OLED sắc nét, True Tone",
      "Vi xử lý": "Apple A15 Bionic 5 nhân GPU",
      "RAM & Bộ nhớ": "6GB RAM | 128GB ROM",
      "Camera sau": "Hệ thống camera kép 12MP cải tiến chụp thiếu sáng",
      "Chuẩn kháng nước": "IP68 (chịu độ sâu 6m trong 30 phút)"
    }
  },
  {
    id: 68,
    name: "iPhone 17 Pro 1TB | Chính hãng",
    category: "phone",
    price: 44690000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_17_pro_512gb_1.jpg",
    description: "Màn hình 6.3 inch viền siêu mỏng, dung lượng cực khủng 1TB lưu trữ không giới hạn, hiệu năng dẫn đầu tích hợp Apple Intelligence.",
    specs: {
      "Màn hình": "6.3 inch Super Retina XDR ProMotion 120Hz Always-On",
      "Khung viền": "Hợp kim Titan thế hệ mới bo cong mềm mại",
      "Dung lượng lưu trữ": "1TB NVMe lưu trữ video ProRES thoải mái",
      "Vi xử lý": "Apple A19 Pro Bionic tiến trình 2nm",
      "Camera chuyên nghiệp": "Cụm 3 camera 48MP hỗ trợ quay phim không gian Spatial Video"
    }
  },
  {
    id: 69,
    name: "Samsung Galaxy Z Flip8 5G 12GB 256GB",
    category: "phone",
    price: 27790000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-flip-8-pink-01.jpg",
    description: "Thiết kế gập vỏ sò thời thượng, màn hình ngoài lớn 4.1 inch tiện dụng, tích hợp bộ công cụ Galaxy AI hỗ trợ phiên dịch trực tiếp.",
    specs: {
      "Màn hình chính": "6.9 inch Dynamic AMOLED 2X 120Hz gập không nếp gấp",
      "Màn hình phụ": "4.1 inch Super AMOLED tương tác widget đa năng",
      "RAM & Lưu trữ": "12GB LPDDR5X | 256GB UFS 4.0",
      "Bản lề & Kháng nước": "Bản lề Flex gập phẳng hoàn toàn, kháng nước chuẩn IP48",
      "Tính năng AI": "Galaxy AI: Phiên dịch cuộc gọi hai chiều, tạo hình nền AI"
    }
  },
  {
    id: 70,
    name: "iPhone 16 Plus 128GB | Chính hãng VN/A",
    category: "phone",
    price: 24790000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-plus-1.png",
    description: "Màn hình lớn 6.7 inch hiển thị rộng rãi, thời lượng pin ấn tượng nhất dòng Plus cùng nút Action Button và phím điều khiển Camera Control mới.",
    specs: {
      "Màn hình": "6.7 inch Super Retina XDR OLED, Dynamic Island",
      "Vi xử lý": "Apple A18 Bionic tối ưu cho Apple Intelligence",
      "RAM & Bộ nhớ": "8GB RAM đa nhiệm mượt | 128GB ROM",
      "Phím chức năng mới": "Nút tác vụ Action Button và phím cảm ứng Camera Control",
      "Thời lượng pin": "Thời lượng pin dài xem video liên tục lên đến 27 giờ"
    }
  },
  {
    id: 71,
    name: "Samsung Galaxy Z Fold8 5G 16GB 1TB",
    category: "phone",
    price: 57990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-fold-8-graphite-01_5.jpg",
    description: "Siêu phẩm màn hình gập cao cấp với dung lượng lưu trữ khủng 1TB, RAM 16GB đa nhiệm mượt và bộ công cụ Galaxy AI toàn diện.",
    specs: {
      "Màn hình chính": "7.6 inch Dynamic AMOLED 2X 120Hz gập siêu mỏng",
      "Màn hình phụ": "5.5 inch Dynamic AMOLED 2X sắc nét bên ngoài",
      "RAM & Lưu trữ": "16GB LPDDR5X | 1TB UFS 4.0",
      "Vi xử lý": "Snapdragon 8 Elite / Gen thế hệ mới tối ưu Galaxy",
      "Bút cảm ứng & Độ bền": "Hỗ trợ S-Pen, chuẩn kháng nước kháng bụi chuẩn IP48"
    }
  },
  {
    id: 72,
    name: "iPhone 16 Pro 1TB | Chính hãng VN/A",
    category: "phone",
    price: 35990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_3.png",
    description: "Thiết kế vỏ Titanium sa mạc sang trọng, camera zoom quang học 5x, phím cảm ứng Camera Control và dung lượng lưu trữ 1TB cực lớn.",
    specs: {
      "Màn hình": "6.3 inch Super Retina XDR OLED, 120Hz ProMotion",
      "Vi xử lý": "Apple A18 Pro Bionic (tiến trình 3nm thế hệ 2)",
      "RAM & Bộ nhớ": "8GB RAM | 1TB NVMe lưu trữ",
      "Camera": "Hệ thống Pro 48MP Fusion + 48MP Ultra Wide + 12MP Tele 5x",
      "Phím chuyên dụng": "Phím Camera Control cảm ứng lực và nút Action Button"
    }
  },
  {
    id: 73,
    name: "OPPO Find X8 16GB 512GB",
    category: "phone",
    price: 18490000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-oppo-find-x8-xam-1.png",
    description: "Hệ thống camera Hasselblad đỉnh cao, màn hình phẳng 6.59 inch viền siêu mỏng đều 4 cạnh cùng dung lượng RAM 16GB mạnh mẽ.",
    specs: {
      "Màn hình": "6.59 inch AMOLED 1.5K, tần số quét 120Hz mượt mà",
      "Vi xử lý": "MediaTek Dimensity 9400 (3nm) hiệu năng vượt trội",
      "RAM & Bộ nhớ": "16GB LPDDR5X | 512GB UFS 4.0",
      "Camera": "Cụm 3 camera 50MP tinh chỉnh bởi Hasselblad",
      "Pin & Sạc nhanh": "Pin 5630 mAh Silicon-Carbon, sạc nhanh SuperVOOC 80W"
    }
  },
  {
    id: 74,
    name: "OPPO A79 5G 8GB 256GB",
    category: "phone",
    price: 7060000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-a79-tim.png",
    description: "Thiết kế mặt lưng lông vũ phát sáng lấp lánh, màn hình lớn 6.72 inch kèm loa kép âm thanh nổi siêu lớn 300% Ultra Volume.",
    specs: {
      "Màn hình": "6.72 inch Full HD+ IPS LCD 90Hz bảo vệ mắt",
      "Vi xử lý": "MediaTek Dimensity 6020 5G ổn định và tiết kiệm pin",
      "RAM & Bộ nhớ": "8GB RAM (+8GB mở rộng) | 256GB bộ nhớ trong",
      "Pin & Sạc": "5000 mAh bền bỉ cả ngày, sạc nhanh SuperVOOC 33W",
      "Âm thanh": "Loa kép Stereo chế độ siêu âm lượng 300%"
    }
  },
  {
    id: 75,
    name: "OPPO Find X9 Pro 16GB 512GB",
    category: "phone",
    price: 32990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo_find_x9_pro_16gb_512gb-1.jpg",
    description: "Flagship chụp ảnh đỉnh cao tương lai với cảm biến 1 inch thế hệ mới, màn hình cong nhẹ 6.78 inch và khả năng quay video chân dung điện ảnh.",
    specs: {
      "Màn hình": "6.78 inch LTPO AMOLED 2K+, 1-120Hz thích ứng",
      "Vi xử lý": "Dimensity 9400 / Snapdragon thế hệ mới tối ưu đồ họa",
      "RAM & Lưu trữ": "16GB LPDDR5X | 512GB UFS 4.0 tốc độ cao",
      "Hệ thống Camera": "Bộ 4 camera 50MP Hasselblad, cảm biến Tele tiềm vọng kép",
      "Độ bền": "Chuẩn kháng nước kháng bụi cao cấp nhất IP68 / IP69"
    }
  },
  {
    id: 76,
    name: "Dán kính cường lực màn hình iPhone 16 Plus/15 Plus Zagg",
    category: "accessory",
    price: 441000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_604_40__1_1_1.png",
    description: "Kính cường lực Zagg cao cấp chống va đập gấp 5 lần, độ trong suốt quang học cao và hạn chế bám dấu vân tay tối ưu.",
    specs: {
      "Thương hiệu": "ZAGG (USA) chính hãng",
      "Dòng máy tương thích": "iPhone 16 Plus / iPhone 15 Plus (màn hình 6.7 inch)",
      "Độ cứng bề mặt": "9H tiêu chuẩn chống trầy xước từ chìa khóa, dao lam",
      "Lớp phủ bề mặt": "Oleophobic kháng dầu mỡ, mồ hôi và dấu vân tay",
      "Tính năng kèm theo": "Khay trợ dán căn chỉnh tự động chuẩn xác 100%"
    }
  },
  {
    id: 77,
    name: "Dán kính cường lực màn hình iPhone 18 Pro Max/17 Pro Max Mipow",
    category: "accessory",
    price: 450000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/d/a/dan-kinh-cuong-luc-man-hinh-iphone-18-pro-max17-pro-max-mipow-full-vien-den-cao-cap_1_.png",
    description: "Kính Mipow viền đen vát cạnh 3D siêu mỏng, cảm ứng siêu mượt mà không làm giảm độ sáng của màn hình lớn.",
    specs: {
      "Thương hiệu": "MIPOW Kingbull cao cấp",
      "Dòng máy tương thích": "iPhone 18 Pro Max / iPhone 17 Pro Max",
      "Đặc điểm viền": "Viền đen vát cong mép 3D ôm khít thân máy chống mẻ cạnh",
      "Độ trong suốt": "Đạt 99% chuẩn hiển thị Retina sắc nét",
      "Khả năng chịu lực": "Chống nứt vỡ dưới tác động rơi rớt mạnh"
    }
  },
  {
    id: 78,
    name: "Dán bảo vệ camera Apple iPhone 14/14 Plus/15/15 Plus Zagg",
    category: "accessory",
    price: 245000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/m/i/mieng-dan-camera-iphone-14-14-plus-15-15-plus-zagg-vien-mau.png",
    description: "Vòng bảo vệ cụm camera kép chống trầy xước viền và mặt kính, giữ trọn độ nét ảnh chụp flash ban đêm không bị lóe sáng.",
    specs: {
      "Thương hiệu": "ZAGG",
      "Thiết bị hỗ trợ": "iPhone 14, iPhone 14 Plus, iPhone 15, iPhone 15 Plus",
      "Cấu tạo": "Khung viền nhôm anodized kết hợp kính cường lực trong suốt",
      "Công nghệ chống chói": "Vòng đệm đen chống tán xạ đèn Flash ban đêm",
      "Độ dày": "Siêu mỏng tương thích hoàn hảo với mọi ốp lưng"
    }
  },
  {
    id: 79,
    name: "Dán kính cường lực màn hình iPhone 18 Pro Max/17 Pro Max Zagg",
    category: "accessory",
    price: 1650000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_12__8_257.png",
    description: "Dòng kính cường lực siêu cao cấp từ Zagg, tích hợp màng lọc ánh sáng xanh bảo vệ mắt và công nghệ chống nhìn trộm Privacy đỉnh cao.",
    specs: {
      "Thương hiệu": "ZAGG Extreme Protection",
      "Dòng máy": "iPhone 18 Pro Max / iPhone 17 Pro Max",
      "Tính năng bảo mật": "Chống nhìn trộm Privacy 2 chiều góc nghiêng 30 độ",
      "Bảo vệ sức khỏe": "Lớp lọc EyeSafe giảm ánh sáng xanh độc hại",
      "Độ bền thử nghiệm": "Chống va đập tiêu chuẩn quân đội, kháng vỡ viền gia cố"
    }
  },
  {
    id: 80,
    name: "Dán kính cường lực màn hình iPhone 15 Pro Max Zagg",
    category: "accessory",
    price: 351000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/d/a/dan-cuong-luc-iphone-15-pro-max-zagg.png",
    description: "Kính cường lực Zagg chuẩn chống xước cao, vuốt chạm vuốt mép mượt mà không cấn tay, tương thích tốt với ốp lưng chống sốc.",
    specs: {
      "Thương hiệu": "ZAGG",
      "Dòng máy tương thích": "iPhone 15 Pro Max (6.7 inch)",
      "Độ dày kính": "0.33mm siêu mỏng cảm ứng nhạy bén",
      "Bảo vệ viền": "Cắt CNC vát cạnh 2.5D mượt mà",
      "Độ cứng": "Độ cứng 9H chống trầy hiệu quả"
    }
  },
  {
    id: 81,
    name: "Dán bảo vệ Camera Zeelot viền iPhone 18 Pro/18 Pro Max",
    category: "accessory",
    price: 450000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_11__7_304.png",
    description: "Khung viền Titan cao cấp đồng màu máy, mặt kính cường lực Sapphire nhân tạo chống xước tuyệt đối cho ống kính đắt giá.",
    specs: {
      "Thương hiệu": "ZEELOT PIshield",
      "Tương thích": "iPhone 18 Pro và iPhone 18 Pro Max (bộ 3 mắt camera)",
      "Chất liệu khung viền": "Hợp kim Titanium cắt kim cương tinh xảo",
      "Mặt kính": "Kính Sapphire chống trầy xước cấp độ 9 Mohs",
      "Độ trong suốt": "Chuẩn AR Optical giảm phản quang, ảnh chụp rõ nét"
    }
  },
  {
    id: 82,
    name: "Dán kính cường lực màn hình iPhone 18 Pro/17 Pro Mipow",
    category: "accessory",
    price: 450000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/d/a/dan-kinh-cuong-luc-man-hinh-iphone-18-pro17-pro-mipow-full-vien-den-cao-cap_1_.png",
    description: "Kính Mipow Kingbull chuẩn cho dòng Pro 6.3 inch, chống bụi loa thoại, chịu va đập gấp 3 lần kính thông thường.",
    specs: {
      "Thương hiệu": "MIPOW Kingbull",
      "Dòng máy tương thích": "iPhone 18 Pro / iPhone 17 Pro (6.3 inch)",
      "Màng bảo vệ loa": "Lưới kim loại chống bụi mịn lọt vào màng loa trên",
      "Keo dán": "Keo quang học OCA tự hít khí, không bong bóng",
      "Độ trong suốt": "Độ truyền sáng lên đến 99.5%"
    }
  },
  {
    id: 83,
    name: "Dán kính cường lực màn hình iPhone 14 Pro Max Mipow",
    category: "accessory",
    price: 351000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/4/_/4_93_1.jpg",
    description: "Dòng kính cường lực Kingbull nổi tiếng cho iPhone 14 Pro Max, bo góc chính xác ôm trọn cụm Dynamic Island.",
    specs: {
      "Thương hiệu": "MIPOW",
      "Dòng máy tương thích": "iPhone 14 Pro Max",
      "Thiết kế đảo Dynamic": "Cắt laser khoét chuẩn cảm biến Face ID nhận diện tức thì",
      "Độ cứng": "9H Diamond Hardness chống mài mòn cao",
      "Lớp phủ bề mặt": "Nano mạ điện giảm thiểu 95% bám dấu vân tay"
    }
  },
  {
    id: 84,
    name: "Dán kính cường lực màn hình iPhone 16 Pro Max Zagg",
    category: "accessory",
    price: 441000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/1/0/100115465_450-18959_zagg-glass_elite_edge_pr_am-apple-michael_lgpro-cfs-apac_pkg.1.png",
    description: "Kính cường lực Zagg Glass Elite siêu bền bỉ, tối ưu mép viền siêu mỏng của thế hệ iPhone 16 Pro Max.",
    specs: {
      "Thương hiệu": "ZAGG Glass Elite",
      "Dòng máy tương thích": "iPhone 16 Pro Max (6.9 inch)",
      "Vật liệu kính": "Aluminosilicate trao đổi ion gia tăng độ dẻo dai",
      "Công nghệ kháng khuẩn": "Lớp phủ kháng khuẩn bảo vệ bề mặt sạch sẽ",
      "Khay dán đi kèm": "Hỗ trợ EZ Apply khay dán nhanh chuẩn xác"
    }
  },
  {
    id: 85,
    name: "Dán kính cường lực màn hình Apple iPhone 17 Zeelot",
    category: "accessory",
    price: 360000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/k/i/kinh-cuong-luc-iphone-17-zeelot-solidsleek-ultra-hd-full_1_.png",
    description: "Kính cường lực Zeelot công nghệ bo cong mép tinh tế, khả năng đàn hồi tốt, bề mặt trơn láng chiến game mượt mà.",
    specs: {
      "Thương hiệu": "ZEELOT Solidsleek",
      "Dòng máy tương thích": "Apple iPhone 17",
      "Khả năng uốn cong": "Gia cố cạnh viền chịu uốn cong đàn hồi cao không vỡ vụn",
      "Độ nhạy cảm ứng": "Phản hồi cảm ứng 120Hz mượt mà, không rít tay",
      "Quy cách đóng gói": "Bộ dụng cụ vệ sinh màn hình đầy đủ"
    }
  },
  {
    id: 86,
    name: "Bàn phím Gaming có dây HE Magnetic Mchose Ace68 Air",
    category: "gear",
    price: 1490000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_14__2.png",
    description: "Trang bị công nghệ Magnetic Switch (công tắc từ tính) hiện đại, tính năng Rapid Trigger siêu nhạy cho game thủ FPS và hệ thống LED RGB rực rỡ.",
    specs: {
      "Layout & Số phím": "Tenkeyless 68 phím nhỏ gọn, trọng lượng 777g",
      "Công nghệ Switch": "Magnetic Switch từ tính hỗ trợ Rapid Trigger",
      "Đèn nền": "LED RGB đa hiệu ứng chuyển màu sinh động",
      "Kết nối": "Có dây Type-C tháo rời tiện lợi",
      "Tương thích": "Windows tối ưu tuyệt đối cho game đối kháng, FPS"
    }
  },
  {
    id: 87,
    name: "Bàn phím gaming có dây Logitech G515 TKL",
    category: "gear",
    price: 2150000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_1_4.png",
    description: "Thiết kế Low-profile mỏng nhẹ thanh lịch, switch cơ học hành trình ngắn phản hồi siêu tốc và cáp kết nối dài 1.8m thoải mái đi dây.",
    specs: {
      "Layout & Số phím": "Tenkeyless (TKL) 87 phím tiêu chuẩn",
      "Kiểu switch": "Cơ học Low-Profile hành trình ngắn êm ái",
      "Đèn nền": "LED RGB công nghệ LIGHTSYNC đồng bộ âm thanh",
      "Kết nối & Dây": "Có dây USB liền, độ dài cáp 1.8 mét",
      "Tương thích": "Hỗ trợ Windows, macOS và Linux"
    }
  },
  {
    id: 88,
    name: "Bàn phím cơ không dây Aula S100 Pro xanh dương trắng",
    category: "gear",
    price: 790000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_-_2025-08-06t111146.036.png",
    description: "Phối màu xanh dương trắng trẻ trung, tích hợp cụm phím số Full-size 99 phím tiện lợi, thời lượng pin ấn tượng lên tới 132 giờ.",
    specs: {
      "Layout & Số phím": "Full-size 99 phím tích hợp cụm numpad nhập liệu",
      "Đèn nền": "Hệ thống đèn LED Rainbow nhiều chế độ bắt mắt",
      "Kết nối": "3 chế độ: Bluetooth, Wireless 2.4GHz và cáp Type-C",
      "Thời lượng pin": "Pin sạc dung lượng cao dùng liên tục đến 132 giờ",
      "Tương thích hệ điều hành": "Windows, macOS, Android, iOS"
    }
  },
  {
    id: 89,
    name: "Bàn phím cơ Rapoo Aesco A67 Esport Rapid Trigger",
    category: "gear",
    price: 3290000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_8__2.png",
    description: "Dòng phím Esport chuyên nghiệp với tính năng Rapid Trigger tùy chỉnh điểm nhận phím chính xác từng 0.1mm, pin khủng 300 giờ.",
    specs: {
      "Layout & Số phím": "Mini-size 67 phím siêu cơ động",
      "Tính năng chuyên sâu": "Rapid Trigger điều chỉnh điểm ngắt phím thời gian thực",
      "Đèn nền": "LED RGB 16.8 triệu màu tùy biến theo nhạc",
      "Thời lượng pin": "Thời lượng pin cực trâu lên tới 300 giờ hoạt động",
      "Kết nối": "Đa chế độ: Bluetooth, USB Wireless và dây Type-C"
    }
  },
  {
    id: 90,
    name: "Bàn phím cơ không dây AULA S75 Pro Xám Đen Gradient",
    category: "gear",
    price: 1499000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_3_4_43.png",
    description: "Phối màu Xám Đen Gradient huyền bí, núm xoay kim loại tùy chỉnh đa phương tiện nhanh, cấu trúc Gasket Mount gõ đầm tay.",
    specs: {
      "Layout & Số phím": "Tenkeyless 80 phím kèm núm xoay đa năng tiện lợi",
      "Cấu trúc bên trong": "Gasket Mount lót foam tiêu âm cao cấp êm tai",
      "Đèn nền": "LED RGB từng phím kèm dải viền trang trí",
      "Dung lượng pin": "Thời lượng pin sử dụng liên tục khoảng 80 giờ",
      "Kết nối": "3 chế độ (Bluetooth 5.0 / 2.4G / Type-C) mượt mà"
    }
  },
  {
    id: 91,
    name: "Bàn phím Gaming Asus TUF K1",
    category: "gear",
    price: 850000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_-_2025-06-18t100848.155.png",
    description: "Chuẩn độ bền TUF Gaming trứ danh với khả năng kháng nước tràn lên tới 300ml, núm vặn âm lượng chuyên dụng và đệm kê tay tháo rời.",
    specs: {
      "Layout & Số phím": "Full-size 104 phím đầy đủ phím số",
      "Độ bền & Kháng nước": "Khung gia cố chống mài mòn, chịu đổ tràn chất lỏng 300ml",
      "Đèn nền": "LED RGB cá nhân hóa với hệ sinh thái ASUS Aura Sync",
      "Cáp kết nối": "Cáp bện dù chống đứt gãy dài 1.8 mét",
      "Trang bị thêm": "Kèm đệm kê tay công thái học tháo lắp dễ dàng"
    }
  },
  {
    id: 92,
    name: "Bàn phím cơ Rapoo V700DIY-75 Xanh Lá Đen",
    category: "gear",
    price: 1290000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_3__2.png",
    description: "Mạch Hotswap cho phép tùy ý thay thế switch linh hoạt, phối màu phá cách Vàng Chanh Đen và thời lượng pin kỷ lục lên tới 800 giờ.",
    specs: {
      "Layout & Số phím": "Tenkeyless 80 phím nhỏ gọn gàng bàn học/làm việc",
      "Tính năng Hotswap": "Mạch Hotswap hỗ trợ switch 3-pin và 5-pin tùy biến theo ý thích",
      "Đèn nền": "LED RGB nhiều hiệu ứng rực rỡ",
      "Thời lượng pin": "Viên pin siêu khủng đạt tới 800 giờ sử dụng",
      "Kết nối": "Đa kết nối không dây Bluetooth / 2.4GHz Receiver / Type-C"
    }
  },
  {
    id: 93,
    name: "Bàn phím Gaming có dây HE Magnetic Mchose Ace68",
    category: "gear",
    price: 990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_9__2.png",
    description: "Phiên bản Ace68 switch từ tính giá cực tốt cho học sinh sinh viên, phản hồi siêu nhạy loại bỏ hoàn toàn độ trễ tiếp điểm cơ học.",
    specs: {
      "Layout & Số phím": "Tenkeyless 68 phím, trọng lượng 773g đầm chắc",
      "Loại Switch": "Hall Effect Magnetic Switch điều chỉnh hành trình nhận phím",
      "Đèn nền": "LED RGB tùy chỉnh độ sáng và chế độ nháy trực tiếp",
      "Kết nối": "Dây cáp bện Type-C tháo rời chống rối",
      "Tương thích": "Tối ưu cho Windows 10/11 chiến game mượt"
    }
  },
  {
    id: 94,
    name: "Bàn phím gaming không dây Logitech G915 X Lightspeed TKL",
    category: "gear",
    price: 4490000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_82_.png",
    description: "Đẳng cấp phím cơ không dây siêu mỏng đỉnh cao từ Logitech, kết nối Lightspeed độ trễ gần như bằng 0 và pin dùng đến 1000 giờ.",
    specs: {
      "Layout & Số phím": "Tenkeyless 96 phím mỏng nhẹ hoàn thiện mặt nhôm xước",
      "Switch": "GL Mechanical Switch độ nhạy cao chuẩn xác",
      "Công nghệ không dây": "Lightspeed độc quyền siêu tốc độ + Bluetooth",
      "Thời lượng pin": "Lên tới 1000 giờ sử dụng khi tắt LED (hoặc 36 giờ bật LED 100%)",
      "Đèn nền": "LIGHTSYNC RGB tùy biến 16.8 triệu màu từng phím"
    }
  },
  {
    id: 95,
    name: "Bàn phím gaming có dây MSI Forge GK110",
    category: "gear",
    price: 3990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/b/a/ban-phim-gaming-co-day-msi-forge-gk110.png",
    description: "Thiết kế layout 97 phím tinh gọn nhưng vẫn giữ trọn vẹn cụm numpad tiện lợi, đèn nền RGB sống động cùng phím gõ êm ái.",
    specs: {
      "Layout & Số phím": "Full-size 97 phím bố trí thông minh",
      "Cảm giác gõ": "Switch cơ học gõ êm, độ nảy tốt và hạn chế tiếng ồn",
      "Đèn nền": "Hệ thống đèn LED RGB rực rỡ với phím tắt chỉnh nhanh",
      "Kết nối": "Có dây USB bọc cao su bền bỉ độ dài 1.5 mét",
      "Độ bền phím": "Đạt hơn 20 triệu lượt nhấn phím"
    }
  },
  {
    id: 96,
    name: "Tai nghe Bluetooth True Wireless Baseus Bass BS2",
    category: "gear",
    price: 290000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/a/tai-nghe-bluetooth-true-wireless-baseus-bass-bs-2-lite-_1_.png",
    description: "Công nghệ kết nối Bluetooth 6.0 thế hệ mới siêu tiết kiệm điện, âm trầm Bass mạnh mẽ và thời lượng pin kèm hộp sạc lên tới 40 giờ.",
    specs: {
      "Thời lượng pin": "Tai nghe 6 giờ | Hộp sạc mở rộng 40 giờ",
      "Chuẩn kết nối": "Bluetooth 6.0 thế hệ mới giảm độ trễ",
      "Kháng nước": "Chuẩn IPX5 chống mồ hôi và tia nước bắn",
      "Chất âm": "Công nghệ Baseus Bass Enhancement tăng cường âm trầm",
      "Cổng sạc": "Type-C sạc nhanh an toàn"
    }
  },
  {
    id: 97,
    name: "Tai nghe không dây JBL Wave Buds 2",
    category: "gear",
    price: 1390000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/a/tai-nghe-khong-day-jbl-wave-buds-2-_14_.png",
    description: "Chất âm JBL Deep Bass trứ danh, thiết kế hộp không nắp mở tiện dụng, kháng bụi nước IP54 bền bỉ cả ngày dài.",
    specs: {
      "Thời lượng pin": "Tai nghe 10 giờ | Hộp sạc 30 giờ (Tổng 40 giờ)",
      "Chuẩn kết nối": "Bluetooth 5.3 kết nối ổn định",
      "Kháng nước & bụi": "Tai nghe đạt chuẩn IP54, hộp sạc đạt IPX2",
      "Chất âm": "JBL Deep Bass Sound với driver 8mm sống động",
      "Tính năng thông minh": "TalkThru & Ambient Aware nghe âm thanh xung quanh"
    }
  },
  {
    id: 98,
    name: "Tai nghe Bluetooth True Wireless Anker Soundcore R50i",
    category: "gear",
    price: 2950000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_345_1_.png",
    description: "Driver lớn 10mm cho âm thanh chi tiết, 2 micro đàm thoại tích hợp AI lọc ồn và hỗ trợ tính năng dịch thuật thông minh.",
    specs: {
      "Thời lượng pin": "Tai nghe 10 giờ | Hộp sạc 30 giờ",
      "Kích thước driver": "10mm Driver màng loa cao cấp",
      "Chuẩn kết nối": "Bluetooth 5.3",
      "Tính năng đặc biệt": "Tích hợp tính năng dịch thuật thời gian thực",
      "Đàm thoại": "2 Micro tích hợp thuật toán AI khử tiếng ồn cuộc gọi"
    }
  },
  {
    id: 99,
    name: "Tai nghe bluetooth Bose QuietComfort Earbuds",
    category: "gear",
    price: 3990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/a/tai-nghe-bose-quietcomfort-earbuds-spa.png",
    description: "Đẳng cấp chống ồn chủ động đỉnh cao từ Bose, âm thanh trung thực sống động và đệm tai StayHear Max êm ái.",
    specs: {
      "Thời lượng pin": "Khoảng 8.5 giờ sử dụng liên tục",
      "Công nghệ chống ồn": "Chống ồn chủ động ANC đẳng cấp Bose thế giới",
      "Chuẩn kết nối": "Bluetooth 5.3 codec chất lượng cao",
      "Kháng nước": "Chuẩn IPX4 chịu nước mưa nhẹ và tập luyện",
      "Tùy biến âm thanh": "Tùy chỉnh EQ chuyên sâu qua ứng dụng Bose"
    }
  },
  {
    id: 100,
    name: "Tai nghe Bluetooth True Wireless Anker Soundcore K20i",
    category: "gear",
    price: 390000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_344_1__1.png",
    description: "Dạng tai nghe bán mở Semi-in-ear đeo thoải mái không bí tai, pin khủng 45 giờ cùng công nghệ Bluetooth 5.4 mới nhất.",
    specs: {
      "Thời lượng pin": "Tai nghe 10 giờ | Hộp sạc lên tới 45 giờ",
      "Chuẩn kết nối": "Bluetooth 5.4 truyền tải dữ liệu tức thì",
      "Kháng nước": "Chuẩn IP54 bảo vệ an toàn khi vận động",
      "Thiết kế": "Kiểu dáng Semi-in-ear công thái học siêu nhẹ",
      "Tính năng thông minh": "Tích hợp tính năng dịch thuật tiện lợi"
    }
  },
  {
    id: 101,
    name: "Tai nghe Bluetooth thể thao Anker Soundcore C50i",
    category: "gear",
    price: 1090000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/a/tai-nghe-bluetooth-anker-soundcore-c50i-spa.png",
    description: "Thiết kế kẹp tai mở Open-ear chuyên dụng cho người chạy bộ và gymer, chuẩn kết nối Bluetooth 6.0 và kháng nước bụi IP55.",
    specs: {
      "Thời lượng pin": "Tai nghe 7 giờ | Hộp sạc 28 giờ",
      "Thiết kế": "Dạng kẹp vành tai Open-ear thoáng khí, không đau tai",
      "Chuẩn kết nối": "Bluetooth 6.0 thế hệ mới",
      "Kháng nước & bụi": "Chuẩn IP55 chịu mồ hôi và bụi bẩn khi chơi thể thao",
      "Âm thanh": "Driver âm học định hướng truyền âm chính xác"
    }
  },
  {
    id: 102,
    name: "Tai nghe Samsung Galaxy Buds 4",
    category: "gear",
    price: 3890000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung_buds4_17_.png",
    description: "Thiết kế hộp sạc trong suốt vị lai, công nghệ Bluetooth 6.1 siêu nhạy cùng trợ lý AI đa tác vụ hỗ trợ dịch trực tiếp.",
    specs: {
      "Thời lượng pin": "Tai nghe 6 giờ | Hộp sạc 30 giờ",
      "Chuẩn kết nối": "Bluetooth 6.1 kết nối siêu tốc",
      "Trí tuệ nhân tạo": "Tích hợp trợ lý Galaxy AI đa tác vụ thông minh",
      "Thiết kế": "Hộp sạc nắp trong suốt công nghệ Cyber hiện đại",
      "Tính năng âm thanh": "Chống ồn chủ động thích ứng và âm thanh 360 độ"
    }
  },
  {
    id: 103,
    name: "Tai nghe Bluetooth chụp tai Sony WH-CH720N",
    category: "gear",
    price: 2050000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_379_1_7.png",
    description: "Tai nghe chụp tai chống ồn nhẹ nhất của Sony, trang bị chip V1 cao cấp, đệm tai êm ái và pin bền bỉ đến 40 giờ.",
    specs: {
      "Thời lượng pin": "Lên tới 40 giờ (Sạc nhanh 3 phút dùng 60 phút)",
      "Bộ xử lý": "Chip Integrated Processor V1 khử ồn chuyên sâu",
      "Driver": "30mm tái tạo dải âm cân bằng và âm bass chắc",
      "Chuẩn kết nối": "Bluetooth 5.2 (hỗ trợ kết nối cùng lúc 2 thiết bị)",
      "Trọng lượng": "192g siêu nhẹ đeo cả ngày không mỏi đầu"
    }
  },
  {
    id: 104,
    name: "Tai nghe Bluetooth Samsung Galaxy Buds Core (ANC)",
    category: "gear",
    price: 990000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_237_3_5.png",
    description: "Trang bị chống ồn chủ động ANC thực thụ trong tầm giá phổ thông, kết nối Bluetooth 5.4 và pin kéo dài tới 35 giờ.",
    specs: {
      "Thời lượng pin": "Lên đến 35 giờ khi kết hợp hộp sạc",
      "Công nghệ chống ồn": "Chống ồn chủ động ANC lọc tạp âm môi trường",
      "Chuẩn kết nối": "Bluetooth 5.4 truyền tải âm thanh ổn định",
      "Kháng nước": "Chuẩn IP54 chống nước hắt và giọt bắn",
      "Điều khiển": "Cảm ứng chạm đa điểm mượt mà trên củ tai"
    }
  },
  {
    id: 105,
    name: "Tai nghe Bluetooth True Wireless Sony WF-C510",
    category: "gear",
    price: 790000,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/a/tai-nghe-bluetooth-sony-wf-c510-spa.png",
    description: "Kích thước củ tai siêu nhỏ gọn vừa vặn mọi dáng tai, công nghệ phục hồi âm thanh DSEE độc quyền của Sony và pin 11 giờ.",
    specs: {
      "Thời lượng pin": "Tai nghe 11 giờ | Hộp sạc 11 giờ (Tổng 22 giờ)",
      "Chuẩn kết nối": "Bluetooth 5.3 (Kết nối đa điểm 2 máy)",
      "Kháng nước": "Chuẩn IPX4 chống nước mưa nhẹ và mồ hôi",
      "Nâng cấp âm thanh": "Công nghệ DSEE phục hồi dải âm nén chất lượng cao",
      "Trọng lượng": "4.6g mỗi bên tai nghe siêu nhẹ"
    }
  }
];
// Định dạng tiền tệ VND
function formatCurrency(number) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

// Hàm render danh sách sản phẩm ra DOM
function renderProducts(items) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #ef4444; font-size: 1.1rem;">Không tìm thấy sản phẩm phù hợp!</p>`;
    return;
  }

  grid.innerHTML = items.map(product => `
    <div class="product-card">
      <!-- Bọc link vào ảnh để nhấp ảnh cũng xem được chi tiết -->
      <a href="detail.html?id=${product.id}" style="display: block; text-decoration: none;">
        <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.src='https://placehold.co/400x300?text=Nexora Tech Store'">
      </a>
      <div class="product-info">
        <!-- Bọc link vào tên sản phẩm -->
        <h3 class="product-name">
          <a href="detail.html?id=${product.id}" style="text-decoration: none; color: inherit;">${product.name}</a>
        </h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-price">${formatCurrency(product.price)}</div>
        
        <!-- Cụm 2 nút: Xem chi tiết & Thêm giỏ hàng -->
        <div style="display: flex; gap: 0.5rem; margin-top: auto;">
          <a href="detail.html?id=${product.id}" class="btn-add-cart" style="background: #334155; text-decoration: none; text-align: center; flex: 1; display: flex; align-items: center; justify-content: center;">
            Chi tiết
          </a>
          <button class="btn-add-cart" style="flex: 1;" onclick="addToCart(${product.id})">
            Thêm giỏ
          </button>
        </div>
      </div>
    </div>
  `).join("");
}
// Xử lý bộ lọc tìm kiếm động chuẩn xác, phân loại rõ ràng từng nhóm
function handleFilter() {
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-select");
  const maxPriceInput = document.getElementById("max-price");
  const priceVal = document.getElementById("price-val");

  if (!searchInput || !categorySelect || !maxPriceInput) return;

  const keyword = searchInput.value.toLowerCase().trim();
  const selectedCategory = categorySelect.value;
  const maxPrice = Number(maxPriceInput.value);

  // Hiển thị giá trị thanh kéo giá
  if (priceVal) {
    priceVal.textContent = formatCurrency(maxPrice);
  }

  // Lọc sản phẩm
  const filtered = products.filter(product => {
    const nameLower = product.name.toLowerCase();

    // 1. Phân loại theo TỪ KHÓA ĐẶC TRƯNG CỦA TÊN
    // Các từ khóa phụ kiện (nếu dính các từ này thì KHÔNG PHẢI điện thoại/laptop)
    const isAccessory = nameLower.includes("dán") || 
                        nameLower.includes("kính") || 
                        nameLower.includes("cường lực") || 
                        nameLower.includes("ốp lưng") || 
                        nameLower.includes("camera") || 
                        nameLower.includes("cáp") || 
                        nameLower.includes("sạc") || 
                        nameLower.includes("sò lạnh") || 
                        nameLower.includes("pin sạc") ||
                        nameLower.includes("om 7") ||
                        nameLower.includes("om 8");

    const isWatch = nameLower.includes("đồng hồ") || nameLower.includes("watch") || nameLower.includes("band");
    const isAudio = nameLower.includes("tai nghe") || nameLower.includes("earbuds") || nameLower.includes("buds");
    const isLaptop = nameLower.includes("laptop") || nameLower.includes("macbook");
    const isGear = !isAccessory && (nameLower.includes("chuột") || nameLower.includes("bàn phím") || nameLower.includes("claw") || nameLower.includes("ronin") || nameLower.includes("playstation") || nameLower.includes("ally"));

    // Điện thoại / Tablet: Phải chứa tên máy VÀ KHÔNG ĐƯỢC là phụ kiện, không phải đồng hồ, laptop
    const isPhone = !isAccessory && !isWatch && !isAudio && !isLaptop && !isGear && 
                    (nameLower.includes("iphone") || nameLower.includes("galaxy") || nameLower.includes("ipad") || 
                     nameLower.includes("poco") || nameLower.includes("oppo") || nameLower.includes("pad") || 
                     nameLower.includes("redmi") || nameLower.includes("xiaomi") || nameLower.includes("điện thoại"));

    // 2. Khớp danh mục được chọn
    let matchCategory = false;
    if (selectedCategory === "all") {
      matchCategory = true;
    } else if (selectedCategory === "phone") {
      matchCategory = isPhone;
    } else if (selectedCategory === "laptop") {
      matchCategory = isLaptop;
    } else if (selectedCategory === "watch") {
      matchCategory = isWatch;
    } else if (selectedCategory === "audio") {
      matchCategory = isAudio;
    } else if (selectedCategory === "gear") {
      matchCategory = isGear;
    } else if (selectedCategory === "accessory") {
      matchCategory = isAccessory;
    } else {
      matchCategory = (product.category === selectedCategory);
    }

    // 3. Khớp từ khóa tìm kiếm (chỉ tìm trong tên sản phẩm)
    const matchSearch = nameLower.includes(keyword);

    // 4. Khớp mức giá
    const matchPrice = product.price <= maxPrice;

    return matchCategory && matchSearch && matchPrice;
  });

  renderProducts(filtered);
}
// Gắn sự kiện lắng nghe thao tác người dùng khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("search-input")?.addEventListener("input", handleFilter);
  document.getElementById("category-select")?.addEventListener("change", handleFilter);
  document.getElementById("max-price")?.addEventListener("input", handleFilter);
});
// Quản lý giỏ hàng với localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function updateCartCount() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;
}

function addToCart(productId) {
  const cart = getCart();
  const targetProduct = products.find(p => p.id === productId);
  if (!targetProduct) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...targetProduct, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`Đã thêm "${targetProduct.name}" vào giỏ hàng!`);
}

// Khởi chạy khi load trang
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  updateCartCount();

  // Đăng ký các sự kiện tương tác
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-select");
  const maxPriceInput = document.getElementById("max-price");

  if (searchInput) searchInput.addEventListener("input", handleFilter);
  if (categorySelect) categorySelect.addEventListener("change", handleFilter);
  if (maxPriceInput) maxPriceInput.addEventListener("input", handleFilter);
});
// Render chi tiết giỏ hàng trên trang cart.html
function renderCartPage() {
  const container = document.getElementById("cart-items-container");
  const subtotalEl = document.getElementById("subtotal-price");
  const totalEl = document.getElementById("total-price");

  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="background: #fff; padding: 2rem; border-radius: 8px; text-align: center;">
        <p style="font-size: 1.1rem; color: #64748b; margin-bottom: 1rem;">Giỏ hàng của bạn đang trống!</p>
        <a href="products.html" style="color: #0284c7; text-decoration: none; font-weight: 600;">Khám phá sản phẩm ngay</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "0đ";
    if (totalEl) totalEl.textContent = "0đ";
    return;
  }

  let totalMoney = 0;

  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    totalMoney += itemTotal;

    return `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://placehold.co/100x100?text=Nexora Tech Store'">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p class="cart-item-price">${formatCurrency(item.price)}</p>
        </div>
        <div class="cart-qty-control">
          <button class="btn-qty" onclick="changeQuantity(${item.id}, -1)">-</button>
          <span class="qty-number">${item.quantity}</span>
          <button class="btn-qty" onclick="changeQuantity(${item.id}, 1)">+</button>
        </div>
        <div class="cart-item-total">${formatCurrency(itemTotal)}</div>
        <button class="btn-delete-item" onclick="removeFromCart(${item.id})">Xóa</button>
      </div>
    `;
  }).join("");

  if (subtotalEl) subtotalEl.textContent = formatCurrency(totalMoney);
  if (totalEl) totalEl.textContent = formatCurrency(totalMoney);
}

// Tăng / giảm số lượng sản phẩm trong giỏ
function changeQuantity(productId, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCartPage();
}

// Xóa hẳn 1 sản phẩm khỏi giỏ
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCartPage();
}
// Render 3 sản phẩm nổi bật cho trang index.html
function renderFeaturedProducts() {
  const featGrid = document.getElementById("home-featured-grid");
  if (!featGrid) return;

 // Lấy 3 sản phẩm đầu tiên làm nổi bật
  const featured = products.slice(0, 3);
  featGrid.innerHTML = featured.map(product => `
    <div class="product-card">
      <a href="detail.html?id=${product.id}" style="display:block;">
        <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.src='https://placehold.co/400x300?text=Nexora Tech Store'">
      </a>
      <div class="product-info">
        <h3 class="product-name">
          <a href="detail.html?id=${product.id}" style="text-decoration:none; color:inherit;">${product.name}</a>
        </h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-price">${formatCurrency(product.price)}</div>
        <div style="display:flex; gap:0.5rem; margin-top: auto;">
          <a href="detail.html?id=${product.id}" class="btn-add-cart" style="background:#475569; text-decoration:none; text-align:center; flex:1;">Chi tiết</a>
          <button class="btn-add-cart" style="flex:1;" onclick="addToCart(${product.id})">Thêm giỏ</button>
        </div>
      </div>
    </div>
  `).join("");
}

// Render chi tiết sản phẩm trên trang detail.html
function renderDetailPage() {
  const container = document.getElementById('product-detail-container');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));

  const product = products.find(p => String(p.id) === String(productId));

  if (!product) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; background: #1e293b; border-radius: 12px;">
        <h2 style="color: #f43f5e; margin-bottom: 1rem;">Không tìm thấy sản phẩm!</h2>
        <a href="products.html" class="btn-hero">Quay lại danh sách sản phẩm</a>
      </div>
    `;
    return;
  }

  const breadcrumb = document.getElementById('breadcrumb-current');
  if (breadcrumb) breadcrumb.innerText = product.name;

  // Xử lý tạo bảng thông số nếu có specs
  let specsHtml = '';
  if (product.specs && Object.keys(product.specs).length > 0) {
    const rows = Object.entries(product.specs).map(([key, val]) => `
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
        <td style="padding: 10px 14px; color: #94a3b8; font-weight: 500; width: 35%; background: rgba(15, 23, 42, 0.4);">${key}</td>
        <td style="padding: 10px 14px; color: #f1f5f9;">${val}</td>
      </tr>
    `).join('');

    specsHtml = `
      <div style="margin-top: 2rem; border-top: 1px solid rgba(56, 189, 248, 0.2); padding-top: 1.5rem;">
        <h3 style="color: #38bdf8; font-size: 1.15rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px;">
          ⚙️ Thông Số Kỹ Thuật Chi Tiết
        </h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; overflow: hidden;">
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="detail-card">
      <div>
        <img src="${product.image}" alt="${product.name}" class="detail-img">
      </div>
      <div class="detail-info">
        <h1 class="detail-title">${product.name}</h1>
        <div class="detail-price">${product.price.toLocaleString('vi-VN')} đ</div>
        <p class="detail-desc">${product.description || 'Sản phẩm công nghệ chính hãng, thiết kế tối ưu hiệu năng.'}</p>
        
        <div class="detail-actions">
          <div class="qty-select">
            <label for="detail-qty" style="color: #cbd5e1;">Số lượng:</label>
            <input type="number" id="detail-qty" value="1" min="1" max="99" style="width: 60px; text-align: center;">
          </div>
          <button class="btn-hero" onclick="addToCart(${product.id}, parseInt(document.getElementById('detail-qty').value))">
            Thêm vào giỏ hàng
          </button>
        </div>

        <div class="detail-policy">
          <p>✓ Bảo hành 12 tháng chính hãng</p>
          <p>✓ Giao hàng toàn quốc siêu tốc</p>
          <p>✓ Đổi mới 30 ngày nếu có lỗi phần cứng</p>
        </div>

        <!-- Bảng thông số tự động chèn vào đây -->
        ${specsHtml}
      </div>
    </div>
  `;
}
// Xử lý thêm vào giỏ từ trang detail với số lượng tùy chọn
function addDetailToCart(productId) {
  const qtyInput = document.getElementById("detail-qty");
  const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
  const targetProduct = products.find(p => p.id === productId);
  if (!targetProduct) return;

  const cart = getCart();
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({ ...targetProduct, quantity: qty });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`Đã thêm ${qty} x "${targetProduct.name}" vào giỏ hàng!`);
}