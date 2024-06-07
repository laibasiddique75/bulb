let img = document.querySelector("#img");

 let text = document.querySelector("#text");

isShow = false

function bulbOnOff(){
    isShow = !isShow
    if(isShow){
        img.src = "image/WhatsApp_Image_2024-06-08_at_2.07.57_AM-removebg-preview.png"
        text.innerText = "OFF"
    }
    else{
         img.src = "image/WhatsApp_Image_2024-06-08_at_2.07.57_AM__1_-removebg-preview.png"
         text.innerText = "ON"

    }
}