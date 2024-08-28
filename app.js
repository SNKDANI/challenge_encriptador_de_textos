function bloqueCifrar() {
    var bloque = document.getElementById('mensaje');
    var texto = document.getElementById('inicio_texto').value;

    if (texto.trim() === "") {
        // Mostrar el bloque oculto si el textarea está vacío
        bloque.style.display = 'block';
        document.querySelector('.boton-copiar').style.display = 'none'; // Asegurar que el botón de copiar esté oculto
        return;
    } else {
        bloque.style.display = 'none';
    }

    var reemplazo = texto.replace(/[aeiou]/g, function(match) {
        switch (match) {
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
        }
    });

    document.getElementById("texto_modificado").innerText = reemplazo;
    document.getElementById("texto_modificado").removeAttribute('disabled');
    document.querySelector('.boton-copiar').style.display = 'block'; // Mostrar el botón de copiar
}

function bloqueDescifrar(){
    var bloque = document.getElementById('mensaje');
    var texto = document.getElementById('inicio_texto').value;

    if (texto.trim() === "") {
        // Mostrar el bloque oculto si el textarea está vacío
        bloque.style.display = 'block';
        document.querySelector('.boton-copiar').style.display = 'none'; // Asegurar que el botón de copiar esté oculto
        return;
    } else {
        bloque.style.display = 'none';
    }

    var reemplazo = texto.replace(/ai/g, 'a')
                         .replace(/enter/g, 'e')
                         .replace(/imes/g, 'i')
                         .replace(/ober/g, 'o')
                         .replace(/ufat/g, 'u');

    document.getElementById("texto_modificado").innerText = reemplazo;
    document.getElementById("texto_modificado").removeAttribute('disabled');
    document.querySelector('.boton-copiar').style.display = 'block'; // Mostrar el botón de copiar
}
