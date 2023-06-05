// nusitaikyti i mygtuka

const btn1El = document.querySelector('button#btn1');

console.log('btn1El ===', btn1El);

btn1El.onclick = function () {
  alert('Sakiau nespaust');
  window.location.href = '/about.html';
};
