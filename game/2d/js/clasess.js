
class ada{
    constructor({position, ukuran, warna, kecepatan, imageSrc, scale = 1, offset={x:0, y:0}, framesMax, playerini = false}){
        this.position = position;
        this.ukuran = ukuran;
        this.warna = warna;
        this.kecepatan = kecepatan;
        this.kecepatanS = kecepatan;
        //
        this.image = new Image();
        this.image.src = imageSrc;
        this.framesCurrent = 0;
        this.framesElapse = 0;
        this.framesHold = 30;
        this.offset = offset;
        this.scale = scale;
        this.framesMax = framesMax;
        this.playerini = playerini;
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

            this.position.x - this.offset.x  + this.angkageserMap.x ,
            this.position.y - this.offset.y  + this.angkageserMap.y,
            (this.image.width / this.framesMax) * this.scale,
            this.image.height * this.scale);
    }
    animateFrames(){
        this.framesElapse ++;

        if (this.framesElapse % this.framesHold ===0){
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
//
class mainan extends ada{
    constructor({position, ukuran, warna, kecepatan, imageSrc, offset={x:0, y:0}, framesMax, scale=1, sprites, playerini = false, tenaga, nyawa = 100}){
        //
        super({position, ukuran, warna, kecepatan, imageSrc, offset, framesMax, scale, playerini});
        //
        this.position = position;
        this.ukuran = ukuran;
        this.warna = warna;
        this.kecepatan = kecepatan;
        this.kecepatanS = kecepatan;
        this.framesCurrent = 0;
        this.framesElapse = 0;
        this.framesHold = 10;
        this.sprites = sprites;
        this.lastKey;
        this.tenaga = tenaga;
        this.nyawa = nyawa;
        this.mengetik = false;
        this.onattack = false;
        this.chatBox = true;
        this.itemTampil = true;

        //spell
        this.tenagaspell = false;

        for (const sprite in this.sprites){
            sprites[sprite].image = new Image();
            sprites[sprite].image.src = sprites[sprite].imageSrc;
        }
    }
    limit(){   
        //
        if(this.position.x < 250){
            this.position.x = 250;
        }
        if(this.position.x > 1430 - this.ukuran.width){
            this.position.x = 1430 - this.ukuran.width;
        }
        if(this.position.y < 160){
            this.position.y = 160;
        }
        if(this.position.y > 620 -this.ukuran.height){
            this.position.y = 620 -this.ukuran.height;
        }
        
    }
    switchSprite(sprite){
        if (this.image === this.sprites.serangdepan.image &&
            this.framesCurrent < this.sprites.serangdepan.framesMax -1 )
            return
        switch(sprite){
            case 'idle':
                if (this.image !== this.sprites.idle.image){
                    this.image = this.sprites.idle.image;
                    this.framesMax = this.sprites.idle.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case 'idledepan':
                if (this.image !== this.sprites.idledepan.image){
                    this.image = this.sprites.idledepan.image;
                    this.framesMax = this.sprites.idledepan.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case 'idlekiri':
                if (this.image !== this.sprites.idlekiri.image){
                    this.image = this.sprites.idlekiri.image;
                    this.framesMax = this.sprites.idlekiri.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case 'idlekanan':
                if (this.image !== this.sprites.idlekanan.image){
                    this.image = this.sprites.idlekanan.image;
                    this.framesMax = this.sprites.idlekanan.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case 'jalankanan':
                if (this.image !== this.sprites.jalankanan.image){
                    this.image = this.sprites.jalankanan.image;
                    this.framesMax = this.sprites.jalankanan.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case 'jalanbawah':
                if (this.image !== this.sprites.jalanbawah.image){
                    this.image = this.sprites.jalanbawah.image;
                    this.framesMax = this.sprites.jalanbawah.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case 'jalandepan':
                if (this.image !== this.sprites.jalandepan.image){
                    this.image = this.sprites.jalandepan.image;
                    this.framesMax = this.sprites.jalandepan.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case 'jalankiri':
                if (this.image !== this.sprites.jalankiri.image){
                    this.image = this.sprites.jalankiri.image;
                    this.framesMax = this.sprites.jalankiri.framesMax;
                    this.framesCurrent = 0;
                }
                break;
            case 'serangdepan':
                if (this.image !== this.sprites.serangdepan.image){
                    this.image = this.sprites.serangdepan.image;
                    this.framesMax = this.sprites.serangdepan.framesMax;
                    this.framesCurrent = 0;
                }
                break;
        }
    }
    shadow(){
        if(this.playerini){
            c.fillStyle = "rgba(0, 0, 0, 0.500)";
            c.fillRect(
                this.position.x + this.image.width/8 - 19,
                this.position.y + this.image.height/2 + 18,
                45, 30);
        }
    }
    attack(){
        setTimeout(() => {
            this.onattack = true;
            console.log('on attack')
            this.switchSprite('serangdepan')
        }, 100);
        setTimeout(()=>{
            this.onattack = false;
        }, 500);
    }
    update(){
        this.shadow();
        this.limit();
        this.gambar();
        this.animateFrames();
    }
}
class items extends ada {
    constructor({position, ukuran, kecepatan, imageSrc, offset, framesMax, scale, playerini = false, angkageserMap}){
        super({position, ukuran, kecepatan, imageSrc, offset, framesMax, scale, playerini, angkageserMap});
        
    }
    shadow(){
        if(this.playerini){
            c.fillStyle = "rgba(0, 0, 0, 0.500)";
            c.fillRect(
                (this.position.x + this.image.width/8 - 7) + this.angkageserMap.x,
                (this.position.y + this.image.height/2 + 18) + this.angkageserMap.y,
                45, 30);
        }
    }
    update(){
        this.shadow();
        this.gambar();
        this.animateFrames();
    }
}