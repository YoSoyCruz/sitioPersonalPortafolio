document.addEventListener("DOMContentLoaded", function(){
    edad();
    function edad(){
        let fecha = new Date();
        let edad = fecha.getFullYear() - 1996;
        document.getElementById("edad").textContent = edad;
    }
});


function sobreMi(){
    window.location.href = "sobreMi.html";
}

function contacto(){
    window.location.href = "main.html#contacto";
}