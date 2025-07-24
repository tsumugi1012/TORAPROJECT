const sections = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.qa-box').forEach(box => {
    const question = box.querySelector('.question');
    const answer = box.querySelector('.answer');
    const arrow = box.querySelector('.arrow');

    // 確実に初期化
    answer.style.display = 'none';
    arrow.style.transform = 'rotate(0deg)';

    question.addEventListener('click', () => {
      if (answer.style.display === 'none') {
        answer.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
      } else {
        answer.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
      }
    });
  });
});

