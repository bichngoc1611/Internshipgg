window.onscroll = function () {
    myHeader();
}
var header = document.getElementById('my-header');
var sticky = header.offsetTop;
function myHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}