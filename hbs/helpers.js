const hbs = require('hbs');
//helpers

hbs.registerHelper('getAnio', () =>{
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (text) =>{
    let palabras = text.split(' ');
    palabras.forEach( (palabra, idx)=>{
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

        console.log(palabra[idx])
    });

    return palabras.join(' ');
});
