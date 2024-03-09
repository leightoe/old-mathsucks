var activated = false;
let toggle;
let footer;

window.addEventListener("DOMContentLoaded", (event) => {
    toggle = document.getElementById("modetoggle");
    footer = document.getElementById('footer');
    footerchildren = document.getElementById('footer').children;
});

function darkmode()  {
    if (activated == true) {
        document.body.style.backgroundColor = 'white';
        toggle.innerHTML = 'dark_mode';
        toggle.style.color = 'black';

        activated = false;
    } else {
        document.body.style.backgroundColor = 'black';
        toggle.innerHTML = 'light_mode';
        toggle.style.color = 'white';
        footer.style.color = 'white';

        for (let i = 0; i < footerchildren.length; i++) {
            footerchildren[i].style.color = 'white';
        }

        activated = true;
    }
}