const botaoAlterarTema = document.getElementById('botao-alterar-tema')

const body = document.querySelector('body')

const imgButtonTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener('click', ()=> {

  const modoativo = body.classList.contains("modo-escuro")

  body.classList.toggle("modo-escuro")

  if(modoativo){
    
    imgButtonTema.setAttribute("src", './src/img/sun.png')
  }else{
    
    imgButtonTema.setAttribute("src", './src/img/moon.png')
  }
})