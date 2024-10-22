const ft = document.querySelector('.photo')
const btn = [...document.querySelectorAll(".btn")];
const article = document.querySelector('.artigo')
const art = [...article.children]
var h1 = art[0]
var h4 = art[1]
var p = art[2]




// Botões Article Apresentação:
const btn0 = btn[0]
const btn1 = btn[1]
const btn2 = btn[2]
btn0.addEventListener('click', () => {
    article.style.height = '100%'
    h1.innerHTML = "Hello World 👋🏼"
    h4.innerHTML = "Sou João Piornedo"
    p.innerHTML = "Sou um desenvolvedor web com experiência em projetos de desenvolvimento de sites totalmente responsivos, utilizando tecnologias modernas para garantir a melhor experiência do usuário. Estou constantemente aprendendo e me atualizando sobre novas linguagens e frameworks. Tenho um forte foco em práticas de design responsivo, acessibilidade e otimização de performance, assegurando que os sites funcionem perfeitamente em diversos dispositivos e navegadores."
})
//Botão 1 Objetivos
btn1.addEventListener('click', () => {
    article.style.height = '100%'
    h1.innerHTML = "Meus Objetivos"
    h4.innerHTML = ""
    p.innerHTML = "Meu objetivo é me juntar a uma grande empresa onde eu possa me especializar e crescer profissionalmente. Com foco, determinação e uma facilidade notável para aprender, estou comprometido em me tornar um especialista em minha área. Acredito que trabalhar em um ambiente desafiador e inovador me permitirá aprimorar minhas habilidades e contribuir significativamente para projetos de alto impacto."
})
//Botão 1 Área de Estudos
btn2.addEventListener('click', () => {
    article.style.height = '100%'
    h1.innerHTML = "Áreas de Estudo"
    h4.innerHTML = ""
    p.innerHTML = "Atualmente, estou estudando tecnologias como React, Node.js e JavaScript avançado. Estou sempre em busca de aprender e dominar novas tecnologias, mantendo-me atualizado e aprimorando minhas habilidades continuamente. Acredito que o aprendizado constante é fundamental para o crescimento profissional e para estar à frente no mercado de tecnologia."
})


// // Projetos:

const proj = [...document.querySelectorAll('.projeto')]
const proj_text = document.querySelector('.proj_text')
const text = [...proj_text.children]

if (window.innerWidth > 1400) {
    text[0].innerHTML = 'Descrição'
    text[1].innerHTML = '⬅️Selecione um projeto'
} if (window.innerWidth < 1400) {
    text[0].innerHTML = 'Descrição'
    text[1].innerHTML = ' ⬆️Selecione um projeto ⬆️'
}


const texto_p = (texto, descri) => {
    text[0].innerHTML = texto
    text[1].innerHTML = descri
}



const link_projeto = (site) => {
    text[2].href = site
    text[2].target = 'blank'
    text[2].innerHTML = ' Ver Mais'
    text[2].classList.add('vermais')
}
//Proj[0] Animals:
proj.forEach((el, i) => {
    el.addEventListener('click', () => {
        proj.forEach(el => el.classList.remove('proj_selec'));
        el.classList.add('proj_selec');


        switch (i) {
            case 0:
                link_projeto('https://joaopiornedo.github.io/Animals/');
                texto_p('Page Animals', 'Este projeto consiste em uma página web interativa, focada em artigos sobre animais. O design incorpora um layout dinâmico e cores vibrantes, criando uma experiência visual cativante para o usuário. O site é 100% responsivo, garantindo uma navegação fluida em qualquer dispositivo. Foram testadas diversas paletas de cores para atrair e envolver os usuários, além de animações sutis que melhoram a fluidez do site e a experiência de navegação.');
                break;
            case 1:
                link_projeto('https://joaopiornedo.github.io/projeto-cordel-curso/');
                texto_p('Page Poema', 'Este projeto foi desenvolvido com o objetivo de aplicar o efeito parallax em uma página web de layout responsivo. O conteúdo principal é um poema, complementado por animações de scroll que aprimoram a interatividade do usuário. O site foi inicialmente criado como parte de um exercício de um curso que fiz, mas foi adaptado e aprimorado com melhorias significativas.');
                break;
            case 2:
                link_projeto('https://joaopiornedo.github.io/landing_page_cyberpunk/');
                texto_p('Page Cyber Punk', 'Este projeto é uma landing page futurista com design responsivo, que utiliza HTML semântico, CSS com Flexbox e Grid, e JavaScript para criar interatividade e efeitos dinâmicos. A página combina tecnologia avançada com uma estética imersiva para capturar a essência do universo cyberpunk.');
                break;
            case 3:
                link_projeto('https://joaopiornedo.github.io/page-games/');
                texto_p('Page Games', 'Este projeto apresenta uma série de jogos interativos com uma interface responsiva e estilizada. Utilizando HTML, CSS e JavaScript, o projeto combina design moderno com funcionalidades dinâmicas para oferecer uma experiência envolvente. As animações e transições melhoram a interatividade, enquanto a estrutura responsiva garante compatibilidade em diversos dispositivos e tamanhos de tela.');
                break;
            case 4:
                link_projeto('');
                texto_p('Page 4', 'projeto 4');
                break;
            case 5:
                link_projeto('');
                texto_p('Page 5', 'projeto 5');
                break;
            default:
                break;
        }
    });
});





//////////////////////////////////////////////////////////////////////////////
//Diplomas / Certificados:

const diplomas = document.querySelector('.diplomas')
const certificados = [...diplomas.children]
const cert0 = certificados[0]
const cert1 = certificados[1]
const cert2 = certificados[2]


// Certificado 0
cert0.style.backgroundImage = 'url(./imgs/certificado1.PNG)'
cert0.style.backgroundSize = 'cover'
cert0.style.backgroundPosition = 'center center'
// Certificado 1
cert1.style.backgroundImage = 'url(./imgs/certificado2.PNG)'
cert1.style.backgroundSize = 'cover'
cert1.style.backgroundPosition = 'center center'
// Certificado 2
cert2.style.backgroundImage = 'url(./imgs/certificado3.PNG)'
cert2.style.backgroundSize = 'cover'
cert2.style.backgroundPosition = 'center center'

////// COMANDOS BOTÕES CERTIFICADOS:
const btn_cert = document.querySelector('.btn-curso')

btn_cert.children[0].addEventListener('click', () => {
    cert0.style.backgroundImage = 'url(./imgs/certificado1.PNG)'
    cert1.style.backgroundImage = 'url(./imgs/certificado2.PNG)'
    cert2.style.backgroundImage = 'url(./imgs/certificado3.PNG)'

})

btn_cert.children[1].addEventListener('click', () => {
    cert0.style.backgroundImage = 'url(./imgs/certificado2.PNG)'
    cert1.style.backgroundImage = 'url(./imgs/certificado3.PNG)'
    cert2.style.backgroundImage = 'url(./imgs/certificado4.PNG)'

})




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