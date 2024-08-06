const papan = document.querySelector('canvas');
const c = papan.getContext('2d');

papan.width = 600;
papan.height = 700;

console.log(c)

c.fillStyle = 'white';
c.fillRect(0,0,papan.width, papan.height);


const key = {
    a:{
        pressed :false
    },
    d:{
        pressed :false
    }
}


const background = new entity({
    imageLink: "resource/background/putih.png",
    position:{
        x: 0,
        y: 0
    },
    ukuran: {
        width: papan.width,
        height: papan.height
    },
    framesMax: 1,
    scale: 1,
})
const pijak = new pijakan({
    imageLink: "resource/map/pijakan.png",
    position:{
        x: 50,
        y: papan.height - 50
    },
    framesMax: 1,
    size:{
        width: 64,
        height: 12,
    },
    scale: 1
})
const pijak2 = new pijakan({
    imageLink: "resource/map/pijakan.png",
    position:{
        x: 80,
        y: papan.height - 200
    },
    framesMax: 1,
    size:{
        width: 64,
        height: 12,
    },
    scale: 1
})
const pijak3 = new pijakan({
    imageLink: "resource/map/pijakan.png",
    position:{
        x: 350,
        y: papan.height - 200
    },
    framesMax: 1,
    size:{
        width: 64,
        height: 12,
    },
    scale: 1
})
const pijak4 = new pijakan({
    imageLink: "resource/map/pijakan.png",
    position:{
        x: 350+64,
        y: papan.height - 200
    },
    framesMax: 1,
    size:{
        width: 64,
        height: 12,
    },
    scale: 1
})

const player1 = new Player({
    position:{
        x: papan.width/2,
        y: papan.height-32
    },
    offset:{
        x: 0,
        y: -6
    },
    size:{
        width: 32,
        height: 32
    },
    velocity:{
        x: 0,
        y: 0,
    },
    imageLink: "resource/player/idle.png",
    framesMax: 3,
    scale: 1,
    sprites: {
        idle: {
            imageSrc : "resource/player/idle.png",
            framesMax : 3,
        },
        idleRight: {
            imageSrc : "resource/player/idleRight.png",
            framesMax : 3,
        },
        run: {
            imageSrc : "resource/player/run2.png",
            framesMax : 8,
        },
        runKanan: {
            imageSrc : "resource/player/run2kanan.png",
            framesMax : 8,
        },
        jump: {
            imageSrc : "resource/player/justjump.png",
            framesMax : 5,
        },
        fall: {
            imageSrc : "resource/player/fall.png",
            framesMax : 5,
        }
    }
})

var cepatJalan = 8;
var gravity = 1;
var dasarBawah = 32;


const pijaks = [pijak, pijak2, pijak3, pijak4]

onX = [false, false, false, false]
onY = [false, false, false, false]

function animasikan(){
    window.requestAnimationFrame(animasikan);

    background.update();
    player1.update();

    pijaks.forEach((ini, i) => {
        ini.update();
        pijaks[3].position.y -= 1
        if(ini.position.y+ini.size.height < 0){
            ini.position.y = papan.height;
        }
        menyentuhGak(player1, ini, i)
    })
    jatongNggk();

    if(player1.position.x < -player1.size.width){
        player1.position.x = papan.width;
    } else if (player1.position.x > papan.width){
        player1.position.x = -player1.size.width;
    }


    player1.velocity.x = 0;

    // walk
    if(key.a.pressed && player1.lastKey === 'a'){
        player1.velocity.x = -cepatJalan;
        player1.switchSprite('run');
        player1.flitIt = false;
    }
    else if (key.d.pressed && player1.lastKey === 'd'){
        player1.velocity.x = cepatJalan;
        player1.switchSprite('runKanan');
        player1.flitIt = true;
    } else {
        if(player1.lastKey === 'd'){
            player1.switchSprite('idleRight');
            player1.flitIt = false;
        } else {
            player1.switchSprite('idle');
            player1.flitIt = false;
        }
    }

    // jump
    if (player1.velocity.y < 0){
        player1.switchSprite('jump');
    } else if (player1.velocity.y > 0){
        player1.switchSprite('fall');
    }
    if(player1.velocity.y > 10){
        player1.jumpOne = true;
        player1.jumpTwo = true;
    }

}























animasikan()