# 🌤️ Explorador del Clima

## Actividad 4 - Herramientas de Software

Aplicación web desarrollada utilizando HTML, CSS y JavaScript.

El proyecto permite consultar información meteorológica de diferentes ciudades mediante una API remota.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API
- Open-Meteo API

## Funcionalidades

- Buscar ciudades.
- Consultar temperatura actual.
- Consultar velocidad del viento.
- Mostrar país de la ubicación.
- Validar campos vacíos.
- Mostrar mensajes cuando no se encuentra una ciudad.
- Diseño adaptable para computador y dispositivos móviles.

## Funcionamiento

El usuario escribe el nombre de una ciudad.

JavaScript realiza una consulta a la API de geocodificación de Open-Meteo para obtener la latitud y longitud.

Después se realiza una segunda consulta a la API meteorológica utilizando esas coordenadas.

Finalmente, JavaScript procesa la respuesta JSON y muestra la información en la página web.

## Estructura

```text
ACTIVIDAD_4_HERRAMIENTAS_SOFTWARE
│
├── index.html
├── style.css
├── script.js
└── README.md