const humberger = document.querySelector(".atas .menu")
const daftarMenu = document.querySelector(".container .daftarmenu")

var terbuka = false
humberger.addEventListener("click", function(){
    if(!terbuka){
        daftarMenu.style.transform = "translateX(0)"
        daftarMenu.style.opacity = "1"
        terbuka = !terbuka
    } else {
        daftarMenu.style.transform = "translateX(-100%)"
        daftarMenu.style.opacity = "0"
        terbuka = !terbuka
    }

})