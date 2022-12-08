const papan = document.querySelector('canvas');
const c = papan.getContext('2d');

// variable
var penambahanAngka = 0.05;
//

papan.width = 1920;
papan.height = 930;

console.log(c)

c.fillStyle = 'black';
c.fillRect(0,0,papan.width, papan.height);



function tenaga(lebar){
    if(lebar > (lebarTenaga / 3)){
        c.fillStyle = 'rgb(0, 189, 196)';
        c.fillRect(player.position.x, player.position.y, lebar, 5);
        c.strokeRect(player.position.x, player.position.y, lebarTenaga, 5);
    } else {
        c.fillStyle = 'red'
        c.fillRect(player.position.x, player.position.y, lebar, 5);
        c.strokeRect(player.position.x, player.position.y, lebarTenaga, 5);
    }
}
function nyawa(lebar){
    if(lebar > (lebarBarNyawa / 3)){
        c.fillStyle = '#37946e'
        c.fillRect(player.position.x, player.position.y-9, lebar, 9);
        c.strokeRect(player.position.x, player.position.y-9, lebarBarNyawa, 9);
    } else {
        c.fillStyle = 'red'
        c.fillRect(player.position.x, player.position.y-9, lebar, 9);
        c.strokeRect(player.position.x, player.position.y-9, lebarBarNyawa, 9);
    }
}

const key = {
    a:{
        pressed :false
    },
    s:{
        pressed :false
    },
    w:{
        pressed :false
    },
    d:{
        pressed :false
    },
    space:{
        pressed :false
    }
}

//background
const background = new ada({
    imageSrc: "aksesoris/backKotak.png",
    position:{
        x: 0,
        y: 0
    },
    ukuran: {
        width: papan.width,
        height: papan.height
    },
    framesMax: 1,
});

// semak2
const semak1 = new ada({
    imageSrc: "aksesoris/hiasan/semakgoyang1.png",
    position:{
        x: 510,
        y: 240
    },
    ukuran: {
        width: 128,
        height: 128,
    },
    framesMax: 4
});
const semak2 = new ada({
    imageSrc: "aksesoris/hiasan/semakgoyang1.png",
    position:{
        x: 900,
        y: 295
    },
    ukuran: {
        width: 128,
        height: 128,
    },
    framesMax: 4
});

// declare player
const player = new mainan({
    nyawa: 120,
    tenaga: 120,
    playerini :true,
    kecepatan: 5,
    warna: 'white',
    position:{
        x: 655,
        y: 355
    },
    ukuran:{
        width: 128,
        height: 128
    },
    imageSrc: "gerakan/idle.png",
    framesMax : 4,
    sprites:{
        idle :{
            imageSrc: "gerakan/idle.png",
            framesMax: 4 
        },
        idledepan :{
            imageSrc: "gerakan/idledpan.png",
            framesMax: 4 
        },
        idlekanan :{
            imageSrc: "gerakan/idlekanan.png",
            framesMax: 4
        },
        idlekiri :{
            imageSrc: "gerakan/idlekiri.png",
            framesMax: 4
        },
        jalankanan: {
            imageSrc: "gerakan/larikekanan.png",
            framesMax: 4
        },
        jalandepan: {
            imageSrc: "gerakan/larikedepan.png",
            framesMax: 4
        },
        jalanbawah: {
            imageSrc: "gerakan/larikebawah.png",
            framesMax: 4
        },
        jalankiri: {
            imageSrc: "gerakan/larikekiri.png",
            framesMax: 4
        },
        serangdepan: {
            imageSrc: "gerakan/pukul/serangBawah.png",
            framesMax: 4
        }
    },

});
const aple = new items({
    imageSrc: "items/apple.png",
    ukuran: {
        width: 64,
        height: 64
    },
    framesMax: 2,
    position: {
        x: 700,
        y: 500
    },
    playerini: true
});


// variable bar nyawa dan tenaga
const lebarTenaga = player.tenaga;
const lebarBarNyawa = player.nyawa;
//
const bgSementara = () => {
    c.fillStyle = 'green';
    c.fillRect(0,0,papan.width, papan.height);
}


function bataAatasTampil(player, object){
    if(player.position.y > object.position.y + 10){
        object.update();
    }
}
function batasBawahTampil(player, object){
    if(player.position.y < object.position.y + 10){
        object.update();
    }
}

        // cek SPELL
function cekSpellTenaga(){
    if(player.tenagaspell){
        penambahanAngka = 10;
    } else {
        penambahanAngka = 0.05;
    }
}


    // CORE DISPLAY
