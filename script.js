let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")

let homeScoreValue = 0
let guestScoreValue = 0


function homeScored(puntos) {
    homeScoreValue += puntos;
    homeScore.innerHTML=homeScoreValue;
}
function guestScored(puntos) {
    guestScoreValue += puntos;
    guestScore.innerHTML=guestScoreValue;
}

function reset(){
    homeScoreValue = 0;
    guestScoreValue = 0;
    homeScore.innerHTML=homeScoreValue;
    guestScore.innerHTML=guestScoreValue;
}