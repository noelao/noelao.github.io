var ganti = true;
const iniUntukMobile = document.querySelector('.mobile.button');
document.querySelector('.enableButton').addEventListener('click', function(){
    if(ganti){
        iniUntukMobile.style.display = 'flex';
        ganti = false;
    } else {
        iniUntukMobile.style.display = 'none';
        ganti = true;
    }
})



document.querySelector('.maju').addEventListener('mouseenter', function(){
    key.w.pressed = true;
    player.lastKey = 'w';
    // setTimeout(() => {
    //     key.w.pressed = false;
    // }, 500);
})
document.querySelector('.mundur').addEventListener('mouseenter', function(){
    key.s.pressed = true;
    player.lastKey = 's';
    // setTimeout(() => {
    //     key.s.pressed = false;
    // }, 500);
})
document.querySelector('.kanan').addEventListener('mouseenter', function(){
    key.d.pressed = true;
    player.lastKey = 'd';
    // setTimeout(() => {
    //     key.d.pressed = false;
    // }, 500);
})
document.querySelector('.kiri').addEventListener('mouseenter', function(){
    key.a.pressed = true;
    player.lastKey = 'a';
    // setTimeout(() => {
    //     key.a.pressed = false;
    // }, 500);
})
document.querySelector('.dash').addEventListener('mouseenter', function(){
    key.space.pressed = true;
    // setTimeout(() => {
    //     key.space.pressed = false;
    // }, 500);
})
document.querySelector('.pukul').addEventListener('mouseenter', function(){
    player.attack();
})



document.querySelector('.maju').addEventListener('mouseout', function(){
    key.w.pressed = false;
    player.lastKey = 'w';
    // setTimeout(() => {
    //     key.w.pressed = false;
    // }, 500);
})
document.querySelector('.mundur').addEventListener('mouseout', function(){
    key.s.pressed = false;
    player.lastKey = 's';
    // setTimeout(() => {
    //     key.s.pressed = false;
    // }, 500);
})
document.querySelector('.kanan').addEventListener('mouseout', function(){
    key.d.pressed = false;
    player.lastKey = 'd';
    // setTimeout(() => {
    //     key.d.pressed = false;
    // }, 500);
})
document.querySelector('.kiri').addEventListener('mouseout', function(){
    key.a.pressed = false;
    player.lastKey = 'a';
    // setTimeout(() => {
    //     key.a.pressed = false;
    // }, 500);
})
document.querySelector('.dash').addEventListener('mouseout', function(){
    key.space.pressed = false;
    // setTimeout(() => {
    //     key.space.pressed = false;
    // }, 500);
})