
window.addEventListener('keydown', (event)=>{
    switch(event.key){
        case '/':
            console.log("pressed");
            if(player.chatBox){
                document.querySelector('div.dari').style.display = 'flex';
                player.chatBox = false;
            } else {
                document.querySelector('div.dari').style.display = 'none';
                player.chatBox = true;
            }
            break;
        case 'e':
            console.log("pressed");
            if(player.itemTampil){
                document.querySelector('div.itemsPlayer').style.display = 'flex';
                player.itemTampil = false;
            } else {
                document.querySelector('div.itemsPlayer').style.display = 'none';
                player.itemTampil = true;
            }
            break;
    }
    if(!player.mengetik){
        switch(event.key){
            case 'w':
                key.w.pressed = true;
                player.lastKey = 'w';
                // player.switchSprite('jalandepan');
                break;
            case 'a':
                key.a.pressed = true;
                player.lastKey = 'a';
                // player.switchSprite('jalankiri');
                break;
            case 's':
                key.s.pressed = true;
                player.lastKey = 's';
                // player.switchSprite('jalanbawah');
                break;
            case 'd':
                key.d.pressed = true;
                player.lastKey = 'd';
                // player.switchSprite('jalansamping');
                break;
            case ';':
                player.attack();
                    // player.lastKey = 'c';
                    break;
            case 'l':
                key.space.pressed = true;
                // player.lastKey = 'c';
                break;
        }
    }
});

window.addEventListener('keyup', (event)=>{
    switch(event.key){
        case 'w':
            key.w.pressed = false;
            // player.switchSprite('idle');
            break;
        case 'a':
            key.a.pressed = false;
            // player.switchSprite('idle');
            break;
        case 's':
            key.s.pressed = false;
            // player.switchSprite('idle');
            break;
        case 'd':
            key.d.pressed = false;
            // player.switchSprite('idle');
            break;
        case 'l':
            key.space.pressed = false;
            // player.switchSprite('idle');
            break;
    }
});