$("document").ready(function () {

setInterval(rotateImg ,2000);

});

function rotateImg() {
    var oCurPhoto = $('.current-img');
    var oNextPhoto = oCurPhoto.next();
    if (oNextPhoto.length == 0) {
        oNextPhoto = $("img:first");
    }
    oCurPhoto.removeClass("current-img").addClass("prev-img");
    oNextPhoto.css({opacity:0.0}).addClass("current-img")
        .animate({opacity:1.0},1000,function () {
            oCurPhoto.removeClass("prev-img");
        });

}