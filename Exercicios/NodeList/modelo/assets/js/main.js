const paragrafos = document.querySelector('.paragrafos');
const listP = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of listP) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#FFFFFF'
}