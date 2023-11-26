# Báo Cáo Dự Án - Sao Chép Giao Diện Ứng Dụng Từ Điển TFLAT

## I. Giới Thiệu

### 1. Mục Tiêu
Phát triển một ứng dụng sao chép giao diện của ứng dụng từ điển đã có sẵn.
Xử lý giao diện người dùng để đảm bảo tính trực quan và dễ sử dụng.
Sử dụng API bên ngoài để thực hiện chức năng tìm kiếm từ điển.

### 2. Công Nghệ
- Sử Dụng React Native và Expo cho phát triển ứng dụng di động.
- JSON Server để giả mạo API và lưu trữ dữ liệu từ điển.

## II. Thiết Kế Giao Diện

### 1. Giao Diện Chính
   #### 1.1. Hiển Thị Từ Vựng
   Giao diện chính sẽ hiển thị danh sách từ vựng theo các gói học. Mỗi từ vựng sẽ đi kèm với hình ảnh minh họa và nút lựa chọn để thêm từ vựng vào danh sách yêu thích hoặc ghi chú.
   #### 1.2. Tìm Kiếm Từ Điển
   Thêm ô tìm kiếm nổi bật để người dùng có thể dễ dàng nhập từ cần tìm kiếm. Sử dụng biểu tượng lupa hoặc hình ảnh kính lúp để làm nổi bật chức năng này.
   #### 1.3. Lựa Chọn Gói Học Từ Vựng
   Tạo một khu vực nổi bật chứa danh sách các gói học từ vựng khác nhau. Mỗi gói có một hình ảnh minh họa và mô tả ngắn gọn để thu hút sự chú ý của người dùng.
   
### 2. Icon và Hình Ảnh Minh Họa
   #### 2.1. Sử Dụng Icon Tương Ứng
   Áp dụng các biểu tượng phù hợp cho từng chức năng, chẳng hạn như biểu tượng trái tim cho việc thêm vào yêu thích, biểu tượng chú thích cho việc tạo ghi chú, v.v.
   #### 2.2. Hình Ảnh Minh Họa Phong Phú
   Đảm bảo sử dụng hình ảnh minh họa rõ ràng và phong phú cho mỗi từ vựng. Hình ảnh nên được chọn kỹ lưỡng để tạo sự sinh động và ghi nhớ tốt hơn.

## III. Tích Hợp Chức Năng Tìm Kiếm và Hiển Thị Từ Đã Tra

### 1. Tích Hợp API Ngoại Việt
Kết nối với API từ một nguồn ngoại việt như https://dictionaryapi.dev/ dể co the cung cấp tu dien ve tu da tim kiem nhu tu loai, nghia, vi du, v.v.
Kết nối với API từ một nguồn ngoại việt như mymemory.translated để cung cấp dịch nhanh và chính xác.

### 2. Lưu Trữ Dữ Liệu Từ Đã Tra
Sử dụng JSON Server để lưu trữ dữ liệu từ đã tra và cung cấp chức năng quản lý lịch sử tra từ.

## IV. Phản Hồi và Đánh Giá

### 1. Thu Thập Phản Hồi Người Dùng
Sử dụng các công cụ thu thập phản hồi để đo lường sự hài lòng và đề xuất từ người dùng.

### 2. Điều Chỉnh Giao Diện Theo Phản Hồi
Dựa vào phản hồi người dùng, điều chỉnh giao diện để tối ưu hóa trải nghiệm người dùng và cải thiện tính năng của ứng dụng.

## V. Triển Khai và Kiểm Thử

### 1. Triển Khai Ứng Dụng
Sử dụng Expo để triển khai ứng dụng di động lên thiết bị thực.

### 2. Kiểm Thử và Sửa Lỗi
Thực hiện kiểm thử chức năng để đảm bảo tất cả các tính năng hoạt động đúng.
Chỉnh sửa giao diện phù hợp với app chính.
Xử lý lỗi và tối ưu hóa ứng dụng.

## VI. Hướng Phát Triển Tương Lai

### 1. Tính Năng Mở Rộng
Thêm các tính năng như đồng bộ hóa từ vựng, chia sẻ từ vựng, đăng kí các gói tài khoản, thực hiện các chức năng như chơi game giải trí, lọc từ vựng phù hợp, v.v.
Kết nối với nhiều nguồn dữ liệu từ điển khác nhau.

### 2. Tối Ưu Hóa Hiệu Suất
Tối ưu hóa hiệu suất ứng dụng để đảm bảo khả năng chạy mượt mà trên các thiết bị.

## VII. Phản Hồi và Đánh Giá

### 1. Thu Thập Phản Hồi Người Dùng
Tiếp tục sử dụng các công cụ thu thập phản hồi để đo lường sự hài lòng và nhận đầu vào.

### 2. Điều Chỉnh Giao Diện Theo Phản Hồi
Liên tục điều chỉnh giao diện dựa trên phản hồi người dùng để tối ưu hóa trải nghiệm và cải thiện tính năng ứng dụng.

## VIII. Thành Viên
- Nguyễn Lê Mỹ Châu (Nhóm Trưởng)
- Võ Ngọc Minh An


Run app :
- Tải project
- Mở project ở IDE hoặc Text Editor (ex :Vs code )
- Mở terminal trong floder chứ file node_modules
- run lệnh : npm run web 
- mở một cửa sổ terminal khác để khởi động json server 
- run lệnh : npx json-server --watch TFlat.json --port 3000
- Project được start ở http://localhost:19006/
