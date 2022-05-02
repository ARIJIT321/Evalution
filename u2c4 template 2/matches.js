// write js code here corresponding to matches.html

var matchArr = JSON.parse(localStorage.getItem("schedule"))
displayData(matchArr)
function filtering(matchArr){
    //console.log(matchArr)
    var selectedVenue  = document.getElementById("filterVenue").value
    var filterList = matchArr.filter(function(elem){
        return elem.matchvenue == selectedVenue
    })
    displayData(filterList)
}
var favouritesArr = JSON.parse(localStorage.getItem("favourites")) || []

function displayData(data){
    document.querySelector("tbody").innerHTML=""

    data.forEach(function(elem){
    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = elem.matchnumber

    var td2 = document.createElement("td")
    td2.innerText = elem.firstteam

    var td3 = document.createElement("td")
    td3.innerText = elem.secteam

    var td4 = document.createElement("td")
    td4.innerText = elem.matchdate

    var td5 = document.createElement("td")
    td5.innerText = elem.matchvenue

    var td6 = document.createElement("td")
    td6.innerText  = "Favourites"
    td6.style.color = "green"
    td6.style.cursor = "pointer"
    td6.addEventListener("click",function(){
        matchFavourites(elem)
    })

    tr.append(td1,td2,td3,td4,td5,td6)
    
    document.querySelector("tbody").append(tr)
    })
    
}

function matchFavourites(elem){
    favouritesArr.push(elem)
    localStorage.setItem("favourites",JSON.stringify(favouritesArr))
}