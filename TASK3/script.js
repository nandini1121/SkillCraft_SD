const board = document.getElementById("board");
const statusBox = document.getElementById("status");

const puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

createBoard();

function createBoard(){

    board.innerHTML = "";

    for(let row = 0; row < 9; row++){

        for(let col = 0; col < 9; col++){

            const cell = document.createElement("input");

            if(puzzle[row][col] !== 0){

                cell.value = puzzle[row][col];
                cell.readOnly = true;
                cell.style.background = "#e8edf5";
                cell.style.fontWeight = "bold";
            }

            if((col + 1) % 3 === 0 && col !== 8){
                cell.style.borderRight = "3px solid #23395d";
            }

            if((row + 1) % 3 === 0 && row !== 8){
                cell.style.borderBottom = "3px solid #23395d";
            }

            board.appendChild(cell);
        }
    }
}

function getBoard(){

    const cells = document.querySelectorAll("#board input");

    let grid = [];

    for(let r = 0; r < 9; r++){

        let row = [];

        for(let c = 0; c < 9; c++){

            const value = cells[r * 9 + c].value;

            row.push(value ? Number(value) : 0);
        }

        grid.push(row);
    }

    return grid;
}

function setBoard(grid){

    const cells = document.querySelectorAll("#board input");

    for(let r = 0; r < 9; r++){

        for(let c = 0; c < 9; c++){

            if(puzzle[r][c] === 0){

                cells[r * 9 + c].value = grid[r][c];
                cells[r * 9 + c].style.color = "#c45b3c";
            }
        }
    }
}

function isValid(grid,row,col,num){

    for(let x = 0; x < 9; x++){

        if(grid[row][x] === num) return false;

        if(grid[x][col] === num) return false;
    }

    const startRow = row - row % 3;
    const startCol = col - col % 3;

    for(let i = 0; i < 3; i++){

        for(let j = 0; j < 3; j++){

            if(grid[startRow + i][startCol + j] === num){
                return false;
            }
        }
    }

    return true;
}

function solveSudoku(grid){

    for(let row = 0; row < 9; row++){

        for(let col = 0; col < 9; col++){

            if(grid[row][col] === 0){

                for(let num = 1; num <= 9; num++){

                    if(isValid(grid,row,col,num)){

                        grid[row][col] = num;

                        if(solveSudoku(grid)){
                            return true;
                        }

                        grid[row][col] = 0;
                    }
                }

                return false;
            }
        }
    }

    return true;
}

document
.getElementById("solveBtn")
.addEventListener("click",()=>{

    const grid = getBoard();

    if(solveSudoku(grid)){

        setBoard(grid);

        statusBox.textContent =
        "✅ Puzzle solved successfully.";

    }else{

        statusBox.textContent =
        "❌ No valid solution found.";
    }
});

document
.getElementById("resetBtn")
.addEventListener("click",()=>{

    createBoard();

    statusBox.textContent =
    "🧩 Puzzle reset.";
});