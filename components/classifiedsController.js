(function(){

	"use strict";

	angular
		.module("ngClassifieds")
		.controller("classifiedsCtrl", function($scope){

			$scope.name = "Tanay";
			$scope.message = "Hello, World!!!";

			$scope.content ={
				title: 'Trimmer',
				price: '$1,000,000',
				description: 'The dual blade system in Philips HQ6990 lifts hairs to cut comfortably below skin level. Individually floating heads. Corrosion-free heads. Silent power. Power system.'
			}

		});
})();