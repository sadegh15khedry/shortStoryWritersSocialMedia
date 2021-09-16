window.onload = selectorFunction();
window.onload = sliderFunction();

var xhr = false;






//making requst --------------------------------------------------------------------------

function makeRequst(index) {
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
            }
        }
    }
    if (xhr) {
        xhr.onreadystatechange = getContent(index);
        xhr.open("GET", "", true);
    }
    else {
        document.getElementById("slider_list").innerHTML = "couldn't connect to server";
    }
    function getContent() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                cheangContent(xhr.responseXML, index);
            }
            else {
                document.getElementById("slider_list").innerHTML
                    = "there was a problem sorry " + xhr.status;
            }
        }
    }


}



    //slider functions ------------------------------------------------------------------------------------
function sliderFunction() {
    sliderList = document.getElementsByClassName("slider-link");
    for (var i=0; i<sliderList.length;i++){
        sliderList[i].onclick = function () {
            changeSlider(this.id);
        }
    }
}

function changeSlider(index) {
    var myUl = document.createElement("UL");
    myUl.className = "nav nav-tabs nav-stacked dynamic-slider";
    myUl.id = "slider_list";
    for (var i = 0; i < 5; i++) {
        var li = document.createElement("LI");
        var a = document.createElement("A");
        var text = document.createTextNode(" آیتم " + i);
        a.appendChild(text);
        a.id = "item_" + i;
        li.appendChild(a);
        myUl.appendChild(li);
        a.className = "slider-link";
    }
    var sliderRapper = document.getElementById("slider_rapper");
    sliderRapper.innerHTML="";
    sliderRapper.appendChild(myUl);
    return false;


        // switch (index) {
        //     case 0: {
        //         document.getElementById("slider_rapper").appendChild(myUl);
        //     }
        //     case 1:{
        //         document.getElementById("slider_list").innerHTML="myUl";
        //     }
        //     case 2:{
        //         document.getElementById("slider_list").innerHTML="myUl";
        //     }
        //     case 3:{
        //         document.getElementById("slider_list").innerHTML="myUl";
        //     }
        // }

}



//setting select options -------------------------------------------------------------------------------------


function selectorFunction() {
    document.getElementById("selector1").selectedIndex = 0;
    document.getElementById("selector1").onChange = function () {
        setSelectorOption(document.getElementById("selector1").selectedIndex);
    }
}

function setSelectorOption(selectedIndex) {
    document.write("it works");
    // var secendSelector = document.getElementById("selector2");
    // var option1;
    // var option2;
    //
    //  if (selectedIndex==0){
    //         option1 = document.createElement("option");
    //         option2 = document.createElement("option");
    //         option1.text = "ال جی";
    //         option2.text= "اپل";
    //         secendSelector.appendChild(option2);
    //         secendSelector.appendChild(option1);
    //     }
    //     else {
    //         option1 = document.createElement("option");
    //         option2 = document.createElement("option");
    //         option1.text = "ال جی";
    //         option2.text= "اپل";
    //         secendSelector.appendChild(option2);
    //         secendSelector.appendChild(option1);
    //     }
    //
    //

}


    
