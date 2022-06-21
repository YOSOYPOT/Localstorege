function Regresar() {
    window.location = "index.html";
}

function Obtener() {
    puntos = localStorage.getItem("puntosver");
    document.getElementById("puntosver2").innerHTML="Puntaje :"+puntos;    
}