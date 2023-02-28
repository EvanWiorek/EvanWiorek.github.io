function scale(element, value) {
    element.style.transform = "scale(" + value + ")";
}

function mobileNav() {
    var x = document.getElementById("mobile-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}