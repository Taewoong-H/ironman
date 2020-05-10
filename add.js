const skills = document.querySelectorAll('.skill'),
    colors = document.querySelectorAll('.color'),
    heros = document.querySelectorAll('.hero');

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
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let hero = document.querySelector(`.hero[color="${color}"]`);
    
    
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    heros.forEach(h => h.classList.remove('show'));
    hero.classList.add('show');
}

function init(){
    skills.forEach(skill => skill.addEventListener('click', changeSkill));
    colors.forEach(c => c.addEventListener('click', changeColor));
}

init();