const datas = [
    {
        "id":1,
        "title":"kemana",
        "warna":["161540", "3b354b", "543a44", "273037", "4b6169"],
        "likes":3,
    },
    {
        "id":2,
        "title":"kemana",
        "warna":["795c5f", "25232e", "2f3d3b", "6b6a56", "632514", "785028"],
        "likes":3,
    },
    {
        "id":3,
        "title":"kemana",
        "warna":["564c41", "1a130f"],
        "likes":3,
    },
    {
        "id":4,
        "title":"joy",
        "warna":["264653","2a9d8f","e9c46a","f4a261","e76f51"],
        "likes":3,
    },
    {
        "id":5,
        "title":"kemana",
        "warna":["ff6d00", "ff7900","ff8500","ff9100","ff9e00","240046","3c096c","5a189a","7b2cbf","9d4edd"],
        "likes":3,
    },
    {
        "id":6,
        "title":"kemana",
        "warna":["ccd5ae","e9edc9","fefae0","faedcd","d4a373"],
        "likes":3,
    },
    {
        "id":7,
        "title":"kemana",
        "warna":["001219","005f73","0a9396","94d2bd","e9d8a6","ee9b00","ca6702","bb3e03","ae2012","9b2226"],
        "likes":3,
    },
    {
        "id":8,
        "title":"kemana",
        "warna":["2c6e49","4c956c","fefee3","ffc9b9","d68c45"],
        "likes":3,
    },
    {
        "id":9,
        "title":"kemana",
        "warna":["2b2d42","8d99ae","edf2f4","ef233c","d90429"],
        "likes":3,
    },
    {
        "id":10,
        "title":"kemana",
        "warna":["ff595e","ffca3a","8ac926","1982c4","6a4c93"],
        "likes":3,
    },
    {
        "id":11,
        "title":"kemana",
        "warna":["3d5a80","98c1d9","e0fbfc","ee6c4d","293241"],
        "likes":3,
    },
    {
        "id":12,
        "title":"kemana",
        "warna":["30343f","fafaff","e4d9ff","273469","1e2749"],
        "likes":3,
    },

]

var wrapper = document.querySelector(".content .kiri")
for (i in datas){
    console.log(datas[i])
    var pallet = ""
    var berpaWarna = datas[i].warna.length
    var classBaruNih = ""
    if(berpaWarna > 5){
        classBaruNih = "yangIni"
    } else {
        classBaruNih = ""
    }

    for(g in datas[i].warna){
        let cerah = "#fff"
        if(cerahAtauTidax(datas[i].warna[g])){
            cerah = "#000"
        }
        var itu = `
            <div class="warna ${classBaruNih}" style="background-color: #${datas[i].warna[g]}; --angka: ${berpaWarna * 3/5}; color: ${cerah};">
                <div class="idin" style="display: none;">${i}</div>
                <div class="indi">
                    <p>${datas[i].warna[g]}</p>
                </div>
            </div>
        `
        pallet += itu
    }


    var ini = `
                <div class="displayer">
                    <div class="tempat-warna">
                        ${pallet}
                    </div>
                    <div class="tombolan">
                        <div class="salinSemua"></div>
                        <div class="titik-tiga">
                            <div class="titik-kecil"></div>
                            <div class="titik-kecil"></div>
                            <div class="titik-kecil"></div>
                        </div>
                    </div>
                </div>
    `

    wrapper.innerHTML += ini
}

var warnaIni = document.querySelectorAll(".warna")
warnaIni.forEach((ini) => {
    ini.addEventListener("click", function(){
        copyIni(ini);
        descriptionMaker(ini.querySelector(".idin").innerHTML)
    })
})



var idBefore = 0
var descriptionIni = document.querySelector(".description")
descriptionMaker(8)
function descriptionMaker(id){
    descriptionIni.innerHTML = ""
    var ini = datas[id]
    console.log(ini)
    // if id == idBefore, tidak usah refresh page
    idBefore = id

    let pallet = ""
    for(i in ini.warna){
        let cerah = "#fff"
        if(cerahAtauTidax(ini.warna[i])){
            cerah = "#000"
        }
        var itu = `
            <div class="warna" style="background-color: #${ini.warna[i]}; --angka: ${berpaWarna * 3/5}; color: ${cerah};">
                <div class="idin" style="display: none;">${i}</div>
                <div class="indi">
                    <p>${ini.warna[i]}</p>
                </div>
            </div>
        `
        pallet += itu
    }

    descriptionIni.innerHTML = `
        <div class="judoel">
            <h2>${ini.title}</h2>
        </div>
        <div class="tagTheme"></div>
        <div class="tempat-warna">
            ${pallet}
        </div>
        <a href="#" class="creator">
            <div class="creator-poto"></div>
            <div class="name-creator">
                <p>noelao <span>||el creatore</span></p>
            </div>
        </a>
    `

}

function copyIni(ini){
        // Select the text or content you want to copy
        var textToCopy = ini.querySelector("p").innerHTML;

        // Create a textarea element (off-screen) to hold the text to copy
        var textArea = document.createElement("textarea");
        textArea.value = textToCopy;

        // Append the textarea to the document
        document.body.appendChild(textArea);

        // Select the text in the textarea
        textArea.select();

        // Execute the copy command
        document.execCommand('copy');

        // Remove the textarea from the document
        document.body.removeChild(textArea);

        // Optionally, provide feedback to the user (e.g., alert or change button text)
        ini.querySelector("p").innerHTML = '👍';
        setTimeout(() => {
        ini.querySelector("p").innerHTML = textToCopy
        }, 500)
}