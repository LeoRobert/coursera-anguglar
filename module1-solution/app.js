(function () {
'use strict';

angular.module('myLunch', [])
.controller('LunchController', function ($scope) {
  $scope.name = "";
  $scope.nameArray = [];
  $scope.nbDishes = 0;
  $scope.response = "";

  $scope.howSMyLunch=function(){
    $scope.nameArray=$scope.name.replace(" ", "").split(",");
    $scope.response = checkIfItsEnoughToEat($scope.nameArray);
  };
})
function checkIfItsEnoughToEat(myArrayOfDishes){
  var response = "";
  if(myArrayOfDishes[0] === "" && myArrayOfDishes.length<2){
    response = "You need to enter at least one dishe";
  }else if (myArrayOfDishes.length >3){
    response = "That is a bit too much, you should eat less!";
  } else if (myArrayOfDishes.length<=3 && myArrayOfDishes.length>0){
    response = "Very good!";
  }else if(myArrayOfDishes.length===0){
    response = "You need to enter a dishe";
  }else{
    response = ".... WELL ...."
    console.log("problem, aboooard!");
  }
  return response;
}



})();
