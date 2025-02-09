const backgroundImage = document.getElementById("background-image");
let backgroundIndex = Math.floor(Math.random() * 4 + 1);

const imgSrc = `img/Background${backgroundIndex}.png`;

backgroundImage.src = imgSrc;
console.log(imgSrc);
document.body.style.backgroundImage = imgSrc;
