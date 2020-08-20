var i = 1;
$(function() {
    setInterval(function() {
        var elem = $(".container > p");
        var text = ["Arknights Information", "Costume Viewer", "Arknights Calculation",
        "Server Moderation", "Prefix Customization", "Fun Commands"];
        elem.animate({opacity: "0"}, 400, function() {
            elem.text(text[i]);
            elem.animate({opacity: "1"}, 400);
            i ++;
            if (i === 6){
                i = 0;
            }
        });
    }, 2000);
});

function fadeIn(elem) {
    elem.animate({opacity: "0"}, 600);
}

function fadeOut(elem) {
    elem.animate({opacity: "1"}, 600);
}
