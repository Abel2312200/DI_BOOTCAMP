
let h1 = document.querySelector('h1');
console.log(h1);

let lastP = document.querySelector('article').lastElementChild;
lastP.remove();

function changeColor(){
    document.querySelector('h2').style.backgroundColor = 'red';
}

function changeDisplay(){
    document.querySelector('h3').style.display = 'none';
}

function changeTextStyle(){
    let allP = document.querySelectorAll('p');
    for (let index = 0; index < allP.length; index++) {
        allP[index].innerHTML = '<b>'+ allP[index].textContent + '</b>';
    }
}

function changeSize(){
    document.querySelector('h1').style.fontSize = Math.random() * 100 + 'px';
}

function animation(){
    document.querySelectorAll('p')[1].style.animation = 'fadeOut 5s';
}

