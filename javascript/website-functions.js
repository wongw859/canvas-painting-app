$(() => {
    // When pressing down the brightness button, show the control bar. Hide otherwise.
    $(".brightness-button").click(function (e) { 
        $(".brightness-container").css("display", "initial");
    });
    $(".button").not($(".brightness-button")).click(function (e) { 
        $(".brightness-container").css("display", "none");
    });
    
    // When pressing down the adding text button, show the font control bar. Hide otherwise.
    $(".text-button").click(function (e) { 
        $(".font-container").css("display", "initial");
    });
    $(".button").not($(".text-button")).click(function (e) { 
        $(".font-container").css("display", "none");
    });
    
    // When changing the pen width, the dot size changes correspondingly
    $("#pen-width").on("change mousemove",function (e) {
        let fontSize = $("#pen-width").val();

        console.log(fontSize);
        if (fontSize <= 10) {
            $("#dot > img").attr("class", "icon-xs4");
        } else if (fontSize > 10 && fontSize <= 20) {
            $("#dot > img").attr("class", "icon-xs3");
        } else if (fontSize > 20 && fontSize <= 30) {
            $("#dot > img").attr("class", "icon-xs2");
        } else if (fontSize > 30 && fontSize <= 40) {
            $("#dot > img").attr("class", "icon-sm");
        }
    
    })


})