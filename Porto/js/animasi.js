var kelihatan = [false, false]
const logos = document.querySelectorAll(".icons img")
const papanTulis = document.querySelector(".tulisan")
const papanTulis2 = document.querySelector(".tulisan2")

const tulisans = ['f', 'r', 'o', 'n', 't', '_', 'e', 'n', 'd']
const tulisans2 = ['b', 'a', 'c', 'k', '_', 'e', 'n', 'd']

const lihatlah = new IntersectionObserver((inian) => {

    inian.forEach((ini, i) => {
        if(ini.isIntersecting){
            if(true){
                mulaiTimbulIcon(true, i)
                kelihatan[i] = true
            }
        } else {
            if(true){
                mulaiTimbulIcon(false, i)
            }
        }
    })
})

function mulaiTimbulIcon(kondisi, ke){
    if(kondisi){
        if(!kelihatan[ke]){
            document.querySelector(".landing2").classList.add("gantiBackLanding2")
            for(h in tulisans){
                let huruf = document.createElement("span")
                huruf.textContent = tulisans[h]
                huruf.className = "hurufan"
        
                huruf.style.transform = "translateY(-100%)"
                huruf.style.animationDelay = `${(parseInt(h)) / 10}s`
                
                papanTulis.appendChild(huruf)
            }
            for(h in tulisans2){
                let huruf = document.createElement("span")
                huruf.textContent = tulisans2[h]
                huruf.className = "hurufan2"
        
                huruf.style.transform = "translateY(-100%)"
                huruf.style.animationDelay = `${(parseInt(h) + 35) / 10}s`
                
                papanTulis2.appendChild(huruf)
            }
            for(let l = 0; l < logos.length; l++){
                console.log(logos[l])
                logos[l].classList.add("hurufan")
        
                logos[l].style.transform = "translateY(-100%)"
                logos[l].style.animationDelay = `${(parseInt(l) + 7) / 10}s`
            }
        } else {
            document.querySelector(".landing2").style.animationIterationCount = "infinite"
            for(h in tulisans){
                tulisans[h].style.animationIterationCount = "infinite"
            }
            for(h in tulisans2){
                tulisans2[h].style.animationIterationCount = "infinite"
            }
            for(let l = 0; l < logos.length; l++){
                logos[l].style.animationIterationCount = "infinite"
            }
        }
    } else {
        document.querySelector(".landing2").style.animationIterationCount = "2"
        for(h in tulisans){
            tulisans[h].style.animationIterationCount = "2"
        }
        for(h in tulisans2){
            tulisans2[h].style.animationIterationCount = "2"
        }
        for(let l = 0; l < logos.length; l++){
            logos[l].style.animationIterationCount = "2"
        }
    }

}

const yangDilihat = document.querySelectorAll(".lihat")
yangDilihat.forEach((el) => lihatlah.observe(el))
