document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('formData'));

  if (!data) {
    document.getElementById('formResult').innerHTML = '<p>入力内容が見つかりません。</p>';
    return;
  }

  const resultBox = document.getElementById('formResult');
  resultBox.innerHTML = `
    <p><strong>ご氏名:</strong> ${data.name}</p>
    <p><strong>電話番号:</strong> ${data.phone}</p>
    <p><strong>メール:</strong> ${data.email}</p>
    <p><strong>お問い合わせ項目:</strong> ${data.topic}</p>
    <p><strong>お問い合わせ内容:</strong><br>${data.message.replace(/\n/g, '<br>')}</p>
  `;

  document.getElementById('backTop').addEventListener('click', () => {
    localStorage.removeItem('formData');
    window.location.href = 'index.html';
  });
});
