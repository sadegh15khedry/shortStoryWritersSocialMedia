window.onload = initAll();
var xhr = false;
var sliderList;
function initAll() {
    
}

function makeRequst() {
    if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }
    else{
        if (window.ActiveXObject){
            try{
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e){}
        }
    }
    if (xhr){
        xhr.onreadystatechange = showContent;
        xhr.open("GET","",true);
    }
    else {
        document.getElementById("slider_list").innerHTML = "couldn't connect to server";
    }

    function showContent(){
        if (xhr.readyState == 4){
            if (xhr.status == 200){

            }
            else{
                document.getElementById("slider_list").innerHTML
                    = "there was a problem sorry "+xhr.status;
            }
        }
    }


}
    
