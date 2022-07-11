let span = document.getElementById('span')
span.style.marginBottom = '0px'
span.addEventListener('mouseover', showText)
function showText(){
    let p = document.createElement('p')
    p.textContent = 'indicates what I\'m still into'
    p.style.marginTop = '0px'
    span.append(p)
    span.removeEventListener('mouseover', showText)
}