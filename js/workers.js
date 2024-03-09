// 2024 Mathsucks.World \\

var bg;
var eventData;

window.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.createElement("canvas");
    canvas.setAttribute('id','bg')
    document.body.appendChild(canvas);
    if (typeof(Worker) !== "undefined") {
        if (typeof(bg) == "undefined") {
            bg = new Worker("js/bg_worker.js");
            console.log("created worker bg");
            bg.postMessage("init");
        }
        bg.onmessage = function(event) {
            eventData = event.data;
            after();
            console.log(`Worker said : ${eventData}`);
        };
    } else {
        alert("Sorry! No Web Worker support.");
    }

    function after() {
        if (eventData == "doneinit") {
            console.log("started worker bg");
            var offscreen = canvas.transferControlToOffscreen();
            bg.postMessage({canvas: offscreen, canvasOW: canvas.offsetWidth, canvasOH: canvas.offsetHeight, windowDPR: window.devicePixelRatio, windowIW: window.innerWidth, windowIH: window.innerHeight}, [offscreen]);
        }
    }
});