document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const email = this.email.value.trim();
  const privacy = this.privacy.checked;

  // ⭐ ここを追加
  const message = this.message?.value.trim() || '';
  const topic = this.topic?.value || '';

  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = '';

  if (!name || !phone || !email) {
    errorMessage.textContent = '※必須項目が入力されていません';
    return;
  }

  if (!privacy) {
    errorMessage.textContent = '※プライバシーポリシーに同意してください';
    return;
  }

  localStorage.setItem('formData', JSON.stringify({
    name, phone, email, message, topic
  }));

  window.location.href = 'thanks.html';
});
