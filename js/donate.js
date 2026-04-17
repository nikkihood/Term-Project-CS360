let shepardList = ["Nichole Hood", "Downing Nightingale", "RJ Peck"];
document.addEventListener('DOMContentLoaded', function(){
    let donorList = document.getElementById("donorList");
    for (let i=0; i<shepardList.length; i++){
    donorList.innerHTML= donorList.innerHTML + "<li>" + shepardList[i] + "</li><br/>"
    }
});
