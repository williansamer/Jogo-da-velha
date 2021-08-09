/* let board = ["", "", "", "", "", "", "", "", ""];
let player = 0;
let symbol = ["p1", "p2"];
let gameOver = false;

function handleMove(position){

  if(gameOver){
    return;
  }

  if(board[position] == ""){
  board[position] = symbol[player];

    gameOver = isWin();

    if(!gameOver){ 
      if(player === 0){//Pode-se usar o operador ternário, ficando assim: (player === 0)?1 :0; 
        player = 1;
      }else{
        player = 0;
      }
    }
  }
  return gameOver; 
}

function isWin(){
  let checkPossibility = [ //Pode declarar esta variável lá em cima
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];

  for(let i = 0; i < checkPossibility.length; i++){
    let seq = checkPossibility[i];
    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if(board[pos1] == board[pos2] && board[pos2] == board[pos3] && board[pos1] == board[pos3] && board[pos1] != ""){
      return true;
    }
  }
  return false;
} */

//________________________Treinamento__________________________________

let board = ["", "", "", "", "", "", "", "", ""];
let player = 0;
let symbol = ["p1", "p2"];
let gameOver = false;
let filledBoard=[];
let n = 0;

let btnReiniciar = document.querySelector(".box-restart");
btnReiniciar.style.display = "none";

function handleStep(position){

  if(gameOver){
    return;
  }

  if(board[position] === ""){
    board[position] = symbol[player];
    filledBoard.length++

    gameOver = toWin();

    if(!gameOver){
      if(player == 0){
        player = 1;
      } else{
        player = 0;
      }
    }
  } 
  check();

  return gameOver;
}

function toWin(){
  let check = 
  [[0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],]

  for(let i = 0; i < check.length; i++){
    let seq = check[i];
    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];


    if(board[pos1] === board[pos2] && board[pos2] === board[pos3] && board[pos1] === board[pos3] && board[pos1] != ""){
      return true;
    }
  }

  return false;
}

function check(){
  if(filledBoard.length ===9){
    setTimeout(empate(), 100);
  }
}
