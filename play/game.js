// 2024 Mathsucks.world \\

window.addEventListener("DOMContentLoaded", (event) => {
    const containter = document.getElementById("gameContainer");

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://cdn.mathsucks.world/game/games.config", false ); // false for synchronous request
    xmlHttp.send( null );
    var config = JSON.parse(xmlHttp.responseText);

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let game = params.game;

    var ifrm = document.createElement("iframe");
    config.forEach(element => {
        if (element.path == params.game) {
            ifrm.setAttribute("src", "https://cdn.mathsucks.world/game/" + element.path);
            ifrm.style.width = "100%";
            ifrm.style.height = "100%";
            ifrm.style.margin = "0";
            ifrm.style.border = "0";
            containter.appendChild(ifrm);
            ifrm.contentWindow.focus();
        }
    });

    if (!containter.contains(ifrm)) {
        window.location.href = '../'
    }
    
});