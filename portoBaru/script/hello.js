sayHello = document.querySelector(".wrapper .kiri .hello")
responHello = document.querySelector(".popUp")

console.log(sayHello)
console.log(responHello)

sayHello.addEventListener("click", function(){

    console.log("terpencet")
    responHello.style.display = "flex"

})

responHello.addEventListener("click", function(){
    responHello.style.display = "none"
})