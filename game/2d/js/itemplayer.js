const itemPlayer = document.querySelector('.itemPlayer');
const kotakItemAda = document.querySelectorAll('.kotak');

// item use
const armorKo = document.querySelector('.armor')
const senjsKo = document.querySelector('.senjata')
const spellKo = document.querySelector('.spell')


let optionsAda = ["", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "","", "", "", "", "", ""];
let isiKotak = "[X]";
let kosong = "";

let isiKotakUse = "X";

var clickOk = true
spellKo.addEventListener('click', function(){
    if(clickOk){
        player.tenagaspell = true
        spellKo.textContent = isiKotak
        clickOk = false
    } else {
        player.tenagaspell = false
        spellKo.textContent = ''
        clickOk = true
    }
})


// kotakItemAda.addEventListener('click', function(){
//     console.log('kotak pencet');
//     kotakItemAda.textContent = 'x';
// });
mulai();

function mulai(){
    kotakItemAda.forEach(cell => cell.addEventListener("click", kotakKepencet))
}


// kotakItemAda.addEventListener('click', function(){
//     kotakItemAda.forEach(cell => cell.addEventListener("click", kotakKepencet));
// });

function kotakKepencet(){
    const indexKotak = this.getAttribute("indexKotak");
    if(optionsAda[indexKotak] != "") {
        hilangkan(this, indexKotak);
    } else {
        updateCell(this, indexKotak);
    }
}
function updateCell(cell, index){
    optionsAda[index] = isiKotak;
    cell.textContent = isiKotak;
}
function hilangkan(cell, index){
    optionsAda[index] = "";
    cell.textContent = kosong; 
}