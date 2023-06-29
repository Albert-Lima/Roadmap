var abaRevel = document.getElementById('abaRev')
var botao = document.getElementById('botao')
var links = document.getElementsByClassName('link')

/*funções para a aba de menu*/
    links[0].style.display = 'none'
    links[1].style.display = 'none'
    links[2].style.display = 'none'
function revelarAba(){
    abaRevel.style.height = '600px'
    abaRevel.style.width = '200px'
    abaRevel.style.borderBottomRightRadius = '10px'
    abaRevel.style.boxShadow = '0px 0px 5px 3px rgba(0, 0, 0, 0.253)'
    abaRevel.style.transitionDuration = '0.2s'
    links[0].style.display = 'block'
    links[1].style.display = 'block'
    links[2].style.display = 'block'
}
function sumirAba(){
    abaRevel.style.height = '50px'
    abaRevel.style.width = '50px'
    abaRevel.style.boxShadow = 'none'
    links[0].style.display = 'none'
    links[1].style.display = 'none'
    links[2].style.display = 'none'
}
botao.addEventListener('click', revelarAba)
abaRevel.addEventListener('mouseleave', sumirAba)
