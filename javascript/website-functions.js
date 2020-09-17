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
    
    // When pressing down the blur effect button, show the blur control bar. Hide otherwise.
    $(".blur-button").click(function (e) { 
        $(".blur-container").css("display", "initial");
    });
    $(".pen-effect-box > .button").not($(".blur-button")).click(function (e) { 
        $(".blur-container").css("display", "none");
    });

    // When pressing down the sahdow effect button, show the shadow control bar. Hide otherwise.
    $(".shadow-button").click(function (e) { 
        $(".shadow-container").css("display", "initial");
    });
    $(".pen-effect-box > .button").not($(".shadow-button")).click(function (e) { 
        $(".shadow-container").css("display", "none");
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
            $("#dot > img").attr("class", "icon-xs");
        }
    
    })

    // Hover effect of the specific buttons
    $(".utility-button, .filter-box > .button, .pen-effect-box > .reset-button").hover(function (event) {
        $(event.currentTarget).css("background-color", "#BDC0BA")}, 
        function (event) {
        $(event.currentTarget).css("background-color", "");
        
    })
    
    // When pressing the buttons (except pen effects and filters), change the background colors and return the others' to their original colors.

    $(".button").not('.pen-effect-box > .button').not('.filter-box > .button').click(function (event) {
        $(event.currentTarget).css("background-color", "#BDC0BA");
        $(".button").not('.pen-effect-box > .button').not('.filter-box > .button').not($(event.currentTarget)).css("background-color", "");
    })

    // When pressing the buttons of pen effects, change the background colors. Reset the colors when pressing reset button
    $(".pen-effect-box > .button").not('.reset-button').click(function (event) {
        $(event.currentTarget).css("background-color", "#BDC0BA");
        $(".pen-effect-box > .button").not($(event.currentTarget)).css("background-color", "");
    })
    $(".reset-button").click(function (event) {
        $(".pen-effect-box > .button").css("background-color", "");
    })




})