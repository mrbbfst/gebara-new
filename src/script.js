var elements = {};

mbtn = {};

function findElements() {
    elements['main_btn'] = $('.btn-main');
    elements['nav_btn'] = $('.navigation__button');
    elements['main_menu_elem'] = $('.main-menu__item');
    elements['nav_call_button'] = $('.navigation__button');
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
    $(wave).addClass('--material-temp-element')
    if($(this).hasClass('navigation__button')) {
        $(wave).css('background', 'rgba(200,120,120,50%)');
    }
    const waveY = e.pageY - waveOffset.top,
    waveX = e.pageX - waveOffset.left;

    wave.style.top = waveY + 'px',
    wave.style.left = waveX + 'px',

    $(this).css('overflow', 'hidden');
    this.appendChild(wave);

    setTimeout(function () {
        wave.parentNode.removeChild(wave);
        }, 1500);
}

function ButtonNavOn() {
    $(this).removeClass('navigation__button--mouse-out');
    $(this).addClass('navigation__button--mouse-in');
}

function ButtonNavOut() {
    $(this).removeClass('navigation__button--mouse-in');
    $(this).addClass('navigation__button--mouse-out');
}


function setAction() {
    $(elements.main_btn).on('mouseenter', ButtonMouseIn);
    $(elements.main_btn).on('mouseleave', ButtonMouseOut);
    $(elements.main_menu_elem).on('click', materialEffect);
    $(elements.nav_call_button).on('mouseenter', ButtonNavOn);
    $(elements.nav_call_button).on('mouseleave', ButtonNavOut);
    $(elements.nav_btn).on('click', materialEffect);


}

$(document).ready(function() {
    findElements();
    setAction();

});