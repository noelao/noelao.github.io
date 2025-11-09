const gunungCLick = document.querySelector(".gunungan.ggunung.pencet")
const abdiKanan = document.querySelectorAll(".gunungan2.ggunung")
console.log(abdiKanan);

var gunungterCLick = false
gunungCLick.addEventListener("click", function(){
    // gunungCLick.style.transform = "translateX(calc(-50%)) translateY(calc(-50%))"
    if(gunungterCLick){
        abdiKanan[0].classList.toggle("kasih");
        abdiKanan[1].classList.toggle("kasih2");

        gunungterCLick =!gunungterCLick
    } else {
        abdiKanan[0].classList.toggle("kasih");
        abdiKanan[1].classList.toggle("kasih2");
        
        gunungterCLick =!gunungterCLick
    }
})