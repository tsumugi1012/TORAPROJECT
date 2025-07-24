fetch("parts/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch(error => console.error("フッターの読み込みに失敗しました:", error));
