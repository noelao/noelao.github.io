function rectangularCollision({
    rectangle1, rectangle2
}){
    return  (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x 
        && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width
        && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y
        && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    );
}

function didialam(player, sentuh){
    if(sentuh.position.x < player.position.x && player.position.x + player.size.width < sentuh.position.x + sentuh.size.width ){
        return console.log("menyentuh x")
    }
}

function menyentuhGak(player, sentuh, i){
    this.sentuh = sentuh;
    this.player = player;

    // if(i == "0"){
    //     console.log(player.position.y + " " + i)
    //     console.log(sentuh.position.y + " " + i)
    // }

    // console.log(onX)

    // if player inside x
    if(this.player.position.x < this.sentuh.position.x + this.sentuh.size.width && this.player.position.x + this.player.size.width > this.sentuh.position.x){
        onX[i] = true
    } else {
        onX[i] = false
    }
    // if player inside y
    if(this.player.position.y + player.size.heigh > sentuh.position.y && player.position.y < sentuh.position.y + sentuh.size.heigh){
    } else {
    }

    // if player on top sentuh in range height player
    //ontop sentuh
    if(this.player.position.y < sentuh.position.y && 
        this.player.position.y >= sentuh.position.y - player.size.height && this.player.velocity.y >= 0
    ){
        onY[i] = true
        // this.player.pijakan = papan.height - (this.sentuh.position.y - 32)
    } else {
        onY[i] = false
    }
    // if((this.player.position.y + this.player.size.height < this.sentuh.position.y || this.player.position.y + this.player.size.height > this.sentuh.position.y)){
    //     // console.log("lolos 1" + " " + i)
    //     // console.log("lolos 1" + " " + i)

    //     if(this.player.position.y < this.sentuh.position.y + this.sentuh.size.height && this.player.position.y + this.player.size.height > this.sentuh.position.y ){
    //         // console.log("lolos 2")
            
    //         if(this.player.position.y + this.player.size.height > this.sentuh.position.y && inx && this.player.velocity.y >= 0){
    //             // console.log("lolos 3")
    //             this.player.pijakan = papan.height - (this.sentuh.position.y - 31)
    //         } else {
    //         }
    //     } else {
    //     }
    // } else {
    // }
}

function jatongNggk(){
    blehX = 0
    blehY = 0
    for(i in onX){
        if(onX[i] == false){
            blehX += 1
        }
        if(onY[i] == false){
            blehY += 1
        }
    }
    // console.log("batas atas")
    // console.log(onX)
    // console.log(onY)
    // console.log("batas bawah")
    if(blehX == onX.length && blehY == onX.length){
        // console.log("boing X")
        this.player.pijakan = 32
    }

    for(i in onX){
        if(onX[i] && onY[i]){
            player1.pijakan = papan.height - (pijaks[i].position.y - 32)
            // console.log(player1.position.y)
            break;
        } else {
            this.player.pijakan = 32
        }
    }

}