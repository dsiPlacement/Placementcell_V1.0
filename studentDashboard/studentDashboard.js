//start of Index page config
var dashboard = angular
    .module('studentDashboard', ["ngRoute"]);
dashboard.controller('sidebar', function($scope) {
    $scope.pageList = [{
        pageName: 'Profile',
        link: 'studentProfile',
        icon : 'edit'
    }, {
        pageName: 'Messages',
        link: 'studentMessages',
        icon: 'announcement'
    }, {
        pageName: 'Recruiters',
        link: 'registeredCompanies',
        icon: 'building'
    }, {
        pageName: 'Contact',
        link: 'contactForm',
        icon : 'talk'
    }, {
        pageName: 'Campus Drives',
        link: 'upcomingCompanies',
        icon : 'university'
    }, {
        pageName: 'Feedback & Bug Reporting',
        link: '',
        icon : 'bug'
    }];
});
//end of index page config


//Notice board configurations
    dashboard.controller("MessagesController", function($scope) {
        var messages = [{
            messageTitle: "Title 1",
            messageBody: "This is the main body of the message that has to be displayed for the student in their dashboard. \n This may contain several white space characters and other variables which has to be handled very efficiently",
            messageAuthor: "Admin",
            messageDate: "10th July 2016"
        }, {
            messageTitle: "Title 2",
            messageBody: "This is the main body of the message that has to be displayed for the student in their dashboard. \n This may contain several white space characters and other variables which has to be handled very efficiently",
            messageAuthor: "Admin",
            messageDate: "10th July 2016"
        }, {
            messageTitle: "Title 3",
            messageBody: "This is the main body of the message that has to be displayed for the student in their dashboard. \n This may contain several white space characters and other variables which has to be handled very efficiently",
            messageAuthor: "XYZ company",
            messageDate: "10th July 2016"
        }, {
            messageTitle: "Title 4",
            messageBody: "This is the main body of the message that has to be displayed for the student in their dashboard. \n This may contain several white space characters and other variables which has to be handled very efficiently",
            messageAuthor: "ABC tutorials",
            messageDate: "10th July 2016"
        }, {
            messageTitle: "Title 5",
            messageBody: "\nThis is the main body of the message that has to be displayed for the student in their dashboard. \nThis may contain several white space characters and other variables which has to be handled very efficiently",
            messageAuthor: "HOD CSE",
            messageDate: "10th July 2016"
        }, {
            messageTitle: "Title 6",
            messageBody: "This is the main body of the message that has to be displayed for the student in their dashboard. \n This may contain several white space characters and other variables which has to be handled very efficiently",
            messageAuthor: "Principal",
            messageDate: "10th July 2016"
        }];

        $scope.messages = messages;


        var textArea = "Some text";
        $scope.textArea = textArea;
    });
//End of notice board configurations

//page Routing
dashboard.config(function($routeProvider) {
    $routeProvider
        .when("/studentProfile", {
            templateUrl: "profile.html",
            activetab: 'Profile'
        })
        .when("/studentMessages", {
            templateUrl: "noticeBoard.html",
            activetab: 'Messages'
        })
        .when("/registeredCompanies", {
            templateUrl: "recruiters.html"
        })
        .when("/contactForm", {
            templateUrl: "../common/contact.html"
        })
        .when("/upcomingCompanies", {
            templateUrl: "upcomingCompanies.html"
        });
});
