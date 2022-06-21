var puntos = 0;

function click1() {
    puntos = puntos+1;
    document.getElementById("puntosver").innerHTML = "Puntos : "+puntos;
}

function click2() {
    localStorage.setItem("puntosver", puntos);
}

function click3() {
    window.location = "xedni.html";
}