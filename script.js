var im = new Image();
var time = 10000;
im.src = "images/intro.gif";
im.onload = function() {

    document.getElementById("banner").style.backgroundImage = "url('" + im.src + "')";

}

var massages = [];
if (massages.length == 0) {
    var mas1 = document.getElementById("main-massage");
    var mas2 = document.getElementById("massage-2");
    var mas3 = document.getElementById("massage-3");
    var mas4 = document.getElementById("massage-4");


    massages.push(mas1);
    massages.push(mas2);
    massages.push(mas3);
    massages.push(mas4);

}
var massage = 0;


changeSliders();

function slider() {



    massages.forEach((x) => {
        x.style.display = "none";
    });

    massages[massage].style.display = "grid";


}

function changeSliders() {
    setInterval(() => {
        if (massage < massages.length - 1) {
            massage++;


        } else {
            massage = 0;
        }
        slider();

    }, time);
}

function next() {
    if (massage < massages.length - 1) {
        massage++;
    } else {
        massage = 0;
    }
    slider();
}

function prev() {
    if (massage > 0) {
        massage--;
    } else {
        massage = massages.length - 1;
    }
    slider();
}

function redir(name) {
    window.scrollTo({ top: document.getElementById(name).offsetTop });

}