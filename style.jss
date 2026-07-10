/* =========================
   Reset
========================= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#000;
    color:#fff;
    overflow:hidden;
}

/* =========================
   Background
========================= */

.background{
    position:fixed;
    inset:0;
    background:linear-gradient(to bottom,#050510,#180028,#32004d);
    z-index:-2;
}

.background::before{
    content:"";
    position:absolute;
    inset:0;
    background-image:radial-gradient(white 1px,transparent 1px);
    background-size:40px 40px;
    opacity:.45;
    animation:stars 60s linear infinite;
}

@keyframes stars{
    from{
        transform:translateY(0);
    }

    to{
        transform:translateY(-800px);
    }
}

/* =========================
   Sections
========================= */

section{
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:25px;
}

/* =========================
   Text
========================= */

h1{
    font-size:42px;
    color:#ff66b3;
    margin-bottom:20px;
    text-shadow:0 0 18px #ff2d75;
}

h3{
    font-size:22px;
    font-weight:300;
    margin-bottom:35px;
}

p{
    font-size:22px;
    max-width:800px;
    line-height:1.8;
}

/* =========================
   Buttons
========================= */

button{
    margin-top:20px;
    padding:15px 40px;
    border:none;
    border-radius:50px;
    background:#ff2d75;
    color:#fff;
    font-size:20px;
    cursor:pointer;
    transition:.3s;
    box-shadow:0 0 20px #ff2d75;
}

button:hover{
    transform:scale(1.08);
    background:#ff66b3;
}

/* =========================
   Floating Hearts
========================= */

.heart{

    position:fixed;
    bottom:-50px;
    pointer-events:none;
    animation:float 6s linear infinite;
    z-index:5;

}

@keyframes float{

    0%{
        transform:translateY(0) rotate(0deg);
        opacity:1;
    }

    100%{
        transform:translateY(-110vh) rotate(360deg);
        opacity:0;
    }

}


/* =========================
   Photo Gallery
========================= */

#gallery img{

    width:320px;
    height:430px;
    object-fit:cover;
    border-radius:25px;
    border:4px solid white;
    box-shadow:0 0 30px #ff4fa3;
    transition:.5s;

}

#gallery img:hover{

    transform:scale(1.05);

}


/* =========================
   Proposal Page
========================= */

#proposal h1{

    animation:pulse 2s infinite;

}


@keyframes pulse{

    0%{
        transform:scale(1);
    }

    50%{
        transform:scale(1.08);
    }

    100%{
        transform:scale(1);
    }

}


/* YES NO Buttons */

.choice-buttons{

    display:flex;
    gap:25px;
    justify-content:center;
    margin-top:30px;

}


#yesBtn{

    background:#00c853;
    box-shadow:0 0 20px #00c853;

}


#noBtn{

    background:#ff1744;
    box-shadow:0 0 20px #ff1744;

}


/* =========================
   Mobile Responsive
========================= */

@media(max-width:600px){

    h1{

        font-size:32px;

    }


    h3{

        font-size:18px;

    }


    p{

        font-size:18px;

    }


    #gallery img{

        width:280px;
        height:380px;

    }


    .choice-buttons{

        gap:15px;

    }


    button{

        padding:12px 30px;
        font-size:18px;

    }

}
