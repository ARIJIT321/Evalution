// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",addingMatch)
var matchArr = JSON.parse(localStorage.getItem("schedule")) || [] 
function addingMatch(){
    event.preventDefault()

    var matchObj ={
        matchnumber: masaiForm.matchNum.value,
        firstteam: masaiForm.teamA.value,
        secteam: masaiForm.teamB.value,
        matchdate: masaiForm.date.value,
        matchvenue: masaiForm.venue.value
    }

    matchArr.push(matchObj)
    localStorage.setItem("schedule",JSON.stringify(matchArr))
}