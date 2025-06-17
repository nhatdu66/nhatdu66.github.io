document.addEventListener('DOMContentLoaded', function() {
  // Toggle menu cho mobile
  const toggleMenuBtn = document.getElementById('toggleMenu');
  const navLinks = document.querySelector('.nav-links');

  if (toggleMenuBtn) {
    toggleMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  }

  // Dark Mode toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      body.classList.toggle('dark');
      // Lưu lại lựa chọn của người dùng vào localStorage
      if (body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  }
  
  // Kiểm tra trạng thái dark mode khi load trang
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark');
  }

  // Nút hành động trong phần Hero
  const actionButton = document.getElementById('actionButton');
  if (actionButton) {
    actionButton.addEventListener('click', function() {
      alert('Cảm ơn bạn đã nhấn nút!');
    });
  }

  // Xử lý form liên hệ
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const formResponse = document.getElementById('formResponse');

      // Kiểm tra xem người dùng đã điền đầy đủ chưa
      if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        formResponse.innerHTML = '<p style="color: red;">Vui lòng điền đầy đủ thông tin!</p>';
      } else {
        // Giả lập gửi form và hiển thị thông báo thành công
        formResponse.innerHTML = `<p style="color: green;">Cảm ơn ${name}, tin nhắn của bạn đã được gửi!</p>`;
        contactForm.reset();
      }
    });
  }
});
