/* document.addEventListener("DOMContentLoaded", startGame);

function startGame(){
  let squares = document.querySelectorAll(".square");

  squares.forEach((square)=>{
    square.addEventListener("click", handleClick)
  })
}

function handleClick(element){
  let square = element.target;
  let position = square.id;

  if(handleMove(position)){
    setTimeout(()=>{alert(`Fim de Jogo. O jogador  ${symbol[player]}  ganhou`)}, 10);
  }

  updateSquare();
}

function updateSquare(){

  let squares = document.querySelectorAll(".square");

  squares.forEach((square)=>{
    let position = square.id;
    let filled = board[position];

    if(filled != ""){ //poderia ser somente 'board[position]'
      square.innerHTML = `<div class="${filled}"></div>`
    }
  })
} */

//________________________Treinamento__________________________________

document.addEventListener("DOMContentLoaded", startInterface);

function startInterface(){
  let squares = document.querySelectorAll(".square");
  
  squares.forEach((square)=>{
    square.addEventListener("click", handleClick);
  })
}

function handleClick(event){
  let position = event.target.id;
  

  handleStep(position);
  if(gameOver){
    setTimeout(
      restartGame(), 10);

  }

  updateSquare(position);
}

function updateSquare(position){
  let squares = document.querySelectorAll(".square");

  if(board[position] != ""){
    squares[position].innerHTML = `<div class="${board[position]}"></div>`;
  }
}

function restartGame(){
  let h3 = document.querySelector(".ganhador"); 

  h3.innerHTML = `<div class="ganhador">O ganhador foi o jogador ${symbol[player]}</div> <img height="40px" src="./assets/${symbol[player]}.png" alt="">`
  btnReiniciar.style.display = "flex";

}

function reinicio(){
  btnReiniciar.style.display = "none";
  window.location.reload();
}

function empate(){
  let h3 = document.querySelector(".ganhador"); 

  h3.innerHTML = "<div class='ganhador'>Empate</div>";
  btnReiniciar.style.display = "flex";


}