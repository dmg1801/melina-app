(function () {
  'use strict';

  angular.module('kaninchenApp', ['ui.grid'])
    .controller('kaninchenController', kaninchenController);


  kaninchenController.$inject = [];

  function kaninchenController() {
    var kaninchen = this;

    // kaninchen = {};

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


    kaninchen.preLoadData = function () {
      //text variables
      kaninchen.name = "Félix";
      kaninchen.weight = 3;
      kaninchen.city = "München";
      kaninchen.age = 5;
      kaninchen.ownerName = "Theressa";
      kaninchen.ownerLastName = "Sollbrecht";
      kaninchen.value = 1500;
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
      kaninchen.phoneNumber = 4917658881817;
    };

    kaninchen.showFormular = true;
    kaninchen.showTable = false;

    kaninchen.myData = [{
      "name": "Félix",
      "gender": "Mannlich",
      "weight": "3.2",
      "age": "5",
      "value": "5000",
      "comment": "schwarz. Groß un Süß",
      "rhd": true,
      "rhdTwo": false,
      "myxomatose": false,
      "eCuniculi": false,
      "living": "draußen",
      "city": "München",
      "postal code": "81095"
    }, {
      "name": "Coffee",
      "gender": "Frauenlich",
      "weight": "1.6",
      "age": "4",
      "value": "5001",
      "comment": "weiß und braun. klein un Süß",
      "rhd": true,
      "rhdTwo": true,
      "myxomatose": true,
      "eCuniculi": true,
      "living": "alle",
      "city": "Berlin",
      "postal code": "49025"
    }, {
      "name": "Smokey",
      "gender": "Mannlich",
      "weight": "1.4",
      "age": "3",
      "value": "5002",
      "comment": "weiß. klein un Süß",
      "rhd": false,
      "rhdTwo": true,
      "myxomatose": false,
      "eCuniculi": true,
      "living": "alle",
      "city": "Frankfurt",
      "postal code": "56067"
    }, {
      "name": "Amy",
      "gender": "Frauenlich",
      "weight": "1.6",
      "age": "7",
      "value": "5003",
      "comment": "braun. klein un Süß",
      "rhd": true,
      "rhdTwo": false,
      "myxomatose": true,
      "eCuniculi": true,
      "living": "drinnen",
      "city": "Köln",
      "postal code": "78034"
    }, {
      "name": "Woody",
      "gender": "Mannlich",
      "weight": "1.0",
      "age": "1",
      "value": "5004",
      "comment": "braun holz. klein un Süß",
      "rhd": true,
      "rhdTwo": false,
      "myxomatose": true,
      "eCuniculi": true,
      "living": "drinnen",
      "city": "Köln",
      "postal code": "78034"
    }, {
      "name": "Mily",
      "gender": "Frauenlich",
      "weight": "1.7",
      "age": "3",
      "value": "5005",
      "comment": "Weiß Schwarz. klein un Süß",
      "rhd": false,
      "rhdTwo": false,
      "myxomatose": false,
      "eCuniculi": false,
      "living": "draußen",
      "city": "München",
      "postal code": "32052"
    }, {
      "name": "Pepper",
      "gender": "Mannlich",
      "weight": "1.356",
      "age": "5",
      "value": "5006",
      "comment": "Weiß Braun. klein un Süß",
      "rhd": false,
      "rhdTwo": true,
      "myxomatose": false,
      "eCuniculi": true,
      "living": "draußen",
      "city": "Hamburg",
      "postal code": "57063"
    }];

    kaninchen.show = function (partToShow) {

      if (partToShow === 'formular') {
        kaninchen.showFormular = true;
        kaninchen.showTable = false;
      } else if (partToShow === 'table') {
        kaninchen.showFormular = false;
        kaninchen.showTable = true;
      }
    };
  }


})();