/**
 * This program is a boliler plate code for the famous tic tac toe game
 * Here box represents one placeholder for either X or a 0
 * We have a 2D array to represent the arrangement of X or O is a grid
 * 0 -> empty box
 * 1 -> box with X
 * 2 -> box with O
 * 
 * Below are the tasks which needs to be completed
 * Imagine you are playing with Computer so every alternate move should be by Computer
 * X -> player
 * O -> Computer
 * 
 * Winner has to be decided and has to be flashed
 * 
 * Extra points will be given for the Creativity
 * 
 * Use of Google is not encouraged
 * 
 */
let grid = [];
const GRID_LENGTH = 3;
let turn = 'X';
let newValue = 1;
let count = 0;

function initializeGrid() {
    for (let colIdx = 0;colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH;rowidx++) {
            tempArray.push(0);
        }
        grid.push(tempArray);
    }
}

function getRowBoxes(colIdx) {
    let rowDivs = '';
    
    for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        if (sum%2 === 0) {
            additionalClass = 'lightBackground'
        }
        const gridValue = grid[colIdx][rowIdx];
        if(gridValue === 1) {
            content = '<span class="cross">X</span>';
        }
        else if (gridValue === 2) {
            content = '<span class="cross">O</span>';
        }
        rowDivs = rowDivs + '<div colIdx="'+ colIdx +'" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + '">' + content + '</div>';
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for(let colIdx=0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    const columnDivs = getColumns();
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
}

function updateCount(id){
    document.getElementById(id).innerHTML = parseInt(document.getElementById(id).innerHTML) + 1;
    removeClickHandlers();
}

function checkWinner(){
    if (grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2] && grid[0][0]!=0) {
        if (grid[0][0]%2===0) {
            alert('Computer won');
            updateCount("computer_won");
        } else{
            alert('Player won');
            updateCount("player_won");
        }
    } else if (grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2] && grid[1][0]!=0) {
        if (grid[1][0]%2===0) {
            alert('Computer won');
            updateCount("computer_won");
        } else{
            alert('Player won');
            updateCount("player_won");
        }
    } else if (grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2] && grid[2][0]!=0) {
        if (grid[2][0]%2===0) {
            alert('Computer won');
            updateCount("computer_won");
        } else{
            alert('Player won');
            updateCount("player_won");
        }
    } else if (grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0] && grid[0][0]!=0) {
        if (grid[0][0]%2===0) {
            alert('Computer won');
            updateCount("computer_won");
        } else{
            alert('Player won');
            updateCount("player_won");
        }
    } else if (grid[0][1] === grid[1][1] && grid[1][1] === grid[1][2] && grid[0][1]!=0) {
        if (grid[0][1]%2===0) {
            alert('Computer won');
            updateCount("computer_won");
        } else{
            alert('Player won');
            updateCount("player_won");
        }
    } else if (grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2] && grid[0][2]!=0) {
        if (grid[0][2]%2===0) {
            alert('Computer won');
            updateCount("computer_won");
        } else{
            alert('Player won');
            updateCount("player_won");
        }
    } else if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[0][0]!=0) {
        if (grid[0][0]%2===0) {
            alert('Computer won');
            updateCount("computer_won");
        } else{
            alert('Player won');
            updateCount("player_won");
        }
    } else if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] && grid[0][2]!=0) {
        if (grid[0][2]%2===0) {
            alert('Computer won');
            updateCount("computer_won");
        } else{
            alert('Player won');
            updateCount("player_won");
        }
    } else if(count===9){
        alert('its a tie');
    }
}

function onBoxClick() {
    count++;
    var rowIdx = this.getAttribute("rowIdx");
    var colIdx = this.getAttribute("colIdx");
    grid[colIdx][rowIdx] = newValue%2===0? newValue-- : newValue++;
    renderMainGrid();
    addClickHandlers();
    checkWinner();
}

function addClickHandlers() {
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].addEventListener('click', onBoxClick, false);
    }
}

function removeClickHandlers() {
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].removeEventListener('click', onBoxClick);
    }
}

function restGrid(){
    grid =[];
    initializeGrid();
    renderMainGrid();
    addClickHandlers();
}
restGrid();