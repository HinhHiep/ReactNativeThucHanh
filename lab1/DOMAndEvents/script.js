//1. Select the elements with the 'again' class and attach a click event to them
let again=document.querySelectorAll('.again');
again.forEach((el)=>{
    el.addEventListener('click',()=>{
        location.reload();
    });
});
//2. In the function, restore the initial values of the score and 'secretNumber' variables
let score=document.querySelector('.score');
let secretNumber=document.querySelector('.number');

let scoreValue=20;
let secretNumberValue=Math.trunc(Math.random()*20)+1;
let highscore=0;
//3. Restore the initial conditions of the message, number, score, and background color
let message=document.querySelector('.message');
let number=document.querySelector('.number');
let score1=document.querySelector('.score');
let guess=document.querySelector('.guess');

//4. Also restore the original styles of the message, number, score, and background color
document.querySelector('body').style.backgroundColor="#222";
number.style.width="15rem";
number.textContent="?";
message.textContent="Start guessing...";
score1.textContent=scoreValue;
guess.value="";




