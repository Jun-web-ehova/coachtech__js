const target = document.getElementById("header__menu");
target.addEventListener('click', () => {
  const target = document.getElementById("header__menu");
  target.classList.toggle('open');
  const nav = document.getElementById("header__menu-hidden");
  nav.classList.toggle('in');
});

