fetch('parts/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    // ここでヘッダーメニューの動作をセットする
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const overlay = document.querySelector('.overlay');

    open.addEventListener('click', () => {
      overlay.classList.add('show');
      open.classList.add('hidde');
    });

    close.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hidde'); 
    });
  });

