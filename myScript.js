//Drivetrain Radio Button Cycle Testing
//Getting the Radio Button elements
tankRadio=document.getElementById("tank");
mecanumRadio=document.getElementById("mecanum");
hdriveRadio=document.getElementById("h-drive");
xdriveRadio=document.getElementById("x-drive");
swerveRadio=document.getElementById("swerve");
ballRadio=document.getElementById("ball");
//Getting what I want displayed by these elements
tankWords=document.getElementById("tankwords");
mecanumWords=document.getElementById("mecanumwords");
hdriveWords=document.getElementById("hdrivewords");
xdriveWords=document.getElementById("xdrivewords");
swerveWords=document.getElementById("swervewords");
ballWords=document.getElementById("ballwords");
//setting up array
/*var drivetrainArray = [
    [tankRadio, mecanumRadio, hdriveRadio, xdriveRadio, swerveRadio, ballRadio],
    [tankWords, mecanumWords, hdriveWords, xdriveWords, swerveWords, ballWords]
];
//setting up for command to power array cycling
for (i of drivetrainArray[0]) {
    i.addEventListener("click", onDrivetrainRadioClick);
}
//setting up function for the for command
function onDrivetrainRadioClick() {
    for (i=0; i < drivetrainArray[0],length; i++) {
        if (this == drivetrainArray[0][i]){
            drivetrainArray[1][i].style.display = "block";
        }
        else {
            drivetrainArray[1][i].style.display = "none";
        }
    }
}

drivetrainArray[0][0].click(); 
*/
function showtext(x) {
    if (x==0) {
        tankWords.style.display="block";
        mecanumWords.style.display="none";
        hdriveWords.style.display="none";
        xdriveWords.style.display="none";
        swerveWords.style.display="none";
        ballWords.style.display="none";
        }
    else if (x==1) {
        tankWords.style.display="none";
        mecanumWords.style.display="block";
        hdriveWords.style.display="none";
        xdriveWords.style.display="none";
        swerveWords.style.display="none";
        ballWords.style.display="none";
    }
    else if (x==2) {
        tankWords.style.display="none";
        mecanumWords.style.display="none";
        hdriveWords.style.display="block";
        xdriveWords.style.display="none";
        swerveWords.style.display="none";
        ballWords.style.display="none";
    }
    else if (x==3) {
        tankWords.style.display="none";
        mecanumWords.style.display="none";
        hdriveWords.style.display="none";
        xdriveWords.style.display="block";
        swerveWords.style.display="none";
        ballWords.style.display="none";
    }
    else if (x==4) {
        tankWords.style.display="none";
        mecanumWords.style.display="none";
        hdriveWords.style.display="none";
        xdriveWords.style.display="none";
        swerveWords.style.display="block";
        ballWords.style.display="none";
    }
    else if (x==5) {
        tankWords.style.display="none";
        mecanumWords.style.display="none";
        hdriveWords.style.display="none";
        xdriveWords.style.display="none";
        swerveWords.style.display="none";
        ballWords.style.display="block";
    }

}
tankRadio.click();