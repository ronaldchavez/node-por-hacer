const opt = {
	descripcion: {
	  		demand: true,
	  		alias: 'd',
	  		desc: 'Descripcion de la tarea por hacer'
		}
}

const argv = require('yargs')
	  .command('crear', 'Crear un elemento por hacer',{
	  	opt
	  })
	  .command('actualizar', 'Actualizar el estado completado de una tarea', {
	  	opt,
	  	completado: {
	  		alias: 'c',
	  		default: true,
	  		desc: 'Marca como completado o pendiente la tarea'
	  	}
	  })
	  .command('borrar', 'Borra un elemento por hacer',{
	  	opt
	  }).help().argv;

module.exports = {
	argv
}