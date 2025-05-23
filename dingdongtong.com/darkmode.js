const tombolSwitch = document.querySelector(".atas .darkmode")

var mode = "light"

checkMode();

tombolSwitch.addEventListener("click", function(){
    if(mode == "light"){
        mode = "dark"
        checkMode();
    } else {
        mode = "light"
        checkMode();
    }
})

function checkMode(){
    if (mode == "dark"){
        document.documentElement.style.setProperty('--terang', '#000');
        document.documentElement.style.setProperty('--gelap', '#fff');
        document.documentElement.style.setProperty('--terang3', '#0a0a0a');
        document.documentElement.style.setProperty('--gelap3', '#ededed');
        
        tombolSwitch.querySelector(".ligh").style.transform = "translateX(-100%)"
        tombolSwitch.querySelector(".dark").style.transform = "translateX(0%)"
    } else {
        document.documentElement.style.setProperty('--terang', '#fff');
        document.documentElement.style.setProperty('--gelap', '#000');
        document.documentElement.style.setProperty('--terang3', '#ededed');
        document.documentElement.style.setProperty('--gelap3', '#0a0a0a');
        
        tombolSwitch.querySelector(".ligh").style.transform = "translateX(0%)"
        tombolSwitch.querySelector(".dark").style.transform = "translateX(100%)"
    }
}