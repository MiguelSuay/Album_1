var app = angular.module('myApp', []);
app.controller('photoCtrl', function($scope) {
    $scope.photos = [{name:"/photos/C1.jpg", tags:[chrysanthemum,flower,color]},{name:"/photos/C2.jpg", tags:[chrysanthemum,flower,color]},{name:"/photos/C3.jpg", tags:[chrysanthemum,flower,color]},{name:"/photos/C4.jpg", tags:[chrysanthemum,flower,color]},{name:"/photos/C5.jpg", tags:[chrysanthemum,flower,color]},{name:"/photos/C6.jpg", tags:[chrysanthemum,flower,color]},{name:"/photos/C7.jpg", tags:[chrysanthemum,flower,color]},];
    $scope.currentPage = 0;
    $scope.pageSize = 8;
    $scope.numberOfPages= function(){
        return Math.ceil($scope.photos.length/$scope.pageSize);                
    }
   
   });

