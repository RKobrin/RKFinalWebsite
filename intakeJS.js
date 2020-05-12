//getting the Radio Button elements
wheeledRadio = document.getElementById("wheeled");
rollerRadio = document.getElementById("roller");
passiveRadio = document.getElementById("passive");
//getting the Text elements
wheeledWords = document.getElementById("wheeledwords");
rollerWords = document.getElementById("rollerwords");
passiveWords = document.getElementById("passivewords");
//creating the function and cases
function showtext(x) {
    if (x==0) {
        wheeledWords.style.display="block";
        rollerWords.style.display="none";
        passiveWords.style.display="none";
        }
    else if (x==1) {
        wheeledWords.style.display="none";
        rollerWords.style.display="block";
        passiveWords.style.display="none";
    }
    else if (x==2) {
        wheeledWords.style.display="none";
        rollerWords.style.display="none";
        passiveWords.style.display="block";
    }
}
wheeledRadio.click();