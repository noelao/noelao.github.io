var scrollAn
var landing = document.querySelector(".landing")

animasikan()
function animasikan(){
    window.requestAnimationFrame(animasikan)
    
    scrollAn = window.scrollY

    if(scrollAn > landing.clientHeight){
        document.querySelector(".header").style.position = "absolute"
    } else {
        document.querySelector(".header").style.position = "sticky"
    }
}