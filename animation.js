var current = 0;
setInterval(function() {
    if(current == 0) {
        var image = document.getElementsByClassName("logo");
        image[0].src = "banner.png";
        image[0].className = "banner";
        var text = document.getElementsByClassName("subtitle");
        text[0].innerHTML = "a creative.";
            current = 1;
    } else if(current == 1) {
        var image = document.getElementsByClassName("banner");
        image[0].src = "logo.png";
        image[0].className = "logo";
        var text = document.getElementsByClassName("subtitle");
        text[0].innerHTML = "coder, photographer, graphics designer.";
        current = 0;
    }
}, 8000);
