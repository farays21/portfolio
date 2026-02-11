window.addEventListener('scroll', function () {
  const header = document.querySelector('.navbar');
  const toTop = document.querySelector('#to-top');

  if (window.scrollY > 100) {
    header.classList.add('navbar-fixed');
    toTop.style.display = 'block';
  } else {
    header.classList.remove('navbar-fixed');
    toTop.style.display = 'none';
  }
});

document.querySelector('#to-top').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
