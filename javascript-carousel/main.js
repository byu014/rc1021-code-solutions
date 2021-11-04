// callback functions depending on the image selection method
function leftI() {
  i += imgNames.length;
  return (i - 1) % imgNames.length;
}

function rightI() {
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

// callback for setInterval
function intervalCB() {
  changeImage(rightI);
}

// function used to change current image, pass in respective callback to get index of next image
function changeImage(nextICB) {
  $circlesI[i].classList.remove('fas');
  $circlesI[i].classList.add('far');
  i = nextICB();
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

// listens for clicks on left and right arrows
$carousel.addEventListener('click', function (event) {
  if (event.target.matches('.fa-chevron-left')) {
    changeImage(leftI);
  } else if (event.target.matches('.fa-chevron-right')) {
    changeImage(rightI);
  }
});

// lsitens for clicks on circles
$circles.addEventListener('click', function (event) {
  if (event.target.matches('.fa-circle')) {
    changeImage(selectedIndex);
  }
});
