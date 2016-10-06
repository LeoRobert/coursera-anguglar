(function () {
'use strict';

angular.module('myLunch', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController ($scope) {
  $scope.name = "";
  $scope.nameArray = [];
  $scope.response = "";
  $scope.howSMyLunch=function(){
    
    $scope.nameArray=$scope.name.trim().split(",");
    $scope.response = checkIfItsEnoughToEat($scope.nameArray);
  };
}

function checkIfItsEnoughToEat(myArrayOfDishes){
  var response = "";
  if(myArrayOfDishes[0] === "" && myArrayOfDishes.length<2){
    response = "You need to enter at least one dishe";
  }else if (myArrayOfDishes.length >3){
    response = "WAYYYYYYY too much";
  } else if (myArrayOfDishes.length<=3 && myArrayOfDishes.length>0){
    response = "Enjoy!";
  }else if(myArrayOfDishes.length===0){
    response = "Please enter data first";
  }else{
    response = ".... WELL ...."
    console.log("problem, aboooard!");
  }
  return response;
}



})();
