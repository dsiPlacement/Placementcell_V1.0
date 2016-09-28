//start of Index page config
var adminDashboard = angular
    .module('adminDashboard', ["ngRoute"]);
adminDashboard.controller('sidebar', function($scope) {
    $scope.pageList = [{
        pageName: 'Post Notice',
        link: 'noticeBoard',
        icon : ''
    }, {
        pageName: 'Student Screening',
        link: 'studentsScreening',
        icon: 'edit'
    }, {
        pageName: 'Statistics',
        link: 'currentStats',
        icon: 'browser'
    }];
});
//end of index page config

//Statistics - start
adminDashboard.controller('Statistics' , function($scope) {

});
//Statistics - end


//studentsScreen - start
adminDashboard.controller('studentsScreen' , function($scope) {

});
//studentsScreen - end

//noticeBoard - start
adminDashboard.controller('noticeBoard' , function($scope) {

});
//noticeBoard - end

//page Routing
adminDashboard.config(function($routeProvider) {
    $routeProvider
        .when("/studentsScreening", {
            templateUrl: "filteringStudents.html",
            activetab: 'active'
        })
        .when("/noticeBoard", {
            templateUrl: "noticeBoard.html",
            activetab: 'active'
        })
        .when("/currentStats", {
            templateUrl: "statistics.html",
            activetab: 'active'
        })
});
