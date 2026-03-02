**CSR (1) :**

- sử dụng cơ chế SPA , tức ứng dụng nằm trong 1 page duy nhất, sau đó mới load dữ liệu

tính chất cơ bản của CSR :

- những logic đơn giản (validation, sort, filter) đều nằm ở client
- logic routing, render thì phần lớn nằm ở client
- logic phức tạp(thanh toán, phân quyền) hoặc cần xử lí nhiều thì vẫn ở server

* Ưu điểm :

- page chỉ cần load 1 lần duy nhất, khi chuyển trang hoặc lấy dữ liệu, JS sẽ lấy và gửi dữ liệu qua AJAX, ko cần load lại để thấy dữ liệu mới
- giảm tải được server do chuyển 1 phần logic sang cho client
- giảm tải được băng thông do chỉ lấy JSON và dữ liệu cần thiết, thay vì toàn bộ trang
- SPA hoạt động mượt mà hơn với các ứng dụng tương tác nhiều, vì code chạy trên browser

* Nhược điểm :

- Init load chậm hơn nếu optimized ko tốt vì browser phải tải toàn bộ JS, parse và chạy, gọi API sau đó mới render
- Project phải chia thành 2 phần FE và BE
- Ko chạy được nếu JS bị disable hoặc ở các trình duyệt cũ ko nhận JS ES6
- SEO ko tốt bằng SSR do bot crawler ko đọc được dữ liệu, để giải quyết thì phải kết hợp thêm SSR vì bot mới của google đã đọc được CSR
- Load chậm nếu device yếu

- Các trang web sử dụng tối ưu CSR :
- các trang web cần tương tác nhiều, các trang mạng xã hội (facebook, instagram,...)

**SSR (2) :**

- khi người dùng vào 1 trang web, trình duyệt gửi Get request lên server
- web server nhận request, đọc database, sau đó render html

tính chất cơ bản của SSR :

- logic từ đơn giản đến phức tạp đều ở phía server
- logic để routing nằm ở phía server
- logic để render nằm ở phía server

* Ưu điểm :

- Init load nhanh, dễ optimized vì toàn bộ xử lý ở server
- Đa số framework đều hỗ trợ
- Dễ hiểu và dễ code, vì code chung 1 project
- SEO tốt
- Chạy được trên phần lớn mọi trình duyệt

* Nhược điểm

- Mỗi lần chuyển trang là site phải load lại nhiều lần, tương tác kém
- Nặng server vì server phải xử lí nhiều logic và dữ liệu
- Tốn băng thông vì server sẽ gửi nhiều dữ liệu thừa và trùng (header, footer)

- Các trang web sử dụng tối ưu SSR :

* Các trang web bán hàng, tin tức, các web đọc truyện và forum vì cần load thông tin nhanh

**So sánh CSR(1) và SSR(2)**

1. nơi render

- (1) : trình duyệt (client)
- (2) : máy chủ (server)

2. tốc độ tải lần đầu

- (1) : chậm do tải JS rồi mới hiện nội dung
- (2) : nhanh do trả về HTML trước rồi mới tải JS

3. UX

- (1) : mượt mà
- (2) : có thể giật khi chuyển trang

4. SEO

- (1) : khó tối ưu hơn (2)
- (2) tối ưu tốt, thân thiện với công cụ tìm kiếm

5. Tổng kết :

- Mỗi cái đều có ưu và nhược riêng, sử dụng tùy theo dự án thực hiện, yêu cầu của dự án cũng như quốc gia, nhưng Nextjs hiện tại có thể kết hợp cả 2, giúp phát triển web 1 cách toàn diện
