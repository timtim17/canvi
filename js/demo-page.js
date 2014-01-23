/*
* CANVI
* demo-page.js
* Timtim Jenkins, 2014
*/

window.onload = function(){
    var canvi = new Canvi(document.getElementById('canvi'));

    var button_reset = document.getElementById('reset');
    button_reset.addEventListener('click', function(){
        canvi.fillBg('white');
    });

    var button_bg_blue = document.getElementById('bg_blue');
    button_bg_blue.addEventListener('click', function(){
        canvi.fillBg('lightBlue');
    });
}