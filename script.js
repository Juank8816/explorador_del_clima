const botonBuscar = document.getElementById("btnBuscar");
const campoCiudad = document.getElementById("ciudad");
const mensaje = document.getElementById("mensaje");

const nombreCiudad = document.getElementById("nombreCiudad");
const temperatura = document.getElementById("temperatura");
const tempActual = document.getElementById("tempActual");
const viento = document.getElementById("viento");
const ubicacion = document.getElementById("ubicacion");
const descripcion = document.getElementById("descripcion");


botonBuscar.addEventListener("click", consultarClima);


campoCiudad.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        consultarClima();
    }

});


async function consultarClima() {

    const ciudad = campoCiudad.value.trim();


    if (ciudad === "") {

        mensaje.textContent = "Por favor, escribe una ciudad.";

        return;
    }


    mensaje.textContent = "Consultando información...";


    try {

        const urlGeocoding =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(ciudad)}&count=1&language=es&format=json`;


        const respuestaGeocoding = await fetch(urlGeocoding);


        if (!respuestaGeocoding.ok) {
            throw new Error("No fue posible consultar la ubicación.");
        }


        const datosGeocoding = await respuestaGeocoding.json();


        if (!datosGeocoding.results || datosGeocoding.results.length === 0) {

            mensaje.textContent = "No se encontró la ciudad.";

            return;
        }


        const lugar = datosGeocoding.results[0];


        const latitud = lugar.latitude;
        const longitud = lugar.longitude;


        const urlClima =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current=temperature_2m,wind_speed_10m&timezone=auto`;


        const respuestaClima = await fetch(urlClima);


        if (!respuestaClima.ok) {
            throw new Error("No fue posible consultar el clima.");
        }


        const datosClima = await respuestaClima.json();


        const temperaturaActual =
            datosClima.current.temperature_2m;


        const velocidadViento =
            datosClima.current.wind_speed_10m;


        nombreCiudad.textContent =
            lugar.name;


        temperatura.textContent =
            temperaturaActual;


        tempActual.textContent =
            temperaturaActual + " °C";


        viento.textContent =
            velocidadViento + " km/h";


        ubicacion.textContent =
            lugar.country;


        descripcion.textContent =
            "Información meteorológica actual";


        mensaje.textContent =
           mensaje.textContent =
    "✓ Consulta realizada correctamente.";


    } catch (error) {

        console.error(error);

        mensaje.textContent =
            "Ocurrió un error al consultar la información.";

    }

}
