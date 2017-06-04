var app = angular.module('myApp', []);
app.controller('photoCtrl', function($scope) {
    $scope.photos = [{name:"https://s-media-cache-ak0.pinimg.com/236x/e0/de/1e/e0de1e485889c1e5064a94cd68cf9bd8.jpg", tags:23},{name:"https://s-media-cache-ak0.pinimg.com/236x/e0/de/1e/e0de1e485889c1e5064a94cd68cf9bd8.jpg", tags:245},{name:"https://s-media-cache-ak0.pinimg.com/236x/e0/de/1e/e0de1e485889c1e5064a94cd68cf9bd8.jpg", tags:265},{name:"https://s-media-cache-ak0.pinimg.com/236x/e0/de/1e/e0de1e485889c1e5064a94cd68cf9bd8.jpg", tags:255},{name:"https://s-media-cache-ak0.pinimg.com/236x/e0/de/1e/e0de1e485889c1e5064a94cd68cf9bd8.jpg", tags:235},{name:"https://i.ytimg.com/vi/vTtGERdGZ_I/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDVdLlzt6fdv-okc00XzJ_rLH_amw", tags:[215,2456]},{name:"https://s-media-cache-ak0.pinimg.com/236x/e0/de/1e/e0de1e485889c1e5064a94cd68cf9bd8.jpg", tags:23},{name:"https://s-media-cache-ak0.pinimg.com/236x/e0/de/1e/e0de1e485889c1e5064a94cd68cf9bd8.jpg", tags:245},{name:"https://s-media-cache-ak0.pinimg.com/236x/e0/de/1e/e0de1e485889c1e5064a94cd68cf9bd8.jpg", tags:265},{name:"https://s-media-cache-ak0.pinimg.com/236x/e0/de/1e/e0de1e485889c1e5064a94cd68cf9bd8.jpg", tags:255},{name:"https://s-media-cache-ak0.pinimg.com/236x/e0/de/1e/e0de1e485889c1e5064a94cd68cf9bd8.jpg", tags:235},{name:"https://i.ytimg.com/vi/vTtGERdGZ_I/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDVdLlzt6fdv-okc00XzJ_rLH_amw", tags:[215,2456]}];
    $scope.currentPage = 0;
    $scope.pageSize = 8;
    $scope.numberOfPages= function(){
        return Math.ceil($scope.photos.length/$scope.pageSize);                
    }
   
   });

