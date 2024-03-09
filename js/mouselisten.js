window.addEventListener('load', function () {
    init();
})

function init() {
    var betadiv = document.getElementById('beta');
    var betainfo = document.getElementById('betainfo');
    betadiv.addEventListener("mouseover", (event) => {
        betainfo.style.bottom = '5%';
        betainfo.style.opacity = '100';
        betainfo.style.transition = '.3s .2s';
    });
    betadiv.addEventListener("mouseout", (event) => {
        betainfo.style.bottom = '-500%';
        betainfo.style.opacity = '0';
    });
    betainfo.addEventListener("mouseover", (event) => {
        betainfo.style.bottom = '5%';
        betainfo.style.opacity = '100';
        betainfo.style.transition = '.3s .2s';
    });
    betainfo.addEventListener("mouseout", (event) => {
        betainfo.style.bottom = '-500%';
        betainfo.style.opacity = '0';
    });
}