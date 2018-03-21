module.exports = function(app) { 
	var controller = app.controllers.celular; 

	app.route('/celular') 
		.get(controller.listaCelular);
		//.post(controller.SalvaCelular);
	
	app.route('/celular/:id') 
		.get(controller.obtemContato)	
		.delete(controller.removeContato);	
};