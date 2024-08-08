// Animação :
const myObserver = new IntersectionObserver((entrada) => {
    entrada.forEach((entrou) => {
        if (entrou.isIntersecting) {
            if (entrou.target.classList.contains("anima1")) {
                entrou.target.classList.add("ver1");
            }
        } else {
            if (entrou.target.classList.contains("anima1")) {
                entrou.target.classList.remove("ver1");
            }
        } if (entrou.isIntersecting) {
            if (entrou.target.classList.contains("anima2")) {
                entrou.target.classList.add("ver2");
            }
        } else {
            if (entrou.target.classList.contains("anima2")) {
                entrou.target.classList.remove("ver2");
            }
        }
        if (entrou.isIntersecting) {
            if (entrou.target.classList.contains("anima3")) {
                entrou.target.classList.add("ver3");
            }
        } else {
            if (entrou.target.classList.contains("anima3")) {
                entrou.target.classList.remove("ver3");
            }
        }


    });

});

const elements3 = document.querySelectorAll(".anima3");
const elements2 = document.querySelectorAll(".anima2");
const elements1 = document.querySelectorAll(".anima1");


elements1.forEach((element) => {
    myObserver.observe(element);
});
elements2.forEach((element) => {
    myObserver.observe(element);
});
elements3.forEach((element) => {
    myObserver.observe(element);
});

// Botões Article:
var ft = document.querySelector('.photo')
var titulo = document.querySelector(".title");
var h4 = document.querySelector(".descri1");
var text = document.querySelector(".descri2");
var bt1 = document.querySelector(".btn1");
var bt2 = document.querySelector(".btn2");
var bt3 = document.querySelector(".btn3");

function text1() {
    titulo.innerHTML = "Hello World 👋🏼"
    h4.innerHTML = "Sou João Piornedo"
    text.innerHTML = "Sou um desenvolvedor web com experiência em projetos de desenvolvimento de sites totalmente responsivos, utilizando tecnologias modernas para garantir a melhor experiência do usuário. Estou constantemente aprendendo e me atualizando sobre novas linguagens e frameworks. Tenho um forte foco em práticas de design responsivo, acessibilidade e otimização de performance, assegurando que os sites funcionem perfeitamente em diversos dispositivos e navegadores."
    ft.style.top = '20em'; 
    ft.style.left = '9em';
}

function text2() {
    titulo.innerHTML = "Meus Objetivos"
    h4.innerHTML = ""
    text.innerHTML = "Meu objetivo é me juntar a uma grande empresa onde eu possa me especializar e crescer profissionalmente. Com foco, determinação e uma facilidade notável para aprender, estou comprometido em me tornar um especialista em minha área. Acredito que trabalhar em um ambiente desafiador e inovador me permitirá aprimorar minhas habilidades e contribuir significativamente para projetos de alto impacto."
    ft.style.top = '20em'; 
    ft.style.left = '9em';
}


function text3() {
    titulo.innerHTML = "Áreas de Estudo"
    h4.innerHTML = ""
    text.innerHTML = "Atualmente, estou estudando tecnologias como React, Node.js e JavaScript avançado. Estou sempre em busca de aprender e dominar novas tecnologias, mantendo-me atualizado e aprimorando minhas habilidades continuamente. Acredito que o aprendizado constante é fundamental para o crescimento profissional e para estar à frente no mercado de tecnologia."
    ft.style.top = '20em'; 
    ft.style.left = '9em';
}

bt1.addEventListener("click", text1)
bt2.addEventListener("click", text2)
bt3.addEventListener("click", text3)

// Redes Sociais:

var git = document.querySelector(".git")
var link = document.querySelector(".link")
var what = document.querySelector(".what")
var insta = document.querySelector(".insta")
var gmail = document.querySelector(".gmail")

// Github
function git_img() {
    //alert("passou")
    git.src = './imgs/img/github-2.png'
}
function git_reset() {
    git.src = "./imgs/img/github.png"
}

git.addEventListener("mouseout", git_reset)
git.addEventListener("mouseover", git_img)

//Linkedin

function link_img() {
    //alert("passou")
    link.src = './imgs/img/linkedin-2.png'
}
function link_reset() {
    link.src = "./imgs/img/linkedin.png"
}

link.addEventListener("mouseout", link_reset)
link.addEventListener("mouseover", link_img)

// What

function what_img() {
    //alert("passou")
    what.src = './imgs/img/whatsapp-2.png'
}
function what_reset() {
    what.src = "./imgs/img/whatsapp.png"
}
what.addEventListener("mouseout", what_reset)
what.addEventListener("mouseover", what_img)

// Instagram

function insta_img() {
    //alert("passou")
    insta.src = './imgs/img/instagram-2.png'
}
function insta_reset() {
    insta.src = "./imgs/img/instagram.png"
}
insta.addEventListener("mouseout", insta_reset)
insta.addEventListener("mouseover", insta_img)

// Gmail

function gmail_img() {
    //alert("passou")
    gmail.src = './imgs/img/gmail-2.png'
}
function gmail_reset() {
    gmail.src = "./imgs/img/gmail.png"
}
gmail.addEventListener("mouseout", gmail_reset)
gmail.addEventListener("mouseover", gmail_img)

