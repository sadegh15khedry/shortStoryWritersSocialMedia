$("document").ready(function () {
    var link = $("<a class='slider-link' href='#'>بازگشت</a>");
    var list = $("<ul id='second_list'>");
   $(".slider-link").click(function () {
        $("#slider_list").hide("slow");
        //ajax hear
       var item = $("<li>");
       list.addClass("nav nav-tabs nav-stacked dynamic-slider");
       link.appendTo(item);
       item.appendTo(list);
       list.appendTo($("#slider_rapper"));
       list.show("fast");
   });
   link.click(function () {
       list.hide("fast");
       $("#slider_list").show("slow");
   })
});