const sections = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 1回だけでいい場合
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});
