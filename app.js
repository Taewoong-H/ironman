const icons = document.querySelectorAll('.icon');
const heros = document.querySelectorAll('.hero');
const gradients = document.querySelectorAll('.gradient');

var prevColor = 'blue';

function handleChangeIcon() {
  const primary = this.getAttribute('primary'),
    color = this.getAttribute('color'),
    hero = document.querySelector(`.hero[color="${color}"]`),
    gradient = document.querySelector(`.gradient[color="${color}"]`),
    prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`),
    heroName = document.querySelector('.big');

  icons.forEach((i) => i.classList.remove('active'));
  this.classList.add('active');

  document.documentElement.style.setProperty('--primary', primary);
  heros.forEach((h) => h.classList.remove('show'));
  hero.classList.add('show');

  gradients.forEach((g) => g.classList.remove('first', 'second'));
  gradient.classList.add('first');
  prevGradient.classList.add('second');

  prevColor = color;

  if (color === 'blue') {
    heroName.innerText = 'Captain America';
  } else if (color === 'red') {
    heroName.innerText = 'Iron man';
  } else if (color === 'green') {
    heroName.innerText = 'Hulk';
  } else if (color === 'orange') {
    heroName.innerText = 'Spider man';
  } else if (color === 'black') {
    heroName.innerText = 'Thor';
  }
}

function init() {
  icons.forEach((i) => i.addEventListener('click', handleChangeIcon));
}

init();
