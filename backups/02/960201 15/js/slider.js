window.onload = function () {
    sliderFunction();
    selectorFunction();
};


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




    
