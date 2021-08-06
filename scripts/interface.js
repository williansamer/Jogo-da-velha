document.addEventListener("DOMContentLoaded", startGame);

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
}