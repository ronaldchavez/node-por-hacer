const argv = require('./yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
console.log(argv);

let comando = argv._[0];

switch(comando){

	case 'crear':
	 let tarea = porHacer.crear(argv.descripcion || argv.d);
		console.log(tarea);
	break;

	case 'listar':
	 let listado = porHacer.getListado();
	 console.log(listado);
	 for(let tarea of listado ) {
	 	console.log('=========POR HACER========='.green);
	 	console.log(tarea.descripcion);
	 	console.log('Estado ',tarea.completado);
	 	console.log('==========================='.green);
	 }
	break;

	case 'actualizar':
	let actualizado = porHacer.actualizar(argv.descripcion || argv.d, argv.completado || argv.c);
		console.log(actualizado);
	break;

	case 'borrar':
		let borrado = porHacer.borrar(argv.descripcion || argv.d);
		console.log(borrado);
	break;

	default:
	console.log('comando no reconocido');

}