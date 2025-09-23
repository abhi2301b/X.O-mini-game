let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let statment =document.querySelector("#msg");
let turnO = true;
let wins = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turnO = true;
    enable();
    msg.classList.add("hide");
}
const enable = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const disable = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}


const showWinner = (winner) => {
    statment.innerText = `Congratulation, Winner is ${winner}`;
    msg.classList.remove("hide")
    disable();
}
const checkwin = () => {
      for( let win of wins) {
        let pos1 = boxes[win[0]].innerText;
        let pos2 = boxes[win[1]].innerText;
        let pos3 = boxes[win[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
          if(pos1 === pos2 && pos2 === pos3) {
            console.log("winner is", pos1);
            showWinner(pos1);
          }
        }
      }
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box is clicked");
       if(turnO) {
        box.innerText = "O";
        turnO = false;
       } else {
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;
       checkwin();
    })
});


reset.addEventListener("click",() => {
    resetGame();
});