const argv = require('yargs')
    .command('Listar', 'Imprime en consolo la tabla de multiplicar' {
        base: {
            deman: true,
            alias: 'b'
        },

        limite: {
            alias: 'l'
            default: 10
        }
    })

.help()
    .argv;




const { crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'Listar':
        console.log('Listar');
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(base)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default;
    console.log('Comando no reconocido');

}

//  let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log('Limite', argv.Limite);
// console.log(argv.base);