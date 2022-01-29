
const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');


pen.fillStyle= '#B8405E';; //default pen Style

const H = 560;
const W = 840;
const cs = 35; //cellsize
let food = null; 
let score = 0;
let gameover = false;

let highscore = localStorage.getItem("highscore");

const snake={ //snake object
    init_length: 5,
    direction: 'right',
    cells: [],

    //creating the initial snake
    createSnake: function(){
        for(let i = 0; i< this.init_length;i++){
            this.cells.push({ //adding cells in the cells array 
                x: i,
                y: 0
            });
        }
    },

    //drawing the snake
    drawSnake: function(){
        for(let i = 0 ; i<this.cells.length;i++){
            if(i==this.cells.length-1){
                pen.fillStyle='#800f2f';
            }
            pen.fillRect(this.cells[i].x*cs, this.cells[i].y*cs, cs-1, cs-1); 
        }
        
    },

    //updating the snake based on direction and whether it eats the food or not
    updateSnake: function(){
        const headX= this.cells[this.cells.length - 1].x;
        const headY = this.cells[this.cells.length - 1].y;

        let nextX;
        let nextY;

        if(food.x === headX && food.y === headY){ //when snake eats the food
            food = getRandomFood();
            score++;
            if (highscore < score) {
                highscore = score
                localStorage.setItem("highscore", highscore);
            }
        }
        else{
            this.cells.shift();
        }

        if(this.direction === 'up'){ //code for when snake collides with the walls 
            nextX = headX;
            nextY = headY - 1;

            if(nextY * cs < 0){
                gameover = true;
            }
        }
        else if(this.direction === 'down'){
            nextX = headX;
            nextY = headY + 1;

            if (nextY * cs >= H){
                gameover = true;
            }
        }
        else if(this.direction === 'left'){
            nextX = headX - 1;
            nextY = headY;

            if(nextX * cs < 0){
                gameover = true;
            }
        }
        else{
            nextX = headX + 1;
            nextY = headY;

            if(nextX * cs >= W){
                gameover = true;
            }
        }

        for(let cell of this.cells){
            if(nextX === cell.x && nextY === cell.y){
                gameover = true;
            }
        }
        this.cells.push({ 
            x: nextX,
            y: nextY
        });
    }
}

//gets the coordinates of the random food
function getRandomFood(){
    const foodX = Math.floor(Math.random()*(W - cs)/cs);
    const foodY = Math.floor(Math.random()*(H - cs)/cs);
    
    food = {
        x: foodX,
        y: foodY
    }

    return food;
}

//initializes the game
function initial(){
    snake.createSnake();
    snake.drawSnake();
    food = getRandomFood();
    function keypressed(e){
        if(e.key === 'ArrowDown'){
            snake.direction='down';
        }
        else if(e.key === 'ArrowUp'){
            snake.direction = 'up';
        }
        else if(e.key === 'ArrowLeft'){
            snake.direction = 'left';
        }
        else{
            snake.direction = 'right';
        }
    }
    document.addEventListener('keydown',keypressed);
}

//updates conditions of the game
function update(){
    snake.updateSnake();
}

function draw(){

    if(gameover == true){
        pen.font= "30px bold sans-serif";
        pen.fillStyle='#B8405E';
        pen.fillText('Game Over',20,80);
        clearInterval(id);
        
        return; //if return statement is not added then this if condition won't work
    }
    pen.clearRect(0, 0, W, H);
    pen.font= "30px sans-serif";
    pen.fillStyle= 'purple';
    pen.fillText(`Score : ${score}`,20,40)
    pen.fillText(`High Score : ${highscore}`,630,550)
    pen.fillStyle= '#11468F';
    pen.fillRect(food.x*cs, food.y*cs, cs-1,cs-1);
    pen.fillStyle= '#B8405E';
    snake.drawSnake();
}

function gameloop(){
    update();
    draw();
}

initial();

const id = setInterval(gameloop, 100);