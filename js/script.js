function goToDiv(x) {
    var topOfElement = document.querySelector(x).offsetTop - document.querySelector('header').offsetHeight;
    window.scroll({ top: topOfElement, behavior: "smooth" });
}