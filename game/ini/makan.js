const atas = document.querySelector(".activity button.up");
const bawah = document.querySelector(".activity button.down");
const kanan = document.querySelector(".activity button.right");
const kiri = document.querySelector(".activity button.left");

const ini = document.querySelector(".wadah .activity")

atas.addEventListener('click', function(){
    atas.classList.toggle("makan");
});