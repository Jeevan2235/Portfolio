// HTML progress circular bar
let htmlProgress = document.querySelector(".html-css"),
    htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
    htmlEndValue = 90,
    htmlSpeed = 30;

let progressHtml = setInterval(() => {
    htmlStartValue++;
    htmlValue.textContent = `${htmlStartValue}%`;
    htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;

    if (htmlStartValue == htmlEndValue) {
        clearInterval(progressHtml);
    }
}, htmlSpeed);

// JavaScript progress circular bar
let javascriptProgress = document.querySelector(".javascript"),
    javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
    javascriptEndValue = 75,
    jsSpeed = 30;

let progressJs = setInterval(() => {
    javascriptStartValue++;
    javascriptValue.textContent = `${javascriptStartValue}%`;
    javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${javascriptStartValue * 3.6}deg, #ededed 0deg)`;

    if (javascriptStartValue == javascriptEndValue) {
        clearInterval(progressJs);
    }
}, jsSpeed);

// Python progress circular bar
let pythonProgress = document.querySelector(".python"),
    pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
    pythonEndValue = 80,
    pythonSpeed = 30;

let progressPython = setInterval(() => {
    pythonStartValue++;
    pythonValue.textContent = `${pythonStartValue}%`;
    pythonProgress.style.background = `conic-gradient(#306998 ${pythonStartValue * 3.6}deg, #ededed 0deg)`;

    if (pythonStartValue == pythonEndValue) {
        clearInterval(progressPython);
    }
}, pythonSpeed);



// PHP progress circular bar
let phpProgress = document.querySelector(".php"),
    phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
    phpEndValue = 80,
    phpSpeed = 30;

let progressPhp = setInterval(() => {
    phpStartValue++;
    phpValue.textContent = `${phpStartValue}%`;
    phpProgress.style.background = `conic-gradient(#777bb3 ${phpStartValue * 3.6}deg, #ededed 0deg)`;

    if (phpStartValue == phpEndValue) {
        clearInterval(progressPhp);
    }
}, phpSpeed);


// ReactJS progress circular bar
let reactProgress = document.querySelector(".reactjs"),
    reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
    reactEndValue = 60,
    reactSpeed = 30;

let progressReact = setInterval(() => {
    reactStartValue++;
    reactValue.textContent = `${reactStartValue}%`;
    reactProgress.style.background = `conic-gradient(#3f396d ${reactStartValue * 3.6}deg, #ededed 0deg)`;

    if (reactStartValue == reactEndValue) {
        clearInterval(progressReact);
    }
}, reactSpeed);

// AWS progress circular bar
let awsProgress = document.querySelector(".aws"),
    awsValue = document.querySelector(".aws-progress");

let awsStartValue = 0,
    awsEndValue = 60,
    awsSpeed = 30;

let progressAws = setInterval(() => {
    awsStartValue++;
    awsValue.textContent = `${awsStartValue}%`;
    awsProgress.style.background = `conic-gradient(#ff9900 ${awsStartValue * 3.6}deg, #ededed 0deg)`;

    if (awsStartValue === awsEndValue) {
        clearInterval(progressAws);
    }
}, awsSpeed);

// Node.js progress circular bar
let nodeProgress = document.querySelector(".nodejs"),
    nodeValue = document.querySelector(".nodejs-progress");

let nodeStartValue = 0,
    nodeEndValue = 70,
    nodeSpeed = 30;

let progressNode = setInterval(() => {
    nodeStartValue++;
    nodeValue.textContent = `${nodeStartValue}%`;
    nodeProgress.style.background = `conic-gradient(#68a063 ${nodeStartValue * 3.6}deg, #ededed 0deg)`;

    if (nodeStartValue == nodeEndValue) {
        clearInterval(progressNode);
    }
}, nodeSpeed);

// SQL progress circular bar
let sqlProgress = document.querySelector(".sql"),
    sqlValue = document.querySelector(".sql-progress");

let sqlStartValue = 0,
    sqlEndValue = 75,
    sqlSpeed = 30;

let progressSql = setInterval(() => {
    sqlStartValue++;
    sqlValue.textContent = `${sqlStartValue}%`;
    sqlProgress.style.background = `conic-gradient(#006d32 ${sqlStartValue * 3.6}deg, #ededed 0deg)`;

    if (sqlStartValue == sqlEndValue) {
        clearInterval(progressSql);
    }
}, sqlSpeed);

// Java progress circular bar
let javaProgress = document.querySelector(".java"),
    javaValue = document.querySelector(".java-progress");

let javaStartValue = 0,
    javaEndValue = 65,
    javaSpeed = 30;

let progressJava = setInterval(() => {
    javaStartValue++;
    javaValue.textContent = `${javaStartValue}%`;
    javaProgress.style.background = `conic-gradient(#0071bc ${javaStartValue * 3.6}deg, #ededed 0deg)`;

    if (javaStartValue == javaEndValue) {
        clearInterval(progressJava);
    }
}, javaSpeed);

// CSS progress circular bar
let cssProgress = document.querySelector(".css"),
    cssValue = document.querySelector(".css-progress");

let cssStartValue = 0,
    cssEndValue = 85,
    cssSpeed = 30;

let progressCss = setInterval(() => {
    cssStartValue++;
    cssValue.textContent = `${cssStartValue}%`;
    cssProgress.style.background = `conic-gradient(#264de4 ${cssStartValue * 3.6}deg, #ededed 0deg)`;

    if (cssStartValue == cssEndValue) {
        clearInterval(progressCss);
    }
}, cssSpeed);

// TypeScript progress circular bar
let typescriptProgress = document.querySelector(".typescript"),
    typescriptValue = document.querySelector(".typescript-progress");

let typescriptStartValue = 0,
    typescriptEndValue = 70,
    tsSpeed = 30;

let progressTypescript = setInterval(() => {
    typescriptStartValue++;
    typescriptValue.textContent = `${typescriptStartValue}%`;
    typescriptProgress.style.background = `conic-gradient(#3178c6 ${typescriptStartValue * 3.6}deg, #ededed 0deg)`;

    if (typescriptStartValue == typescriptEndValue) {
        clearInterval(progressTypescript);
    }
}, tsSpeed);

// Docker progress circular bar
let dockerProgress = document.querySelector(".docker"),
    dockerValue = document.querySelector(".docker-progress");

let dockerStartValue = 0,
    dockerEndValue = 60,
    dockerSpeed = 30;

let progressDocker = setInterval(() => {
    dockerStartValue++;
    dockerValue.textContent = `${dockerStartValue}%`;
    dockerProgress.style.background = `conic-gradient(#2496ed ${dockerStartValue * 3.6}deg, #ededed 0deg)`;

    if (dockerStartValue == dockerEndValue) {
        clearInterval(progressDocker);
    }
}, dockerSpeed);

// Django progress circular bar
let djangoProgress = document.querySelector(".django"),
    djangoValue = document.querySelector(".django-progress");

let djangoStartValue = 0,
    djangoEndValue = 50, // You can dynamically change this value through Django context
    djangoSpeed = 30;

let progressDjango = setInterval(() => {
    djangoStartValue++;
    djangoValue.textContent = `${djangoStartValue}%`;
    djangoProgress.style.background = `conic-gradient(#326ce5 ${djangoStartValue * 3.6}deg, #ededed 0deg)`;

    if (djangoStartValue == djangoEndValue) {
        clearInterval(progressDjango);
    }
}, djangoSpeed);


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
