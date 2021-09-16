window.onscroll = function(evt) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.getElementById("loading").innerHTML ="";
    }
};


