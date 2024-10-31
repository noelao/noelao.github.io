
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

var menuIni = document.querySelectorAll(".titik-tiga")
menuIni.forEach((ini) => {
    ini.addEventListener("click", function(){
        var indikasi = document.querySelector(".menuPencet")
        if(indikasi != null){
            indikasi.remove()
            return
        }
        
        var parentYa = ini.parentElement.parentElement
        console.log(parentYa)
        var tambahkan = document.createElement("div")
        tambahkan.className = "menuPencet"
        parentYa.appendChild(tambahkan)
    })
})


var idBefore = 0
var descriptionIni = document.querySelector(".description")
descriptionMaker(8)
function descriptionMaker(id){
    descriptionIni.innerHTML = ""

    var ini = datas[id]

    // if id == idBefore, tidak usah refresh page
    idBefore = id

    var warnaDescription = warnaRata(ini.warna)
    descriptionIni.style.backgroundColor = `#${warnaDescription}`

    descriptionIni.style.color = "#fff"
    if(cerahAtauTidax(warnaDescription)){
        descriptionIni.style.color = "#000"
    }

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

    let warnaKanan = descriptionIni.querySelectorAll(".warna")
    warnaKanan.forEach((pencet) => {
        pencet.addEventListener("click", function(){
            copyIni(pencet);
        })
    })
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