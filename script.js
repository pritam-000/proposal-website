// =========================
// Elements
// =========================

const welcome = document.getElementById("welcome");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

const typingText = document.getElementById("typingText");


// =========================
// Floating Hearts
// =========================

const heartBox = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = 
    (20 + Math.random()*25) + "px";

    heart.style.animationDuration =
    (4 + Math.random()*4) + "s";

    heartBox.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },8000);

}


setInterval(createHeart,300);


// =========================
// Love Letter Typing
// =========================

const message = `তোমাকে আমি অনেক ভালোবাসি ❤️

আমার রাগী সোনা Ankita 🌹

তোমাকে আমার রানী করে রাখতে চাই।

আমার জীবনের প্রতিটা সুখ-দুঃখ
তোমার সাথে ভাগ করে নিতে চাই।

তুমি কি আমার পথ চলার সঙ্গী হতে চাও? 💍`;


startBtn.onclick = function(){

    welcome.style.display="none";

    letter.style.display="flex";

    typingText.innerHTML="";

    let i=0;


    const typing = setInterval(()=>{


        typingText.innerHTML += message.charAt(i);

        i++;


        if(i >= message.length){

            clearInterval(typing);

        }


    },50);

};

// =========================
// Photo Slideshow
// =========================

const slideImage = document.getElementById("slideImage");

const photos = [

    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg"

];


let currentPhoto = 0;


// Continue Button

nextBtn.onclick = function(){

    letter.style.display="none";

    gallery.style.display="flex";


    slideImage.src = photos[0];


    setInterval(()=>{

        currentPhoto++;

        if(currentPhoto >= photos.length){

            currentPhoto = 0;

        }


        slideImage.src = photos[currentPhoto];


    },2500);


};


// =========================
// Go To Proposal Page
// =========================

const proposalBtn = document.getElementById("proposalBtn");


proposalBtn.onclick = function(){


    gallery.style.display="none";


    document.getElementById("proposal").style.display="flex";


};

// =========================
// Proposal Buttons
// =========================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const proposalTitle = document.getElementById("proposalTitle");
const proposalText = document.getElementById("proposalText");


// YES Button

yesBtn.onclick = function(){

    proposalTitle.innerHTML =
    "💖 Thank You My Love Ankita 💖";


    proposalText.innerHTML =
    "তুমি আমার জীবনের সবচেয়ে সুন্দর উপহার ❤️<br><br>" +
    "Pritam ❤️ Ankita<br>" +
    "Our Journey Begins Forever 🌹";


    yesBtn.style.display="none";

    noBtn.style.display="none";


    startCelebration();

};


// NO Button Running

function moveNoButton(){

    const x = Math.random() * 
    (window.innerWidth - noBtn.offsetWidth);

    const y = Math.random() * 
    (window.innerHeight - noBtn.offsetHeight);


    noBtn.style.position="fixed";

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";

}


noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("touchstart", moveNoButton);


// =========================
// Celebration
// =========================

function startCelebration(){

    for(let i=0; i<80; i++){

        createHeart();

    }

}

// =========================
// Confetti Effect
// =========================

function createConfetti(){

    const confetti = document.createElement("div");

    confetti.innerHTML = "✨";

    confetti.style.position = "fixed";

    confetti.style.left = Math.random()*100 + "vw";

    confetti.style.top = "-20px";

    confetti.style.fontSize =
    (15 + Math.random()*20) + "px";

    confetti.style.zIndex = "999";

    confetti.style.animation =
    "fall 3s linear";


    document.body.appendChild(confetti);


    setTimeout(()=>{

        confetti.remove();

    },3000);

}


// Start Confetti

function startConfetti(){

    let count = 0;

    const confettiTimer = setInterval(()=>{

        createConfetti();

        count++;

        if(count > 100){

            clearInterval(confettiTimer);

        }

    },30);

}


// Add Confetti With YES

yesBtn.addEventListener("click",()=>{

    startConfetti();

});


// =========================
// Final Message Animation
// =========================

function finalMessage(){

    proposalTitle.innerHTML =
    "❤️ Pritam ❤️ Ankita ❤️";


    proposalText.innerHTML =
    "Forever Together 🌹<br><br>" +
    "A Beautiful Journey Begins... 💍";

}


// =========================
// Confetti Animation Style
// =========================

const style = document.createElement("style");

style.innerHTML = `

@keyframes fall{

    from{

        transform:translateY(0) rotate(0deg);

    }

    to{

        transform:translateY(100vh) rotate(360deg);

    }

}

`;

document.head.appendChild(style);
