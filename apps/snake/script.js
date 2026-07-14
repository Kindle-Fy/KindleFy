const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const box = 20;

let snake = [
    {x: 10 * box, y: 10 * box}
];

let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box
};

let direction = "RIGHT";
let score = 0;

const best = localStorage.getItem("snakeBest") || 0;
document.getElementById("best").textContent = best;

function draw(){

    ctx.clearRect(0,0,400,400);

    ctx.fillStyle="black";

    snake.forEach(part=>{
        ctx.fillRect(part.x,part.y,box,box);
    });

    ctx.fillStyle="gray";
    ctx.fillRect(food.x,food.y,box,box);

    let head={...snake[0]};

    if(direction==="LEFT") head.x-=box;
    if(direction==="RIGHT") head.x+=box;
    if(direction==="UP") head.y-=box;
    if(direction==="DOWN") head.y+=box;

    if(head.x===food.x && head.y===food.y){

        score++;
        document.getElementById("score").textContent=score;

        if(score>best){
            localStorage.setItem("snakeBest",score);
            document.getElementById("best").textContent=score;
        }

        food={
            x:Math.floor(Math.random()*20)*box,
            y:Math.floor(Math.random()*20)*box
        };

    }else{
        snake.pop();
    }

    if(head.x<0||head.y<0||head.x>=400||head.y>=400){

        alert("Game Over");

        location.reload();

        return;

    }

    snake.unshift(head);

}

setInterval(draw,180);

function up(){ if(direction!="DOWN") direction="UP"; }
function down(){ if(direction!="UP") direction="DOWN"; }
function left(){ if(direction!="RIGHT") direction="LEFT"; }
function right(){ if(direction!="LEFT") direction="RIGHT"; }
