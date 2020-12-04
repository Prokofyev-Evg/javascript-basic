let chessDiv = document.getElementById('chess');

let hrow = document.createElement("div");
hrow.classList.add('row');

for (let i = 0; i < 9; i++)
{
    let hcell = document.createElement("div");
    hcell.classList.add('header');
    hcell.insertAdjacentText('afterbegin', " ABCDEFGH"[i])
    hrow.insertAdjacentElement('beforeend', hcell);
}
chessDiv.insertAdjacentElement('beforeend', hrow);

for (let i = 0; i < 8; i++) {
    let row = document.createElement("div");
    row.classList.add('row');
    let hcell = document.createElement("div");
    hcell.classList.add('header');
    hcell.insertAdjacentText('afterbegin', i + 1)
    row.insertAdjacentElement('beforeend', hcell);
    for (let i = 0; i < 8; i++)
    {
        let cell = document.createElement("div");
        cell.classList.add('cell');
        row.insertAdjacentElement('beforeend', cell);
    }
    chessDiv.insertAdjacentElement('beforeend', row);
}