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

var myIndex = 0;

var video = document.getElementById("video");
var drawing = document.getElementById("drawing");
var printing = document.getElementById("printing");
var photography = document.getElementById("photography");
var leather = document.getElementById("leather");
var design = document.getElementById("design");


carousel();

function carousel() {
    var slideshow = document.getElementsByClassName("mySlides");
    for (i = 0; i < slideshow.length; i++) {
        slideshow[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > slideshow.length) { 
        myIndex = 1 }

    slideshow[myIndex - 1].style.display = "block";
    if(slideshow[myIndex - 1].getAttribute('value') == "video") {
        console.log("1")
        video.style = "font-size: 1.8rem;";
    }
    if(slideshow[myIndex - 1].getAttribute('value') != "video") {
        video.style = "font-size: 1.3rem;";
    }
    if(slideshow[myIndex - 1].alt == "Drawing") {
        console.log("2")
        drawing.style = "font-size: 1.8rem;";
    }
    if(slideshow[myIndex - 1].alt != "Drawing") {
        drawing.style = "font-size: 1.3rem;";
    }
    if(slideshow[myIndex - 1].alt == "3D Printing & Painting") {
        console.log("3")
        printing.style = "font-size: 1.8rem;";
    }
    if(slideshow[myIndex - 1].alt != "3D Printing & Painting") {
        printing.style = "font-size: 1.3rem;";
    }
    if(slideshow[myIndex - 1].alt == "Photography") {
        console.log("4")
        photography.style = "font-size: 1.8rem;";
    }
    if(slideshow[myIndex - 1].alt != "Photography") {
        photography.style = "font-size: 1.3rem;";
    }
    if(slideshow[myIndex - 1].alt == "Sewwing & Leathercraft") {
        console.log("5")
        leather.style = "font-size: 1.8rem;";
    }
    if(slideshow[myIndex - 1].alt != "Sewwing & Leathercraft") {
        leather.style = "font-size: 1.3rem;";
    }
    if(slideshow[myIndex - 1].alt == "Graphic Design") {
        console.log("6")
        design.style = "font-size: 1.8rem;";
    }
    if(slideshow[myIndex - 1].alt != "Graphic Design") {
        design.style = "font-size: 1.3rem;";
    }
    setTimeout(carousel, 4000); // Change image every 2 seconds
}