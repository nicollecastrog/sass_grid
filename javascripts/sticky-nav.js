var navbar = document.getElementById("navbar");
var stop = (navbar.offsetTop + 0);

window.ontouchmove = window.onscroll = function (e) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(scrollTop, navbar.offsetTop);
    // navbar.offsetTop;

    if (scrollTop >= stop) {
        navbar.className = 'stick';
    } else {
        navbar.className = '';
    }

}
