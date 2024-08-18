const ft = document.querySelector('.photo')
const btn = [...document.querySelectorAll(".btn")];
const article = document.querySelector('.artigo')
const art= [...article.children]
var h1 = art[0]
var h4 = art[1]
var p = art[2]



//Telas de 
if (window.innerWidth <= 375) {
    ft.style.width = '125px'
    ft.style.top = '0.8em';
    ft.style.left = '8em';
    ft.style.opacity = '1'
}
if (window.innerHeight > 800) {
    ft.style.top = '3em';
    ft.style.left = '8em'
    ft.style.opacity = '1'
}

// Botões Article Apresentação:
const btn0 = btn[0]
const btn1 = btn[1]
const btn2 = btn[2]
btn0.addEventListener('click', () => {
    article.style.height='20em'
    h1.innerHTML = "Hello World 👋🏼"
    h4.innerHTML = "Sou João Piornedo"
    p.innerHTML = "Sou um desenvolvedor web com experiência em projetos de desenvolvimento de sites totalmente responsivos, utilizando tecnologias modernas para garantir a melhor experiência do usuário. Estou constantemente aprendendo e me atualizando sobre novas linguagens e frameworks. Tenho um forte foco em práticas de design responsivo, acessibilidade e otimização de performance, assegurando que os sites funcionem perfeitamente em diversos dispositivos e navegadores."
})
//Botão 1 Objetivos
btn1.addEventListener('click', () => {
    article.style.height='20em'
    h1.innerHTML = "Meus Objetivos"
    h4.innerHTML = ""
    p.innerHTML = "Meu objetivo é me juntar a uma grande empresa onde eu possa me especializar e crescer profissionalmente. Com foco, determinação e uma facilidade notável para aprender, estou comprometido em me tornar um especialista em minha área. Acredito que trabalhar em um ambiente desafiador e inovador me permitirá aprimorar minhas habilidades e contribuir significativamente para projetos de alto impacto."
})
//Botão 1 Área de Estudos
btn2.addEventListener('click', () => {
    article.style.height='20em'
    h1.innerHTML = "Áreas de Estudo"
    h4.innerHTML = ""
    p.innerHTML = "Atualmente, estou estudando tecnologias como React, Node.js e JavaScript avançado. Estou sempre em busca de aprender e dominar novas tecnologias, mantendo-me atualizado e aprimorando minhas habilidades continuamente. Acredito que o aprendizado constante é fundamental para o crescimento profissional e para estar à frente no mercado de tecnologia."
})


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
    if (proj0.classList.contains('proj_selec')) {
        proj_text.firstElementChild.innerHTML = 'Page Animals'
        proj_text.lastElementChild.innerHTML = 'Este projeto consiste em uma página web interativa, focada em artigos sobre animais. O design incorpora um layout dinâmico e cores vibrantes, criando uma experiência visual cativante para o usuário. O site é 100% responsivo, garantindo uma navegação fluida em qualquer dispositivo. Foram testadas diversas paletas de cores para atrair e envolver os usuários, além de animações sutis que melhoram a fluidez do site e a experiência de navegação.'
    }
    else {
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
proj1.style.backgroundPosition = 'right'
proj1.style.backgroundSize = 'cover'

proj1.addEventListener('mouseover', () => {
    proj1.style.backgroundImage = "url('./imgs/site2.PNG')";
    proj1.style.width = '300px'
    proj1.style.backgroundPosition = 'left center'
    proj1.style.transition = ' 1s'
})
//selecionar proj[1]
proj1.addEventListener('click', () => {
    proj0.classList.remove('proj_selec')
    proj2.classList.remove('proj_selec')
    proj3.classList.remove('proj_selec')
    proj1.classList.toggle('proj_selec')
    if (proj1.classList.contains('proj_selec')) {
        proj1.style.backgroundPosition = 'left center'
        proj_text.firstElementChild.innerHTML = 'Page Poema'
        proj_text.lastElementChild.innerHTML = 'Este projeto foi desenvolvido com o objetivo de aplicar o efeito parallax em uma página web de layout responsivo. O conteúdo principal é um poema, complementado por animações de scroll que aprimoram a interatividade do usuário. O site foi inicialmente criado como parte de um exercício de um curso que fiz, mas foi adaptado e aprimorado com melhorias significativas.'
    }
    else {
        proj_text.firstElementChild.innerHTML = 'Descrição'
        proj_text.lastElementChild.innerHTML = 'Selecione um projeto'
        proj1.style.width = '200px'
    }
})
// mouse out proj[1]
proj1.addEventListener('mouseout', () => {
    if (proj1.classList.contains('proj_selec')) {
        proj1.style.backgroundPosition = 'left center'
    }
    else {
        proj1.style.backgroundPosition = 'right'
        proj1.style.width = '200px'
    }
})
//////////////////////////////////////////////////////////////////////////////
//Proj[2] Games
proj2.style.backgroundImage = "url('./imgs/site4.PNG')";
proj2.style.backgroundPosition = 'center left 25%'
proj2.style.backgroundSize = 'cover'

proj2.addEventListener('mouseover', () => {
    proj2.style.width = '300px'
    proj2.style.backgroundPosition = 'center left 20%'
    proj2.style.transition = ' 1s'
})
//selecionar proj[2]
proj2.addEventListener('click', () => {
    proj0.classList.remove('proj_selec')
    proj1.classList.remove('proj_selec')
    proj3.classList.remove('proj_selec')
    proj2.classList.toggle('proj_selec')
    if (proj2.classList.contains('proj_selec')) {
        proj2.style.backgroundPosition = 'center left 20%'
        proj_text.firstElementChild.innerHTML = 'Page Games'
        proj_text.lastElementChild.innerHTML = ''
    }
    else {
        proj_text.firstElementChild.innerHTML = 'Descrição'
        proj_text.lastElementChild.innerHTML = 'Selecione um projeto'
        proj2.style.width = '200px'
    }
})
// mouse out proj[2]
proj2.addEventListener('mouseout', () => {
    if (proj2.classList.contains('proj_selec')) {
        proj2.style.backgroundPosition = 'center left 20%'
    }
    else {
        proj2.style.backgroundPosition = 'center left 25%'
        proj2.style.width = '200px'
    }
})

//Proj[3] Cyber Punk
proj3.style.backgroundImage = "url('./imgs/site3.PNG')";
proj3.style.backgroundPosition = 'center left 10% '
proj3.style.backgroundSize = 'cover'

proj3.addEventListener('mouseover', () => {
    proj3.style.backgroundImage = "url('./imgs/site3.PNG')";
    proj3.style.width = '300px'
    proj3.style.backgroundPosition = 'left center'
    proj3.style.transition = ' 1s'
})
//selecionar proj[3]
proj3.addEventListener('click', () => {
    proj0.classList.remove('proj_selec')
    proj1.classList.remove('proj_selec')
    proj2.classList.remove('proj_selec')
    proj3.classList.toggle('proj_selec')
    if (proj3.classList.contains('proj_selec')) {
        proj3.style.backgroundPosition = 'left center'
        proj_text.firstElementChild.innerHTML = 'Page Cyber Punk'
        proj_text.lastElementChild.innerHTML = ''
        
    }
    else {
        proj_text.firstElementChild.innerHTML = 'Descrição'
        proj_text.lastElementChild.innerHTML = 'Selecione um projeto'
        proj3.style.width = '200px'
    }
})
// mouse out proj[3]
proj3.addEventListener('mouseout', () => {
    if (proj3.classList.contains('proj_selec')) {
        proj3.style.backgroundPosition = 'center left  '
    }
    else {
        proj3.style.backgroundPosition = 'center left 10% '
        proj3.style.width = '200px'
    }
})

//Diplomas / Certificados:
const diplomas = document.querySelector('.diplomas')
const certificados = [...diplomas.children]
const cert0 = certificados[0]
const cert1 = certificados[1]
const cert2 = certificados[2]

// Certificado 0
cert0.style.backgroundImage= 'url(./imgs/certificado1.PNG)'
cert0.style.backgroundSize='cover'
cert0.style.backgroundPosition='center center'
// Certificado 1
cert1.style.backgroundImage= 'url(./imgs/certificado2.PNG)'
cert1.style.backgroundSize='cover'
cert1.style.backgroundPosition='center center'
// Certificado 2
cert2.style.backgroundImage= 'url(./imgs/certificado3.PNG)'
cert2.style.backgroundSize='cover'
cert2.style.backgroundPosition='center center'




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