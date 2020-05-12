//Getting our Radio buttons
slidesRadio = document.getElementById("slides");
armRadio = document.getElementById("arm");
linkageRadio = document.getElementById("linkage");
//Getting our Text elements
slidesWords = document.getElementById("slideswords");
armWords = document.getElementById("armwords");
linkagewords = document.getElementById("linkagewords");
//Creating our function
function showtext(x) {
    if (x==0){
        slidesWords.style.display="block"
        armWords.style.display="none";
        linkageWords.style.display="none";
    }
    else if (x==1){
        slidesWords.style.display="none"
        armWords.style.display="block";
        linkageWords.style.display="none";
    }
    else if (x==2){
        slidesWords.style.display="none"
        armWords.style.display="none";
        linkageWords.style.display="block";
    }
}