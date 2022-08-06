const pop = document.getElementById("popularne")

if(pop!=null){
    const img1 = document.createElement("img")
    img1.src="Zidar.jpg"
    const img2 = document.createElement("img")
    img2.src="keram.png"
    const img3 = document.createElement("img")
    img3.src="vodo.jpg"

    img1.className="slike"
    img2.className="slike"
    img3.className="slike"

    pop.appendChild(img1)
    pop.appendChild(img2)
    pop.appendChild(img3)

    const br = document.createElement("br")
    pop.appendChild(br)

    const span1 = document.createElement("span")
    span1.textContent="Zidar"
    const span2 = document.createElement("span")
    span2.textContent="Keramicar"
    const span3 = document.createElement("span")
    span3.textContent="Vodoinstalater"
  
    span1.className="spann"
    span2.className="spann"
    span3.className="spann"
    span3.id="span3"
  
    pop.appendChild(span1)
    pop.appendChild(span2)
    pop.appendChild(span3)

    const br1 = document.createElement("br")
    pop.appendChild(br1)



    const radio1 = document.createElement("input")
    radio1.type="radio"
    radio1.className="radio"
    radio1.checked=true

    const radio2 = document.createElement("input")
    radio2.type="radio"
    radio2.className="radio"
    const radio3 = document.createElement("input")
    radio3.type="radio"
    radio3.className="radio"

    radio1.id="prviradio"

   
    pop.appendChild(radio1)
    pop.appendChild(radio2)
    pop.appendChild(radio3)

    radio1.addEventListener("click", function(){
      radio2.checked=false
      radio3.checked=false
      img1.src="Zidar.jpg"
      img2.src="keram.png"
      img3.src="vodo.jpg"
      span1.textContent="Zidar"
      span2.textContent="Keramicar"
      span3.textContent="Vodoinstalater"
      span2.id=""
      span3.id="span3"
      
      
    })

    radio2.addEventListener("click", function(){
        radio1.checked=false
        radio3.checked=false
        img1.src="moler1.jpg"
        img2.src="automehanicar.jpg"
        img3.src="komp.jpg"
        span1.textContent="Moler"
        span2.textContent="Automehanicar"
        span3.textContent="Serviser"
        
        span2.id="span2"
        span3.id="span3"
    })

    radio3.addEventListener("click", function(){
        radio2.checked=false
        radio1.checked=false
        img1.src="elektricar.jpg"
        img2.src="stolar.jpg"
        img3.src="Bastovan.jpg"
        span1.textContent="Elektricar"
      span2.textContent="Stolar"
      span3.textContent="Bastovan"
      span2.id="span2"
      span3.id="span3a"
      
    })

    const opis = document.getElementById("opis")
    pop.appendChild(opis)

     const konakt = document.getElementById("kontakt")
//     pop.appendChild(konakt)
    // const body = document.getElementsByTagName("body")
     //body[0].appendChild(konakt)
}

const meni = document.getElementsByClassName("meni")
if(meni!=null){
  for(let s of meni){
    s.addEventListener("click", function(){
      
      
    })

    s.addEventListener("mouseover", function(){
      s.style.backgroundColor="white"
      s.style.color="rgba(7, 7, 206, 0.685)"
    })
    s.addEventListener("mouseout", function(){
      s.style.backgroundColor=""
      s.style.color="whitesmoke"
    })
    
  }


}
const regi = document.getElementById("reg")
regi.addEventListener("mouseover", function(){
  regi.style.backgroundColor = "rgb(221, 218, 218)"
})

regi.addEventListener("mouseout", function(){
  regi.style.backgroundColor = "whitesmoke"
})
const prij = document.getElementById("pri")
prij.addEventListener("mouseover", function(){
  prij.style.backgroundColor = "rgb(221, 218, 218)"
})

prij.addEventListener("mouseout", function(){
  prij.style.backgroundColor = "whitesmoke"
})