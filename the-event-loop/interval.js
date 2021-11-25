let count = 3;

const blastOffInterval = setInterval(() => {
  if (count <= 0) {
    console.log('Blast off!');
    clearInterval(blastOffInterval);
  } else {
    console.log(count--);
  }
}, 1000);
