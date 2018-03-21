angular.module('contatooh').controller('CelularesController', 
	function($resource, $scope) {		
		$scope.telefones = [];
		$scope.filtro = '';
		$scope.mensagem = {texto: ''};
		var Celular = $resource('/celular/:id');
		
		function buscaContatos() { 
			Celular.query( 
				function(telefones) { 
					$scope.telefones = telefones; 
					$scope.mensagem = {};
				}, 
				
			);
		}
		buscaContatos();

		$scope.remove = function(contato) { 
			//console.log(contato);

			Celular.delete({id: contato._id},
				buscaContatos, 
				function(erro) { 
					$scope.mensagem = { 
						texto: 'Não foi possível obter a lista' 
					};	
					console.log(erro); 
				} 
			);
		};
		
	});
