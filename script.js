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


// // Projetos:
const proj_text = document.querySelector('.proj_text')
const proj = [...document.querySelectorAll('.projeto')]
const proj0 = proj[0]
const proj1 = proj[1]
const proj2 = proj[2]
const proj3 = proj[3]
const proj4 = proj[4]


//Proj[0] Animals
proj0.style.backgroundImage = "url('./imgs/site1.PNG')";
proj0.style.backgroundPosition = 'left 13%  top 25%'
proj0.addEventListener('mouseover', () => {
    proj0.style.backgroundImage = "url('./imgs/site1.PNG')";
    proj0.style.backgroundPosition = 'left  top 35%'
    proj0.style.width = '300px'
    proj0.style.transition = ' 1s'
})
//selecionar proj[0]
proj0.addEventListener('click', () => {
    proj1.classList.remove('proj_selec')
    proj2.classList.remove('proj_selec')
    proj3.classList.remove('proj_selec')
    proj0.classList.toggle('proj_selec')
    if(proj0.classList.contains('proj_selec')){
        proj_text.firstElementChild.innerHTML = 'Page Animals'
    proj_text.lastElementChild.innerHTML = 'Este projeto consiste em uma página web interativa, focada em artigos sobre animais. O design incorpora um layout dinâmico e cores vibrantes, criando uma experiência visual cativante para o usuário. O site é 100% responsivo, garantindo uma navegação fluida em qualquer dispositivo. Foram testadas diversas paletas de cores para atrair e envolver os usuários, além de animações sutis que melhoram a fluidez do site e a experiência de navegação.'
    }
    else{
        proj_text.firstElementChild.innerHTML = 'Descrição'
        proj_text.lastElementChild.innerHTML = 'Selecione um projeto'
        proj0.style.width = '200px'
    }
})
// mouse out proj[0]
proj0.addEventListener('mouseout', () => {
    if (proj0.classList.contains('proj_selec')) {
        proj0.style.backgroundPosition = 'left  top 35%'
    }
    else {
        proj0.style.backgroundPosition = 'left 13%  top 25%'
        proj0.style.width = '200px'
    }
})

//Proj[1] Poema
proj1.style.backgroundImage = "url('./imgs/site2.PNG')";
proj1.style.backgroundPosition= 'right'
proj1.style.backgroundSize='cover'

proj1.addEventListener('mouseover', () => {
    proj1.style.backgroundImage = "url('./imgs/site2.PNG')";
    proj1.style.width = '300px'
    proj1.style.backgroundPosition= 'left center'
    proj1.style.transition = ' 1s'
})
//selecionar proj[1]
proj1.addEventListener('click', () => {
    proj0.classList.remove('proj_selec')
    proj2.classList.remove('proj_selec')
    proj3.classList.remove('proj_selec')
    proj1.classList.toggle('proj_selec')
    if(proj1.classList.contains('proj_selec')){
    proj1.style.backgroundPosition= 'left center'
    proj_text.firstElementChild.innerHTML = 'Page Poema'
    proj_text.lastElementChild.innerHTML = 'Este projeto foi desenvolvido com o objetivo de aplicar o efeito parallax em uma página web de layout responsivo. O conteúdo principal é um poema, complementado por animações de scroll que aprimoram a interatividade do usuário. O site foi inicialmente criado como parte de um exercício de um curso que fiz, mas foi adaptado e aprimorado com melhorias significativas.'
    }
    else{
        proj_text.firstElementChild.innerHTML = 'Descrição'
        proj_text.lastElementChild.innerHTML = 'Selecione um projeto'
        proj1.style.width = '200px'
    }
})
// mouse out proj[1]
proj1.addEventListener('mouseout', () => {
    if (proj1.classList.contains('proj_selec')) {
        proj1.style.backgroundPosition= 'left center'
    }
    else {
        proj1.style.backgroundPosition= 'right'
        proj1.style.width = '200px'
    }
})
//Proj[2] 
proj2.style.backgroundImage = "url('./imgs/site1.PNG')";
proj2.style.backgroundPosition= 'right'
proj2.style.backgroundSize='cover'

