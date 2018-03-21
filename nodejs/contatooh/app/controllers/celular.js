var telefones = [ 
		{_id: 1, celular: '81-981612884', 
			fixo: '81-34341234'},
		{_id: 2, celular: '81-9812550064', 
			fixo: '81-34256789'},
		{_id: 3, celular: '81-998732114', 
			fixo: '81-21232444'}		
	];

module.exports = function() { 
	var controller = {};
	
	controller.listaCelular = function(req, res) {
		res.json(telefones);	
	}; 

	controller.obtemContato = function(req, res) {
		console.log(req.params.id);
		var idContato = req.params.id;
		var contato = telefones.filter(function(contato) {
			return contato._id == idContato;
		})[0];
		contato ?
			res.json(contato) :
			res.status(404).send('Contato não encontrado');
	};
	
	controller.removeContato = function(req, res) { 
		var idContato = req.params.id;
		telefones = telefones.filter(function(contato) { 
			return contato._id != idContato; 
		}); 
		res.status(204).end();
	};
	
	controller.salvaContato = function(req, res) { 
		
	};
		
	return controller;
};

	

