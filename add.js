const skills = document.querySelectorAll('.skill'),
    colors = document.querySelectorAll('.color'),
    heros = document.querySelectorAll('.hero'),
    gradients = document.querySelectorAll('.gradient');
    heroBg = document.querySelector('.heroBackground');

let prevColor = "blue";
let animationEnd = true;

const number = document.querySelector('.number'),
    num = number.querySelector('h1');

function changeSkill(){
    skills.forEach(skill => skill.classList.remove('active'));
    this.classList.add('active');
    if(this.innerText === "1"){
        num.innerText = "100";
    } else if(this.innerText === "2"){
        num.innerText = "200";
    } else if(this.innerText === "3"){
        num.innerText = "300";
    } else if(this.innerText === "4"){
        num.innerText = "400";
    } else if(this.innerText === "5"){
        num.innerText = "500";
    }
}

function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let hero = document.querySelector(`.hero[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);
    
    
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    heros.forEach(h => h.classList.remove('show'));
    hero.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}


let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let heroHeight = heros[0].offsetHeight;
        heroBg.style.height = `${heroHeight * 0.9}px`;
    } else{
        heroBg.style.height = "475px";
    }
}


function init(){
    skills.forEach(skill => skill.addEventListener('click', changeSkill));
    colors.forEach(c => c.addEventListener('click', changeColor));
    window.addEventListener('resize', changeHeight);
}

init();