proj2.addEventListener('mouseover', () => {
    proj2.style.width = '300px'
    proj2.style.backgroundPosition= 'left center'
    proj2.style.transition = ' 1s'
})
//selecionar proj[2]
proj2.addEventListener('click', () => {
    proj0.classList.remove('proj_selec')
    proj1.classList.remove('proj_selec')
    proj3.classList.remove('proj_selec')
    proj2.classList.toggle('proj_selec')
    if(proj2.classList.contains('proj_selec')){
    proj2.style.backgroundPosition= 'left center'
    proj_text.firstElementChild.innerHTML = 'Page Poema'
    proj_text.lastElementChild.innerHTML = 'Este projeto foi desenvolvido com o objetivo de aplicar o efeito parallax em uma página web de layout responsivo. O conteúdo principal é um poema, complementado por animações de scroll que aprimoram a interatividade do usuário. O site foi inicialmente criado como parte de um exercício de um curso que fiz, mas foi adaptado e aprimorado com melhorias significativas.'
    }
    else{
        proj_text.firstElementChild.innerHTML = 'Descrição'
        proj_text.lastElementChild.innerHTML = 'Selecione um projeto'
        proj2.style.width = '200px'
    }
})
// mouse out proj[2]
proj2.addEventListener('mouseout', () => {
    if (proj2.classList.contains('proj_selec')) {
        proj2.style.backgroundPosition= 'left center'
    }
    else {
        proj2.style.backgroundPosition= 'right'
        proj2.style.width = '200px'
    }
})

//Proj[3]
proj3.style.backgroundImage = "url('./imgs/site2.PNG')";
proj3.style.backgroundPosition= 'right'
proj3.style.backgroundSize='cover'

proj3.addEventListener('mouseover', () => {
    proj3.style.backgroundImage = "url('./imgs/site2.PNG')";
    proj3.style.width = '300px'
    proj3.style.backgroundPosition= 'left center'
    proj3.style.transition = ' 1s'
})
//selecionar proj[3]
proj3.addEventListener('click', () => {
    proj0.classList.remove('proj_selec')
    proj1.classList.remove('proj_selec')
    proj2.classList.remove('proj_selec')
    proj3.classList.toggle('proj_selec')
    if(proj3.classList.contains('proj_selec')){
    proj3.style.backgroundPosition= 'left center'
    proj_text.firstElementChild.innerHTML = 'Page Poema'
    proj_text.lastElementChild.innerHTML = 'Este projeto foi desenvolvido com o objetivo de aplicar o efeito parallax em uma página web de layout responsivo. O conteúdo principal é um poema, complementado por animações de scroll que aprimoram a interatividade do usuário. O site foi inicialmente criado como parte de um exercício de um curso que fiz, mas foi adaptado e aprimorado com melhorias significativas.'
    }
    else{
        proj_text.firstElementChild.innerHTML = 'Descrição'
        proj_text.lastElementChild.innerHTML = 'Selecione um projeto'
        proj3.style.width = '200px'
    }
})
// mouse out proj[3]
proj3.addEventListener('mouseout', () => {
    if (proj3.classList.contains('proj_selec')) {
        proj3.style.backgroundPosition= 'left center'
    }
    else {
        proj3.style.backgroundPosition= 'right'
        proj3.style.width = '200px'
    }
})

//Selecionados:



// Redes Sociais:
const rd = [...document.querySelectorAll('.rs')]
//GitHub:
rd[0].addEventListener('mouseover', () => {
    rd[0].src = './imgs/img/github-2.png'
    rd[0].addEventListener('mouseout', () => {
        rd[0].src = './imgs/img/github.png'
    })

})
//Linkedin:
rd[1].addEventListener('mouseover', () => {
    rd[1].src = './imgs/img/linkedin-2.png'
    rd[1].addEventListener('mouseout', () => {
        rd[1].src = './imgs/img/linkedin.png'
    })

})
//Whats:
rd[2].addEventListener('mouseover', () => {
    rd[2].src = './imgs/img/whatsapp-2.png'
    rd[2].addEventListener('mouseout', () => {
        rd[2].src = './imgs/img/whatsapp.png'
    })

})
//Insta:
rd[3].addEventListener('mouseover', () => {
    rd[3].src = './imgs/img/instagram-2.png'
    rd[3].addEventListener('mouseout', () => {
        rd[3].src = './imgs/img/instagram.png'
    })

})
//Gmail:
rd[4].addEventListener('mouseover', () => {
    rd[4].src = './imgs/img/gmail-2.png'
    rd[4].addEventListener('mouseout', () => {
        rd[4].src = './imgs/img/gmail.png'
    })

})