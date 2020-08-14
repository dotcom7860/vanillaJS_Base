const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImg(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

//floor(바닥) 과 ceil(천장) = (소수점이나 숫자)버림과 올림
function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber);
}

init();