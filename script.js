let h1 = document.querySelector('h1');
let box = document.querySelector("#box");
let icon=document.querySelector("#icon");




box.addEventListener("click",function(e){
    console.log(e.target.id)
    playByClick(e.target.id)
})
function playByClick(e){
    console.log(e)
    let aud = new Audio(`./assets/${e}.mp3`);
    aud.currentTime = 0;   
    aud.play();
     const keyBox = document.getElementById(String(e));
     effect(keyBox)

}
function effect(keyBox){
    
        if (keyBox) {
            keyBox.style.backgroundColor="gray"
            keyBox.style.scale="1.1"
            icon.style.opacity=1
            let rota=Math.random()*359
            let left=Math.random()*30+20

            setTimeout(function(){

                icon.style.opacity=0
                icon.style.rotate=rota+"deg"
                icon.style.left=left+"%"
                keyBox.style.backgroundColor="white"
                
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
    for (let code = 65; code <= 90; code++) {  // A–Z
        let key = String.fromCharCode(code);
        let keybox = document.createElement("div");
        let clas = code-65
        keybox.className = `key ${clas}`;

        let id = code - 37;   // 28–53
        keybox.id = id;


        keybox.innerHTML = `<h1>${key}</h1>`;
   
        box.appendChild(keybox);
    }
}

printKeyboard();
