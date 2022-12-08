// chat value
const pesan = document.querySelector('#chatbox');
const kirim = document.querySelector('.kirim');
const petunjuk = document.querySelector('.petunjuk')

let kiriman = false;
pesan.addEventListener('mouseenter', function(){
    player.mengetik = true;
});
pesan.addEventListener('mouseover', function(){
    player.mengetik = false;
})

animasi2();

function animasi2(){
    window.requestAnimationFrame(animasi2);
    if(kiriman){
        tampilkanPesan();
    }
    if(getItem){
        itemDapat();
    }
}
function tampilkanPesan(){
    c.font = "25px Silkscreen";
    c.fillStyle = "black";
    c.textAlign = "center";
    c.fillText(pesan.value+"...", player.position.x, player.position.y - 15);
};
function itemDapat(){
    petunjuk.textContent = 'Klick e untuk membuka dan menutup item'
}

kirim.addEventListener('click', function(){
    kiriman = true;
    player.mengetik = false;

    // timeout tampilkan
    setTimeout(() => {
        kiriman = false;
        pesan.value = "";
    }, 4000);
});