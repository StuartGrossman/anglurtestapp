angular.module('app', []) //name, dependences 

// .controller('oldController', ['$scope', function($scope){
// 		$scope.popup = function(){
// 		$scope.thing = $scope.stuff
// 	};
// }])



.controller('oldController', ['$scope', function($scope){
	//all values must have scope. to be attached to html
	// $scope.img = "";
	$scope.car = ""; // sets inital value to empty string
	$scope.carArray = []; // creates new array to hold all values
	$scope.editing = false; // creates inital value set to false, to hide edit input on html
	$scope.editCar = {}; // creates object to store, index, and name
	$scope.addCar = function(){
		$scope.carArray.push($scope.car); // pushes new car value to carArray
		console.log($scope.carArray); // logs car array to check success
	}
	$scope.startEdit = function(car_index){
		$scope.editing = true; // shows the edit bar by setting editing to :true
		$scope.editCar.place = car_index; // sets editCar.place to index
		$scope.editCar.name = $scope.carArray[car_index]; // {name: carArray[index of clicked car]}
	}
	$scope.submitEdit = function(){
		$scope.carArray[$scope.editCar.place] = $scope.editCar.name; // carArray[{place: index, name: newcar}.place] = editcar{place: index, name:newcar}.name
		$scope.editing = false; //sets editing html back to flase to hide it from user. 
	}
	$scope.exp = function(){
		if((1 + 1) == 2){
			return true;
		}
		else{
			return false;
		}
	}
}])


