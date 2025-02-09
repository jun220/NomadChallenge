const clock = document.querySelector("#clock");
clock.innerText = "clock";

function setClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  clock.innerText = `${hours}:${date.getMinutes()}:${date.getSeconds()}`;
}

setClock();
setInterval(setClock, 1000);
// const date = new Date();
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getHours());
