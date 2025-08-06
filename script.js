const hero = document.getElementById('hero');

const images = [
  'images/IMG_3818.jpg',
  'images/projet2.jpg',
  'images/projet3.jpg'
];

let index = 0;

function changeBackground() {
  hero.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}

// Lancer le slider
changeBackground();
setInterval(changeBackground, 5000); // Change toutes les 5 sec