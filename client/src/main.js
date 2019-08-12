(function () {
    'use strict';

    angular.module('kaninchenApp', ['ui.grid'])
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
      kaninchen.ownerName = null;
      kaninchen.ownerLastName = null;
      kaninchen.value = null;
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
      kaninchen.inside = null;
      kaninchen.outside = null;
      kaninchen.both = null;
      kaninchen.ensuranceYes = null;
      kaninchen.ensuranceNo = null;

      //email
      kaninchen.email = null;
      kaninchen.phoneNumber = null;


      kaninchen.preLoadData = function(){
        //text variables
      kaninchen.name = "Félix";
      kaninchen.weight = "3.2";
      kaninchen.city = "München";
      kaninchen.age = "5";
      kaninchen.ownerName = "Theressa";
      kaninchen.ownerLastName = "Sollbrecht";
      kaninchen.value = "1500";
      //text field
      kaninchen.comment = ['Ein super Toll Kaninchen. Ja, es ist alle :D'];

      //boolean variables
      kaninchen.rhd = true;
      kaninchen.rhdTwo = true;
      kaninchen.Myxomatose = true;
      kaninchen.eCuniculiPositive = false;
      kaninchen.eCuniculiNegative = true;
      kaninchen.eCuniculiNotTested = false;
      kaninchen.male = false;
      kaninchen.female = true;
      kaninchen.inside = false;
      kaninchen.outside = true;
      kaninchen.both = false;
      kaninchen.ensuranceYes = false;
      kaninchen.ensuranceNo = true;

      //email
      kaninchen.email = "theressa@mail.com";
      kaninchen.phoneNumber = "+49 17658881871";
      };


      kaninchen.myData = [{
        "name": kaninchen.name,
        "weight": kaninchen.weight,
        "city": kaninchen.city,
        "age": kaninchen.age,
        "ownerName": kaninchen.ownerName,
        "ownerLastName": kaninchen.ownerLastName,
        "value": kaninchen.value,        
        "comment": kaninchen.comment,        
        "rhd": kaninchen.rhd,
        "rhdTwo": kaninchen.rhdTwo,
        "myxomatose": kaninchen.Myxomatose,
        "eCuniculiPositive": kaninchen.eCuniculiPositive,
        "eCuniculiNegative": kaninchen.eCuniculiNegative,
        "eCuniculiNotTested": kaninchen.eCuniculiNotTested,
        "male": kaninchen.male,
        "female": kaninchen.female,
        "inside": kaninchen.inside,
        "outside": kaninchen.outside,
        "both": kaninchen.both,
        "ensuranceYes": kaninchen.ensuranceYes,
        "ensuranceNo": kaninchen.ensuranceNo,        
        "email": kaninchen.email,
        "phoneNumber": kaninchen.phoneNumber
      }];
  }


})();