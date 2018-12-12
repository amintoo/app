var app = angular.module('mapp',[]);
//le controleur et les services utilises 
// injection de dependances
app.controller('MoneyCtrl',['$scope',function($scope){

//les donnees
$scope.montant=175;

$scope.selection = [];
$scope.pieces =[5,10,20,50,100,250,500];

//les methodes
$scope.selectionner= function(index){
console.log('selection ',index);
$scope.selection.push($scope.pieces[index]);
}

$scope.deselectionner= function(index){
console.log('selection ',index);
$scope.selection.splice(index,1);
}

$scope.total = function(){
	var s=0;
	for(i=0; i<$scope.selection.length;i++)
		s+=$scope.selection[i];
	return s;
}


}]);