// Validation Form Đặt Hàng
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const city = document.getElementById("city");
  const deliveryDate = document.getElementById("delivery-date");
  const address = document.getElementById("address");

  // Thiết lập ngày tối thiểu cho input date là ngày hôm nay
  const today = new Date().toISOString().split("T")[0];
  deliveryDate.setAttribute("min", today);

  // Hàm hiển thị lỗi màu đỏ
  function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add("error");
    const errorMsg = formControl.querySelector(".error-msg");
    if (errorMsg) {
      errorMsg.textContent = message;
    }
  }

  // Hàm xóa lỗi khi nhập đúng
  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove("error");
    const errorMsg = formControl.querySelector(".error-msg");
    if (errorMsg) {
      errorMsg.textContent = "";
    }
  }

  // Kiểm tra định dạng Email bằng Regular Expression
  function isValidEmail(emailVal) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(emailVal).toLowerCase());
  }

  // Kiểm tra số điện thoại (10 chữ số, bắt đầu bằng 0)
  function isValidPhone(phoneVal) {
    const re = /^0[0-9]{9}$/;
    return re.test(phoneVal.trim());
  }

  // Hàm validate toàn bộ form
  function validateInputs() {
    let isValid = true;

    // 1. Kiểm tra Họ tên
    if (fullname.value.trim() === "") {
      showError(fullname, "Họ tên không được để trống!");
      isValid = false;
    } else if (fullname.value.trim().length < 3) {
      showError(fullname, "Họ tên phải có ít nhất 3 ký tự!");
      isValid = false;
    } else {
      showSuccess(fullname);
    }

    // 2. Kiểm tra Email
    if (email.value.trim() === "") {
      showError(email, "Email không được để trống!");
      isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
      showError(email, "Định dạng email không hợp lệ!");
      isValid = false;
    } else {
      showSuccess(email);
    }

    // 3. Kiểm tra Số điện thoại
    if (phone.value.trim() === "") {
      showError(phone, "Số điện thoại không được để trống!");
      isValid = false;
    } else if (!isValidPhone(phone.value.trim())) {
      showError(phone, "SĐT phải gồm 10 số và bắt đầu bằng số 0!");
      isValid = false;
    } else {
      showSuccess(phone);
    }

    // 4. Kiểm tra Tỉnh / Thành phố
    if (city.value === "") {
      showError(city, "Vui lòng chọn Tỉnh/Thành phố!");
      isValid = false;
    } else {
      showSuccess(city);
    }

    // 5. Kiểm tra Ngày giao hàng
    if (deliveryDate.value === "") {
      showError(deliveryDate, "Vui lòng chọn ngày giao hàng!");
      isValid = false;
    } else if (deliveryDate.value < today) {
      showError(deliveryDate, "Ngày giao hàng không thể ở trong quá khứ!");
      isValid = false;
    } else {
      showSuccess(deliveryDate);
    }

    // 6. Kiểm tra Địa chỉ chi tiết
    if (address.value.trim() === "") {
      showError(address, "Vui lòng nhập địa chỉ cụ thể để giao hàng!");
      isValid = false;
    } else {
      showSuccess(address);
    }

    return isValid;
  }

  // Lắng nghe sự kiện Submit Form
  form.addEventListener("submit", (e) => {
    // Ngăn tải lại trang mặc định
    e.preventDefault();

    const isFormValid = validateInputs();

    if (isFormValid) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống! Vui lòng chọn sản phẩm trước khi đặt hàng.");
        return;
      }

      alert("🎉 Đặt hàng thành công! Đơn hàng của bạn đã được ghi nhận vào hệ thống.");
      // Xóa giỏ hàng sau khi đặt thành công
      localStorage.removeItem("cart");
      updateCartCount();
      form.reset();
      window.location.href = "index.html";
    }
  });
});