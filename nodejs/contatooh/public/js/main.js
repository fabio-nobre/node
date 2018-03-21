angular.module('contatooh', ['ngRoute', 'ngResource'])
	.config(function($routeProvider) {

		/* 
		O objeto $routeProvider possui a função when. Nela informamos a rota (sem o #) e no segundo 
		parâmetro um objeto que define qual template (parcial) será carregado para a rota e qual será 
		seu controller através daspropriedades templateURL e controller,respectivamente.
 		*/
		$routeProvider.when('/contatos', { 
			templateUrl: 'partials/contatos.html', 
			controller: 'ContatosController' 
		});	
		
		$routeProvider.when('/contato/:contatoId', { 
			templateUrl: 'partials/contato.html', 
			controller: 'ContatoController' 
		});
		
		$routeProvider.when('/contato', { 
			templateUrl: 'partials/contato.html', 
			controller: 'ContatoController' 
		});
		
		$routeProvider.when('/celular', { 
			templateUrl: 'partials/celular.html', 
			controller: 'CelularesController' 
		});	 

		$routeProvider.otherwise({redirectTo: '/contatos'});

});
