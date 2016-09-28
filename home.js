//noinspection JSUnresolvedFunction
var homepage = angular.module('homePage' , ["ngRoute"]);
homepage.controller('mainMenu' , function($scope) {
    $scope.menuItems = [{
       item : 'Partners', link : 'partners'
    } , {
        item : 'About Us', link : 'aboutus'
    } , {
        item : 'Contact Us', link : 'contactus'
    } , {
        item : 'Past Statistics', link : 'statistics'
    }];

    
});

