function Player(name, marker){
    this.name = name;
    this.marker = marker;
}

const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]


function gameBoard(){

    const cell = document.querySelector('.cell');

    cell.addEventListener('click', () => {
        
        for(i = 0; i = cell.length; i++){
            alert('Hello');

        }
        
    }
    )


}

gameBoard();

