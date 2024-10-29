function hexToRGB(hex) {
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4), 16);
    return [r, g, b];
}

function cerahAtauTidax(hex) {
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4), 16);

    if((r > 230 || g > 230) || b > 230){
        return true
    } else {
        return false
    }
}