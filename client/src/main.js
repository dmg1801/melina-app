(function () {
    'use strict';
    
    angular.module('kaninchenApp', [])
    .controller('kaninchenController', kaninchenController);
  
    
    kaninchenController.$inject = [];
    function kaninchenController() {
      var kaninchen = this;

      kaninchen = {};
      
      //text variables
      kaninchen.name = null;
      kaninchen.weight = null;
      kaninchen.city = null;
      kaninchen.age = null;
      
      //text field
      kaninchen.comment = [];

      //boolean variables
      kaninchen.rhd = false;
      kaninchen.rhdTwo = false;
      kaninchen.Myxomatose = false;
      kaninchen.eCuniculiPositive = null;
      kaninchen.eCuniculiNegative = null;
      kaninchen.eCuniculiNotTested = null;
      kaninchen.male = null;
      kaninchen.female = null;
      
      //email
      kaninchen.email = null;    
     
    }    
   
    
    })();
    