let h1 = document.querySelector('h1');
let box = document.querySelector("#box");





box.addEventListener("click", function (e) {

    let keyDiv = e.target.closest(".white, .black");
    if (!keyDiv) return;
     
    console.log(keyDiv)
    let id = keyDiv.id;
    playByClick(id);
});

function playByClick(e){
    // console.log(e)
    let aud = new Audio(`./assets/${e}.mp3`);
    aud.currentTime = 0;   
    aud.play();
     const keyBox = document.getElementById(String(e));
     effect(keyBox)

}
function effect(keyBox){
    
        if (keyBox) {
            // console.log(keyBox)


            keyBox.style.backgroundColor="gray"
            keyBox.style.scale="0.98"
            icon.style.opacity=1
            let rota=Math.random()*359
            let left=Math.random()*30+20
            // console.log(keyBox);
            let r=Math.floor(Math.random()*255)
            let g=Math.floor(Math.random()*255)
            let b=Math.floor(Math.random()*255)

           keyBox.style.boxShadow = "none";
           icon.style.color=`rgb(${r},${g},${b})`

            setTimeout(function(){

                icon.style.opacity=0
                icon.style.rotate=rota+"deg"
                icon.style.left=left+"%"
                console.log(keyBox.id);
                if(keyBox.id%2==0)
                    keyBox.style.backgroundColor="white"
                else
                    keyBox.style.backgroundColor="rgb(27, 26, 26)"


                
                
                keyBox.style.boxShadow = "0px 3px 1px rgba(116, 115, 115, 0.745)";
                keyBox.style.scale="1"
            
        }   , 200);
        }
}

document.addEventListener("keydown", function (e) {
    

    if (/^[a-zA-Z]$/.test(e.key)) {
        playAudio(e.key);
    }
});


function playAudio(key) {
    key = key.toUpperCase();


    if (!/^[A-Z]$/.test(key)) return;

    let temp = key.charCodeAt(0);  
    let song = temp - 37;          

    //console.log("Pressed:", key, "ASCII:", temp, "Song-ID:", song);

    let aud = new Audio(`./assets/${song}.mp3`);
    aud.currentTime = 0;   
    aud.play();


    if (song >= 28 && song <= 53) {
        const keyBox = document.getElementById(String(song));

        effect(keyBox)
    }
}


function printKeyboard() {
    let clutter=`<i  id="icon" class="ri-music-ai-line"></i>
      <img id="left" src="./assets/speaker-cartoon-loudspeaker-subwoofer-speaker-grille-vehicle-audio-loudspeaker-enclosure-midrange-speaker-jl-audio-png-clipart-removebg-preview.png" alt="">
       <img  id="right" src="./assets/speaker-cartoon-loudspeaker-subwoofer-speaker-grille-vehicle-audio-loudspeaker-enclosure-midrange-speaker-jl-audio-png-clipart-removebg-preview.png" alt="">
    `
    for (let code = 65; code <= 90; code+=2) {  // A–Z
        





        let whitekey=String.fromCharCode(code);
        let whiteId=code-37;
        let blackKey=String.fromCharCode(code+1);
        let blackId=code+1-37;
        clutter+=` <div class="key">
                <div class="white" id="${whiteId}">
                    <h1>${whitekey}</h1>

                </div>
                <div class="black " id=${blackId}>
                    <h1>${blackKey}</h1>
                </div>
            </div>`

    }
    box.innerHTML=clutter
}

printKeyboard();
let icon=document.querySelector("#icon");
