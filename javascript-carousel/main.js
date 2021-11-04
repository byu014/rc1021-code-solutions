function prevI() {
  i += imgNames.length;
  return (i - 1) % imgNames.length;
}

function nextI() {
  i += imgNames.length;
  return (i + 1) % imgNames.length;
}

function selectedIndex() {
  for (let index = 0; index < $circlesI.length; index++) {
    if ($circlesI[index] === event.target) {
      return index;
    }
  }
}

function intervalCB() {
  changeImage(nextI);
}

function changeImage(cb) {
  $circlesI[i].classList.remove('fas');
  $circlesI[i].classList.add('far');
  i = cb();
  $circlesI[i].classList.remove('far');
  $circlesI[i].classList.add('fas');
  $img.src = `images/${imgNames[i]}`;
  clearInterval(carouselIntervalId);
  carouselIntervalId = setInterval(intervalCB, 3000);
}

const $img = document.querySelector('img');
const $circlesI = document.querySelectorAll('.fa-circle');
const $carousel = document.querySelector('.carousel');
const $circles = document.querySelector('.circles');
let i = 0;
let imgNames = ['001.png', '004.png', '007.png', '025.png', '039.png'];
let carouselIntervalId = setInterval(intervalCB, 2000);

$carousel.addEventListener('click', function (event) {
  if (event.target.matches('.fa-chevron-left')) {
    changeImage(prevI);
  } else if (event.target.matches('.fa-chevron-right')) {
    changeImage(nextI);
  }
});

$circles.addEventListener('click', function (event) {
  if (event.target.matches('.fa-circle')) {
    changeImage(selectedIndex);
  }
});
