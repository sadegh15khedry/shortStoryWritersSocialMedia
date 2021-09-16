$("document").ready(function () {
    //----------------------------------- first select -------------------------------------------
    $("#first_select").on("change",function () {
        $("#second_select").hide();
        $("#third_select").hide();
        $("#hidden_div").hide();
        $("#second_select").slideDown("fast","swing");
    });
    //----------------------------------- second select -------------------------------------------

    $("#second_select").on("change",function () {
        $("#third_select").hide();
        $("#hidden_div").hide();
        $("#third_select").slideDown("fast","swing");
    });

    //----------------------------------- third select -------------------------------------------

    $("#third_select").on("change",function () {
        $("#hidden_div").show("slow","swing");
    });
});