require(__dirname + '/../../bower_components/angular/angular.js');

// This is where code goes for angular
angular.module('app', [])
  .controller('TextController', function() {
    this.tab = 'home',
    this.number = '',
    this.setTab = function(newTab) {
      this.tab = newTab
    },
    this.isActive = function(someTab) {
      return this.tab == someTab
    },
    this.clearField = function() {
      this.name = null;
    };
  });
