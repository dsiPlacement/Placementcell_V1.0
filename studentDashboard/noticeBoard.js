var myMessageApp = angular
    .module("messageModule", [])
    .controller("myMessagesController", function($scope) {
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
