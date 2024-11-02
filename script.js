window.onload = function() {
    let banner = document.createElement("div");
    banner.id = "privacy-banner";
    banner.style.position = "fixed";
    banner.style.bottom = "0";
    banner.style.width = "100%";
    banner.style.backgroundColor = "black";
    banner.style.color = "white";
    banner.style.textAlign = "center";
    banner.style.padding = "1rem";
    banner.innerHTML = "Questo sito utilizza cookie per migliorare la tua esperienza. <button onclick='acceptCookies()'>Accetta</button>";
    document.body.appendChild(banner);
}

function acceptCookies() {
    let banner = document.getElementById("privacy-banner");
    banner.style.display = "none";
}




