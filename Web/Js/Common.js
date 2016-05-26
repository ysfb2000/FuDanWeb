$(document).ready(function () {

    $("button").mousedown(function () {
        $(this).css("position", "relative").css("left","2px").css("top","2px");
    });

    $("button").mouseup(function () {
        $(this).css("position", "static");
    });

});

