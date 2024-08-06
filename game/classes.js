class entity {
    constructor({
        position, size, warna, imageLink, scale = 1,
        offset={x:0, y:0}, framesMax, shadow=false,
        type="entity"
    }){
        this.position = position;
        this.size = size;
        this.warna = warna;

        this.image = new Image();
        this.image.src = imageLink;

        this.scale = scale;
        this.offset = offset;
        this.framesMax = framesMax;
        this.shadow = shadow;
        this.type = type;

        this.flitIt = false;
        
        this.framesCurrent = 0;
        this.framesElapse = 0;
        this.framesHold = 20;
        this.angkageserMap= {
            x: 0,
            y: 0
        }
    }
    gambar(){
        c.drawImage(
            this.image,

            this.framesCurrent * (this.image.width / this.framesMax),
            0,

            this.image.width / this.framesMax,
            this.image.height,

            this.position.x - this.offset.x  + this.angkageserMap.x,
            this.position.y - this.offset.y  + this.angkageserMap.y,
            (this.image.width / this.framesMax) * this.scale,
            this.image.height * this.scale);
    }

    animateFrames(){
        this.framesElapse ++;

        if (this.framesElapse % this.framesHold === 0){
            if (this.framesCurrent < this.framesMax - 1){
                this.framesCurrent ++;
            } else {
                this.framesCurrent = 0;
            }
        }
    }

    update(){
        this.gambar();
        this.animateFrames();
    }
}

class Player extends entity {
    constructor(
       { position, size, warna, imageLink, scale = 1,
        offset={x:0, y:0}, framesMax, shadow=false, type="entity",
        framesCurrent = 0, velocity, sprites
    }){
        super({position, size, warna, imageLink, offset, framesMax, scale, shadow, framesCurrent});

        this.position = position;
        this.velocity = velocity;
        this.size = size;
        this.warna = warna;

        this.image = new Image();
        this.image.src = imageLink;

        this.scale = scale;
        this.offset = offset;
        this.framesMax = framesMax;
        this.shadow = shadow;
        this.type = type;
        
        this.framesCurrent = 0;
        this.framesElapse = 0;
        this.framesHold = 20;

        this.lastKey;
        this.pijakan = 32;
        this.touch = false;
        this.jumpOne = true;
        this.jumpTwo = true;

        this.sprites = sprites;

        for(var sprite in this.sprites){
            sprites[sprite].image = new Image();
            sprites[sprite].image.src = sprites[sprite].imageSrc;
        }
    }

    gravitey(){
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        // gravity function
        if (this.position.y + 
            this.image.height*this.scale + 
            this.velocity.y >= papan.height - this.pijakan){

            this.velocity.y = 0;
            this.position.y = papan.height - this.pijakan;
        } else {
            this.velocity.y += gravity;
        }
    }

    update(){
        this.gambar();
        this.animateFrames();
        this.gravitey();
    }

    switchSprite(sprite){
        // if (this.image === this.sprites.attack1.image &&
        //     this.framesCurrent < this.sprites.attack1.framesMax -1 )
        //     return
        switch(sprite){
            case 'idle':
                if (this.image !== this.sprites.idle.image){
                    this.image = this.sprites.idle.image;
                    this.framesMax = this.sprites.idle.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 20;
                }
                break;
            case 'idleRight':
                if (this.image !== this.sprites.idleRight.image){
                    this.image = this.sprites.idleRight.image;
                    this.framesMax = this.sprites.idleRight.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 20;
                }
                break;
            case 'run':
                if (this.image !== this.sprites.run.image){
                    this.image = this.sprites.run.image;
                    this.framesMax = this.sprites.run.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 6;
                }
                break;
            case 'runKanan':
                if (this.image !== this.sprites.runKanan.image){
                    this.image = this.sprites.runKanan.image;
                    this.framesMax = this.sprites.runKanan.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 6;
                }
                break;
            case 'jump':
                if (this.image !== this.sprites.jump.image){
                    this.image = this.sprites.jump.image;
                    this.framesMax = this.sprites.jump.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 30;
                }
                break;
            case 'fall':
                if (this.image !== this.sprites.fall.image){
                    this.image = this.sprites.fall.image;
                    this.framesMax = this.sprites.fall.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 5;
                }
                break;

            case 'attack1':
                if (this.image !== this.sprites.attack1.image){
                    this.image = this.sprites.attack1.image;
                    this.framesMax = this.sprites.attack1.framesMax;
                    this.framesCurrent = 0;
                }
                break;
        }
    }
}

class pijakan extends entity {
    constructor(
       { position, size, warna, imageLink, scale = 1,
        offset={x:0, y:0}, framesMax, shadow=false, type="pijakan",
        framesCurrent = 0,
    }){
        super({position, size, warna, imageLink, offset, framesMax, scale, shadow, framesCurrent});
        this.position = position;
        this.size = size;
        this.warna = warna;

        this.image = new Image();
        this.image.src = imageLink;

        this.scale = scale;
        this.offset = offset;
        this.framesMax = framesMax;
        this.shadow = shadow;
        this.type = type;
        
        this.framesCurrent = 0;
        this.framesElapse = 0;
        this.framesHold = 20; 
    }
}