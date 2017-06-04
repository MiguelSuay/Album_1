var app = angular.module('myApp', []);
app.controller('photoCtrl', function($scope) {
    $scope.photos = [{name:"/photos/C1.jpg", tags:[chrysanthemum,flower,color]},{name:"/photos/C2.jpg", tags:[chrysanthemum,flower,color]},{name:"/photos/C3.jpg", tags:[chrysanthemum,flower,color]},{name:"/photos/C4.jpg", tags:[chrysanthemum,flower,color]},{name:"/photos/C5.jpg", tags:[chrysanthemum,flower,color]},{name:"/photos/C6.jpg", tags:[chrysanthemum,flower,color]},{name:"/photos/C7.jpg", tags:[chrysanthemum,flower,color]},{name:"/photos/W1.jpg", tags:[writer,black,white]}, {name:"/photos/W2.jpg", tags:[writer,black,white]},{name:"/photos/W3.jpg", tags:[writer,black,white]},{name:"/photos/W4.jpg", tags:[writer,black,white]},{name:"/photos/W5.jpg", tags:[writer,black,white]},{name:"/photos/W6.jpg", tags:[writer,black,white]},{name:"/photos/W7.jpg", tags:[writer,black,white]},{name:"/photos/N1.jpg", tags:[netrunner,dystopia,hacking,cardgame]},{name:"/photos/N2.jpg", tags:[netrunner,dystopia,hacking,cardgame]},{name:"/photos/N3.jpg", tags:[netrunner,dystopia,hacking,cardgame]},{name:"/photos/N4.jpg", tags:[netrunner,dystopia,hacking,cardgame]},{name:"/photos/N5.jpg", tags:[netrunner,dystopia,hacking,cardgame]},{name:"/photos/N6.jpg", tags:[netrunner,dystopia,hacking,cardgame]},{name:"/photos/N7.jpg", tags:[netrunner,dystopia,hacking,cardgame]},{name:"/photos/H1.jpg", tags:[hopper,painter,realism,scene quotidiane]},{name:"/photos/H2.jpg", tags:[hopper,painter,realism,scene quotidiane]},{name:"/photos/H3.jpg", tags:[hopper,painter,realism,scene quotidiane]},{name:"/photos/H4.jpg", tags:[hopper,painter,realism,scene quotidiane]},{name:"/photos/H5.jpg", tags:[hopper,painter,realism,scene quotidiane]},{name:"/photos/H6.jpg", tags:[hopper,painter,realism,scene quotidiane]},{name:"/photos/H7.jpg", tags:[hopper,painter,realism,scene quotidiane]},];
    $scope.currentPage = 0;
    $scope.pageSize = 8;
    $scope.numberOfPages= function(){
        return Math.ceil($scope.photos.length/$scope.pageSize);                
    }
   
   });

