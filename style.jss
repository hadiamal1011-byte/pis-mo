/* ====================================
        ОБЩИЕ НАСТРОЙКИ
==================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{

    font-family:'Montserrat',sans-serif;

    overflow:hidden;

    color:white;

    height:100vh;

}

/* ====================================
            ФОН
==================================== */

.background{

    position:fixed;

    top:0;
    left:0;

    width:100%;
    height:100%;

    background:
    linear-gradient(
    180deg,
    #8b0b21 0%,
    #560614 45%,
    #240108 100%
    );

    z-index:-2;

}

/* ====================================
          ЛЕТАЮЩИЕ СЕРДЦА
==================================== */

.hearts{

    position:fixed;

    width:100%;
    height:100%;

    overflow:hidden;

    z-index:-1;

}

/* ====================================
            ЭКРАНЫ
==================================== */

.screen{

    position:absolute;

    top:0;
    left:0;

    width:100%;
    height:100vh;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    text-align:center;

    padding:40px;

    opacity:0;

    visibility:hidden;

    transition:1s;

}

.screen.active{

    opacity:1;

    visibility:visible;

}

/* ====================================
            ЗАГОЛОВОК
==================================== */

h1{

    font-size:58px;

    font-weight:800;

    line-height:1.2;

    margin-bottom:45px;

    text-shadow:
    0 0 18px rgba(255,255,255,.15);

}

h2{

    font-size:46px;

    margin-bottom:45px;

    font-weight:700;

}

/* ====================================
            КНОПКА
==================================== */

.btn{

    background:#111;

    color:white;

    border:none;

    border-radius:60px;

    padding:18px 60px;

    font-size:24px;

    font-weight:700;

    cursor:pointer;

    transition:.35s;

    box-shadow:

    0 0 20px rgba(255,0,60,.45);

}

.btn:hover{

    transform:translateY(-4px);

    box-shadow:

    0 0 35px rgba(255,0,60,.8);

}

.btn:active{

    transform:scale(.96);

}

/* ====================================
        СПАСИБО
==================================== */

.thanks{

    margin-top:28px;

    font-size:22px;

    opacity:.9;

}

/* ====================================
        ПИСЬМО
==================================== */

.letter{

    width:100%;
    max-width:850px;

    font-size:25px;

    line-height:1.9;

    min-height:360px;

}

.hidden{

    display:none;

}

/* ====================================
      МОБИЛЬНАЯ ВЕРСИЯ
==================================== */

@media(max-width:768px){

h1{

font-size:40px;

}

h2{

font-size:34px;

}

.btn{

font-size:20px;

padding:16px 48px;

}

.letter{

font-size:20px;

line-height:1.8;

}

.thanks{

font-size:18px;

}

}
/* ===========================
      КОНВЕРТ
=========================== */

.envelope{

    width:340px;
    height:240px;

    background:#181818;

    border-radius:18px;

    display:flex;
    justify-content:center;
    align-items:center;

    box-shadow:
    0 0 35px rgba(255,0,80,.35);

    animation:float 3s ease-in-out infinite;

}

.paper{

    width:290px;

    background:white;

    color:#222;

    border-radius:15px;

    padding:30px;

    text-align:center;

}

.paper h3{

    font-size:28px;

    margin-bottom:18px;

}

.paper p{

    font-size:18px;

    line-height:1.8;

}

.emoji{

    font-size:45px;

    margin-bottom:15px;

}

/* ===========================
      СЕРДЕЧКИ
=========================== */

.heart{

    position:absolute;

    color:#ff2e63;

    animation:heartMove linear infinite;

    opacity:.4;

    user-select:none;

}

@keyframes heartMove{

0%{

transform:translateY(120vh) scale(.5);

opacity:0;

}

20%{

opacity:.35;

}

100%{

transform:translateY(-120vh) scale(1.2);

opacity:0;

}

}

/* ===========================
      АНИМАЦИИ
=========================== */

@keyframes float{

0%{

transform:translateY(0px);

}

50%{

transform:translateY(-10px);

}

100%{

transform:translateY(0px);

}

}

.fadeIn{

animation:fadeIn .8s ease;

}

@keyframes fadeIn{

from{

opacity:0;

transform:translateY(25px);

}

to{

opacity:1;

transform:translateY(0);

}

}

/* ===========================
     КРАСИВОЕ СВЕЧЕНИЕ
=========================== */

h1,h2{

text-shadow:

0 0 10px rgba(255,255,255,.2),

0 0 25px rgba(255,0,70,.25);

}

.paper{

box-shadow:

0 0 30px rgba(0,0,0,.35);

}