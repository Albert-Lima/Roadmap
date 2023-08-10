window.onload = function(){
    document.body.style.display = "block"
}

var abaRevel = document.getElementById('abaRev')
var botao = document.getElementById('botao')
var links = document.getElementsByClassName('link')
var linhaAba = document.getElementsByClassName('linha')

/*funções para a aba de menu*/
    links[0].style.display = 'none'
    links[1].style.display = 'none'
    links[2].style.display = 'none'
    linhaAba[0].style.display = 'none'
    linhaAba[1].style.display = 'none'
function revelarAba(){
    abaRevel.style.backgroundColor = 'rgba(128, 128, 128, 0.999)'
    abaRevel.style.height = '600px'
    abaRevel.style.width = '200px'
    abaRevel.style.borderBottomRightRadius = '10px'
    abaRevel.style.boxShadow = '0px 0px 5px 3px rgba(0, 0, 0, 0.200)'
    abaRevel.style.transitionDuration = '0.3s'
    links[0].style.display = 'block'
    links[1].style.display = 'block'
    links[2].style.display = 'block'
    linhaAba[0].style.display = 'block'
    linhaAba[1].style.display = 'block'
}
function sumirAba(){
    abaRevel.style.backgroundColor = 'transparent'
    abaRevel.style.height = '50px'
    abaRevel.style.width = '50px'
    abaRevel.style.boxShadow = 'none'
    links[0].style.display = 'none'
    links[1].style.display = 'none'
    links[2].style.display = 'none'
    linhaAba[0].style.display = 'none'
    linhaAba[1].style.display = 'none'
    
}
botao.addEventListener('click', revelarAba)
abaRevel.addEventListener('mouseleave', sumirAba)
