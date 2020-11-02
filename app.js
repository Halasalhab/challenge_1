let gameActive = true;
var id = 'x';
let currentPlayer = "X";
function creatt() {
    var tbl = document.getElementById('tbl');
    for (var r = 0; r < 3; r++) {
        var row = document.createElement('tr');
        for (var c = 0; c < 3; c++) {
            var cell = document.createElement('td');
            cell.width = '35px';
            cell.hight = '35px';
            cell.id = "";
            row.appendChild(cell);
            cell.innerHTML = '';
        }
        tbl.appendChild(row);
    }
}
function bluh() {
    document.querySelectorAll('tr').forEach(row => row.forEach(cell => { cell.id = "x"; cell.innerHTML = 'x'; }));
}
//for restarting the game
// function handleRestartGame() {
//     gameActive = true;
//     currentPlayer = "X";
//     gameState = ["", "", "", "", "", "", "", "", ""];
//     statusDisplay.innerHTML = currentPlayerTurn();
//     document.querySelectorAll('tr').forEach(cell => cell.innerHTML = "");
// }