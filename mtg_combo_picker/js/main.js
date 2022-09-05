const ajani= document.querySelector('#ajani')
const jace= document.querySelector('#jace')
const lili= document.querySelector('#lili')
const chandra= document.querySelector('#chandra')
const viv= document.querySelector('#viv')
const bolas= document.querySelector('#bolas')

document.getElementById('white').onmouseover = prideMate;
document.getElementById('white').onmouseout = normal;
document.getElementById('blue').onmouseover = negate;
document.getElementById('blue').onmouseout = normal;
document.getElementById('black').onmouseover = thoughtSeize;
document.getElementById('black').onmouseout =normal;
document.getElementById('red').onmouseover = shock;
document.getElementById('red').onmouseout = normal; 
document.getElementById('green').onmouseover = natrualize;
document.getElementById('green').onmouseout = normal;
document.getElementById('dragonGod').onclick = capitvateAudience;
document.getElementById('bolas').onclick =normal;







function normal(){
    document.querySelector('body').style.backgroundImage='url(././img/plane.png)';
    document.querySelector('.container2').style.display = 'flex';
    document.querySelector('h1').style.color = '#CC8B77';
    ajani.classList.add('hidden')
    jace.classList.add('hidden')
    lili.classList.add('hidden')
    chandra.classList.add('hidden')
    viv.classList.add('hidden')
    bolas.classList.add('hidden')
    
}


function prideMate(){
    document.querySelector('body').style.backgroundImage ='url(././img/Background/Ajani.jpg)';
    document.querySelector('h1').style.color = '#419072'
    ajani.classList.toggle('hidden')
    jace.classList.add('hidden')
    lili.classList.add('hidden')
    chandra.classList.add('hidden')
    viv.classList.add('hidden')
    bolas.classList.add('hidden')
    
 

}

function negate(){
    document.querySelector('body').style.backgroundImage = 'url(././img/Background/Jace.jpg)';
    document.querySelector('h1').style.color = '#0C243F'
    ajani.classList.add('hidden')
    jace.classList.toggle('hidden')
    lili.classList.add('hidden')
    chandra.classList.add('hidden')
    viv.classList.add('hidden')
    bolas.classList.add('hidden')

    
    
}

function thoughtSeize(){
    document.querySelector('body').style.backgroundImage = 'url(././img/Background/lili.jpg)';
    document.querySelector('h1').style.color ='#ECE4E1'
    
    ajani.classList.add('hidden')
    jace.classList.add('hidden')
    lili.classList.toggle('hidden')
    chandra.classList.add('hidden')
    viv.classList.add('hidden')
    bolas.classList.add('hidden')

}

function shock(){
    document.querySelector('body').style.backgroundImage = 'url(././img/Background/chandra.jpg)';
    document.querySelector('h1').style.color = 'black'
    ajani.classList.add('hidden')
    jace.classList.add('hidden')
    lili.classList.add('hidden')
    chandra.classList.toggle('hidden')
    viv.classList.add('hidden')
    bolas.classList.add('hidden')
}

function natrualize(){
    document.querySelector('body').style.backgroundImage = 'url(././img/Background/vivian.jpg)';
    document.querySelector('h1').style.color = 'white'
    ajani.classList.add('hidden')
    jace.classList.add('hidden')
    lili.classList.add('hidden')
    chandra.classList.add('hidden')
    viv.classList.toggle('hidden')
    bolas.classList.add('hidden')

}

function capitvateAudience(){
   document.querySelector('body').style.backgroundImage = 'url(././img/Background/bolas.jpg)';
   document.querySelector('.container2').style.display = 'none';
   document.querySelector('h1').style.color = 'black';
   ajani.classList.add('hidden')
   jace.classList.add('hidden')
   lili.classList.add('hidden')
   chandra.classList.add('hidden')
   viv.classList.add('hidden')
   bolas.classList.toggle('hidden')

}   