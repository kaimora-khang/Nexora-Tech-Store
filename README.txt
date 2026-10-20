
            BÁO CÁO DỰ ÁN: WEBSITE BÁN HÀNG CÔNG NGHỆ Nexora Tech Store


I. THÔNG TIN CHUNG
- Tên đề tài: Xây dựng Website Thương Mại Điện Tử Bán Thiết Bị & Phụ Kiện Công Nghệ (Nexora Tech Store).
- Ngôn ngữ & Công nghệ sử dụng:
  + HTML5: Xây dựng cấu trúc trang ngữ nghĩa (Semantic Web).
  + CSS3: Thiết kế giao diện hiện đại (Flexbox, Grid), responsive đa thiết bị (Desktop, Tablet, Mobile).
  + JavaScript (ES6+): Xử lý render dữ liệu động, bộ lọc thông minh, quản lý giỏ hàng với LocalStorage.
  + Triển khai (Deployment): GitHub & Vercel.


II. CẤU TRÚC THƯ MỤC DỰ ÁN

DeTai_DoAn_ThietKeWeb/
│
├── index.html            : Trang chủ giới thiệu thương hiệu, danh mục nổi bật & sản phẩm hot.
├── products.html         : Trang danh sách sản phẩm tích hợp bộ lọc và thanh tìm kiếm động.
├── detail.html           : Trang hiển thị thông tin chi tiết, thông số kỹ thuật (specs) từng sản phẩm.
├── cart.html             : Trang quản lý giỏ hàng (tăng/giảm số lượng, xóa món, tính tổng tiền).
├── checkout.html         : Trang nhập thông tin đặt hàng, xác nhận phương thức thanh toán.
│
├── css/
│   └── style.css         : Toàn bộ mã nguồn định dạng giao diện, hiệu ứng chuyển động, màu sắc.
│
├── js/
│   └── main.js           : Dữ liệu hơn 100 sản phẩm và toàn bộ logic xử lý động (DOM, Filter, Cart).
│
├── images/               : Thư mục chứa hình ảnh sản phẩm, banner và logo.
└── README.txt            : Tài liệu mô tả chức năng và hướng dẫn cài đặt, vận hành dự án.


III. DANH SÁCH CHỨC NĂNG CHÍNH

1. Quản lý & Hiển thị Dữ liệu Sản phẩm:
   - Kho dữ liệu hơn 105 sản phẩm đa dạng ngành hàng: Điện thoại & Tablet, Laptop Gaming & MacBook, Bàn phím cơ & Chuột Gaming, Tai nghe Bluetooth & Audio, Đồng hồ & Smartwatch, Phụ kiện sạc & Kính cường lực.
   - Render danh sách hoàn toàn tự động bằng JavaScript từ mảng đối tượng (Object Array).
   - Mỗi sản phẩm có đầy đủ: Tên, ảnh, giá gốc/giá khuyến mãi, mô tả ngắn và bảng thông số kỹ thuật (specs) chi tiết.

2. Bộ Lọc & Tìm Kiếm Thông Minh (Không tải lại trang - Single Page Behavior):
   - Tìm kiếm thời gian thực (Real-time Search): Tìm kiếm tức thì theo tên thiết bị khi người dùng gõ phím.
   - Lọc theo Danh mục chuyên sâu: Thuật toán tự động phân loại thông minh loại bỏ tình trạng xung đột từ khóa (ví dụ: không để ốp lưng/kính dán dính vào mục Điện thoại).
   - Lọc theo Mức giá tối đa: Thanh trượt (Range Slider) trực quan với biên độ từ 100.000đ đến 100.000.000đ kèm định dạng tiền tệ Việt Nam (VNĐ).

3. Trang Chi Tiết Sản Phẩm (detail.html):
   - Đọc ID sản phẩm từ URL Param (?id=...) để render chính xác dữ liệu của từng món hàng.
   - Bảng thông số kỹ thuật hiển thị dạng bảng trực quan (Key - Value).
   - Cho phép người dùng tùy chọn số lượng trước khi thêm vào giỏ.

4. Hệ Thống Giỏ Hàng & Lưu Trữ Dữ Liệu (cart.html):
   - Sử dụng Web Storage API (LocalStorage) để lưu trữ giỏ hàng, dữ liệu không bị mất khi F5 hoặc đóng trình duyệt.
   - Tự động cộng dồn số lượng nếu thêm cùng một sản phẩm nhiều lần.
   - Tăng, giảm số lượng hoặc xóa từng sản phẩm trực tiếp trong giỏ hàng.
   - Tự động tính toán tổng giá trị đơn hàng theo thời gian thực.
   - Hiển thị huy hiệu (badge) đếm số lượng món hàng trên thanh Header ở mọi trang.

5. Luồng Thanh Toán & Xác Nhận Đơn Hàng (checkout.html):
   - Kiểm tra tính hợp lệ dữ liệu nhập (Form Validation): Họ tên, số điện thoại, địa chỉ nhận hàng, phương thức thanh toán.
   - Thông báo đặt hàng thành công và tự động xóa giỏ hàng (Clear LocalStorage) sau khi thanh toán.

IV. HƯỚNG DẪN CÀI ĐẶT & CHẠY DỰ ÁN

* YÊU CẦU HỆ THỐNG:
  - Máy tính cài đặt trình duyệt web hiện đại: Google Chrome, Microsoft Edge, Firefox, Cốc Cốc hoặc Safari.
  - Trình soạn thảo mã nguồn khuyến nghị: Visual Studio Code.

* CÁCH 1: Chạy trực tiếp từ mã nguồn nội bộ (Local)
  1. Giải nén thư mục dự án (hoặc mở thư mục `DeTai_DoAn_ThietKeWeb` bằng VS Code).
  2. Cách 1.1 (Khuyên dùng):
     - Cài extension "Live Server" trên VS Code.
     - Nhấp chuột phải vào file `index.html` -> Chọn "Open with Live Server".
     - Website sẽ tự động mở trên cổng mặc định: http://127.0.0.1:5500/index.html.
  3. Cách 1.2:
     - Nhấp đúp chuột trực tiếp vào file `index.html` để mở bằng trình duyệt web.

* CÁCH 2: Trải nghiệm phiên bản trực tuyến (Online Production)
  - Dự án đã được triển khai (Deploy) tự động thông qua GitHub và Vercel.
  - Người dùng có thể truy cập link Vercel trực tiếp trên mọi thiết bị máy tính và điện thoại thông minh để kiểm tra toàn bộ tính năng.
