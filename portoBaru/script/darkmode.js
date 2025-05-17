const tombolSwitch = document.querySelector(".menu .darkmode")

var mode = "dark"

console.log(mode)
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
        
        tombolSwitch.querySelector(".ligh").style.transform = "translateX(-100%)"
        tombolSwitch.querySelector(".dark").style.transform = "translateX(0%)"
    } else {
        document.documentElement.style.setProperty('--terang', '#fff');
        document.documentElement.style.setProperty('--gelap', '#000');
        
        tombolSwitch.querySelector(".ligh").style.transform = "translateX(0%)"
        tombolSwitch.querySelector(".dark").style.transform = "translateX(100%)"
    }
}