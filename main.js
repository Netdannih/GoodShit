let main = document.querySelector(".main"),
html = document.querySelector("html"),
body = document.querySelector(".body"),
splash = document.querySelector(".splash"),
mainImg = main.querySelector(".main-img"),
effectIn = main.querySelector(".effect-in"),
effectOut = document.querySelector(".effect-out"),
test = document.querySelectorAll(".test"),
footImg = document.querySelector(".foot-img"),
footer = document.querySelector(".footer"),
i=1, c=9, ii=1, isClicked=false;


html.addEventListener("click", (e) => {
    if (!isClicked){
        html.style.cursor = "none";
        document.querySelector("audio").autoplay = true;
        body.style.display = "block";
        splash.style.display = "none";
        setTimeout(()=>{
            mainImg.src = "incom.JPG";
        }, 900);
        setTimeout(()=>{
            mainImg.src = "kurincom.JPG";
        },1900)
        setTimeout(()=>{
            mainImg.src = "cp.jpg";
        },2900)
        setTimeout(()=>{
            mainImg.src = "itog.JPG";
        },6000)
        setTimeout(()=>{
            footer.style.display = "flex";
            setInterval(() => {
                if(i<16){
                    test.forEach(e => {
                        e.src = "success/mainUIexport_oUI_start/mainUIexport_oUI_start00"+(i<10?"0"+i:i)+".png";
                    });
                    i+=1;
                }else{
                    test.forEach(e => {
                        e.src = "success/mainUIexport_oUI_idle/mainUIexport_oUI_idle000"+ii+".png";
                    });
                    ii+=1;
                    if(ii==9) ii=1;
                }
                if (c<=16){
                    footImg.src = "success/success00"+(c<10?"0"+c:c)+".png";
                    c+=1
                }
            }, 100);
            effectOut.style.animationName = "flash"
            main.style.animationName="scale";
        }, 7500);
        setTimeout(()=>{
            html.style.cursor = "auto";
        }, 10000)
    }
    isClicked = true;
});