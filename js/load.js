// 2024 Mathsucks.world \\

window.addEventListener("DOMContentLoaded", (event) => {
    const containter = document.getElementById("cardcontainer");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cdn.mathsucks.world/game/getconfig.php", false);
    xhr.send();

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://cdn.mathsucks.world/game/games.config", false); // false for synchronous request
    xmlHttp.send();

    var config = JSON.parse(xmlHttp.responseText);
    config.forEach(element => {
        if (element.active == "true") {
            var html = `<div class="gcard" onclick="window.location.href='./play/?game=` + element.path + `'" style="background-image: url(https://cdn.mathsucks.world/game/` + element.icon + `)"><div class="gcardstrip"><p>` + element.name + `</p></div></div>`;
            var div = document.createElement('div');
            div.innerHTML = html;
            while (div.children.length > 0) {
                containter.appendChild(div.children[0]);
            }
        }
    });
    
});