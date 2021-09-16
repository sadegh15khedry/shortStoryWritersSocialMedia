
//setting select options -------------------------------------------------------------------------------------

function selectorFunction() {
    document.getElementById("selector1").onChange = function (){
        setSelectorOption(this.selectedIndex);
    }
}


function setSelectorOption(selectedIndex) {
    var secendSelector = document.getElementById("selector2");
    var option1;
    var option2;

     if (selectedIndex==0){
            option1 = document.createElement("option");
            option2 = document.createElement("option");
            option1.text = "ال جی";
            option2.text= "اپل";
            secendSelector.innerHTML = "";
            secendSelector.appendChild(option2);
            secendSelector.appendChild(option1);
        }
        else {
            option1 = document.createElement("option");
            option2 = document.createElement("option");
            option1.text = "ال جی";
            option2.text= "اپل";
            secendSelector.innerHTML = "";
            secendSelector.appendChild(option2);
            secendSelector.appendChild(option1);
        }



}


