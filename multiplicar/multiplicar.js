const fs = require('fs');
colors = require('colors');

let listarTabla = (base,limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)){
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

        let data = '';

        console.log('=======================\n'.green);
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        console.log(data.green);
        console.log('======================='.green);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)){
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) 
            reject(err);
        else
            resolve(`tabla ${base}.txt`);
        });

    });
}


module.exports = {
    crearArchivo,
    listarTabla
}