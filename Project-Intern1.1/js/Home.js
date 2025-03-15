document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});

//sign up

function togglePassword(inputId, icon) {
  var input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    icon.textContent = "👁️"; // Hiện mật khẩu
  } else {
    input.type = "password";
    icon.textContent = "🙈"; // Ẩn mật khẩu
  }
}
