window.addEventListener("keydown", function(event){
    switch(event.key){
        case 'd':
            key.d.pressed = true;
            player1.lastKey = 'd';
            break;
        case 'a':
            key.a.pressed = true;
            player1.lastKey = 'a';
            break;

        case 'w':
            if(player1.jumpTwo){
                if(player1.jumpOne){
                    player1.jumpOne = false
                } else {
                    player1.jumpTwo = false
                }
                player1.velocity.y = -17;
            }
            console.log('jump')
            player1.pijakan = 32;
            break;

        case 'ArrowRight':
            key.d.pressed = true;
            player1.lastKey = 'd';
            break;
        case 'ArrowLeft':
            key.a.pressed = true;
            player1.lastKey = 'a';
            break;
        case 'ArrowUp':
            player1.velocity.y = -17;
            break;
    }
})
window.addEventListener("keyup", function(event){
    switch(event.key){
        case 'd':
            key.d.pressed = false;
            break;
        case 'a':
            key.a.pressed = false;
            break;
            

        case 'ArrowRight':
            key.d.pressed = false;
            player1.lastKey = 'd';
            break;
        case 'ArrowLeft':
            key.a.pressed = false;
            player1.lastKey = 'a';
            break;
    }

})