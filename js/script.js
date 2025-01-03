


// Filter using JavaScript (No change)
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post").show("1000");
        } else {
            $(".post").not("." + value).hide("1000");
            $(".post").filter("." + value).show("1000");
        }
    });
});

// JavaScript for sticky navbar (fixed position on scroll)
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar-top').classList.add('fixed-top');
            // Add padding top to show content behind navbar
            let navbarHeight = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbarHeight + 'px';
        } else {
            document.getElementById('navbar-top').classList.remove('fixed-top');
            // Remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

// Functionality for "Back to Top" button
let myButton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

myButton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
