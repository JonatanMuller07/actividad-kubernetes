const express = require('express');
const app = express();
const port = 8080;

app.get('/palindromo', (palabraRecibida, respuesta) => {
    const { palabra } = palabraRecibida.query;

    if (!palabra) {
        return respuesta.status(400).json({ error: 'Se requiere el parámetro "palabra".' });
    }

    const palabraNormalizada = palabra.toLowerCase().replace(/\s+/g, '');
    const esPalindromo = palabraNormalizada === palabraNormalizada.split('').reverse().join('');

    respuesta.json({
        palabraRecibida: palabra,
        esPalindromo,
        mensaje: esPalindromo ? 'La palabra es un palíndromo.' : 'La palabra no es un palíndromo.'
    });
});

app.listen(port, () => {
    console.log(`El servidor esta corriendo en http://localhost:${port}`);
});
