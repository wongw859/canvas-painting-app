$(() => {
    // When pressed down the brightness button, the control bar appears. hide otherwise.
    $(".brightness-button").click(function (e) { 
        $(".brightness-container").css("visibility", "visible");
    });
    $(".button").not($(".brightness-button")).click(function (e) { 
        $(".brightness-container").css("visibility", "hidden");
    });

    
})