function animasikan(){
    window.requestAnimationFrame(animasikan);
    // bgSementara();
    background.update();

    bataAatasTampil(player, semak1);
    bataAatasTampil(player, semak2);

    // display player
    tenaga(player.tenaga);
    nyawa(player.nyawa);
    player.update();

    batasBawahTampil(player, semak1);
    batasBawahTampil(player, semak2);
    batasBawahTampil(player, aple);

    
    tanmbahTenaga();

    
    
                // WALK ANIMATION
    if(key.a.pressed && player.lastKey === 'a'){
        if(!mapLimit(player)){
            player.position.x -= player.kecepatan;
            player.switchSprite('jalankiri');
        }
        if(mapLimit(player) && background.angkageserMap.x < 0) {
            background.angkageserMap.x += player.kecepatan;
            semak1.angkageserMap.x += player.kecepatan;
            aple.angkageserMap.x += player.kecepatan;
            semak2.angkageserMap.x += player.kecepatan;
        }
    }
    if (key.d.pressed && player.lastKey === 'd'){
        if(!mapLimit(player)) {
            player.position.x += player.kecepatan;
            player.switchSprite('jalankanan');
        }
        if(mapLimit(player) && background.angkageserMap.x > -2405) {
            background.angkageserMap.x -= player.kecepatan;
            semak1.angkageserMap.x -= player.kecepatan;
            aple.angkageserMap.x -= player.kecepatan;
            semak2.angkageserMap.x -= player.kecepatan;
        }
    }
    if(key.s.pressed && player.lastKey === 's'){
        if(!mapLimit(player)){
            player.position.y += player.kecepatan;
            player.switchSprite('jalanbawah');
        }
        if(mapLimit(player) && background.angkageserMap.y > -1085) {
            background.angkageserMap.y -= player.kecepatan;
            semak1.angkageserMap.y -= player.kecepatan;
            aple.angkageserMap.y -= player.kecepatan;
            semak2.angkageserMap.y -= player.kecepatan;
        }
    }
    if(key.w.pressed && player.lastKey === 'w'){
        if(!mapLimit(player)) {
            player.position.y -= player.kecepatan;
            player.switchSprite('jalandepan');
        }
        if(mapLimit(player) && background.angkageserMap.y < 0) {
            background.angkageserMap.y += player.kecepatan;
            semak1.angkageserMap.y += player.kecepatan;
            aple.angkageserMap.y += player.kecepatan;
            semak2.angkageserMap.y += player.kecepatan;
        }
    }

            // IDLE
    if ((!(key.a.pressed || key.d.pressed ||key.s.pressed ||key.w.pressed)) && player.lastKey === 's'){
        player.switchSprite('idle');
    }
    if ((!(key.a.pressed || key.d.pressed ||key.s.pressed ||key.w.pressed)) && player.lastKey === 'd'){
        player.switchSprite('idlekanan');
    }
    if ((!(key.a.pressed || key.d.pressed ||key.s.pressed ||key.w.pressed)) && player.lastKey === 'a'){
        player.switchSprite('idlekiri');
    }
    if ((!(key.a.pressed || key.d.pressed ||key.s.pressed ||key.w.pressed)) && player.lastKey === 'w'){
        player.switchSprite('idledepan');
    }


            // SKILL DASH
    if(player.tenaga >= 0){
        if(player.lastKey === 'd' && key.space.pressed){
            if(!mapLimit(player)) {
                player.position.x += 15;
                player.tenaga -= 0.7;
            }
            if(mapLimit(player) && background.angkageserMap.x > -2405) {
                background.angkageserMap.x -= 15;
                semak1.angkageserMap.x -= 15;
                aple.angkageserMap.x -= 15;
                semak2.angkageserMap.x -= 15;
            }
        }
        if(player.lastKey === 'a' && key.space.pressed){
            if(!mapLimit(player)) {
                player.position.x -= 15;
                player.tenaga -= 0.7;
            }
            if(mapLimit(player) && background.angkageserMap.x < 0) {
                background.angkageserMap.x += 15;
                semak1.angkageserMap.x += 15;
                aple.angkageserMap.x += 15;
                semak2.angkageserMap.x += 15;
            }
        }
        if(player.lastKey === 's' && key.space.pressed){
            if(!mapLimit(player)) {
                player.position.y += 15;
                player.tenaga -= 0.7;
            }
            if(mapLimit(player) && background.angkageserMap.y > -1085) {
                background.angkageserMap.y -= 15;
                semak1.angkageserMap.y -= 15;
                aple.angkageserMap.y -= 15;
                semak2.angkageserMap.y -= 15;
            }
        }
        if(player.lastKey === 'w' && key.space.pressed){
            if(!mapLimit(player)) {
                player.position.y -= 15;
                player.tenaga -= 0.7;
            }
            if(mapLimit(player) && background.angkageserMap.y < 0) {
                background.angkageserMap.y += 15;
                semak1.angkageserMap.y += 15;
                aple.angkageserMap.y += 15;
                semak2.angkageserMap.y += 15;
            }
        }    
    }


    
    // spell true false
    cekSpellTenaga();



            // ATTACK COLLIDER
    if(player.onattack && itemCollider(player, semak1)){
        semak1.position.x = -100;
        console.log('makan g');
        player.onattack = false;
    }
    if(player.onattack && itemCollider(player, semak2)){
        semak2.position.x = -100;
        console.log('makan g');
        player.onattack = false;
    }
    if(player.onattack && itemCollider(player, aple)){
        aple.position.x = -100;
        console.log('makan aple');
        player.onattack = false;
        getItem = true;
    }

            // LIMIT COLLIDER

    // limitCollObj(player, semak2);

    
}

function itemCollider(player, object) {
    return ( 
        player.position.x > (object.position.x + object.angkageserMap.x) - (128 - 60) && 
        player.position.x < (object.position.x + object.angkageserMap.x) + (128 - 60) &&
        player.position.y > (object.position.y + object.angkageserMap.y) - (128 - 60) && 
        player.position.y < (object.position.y + object.angkageserMap.y) + (128 - 60) 
    );
}
function limitCollObj(player, object) {
    c.fillStyle = 'rgba(46, 46, 46, 0.234)';
    c.fillRect(semak2.position.x, semak2.position.y, 128 - 60,  128 - 60)

    c.fillStyle = 'rgba(46, 46, 46, 0.234)';
    c.fillRect(player.position.x, player.position.y, 128, 128)
}

var getItem = false
animasikan();

function tanmbahTenaga(){
    if(player.tenaga < lebarTenaga && key.space.pressed === false){
        player.tenaga += penambahanAngka;
    }
}
