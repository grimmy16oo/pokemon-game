let score = 0;
let cross = true;
let isGameOver = false;

document.onkeydown = function (e) {
  console.log("key is ", e.keyCode);

  if (e.keyCode == 32) {
    let pikachu = document.getElementsByClassName("pikachu")[0]; //document.getElementsByClassName returns a list of elements (even if there's only one element with that class), so you need to access the first element in that list using [0]
    pikachu.classList.add("jumpPikachu");

    setTimeout(() => {
      pikachu.classList.remove("jumpPikachu");
    }, 700);
  }

  if (e.keyCode == 68) 
    {
        pikachu = document.getElementsByClassName("pikachu")[0];
        pX = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue("left"));
        pikachu.style.left = (pX + 400) + "px";
    }

  if (e.keyCode == 65) 
    {
        pikachu = document.getElementsByClassName("pikachu")[0];
        pX = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue("left"));
        pikachu.style.left = (pX - 300) + "px";
   }
};

setInterval(() => {
    pikachu = document.getElementsByClassName("pikachu")[0];
    enemy = document.getElementsByClassName("enemy")[0];
    gameOver = document.getElementsByClassName("gameOver")[0];

    pX = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue("left"));
    pY = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue("top"));

    eX = parseInt(window.getComputedStyle(enemy,null).getPropertyValue('left'));
    eY = parseInt(window.getComputedStyle(enemy,null).getPropertyValue('top'));

    diffX = Math.abs(pX - eX);
    diffY = Math.abs(pY - eY);
    console.log(diffX, diffY);
    if(diffX < 153 && diffY < 160)
    {
        enemy.classList.remove('shootEnemy');
        gameOver.style.visibility = "visible";

    }
    else if(!isGameOver && diffX < 250 && cross)
    {
        score += 1;
        updateScore(score);
        cross = false;

        setTimeout(() => {
            cross = true;
        },1000);
    }
},100)

function updateScore(score) {
    const scor = document.getElementsByClassName("score")[0]; 
    scor.innerHTML = "YOUR SCORE : " + score; 
}
    