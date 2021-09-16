var xhr = false;

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


