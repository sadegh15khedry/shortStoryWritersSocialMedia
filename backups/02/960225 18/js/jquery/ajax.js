$("document").ready(function () {

    $.ajax("",{success: setContent, type:"GET",  dataType:"text"});
});
function setContent (){

}