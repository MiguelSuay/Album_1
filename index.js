var app = angular.module('myApp', []);
app.controller('photoCtrl', function($scope) {
    $scope.photos = [{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/C1.jpg", tags:["chrysanthemum","flower","color"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/C2.jpg", tags:["chrysanthemum","flower","color"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/C3.jpg", tags:["chrysanthemum","flower","color"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/C4.jpg", tags:["chrysanthemum","flower","color"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/C5.jpg", tags:["chrysanthemum","flower","color"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/C6.jpg", tags:["chrysanthemum","flower","color"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/C7.jpg", tags:["chrysanthemum","flower","color"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/W1.jpg", tags:["writer","black","white"]}, {name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/W2.jpg", tags:["writer","black","white"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/W3.jpg", tags:["writer","black","white"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/W4.jpg", tags:["writer","black","white"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/W5.jpg", tags:["writer","black","white"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/W6.jpg", tags:["writer","black","white"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/W7.jpg", tags:["writer","black","white"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/N1.jpg", tags:["netrunner","dystopia","hacking","cardgame"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/N2.jpg", tags:["netrunner","dystopia","hacking","cardgame"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/N3.jpg", tags:["netrunner","dystopia","hacking","cardgame"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/N4.jpg", tags:["netrunner","dystopia","hacking","cardgame"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/N5.jpg", tags:["netrunner","dystopia","hacking","cardgame"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/N6.jpg", tags:["netrunner","dystopia","hacking","cardgame"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/N7.jpg", tags:["netrunner","dystopia","hacking","cardgame"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/H1.jpg", tags:["hopper","painter","realism","scene quotidiane"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/H2.jpg", tags:["hopper","painter","realism","scene quotidiane"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/H3.jpg", tags:["hopper","painter","realism","scene quotidiane"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/H4.jpg", tags:["hopper","painter","realism","scene quotidiane"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/H5.jpg", tags:["hopper","painter","realism","scene quotidiane"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/H6.jpg", tags:["hopper","painter","realism","scene quotidiane"]},{name:"https://raw.githubusercontent.com/MiguelSuay/Album_1/master/photos/H7.jpg", tags:["hopper","painter","realism","scene quotidiane"]},];
    $scope.currentPage = 0;
    $scope.pageSize = 8;
    $scope.numberOfPages= function(){
        return Math.ceil($scope.photos.length/$scope.pageSize);                
    }
   
   });

