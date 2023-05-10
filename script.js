import 'intersection-observer';

//Scaling transition for navbar link elements
function scale(element, value) {
    element.style.transform = "scale(" + value + ")";
}


//Mobile Navbar Functionality
function mobileNav(element) {
    var mobileNavBody = document.getElementById("mobile-nav")
    var x = document.getElementById("mobileLinks");
    element.classList.toggle("active");
    if (element.classList.contains("active")) {
        x.style.display = "block";
        // mobileNavBody.style.height = x.scrollHeight + "px";
        mobileNavBody.style.height = "390px";
    } else {
        x.style.display = "none";
        mobileNavBody.style.height = null;
    }
}

//About Me Slideshow
var myIndex = 0;
var video = document.getElementById("video");
var drawing = document.getElementById("drawing");
var printing = document.getElementById("printing");
var photography = document.getElementById("photography");
var leather = document.getElementById("leather");
var design = document.getElementById("design");

function aboutMeSlideshow() {
    let slideshow = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slideshow.length; i++) {
        slideshow[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > slideshow.length) {
        myIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideshow[myIndex - 1].style.display = "block";
    dots[myIndex - 1].className += " active";
    if (slideshow[myIndex - 1].getAttribute('value') == "video") {
        video.style.cssText = "font-weight: 600;";
    }
    if (slideshow[myIndex - 1].getAttribute('value') != "video") {
        video.style.cssText = "";
    }
    if (slideshow[myIndex - 1].alt == "Drawing") {
        drawing.style.cssText = "font-weight: 600;";
    }
    if (slideshow[myIndex - 1].alt != "Drawing") {
        drawing.style.cssText = "";
    }
    if (slideshow[myIndex - 1].alt == "3D Printing & Painting") {
        printing.style.cssText = "font-weight: 600;";
    }
    if (slideshow[myIndex - 1].alt != "3D Printing & Painting") {
        printing.style.cssText = "";
    }
    if (slideshow[myIndex - 1].alt == "Photography") {
        photography.style.cssText = "font-weight: 600;";
    }
    if (slideshow[myIndex - 1].alt != "Photography") {
        photography.style.cssText = "";
    }
    if (slideshow[myIndex - 1].alt == "Sewwing & Leathercraft") {
        leather.style.cssText = "font-weight: 600;";
    }
    if (slideshow[myIndex - 1].alt != "Sewwing & Leathercraft") {
        leather.style.cssText = "";
    }
    if (slideshow[myIndex - 1].alt == "Graphic Design") {
        design.style.cssText = "font-weight: 600;";
    }
    if (slideshow[myIndex - 1].alt != "Graphic Design") {
        design.style.cssText = "";
    }
    setTimeout(aboutMeSlideshow, 5000);
}

aboutMeSlideshow();


//scroll fade on header down arrow
const showArrow = () => {
    document.querySelector(".load-animation").style.display = "block";
}

setTimeout(showArrow, 2000)

window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);

//IntersectionObserver
const animateInZooms = document.querySelectorAll(".animate-in-zoom");
const animateOutZooms = document.querySelectorAll(".animate-out-zoom");
const animateInDowns = document.querySelectorAll(".animate-in-down");
const animateInSlows = document.querySelectorAll(".animate-in-slow");
const navbarFadeIn = document.querySelector(".navbar-fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
        }
    })
}, {
    threshold: .5,
});

animateInZooms.forEach(animateIn => {
    observer.observe(animateIn);
});

animateOutZooms.forEach(animateIn => {
    observer.observe(animateIn);
});

animateInDowns.forEach(animateIn => {
    observer.observe(animateIn);
});

animateInSlows.forEach(animateIn => {
    observer.observe(animateIn);
});

const observerDelay = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(function () {
                // add the class that triggers the animation
                entry.target.classList.add('show');
            }, 2000);
            observer.unobserve(entry.target);
        }
    })
}, {
    threshold: .5,
    // 🆕 =====ANSWER=====: Set a minimum delay between notifications
});

observerDelay.observe(navbarFadeIn);