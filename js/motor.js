// 🔒 CAPA 1: CONTROL DE LA ADUANA GLASSMORPHISM
function destrabarPantalla() {
    // Barremos la capa flotante de la memoria RAM visual
    document.getElementById('filtroEdad').style.display = 'none';
}

// 🔍 CAPA 2: BUSCADOR ELÁSTICO MOLECULAR EN TIEMPO REAL
function filtrarContenido() {
    // Capturamos el texto que ingresó el usuario y lo pasamos a minúsculas
    let textoBuscar = document.getElementById('inputBuscar').value.toLowerCase();
    let bloquesVideos = document.getElementsByClassName('bloque-video');

    // Bucle clásico para barrer la cuadrícula por hardware gráfico
    for (let i = 0; i < bloquesVideos.length; i++) {
        let tituloCanal = bloquesVideos[i].getAttribute('data-titulo');
        
        // Si el título contiene la palabra del buscador, se queda en la pantalla
        if (tituloCanal.includes(textoBuscar)) {
            bloquesVideos[i].style.display = "block";
        } else {
            bloquesVideos[i].style.display = "none"; // Desaparece del lienzo
        }
    }
}

// 📺 CAPA 3: EL MOTOR DEL ANUNCIO DE VIDEO SIMULADO (EL PEAJE ADSTERRA)
function dispararAnuncioSimulado(urlSmartlink, urlDestinoFinal) {
    let capaFlotante = document.getElementById('capaAnuncio');
    let relojContador = document.getElementById('contadorSegundos');
    let cajaClicAnuncio = document.getElementById('cajaClic');
    let segundosRestantes = 5;

    // Levantamos el reproductor negro flotante arriba de todo
    capaFlotante.style.display = 'flex';
    relojContador.innerText = "⏳ Anuncio: " + segundosRestantes + "s";

    // 💸 DETONADOR FINANCIERO: Si el usuario clica el cuadro, abre el Anti-Blocker
    cajaClicAnuncio.onclick = function() {
        window.open(urlSmartlink, '_blank');
    };

    // Hilo de tiempo secundario para la cuenta regresiva (1 pulso por segundo)
    let cuentaRegresivaCpu = setInterval(function() {
        segundosRestantes--;
        relojContador.innerText = "⏳ Anuncio: " + segundosRestantes + "s";

        // Al completarse el tiempo, apagamos la aduana y liberamos el video
        if (segundosRestantes <= 0) {
            clearInterval(cuentaRegresivaCpu);
            capaFlotante.style.display = 'none';
            
            // Redirección directa al archivo final en Voe o la descarga en Mediafire
            window.location.href = urlDestinoFinal;
        }
    }, 1000);
}
