angular.module('myApp.view1', []).controller('View1Ctrl', function($scope) {

  $scope.char = "0";
  $scope.innerchar = "0";

  $scope.onClickButton = function(value){
    if($scope.char=='0'){
      $scope.char = '';
      $scope.innerchar = '';
    }
    if(value == '='){
      $scope.char = eval($scope.innerchar);
      return;
    }
    if (value == 'x') {
      $scope.innerchar += '*';
      $scope.char += value;
      return;
    }
    if (value == '÷') {
      $scope.innerchar += '/';
      $scope.char += value;
      return;
    }
    $scope.innerchar += value;
    $scope.char += value;
  };

  $scope.AC = function(){
    $scope.char = '0';
  } ;


});