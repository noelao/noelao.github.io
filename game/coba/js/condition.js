const renggang = 5;

function mapLimit(kotakan){
    return(
            kotakan.position.x < 250 ||
            kotakan.position.x > 1430 - kotakan.ukuran.width ||
            kotakan.position.y < 160 ||
            kotakan.position.y > 620 - kotakan.ukuran.height
    );
}
function liminOnMap(kotakan, kotakan2){
    return(
        kotakan.angkageserMap.x <= 0 || kotakan.angkageserMap.y <= 0 
        // (kotakan2.position.x < 301 || kotakan2.position.y < 151)
    );
}