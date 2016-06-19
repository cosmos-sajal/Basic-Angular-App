require('angular');

// Controllers
var MainController = require('./controllers/MainController.js');

var app = angular.module('app', []);

app.controller('MainController', ['$scope', MainController]);