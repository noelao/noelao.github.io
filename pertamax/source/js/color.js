function hexToRGB(hex) {
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4), 16);
    return [r, g, b];
}
function rgbToHex(r, g, b) {
    return "" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
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

function warnaRata(hex) {
    var r
    var g
    var b

    for(i in hex){
        if(0 != parseInt(i)){
            r = (parseInt(hex[i].substring(0,2), 16) + r)/2;
            g = (parseInt(hex[i].substring(2,4), 16) + r)/2;
            b = (parseInt(hex[i].substring(4), 16) + r)/2;
        } else {
            r = parseInt(hex[i].substring(0,2), 16);
            g = parseInt(hex[i].substring(2,4), 16);
            b = parseInt(hex[i].substring(4), 16);
        }
    }

    return rgbToHex(r, g, b);
}