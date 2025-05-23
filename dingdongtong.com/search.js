var tombolSearch = document.querySelector(".navKiri .atas .searchMenu")

var tampilkanSearch = false
tombolSearch.addEventListener("click", function(){
    if(!tampilkanSearch){
        document.querySelector(".container .searchFormIni").style.bottom = "420px"
        
        tampilkanSearch = !tampilkanSearch
    } else {
        document.querySelector(".container .searchFormIni").style.bottom = "-42px"
        
        tampilkanSearch = !tampilkanSearch
    }

})