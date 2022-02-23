var elements = {};

function findElements() {
    elements['main_btn'] = $('.btn-main');
    elements['nav_btn'] = $('.navigation__button');
}

function ButtonMouseIn(){
    $(this).removeClass("btn-main--mouse-out");
    $(this).addClass("btn-main--mouse-in");
}

function ButtonMouseOut(){
    $(this).removeClass("btn-main--mouse-in");
    $(this).addClass("btn-main--mouse-out");
}


function setAction() {
    $(elements.main_btn).on('mouseenter', ButtonMouseIn);
    $(elements.main_btn).on('mouseleave', ButtonMouseOut);

}

$(document).ready(function() {
    findElements();
    setAction();

});