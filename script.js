// ===============================
// ЭКРАНЫ
// ===============================

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

const typingText = document.getElementById("typingText");

// ===============================
// ТЕКСТ ПИСЬМА
// ===============================

const paragraphs = [

"Мне сейчас непросто это писать, но я не хочу молчать.",

"Я невероятно благодарен судьбе за то, что познакомился с тобой, ты потрясающий человек.",

"Но я чувствую, что из-за нашей тишины мы сейчас на грани расставания, и от этого очень тяжело.",

"Мне не хочется, чтобы мы просто так потеряли друг друга.",

"Давай встретимся и спокойно поговорим?",

"Я люблю тебя, менин кошаканым ❤️"

];

// ===============================
// ПЕРЕХОД НА 2 ЭКРАН
// ===============================

startBtn.onclick = () => {

screen1.classList.remove("active");

setTimeout(() => {

screen2.classList.add("active");

typeLetter();

},600);

};

// ===============================
// ЭФФЕКТ ПЕЧАТИ
// ===============================

let index = 0;

function typeLetter(){

if(index >= paragraphs.length){

nextBtn.classList.remove("hidden");
nextBtn.classList.add("fadeIn");

return;

}

const p = document.createElement("p");

typingText.appendChild(p);

let text = paragraphs[index];

let i = 0;

const timer = setInterval(()=>{

p.innerHTML += text.charAt(i);

i++;

if(i >= text.length){

clearInterval(timer);

index++;

setTimeout(typeLetter,900);

}

},28);

}
// ===============================
// ПЕРЕХОД НА 3 ЭКРАН
// ===============================

nextBtn.onclick = () => {

    screen2.classList.remove("active");

    setTimeout(() => {

        screen3.classList.add("active");

    },600);

};

// ===============================
// ЛЕТАЮЩИЕ СЕРДЕЧКИ
// ===============================

const hearts = document.querySelector(".hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize =
    (18 + Math.random()*22) + "px";

    heart.style.animationDuration =
    (6 + Math.random()*5) + "s";

    heart.style.opacity =
    (0.2 + Math.random()*0.4);

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,600);

// ===============================
// АНИМАЦИЯ ПОЯВЛЕНИЯ
// ===============================

document.querySelectorAll(".screen").forEach(screen=>{

    screen.classList.add("fadeIn");

});

// ===============================
// ДОПОЛНИТЕЛЬНЫЙ ЭФФЕКТ КНОПОК
// ===============================

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px) scale(1.02)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

// ===============================
// НЕСКОЛЬКО СЕРДЕЧЕК ПРИ ЗАГРУЗКЕ
// ===============================

for(let i=0;i<12;i++){

    setTimeout(createHeart,i*250);

}