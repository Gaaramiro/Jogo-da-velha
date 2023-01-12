document.addEventListener('DOMContentLoaded', () =>{

    let restartButton = document.querySelector(".btn");

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handClick);


    })
})

function handClick(event){
    console.log(event.target);

    let square = event.target;
    let position = square.id;

    let symbolMessage = '';

    if(handleMove(position)){

        setTimeout(() =>{
        if (playerTime == 0) {
            symbolMessage = 'O'
              alert('O Jogo Acabou! - O Vencedor foi ' + symbolMessage);
        } else{
            symbolMessage = 'X'
            alert('O Jogo Acabou! - O Vencedor foi ' + symbolMessage);

        }
    }, 10)
}else if (chequeDraw()) {
    setTimeout(() => {
        alert("Empate !  ")
    }, 10)
}
    updateSquares(position);
}  
    
      
         



function updateSquares(){
    
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if(symbol != '') {
            square.innerHTML = ` <div class='${symbol}'></div>`
        }


    })  
}

