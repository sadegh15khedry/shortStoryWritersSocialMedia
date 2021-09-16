//first select -----------------------------------------------------------
function firstChose(selectedNumber) {
    // if (firstSelect.selectedIndex==0){
    //     //ajax using 0 as parameter
    // }
    // else if (firstSelect.selectedIndex==1){
    //     //ajax using 0 as parameter
    // }
    // else if (firstSelect.selectedIndex==2){
    //     //ajax using 0 as parameter
    // }
    var secondSelect = document.getElementById("second_select");
    secondSelect.style.visibility="visible";
}


// second select --------------------------------------------------------

function secondChose() {
    var thirdSelect = document.getElementById("third_select");
    thirdSelect.style.visibility="visible";
}

function thirdChose() {
    document.getElementById("hidden_div").style.visibility = "visible";
}
