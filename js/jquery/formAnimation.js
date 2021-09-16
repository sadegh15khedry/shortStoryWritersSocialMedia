$("document").ready(function () {
    //----------------------------------- first select -------------------------------------------
    $("#first_select").on("change",function () {
        hide_stuff_1();
        show_stuff_1();
        set_select_options_1();
    });
    //----------------------------------- second select -------------------------------------------

    $("#second_select").on("change",function () {
        hide_stuff_2();
        show_stuff_2();
        set_select_options_2();

    });

    //----------------------------------- third select -------------------------------------------

    $("#third_select").on("change",function () {
        hide_stuff_3();
        show_stuff_3();
        set_select_options_3();

    });

    //----------------------------------- price kind select -------------------------------------------

    $("#price_kind_field").on("change",function () {
        $("#price_kind_field option[value=nothing]").remove();
    });

    $("#city_select_field").on("change",function () {
        $("#city_select_field option[value=nothing]").remove();
    });



//-----------------------------------------------------hiders------------------------------------------------------------------
    function hide_stuff_1() {
        $("#second_select_div").hide();
        $("#third_select_div").hide();
        $("#second_col").hide();
        $("#ad_type_div").hide();
        $("#img_div").hide();
        $("#second_col").hide();
        $("#btn_div").hide();
    }

    function hide_stuff_2() {
        $("#third_select_div").hide();
        $("#second_col").hide();
        $("#ad_type_div").hide();
        $("#img_div").hide();
        $("#second_col").hide();
        $("#btn_div").hide();
    }
    function hide_stuff_3() {
        $("#ad_type_div").hide();
        $("#img_div").hide();
        $("#second_col").hide();
        $("#btn_div").hide();
    }
//-----------------------------------------------------hiders------------------------------------------------------------------



    function show_stuff_1 () {
        $("#second_select_div").slideDown("fast","swing");
    }

    function show_stuff_2 () {
        $("#third_select_div").slideDown("fast","swing");
    }
    function show_stuff_3 () {
        $("#ad_type_div").slideDown("slow","swing");
        $("#img_div").slideDown("slow","swing");
        $("#second_col").slideDown("slow","swing");
        $("#btn_div").slideDown("slow","swing");
        $("#price_stuff_div2").slideDown("slow","swing");
    }
//-----------------------------------------------------hiders------------------------------------------------------------------




    function set_select_options_2() {
        $("#second_select option[value=nothing]").remove();
        $('#third_select').append($('<option selected="selected" value="nothing">دسته را انتخاب کنید</option>'));
    }

    function set_select_options_1() {
        $("#first_select option[value=nothing]").remove();
        $('#second_select').append($('<option selected="selected" value="nothing">دسته را انتخاب کنید</option>'));
    }
    //


    function set_select_options_3() {
        $("#third_select option[value=nothing]").remove();
        $('#price_kind_field').append($('<option selected="selected" value="nothing">دسته را انتخاب کنید</option>'));
        $("#city_select_field").append($('<option selected="selected" value="nothing">شهر را انتخاب کنید</option>'));
    }

});
