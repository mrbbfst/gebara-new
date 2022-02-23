var elements = {};

function findElements() {
    elements['main_btn'] = $('.btn-main');
    elements['nav_btn'] = $('.navigation__button');
    elements['main_menu_elem'] = $('.main-menu__item');
}

function ButtonMouseIn(){
    $(this).removeClass("btn-main--mouse-out");
    $(this).addClass("btn-main--mouse-in");
}

function ButtonMouseOut(){
    $(this).removeClass("btn-main--mouse-in");
    $(this).addClass("btn-main--mouse-out");
}

function materialEffect(e) {
    const wave = document.createElement('span'),
    waveOffset = this.getBoundingClientRect();
    $(wave).addClass('main-menu__material-temp-element')

    const waveY = e.pageY - waveOffset.top,
    waveX = e.pageX - waveOffset.left;

    wave.style.top = waveY + 'px',
    wave.style.left = waveX + 'px',


    this.appendChild(wave);

    setTimeout(function () {
        wave.parentNode.removeChild(wave);
        }, 1500);
}

function setAction() {
    $(elements.main_btn).on('mouseenter', ButtonMouseIn);
    $(elements.main_btn).on('mouseleave', ButtonMouseOut);
    $(elements.main_menu_elem).on('click', materialEffect);



}

$(document).ready(function() {
    findElements();
    setAction();

});